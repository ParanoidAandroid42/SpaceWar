
namespace Dev.Stages { 
    
    import GameController = Controller.GameController;
    import DisplayManager = Core.Managers.DisplayManager;
    import AnimInfo = Config.AnimConfig;

    export class MainStage extends Core.Modules.Stage {
        
        private _exitButton:Core.Modules.Button;
        private _container:Core.Modules.Container;
        private _background:Modules.Background;
        private _player:Modules.Player;
        private _characterChooseScreen:Modules.CharacterChoose;
        private _enemy:Array<Modules.Enemy>;

        /** running when main stage */
        public init() {
            this.game = GameController.Instance;
            this.initProperties();
            this.onOrientationChanged(DisplayManager.instance.currentOrientation);
        }

        private initProperties(){  
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aI = Config.AssetConfig;
            let a = Core.Enum.Anchor;
            this._container = new Core.Modules.Container(0,0,this,"MainContainer");
            this._characterChooseScreen = new Modules.CharacterChoose(this._container);
            this._enemy = new Array<Modules.Enemy>();
        }

        initEvents(){
            this.initDisplayEvents();
            this.initCharacterChoose();
        }

        private initPlayerEvents(){
            this._player.on(Enum.Listeners.OnGameAnimAction,this.onGameAnimAction.bind(this));
            this._player.on(Enum.Listeners.OnPlayerAction,this.onAction.bind(this));
        }

        private onGameAnimAction(action:Enum.Actions){
            switch(action){
                case Enum.Actions.GameOver:
                    this.onGameOver();
                    break;
            }
        }

        private onAction(action:Enum.Actions,data:any){
            switch(action){
                case Enum.Actions.BulletDestroyed:
                    for(let i = 0; i<this._enemy.length; i++){
                        Core.Managers.TickerManager.instance.removeTicker("CollisionBullet"+data.bullet.name+i.toString());
                    }
                    break;
                case Enum.Actions.EnemyDestroyed:
                    Core.Managers.TickerManager.instance.removeTicker("Collision"+data.ship.name);
                    for(let j = 0; j<this._player.bullet.length; j++){
                        Core.Managers.TickerManager.instance.removeTicker("CollisionBullet"+j.toString()+data.ship.name);
                    }
                    break;
                case Enum.Actions.BulletSpawn:
                    this.addBulletCollisionTicker(data);
                    break;
            }
        }

        private onGameOver(){
            this.dispose();
            Core.Managers.StageManager.Instance.changeStage(Dev.Stages.MenuStage,false);
        }

        private initCharacterChoose(){
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aI = Config.AssetConfig;
            let a = Core.Enum.Anchor;
            this._characterChooseScreen.on(Enum.Listeners.OnChooseAction,(choosingPlayer:number)=>{
                this._background = new Modules.Background(this._container);
                this._player = new Modules.Player(this._container,choosingPlayer);
                this.initPlayerEvents();
                this.spawnEnemy();
                this.initGameEvents();
                this._characterChooseScreen.visible = false;
                this._exitButton = new Core.Modules.Button(r.width-5,0,aI.CloseButton,this.onCloseButton.bind(this),this._container,50,50,a.UpRight);
            })
        }

        private onCloseButton(){
            Core.Managers.StageManager.Instance.changeStage(Dev.Stages.MenuStage,false);
        }

        private onGameDataAction(action:Dev.Enum.DataListener,data:Interface.IResponseData){
            switch(action){
                case Dev.Enum.DataListener.message:
                    break;
                case Dev.Enum.DataListener.keydown:
                    this._player.onKeyDown(data.keyCode);
                    break;
            }
        }

        private spawnEnemy(){
            let offset = Config.AnimConfig.Animation.duration.enemySpawnOffset;
            Core.Managers.TickerManager.instance.addTimeout("Spawn",offset,()=>{
                let enemy = new Modules.Enemy(this._container);
                enemy.ship.name = this._enemy.length.toString();
                enemy.on(Enum.Listeners.OnEnemyAction,this.onAction.bind(this));
                this.addEnemyCollisionTicker(enemy);
                this._enemy.push(enemy);
            },true);
        }

        private addEnemyCollisionTicker(enemy:Modules.Enemy){
            Core.Managers.TickerManager.instance.addTimeout("Collision"+this._enemy.length,.2,()=>{
                this.checkPlayerCollision(enemy);
            },true);
        }

        private addBulletCollisionTicker(bullet:Modules.Bullet){
            for(let i = 0; i<this._enemy.length; i++){
                Core.Managers.TickerManager.instance.addTimeout("CollisionBullet"+bullet.bullet.name+i,.2,()=>{
                    if(this._enemy[i])
                    this.checkBulletCollision(bullet,this._enemy[i]);
                },true);
            }
        }

        private checkBulletCollision(bullet:Modules.Bullet,enemy:Modules.Enemy){
            if(enemy.ship != null && enemy.ship!=undefined && bullet.bullet != null && bullet.bullet != undefined){
                let collision = false;
                let aBox = bullet.bullet.getBounds();
                let bBox = enemy.ship.getBounds();

                collision = aBox.x + aBox.width>bBox.x &&
                    aBox.x < bBox.x + bBox.width &&
                    aBox.x + aBox.height >bBox.y &&
                    aBox.y < bBox.y + bBox.height;
                    
                if(collision) {
                    enemy.playAnimation(Enum.CharacterState.Destroyed);
                    Core.Managers.TickerManager.instance.removeTicker("Collision"+enemy.ship.name);
                    for(let i = 0; i<this._enemy.length; i++){
                        Core.Managers.TickerManager.instance.removeTicker("CollisionBullet"+bullet.bullet.name+i.toString());
                    }
                    bullet.dispose();
                    bullet.bullet.destroy();
                    enemy.dispose();
                    
                    Core.Managers.TickerManager.instance.addTimeout("DestroyedEnemy",1,()=>{
                        if(enemy.destroyEmitter)
                        enemy.destroyEmitter.destroy();
                        if(enemy.ship)
                        enemy.ship.destroy({children:true});
                        var index: number = this._enemy.indexOf(enemy, 0);
                        delete this._enemy[index];
                    },false);
                }
            }
        }

        private checkPlayerCollision(enemy:Modules.Enemy){
            if(enemy.ship != null && enemy.ship!=undefined){
                let collision = false;
                let aBox = this._player.ship.getBounds();
                let bBox = enemy.ship.getBounds();
                
                collision = aBox.x + aBox.width>bBox.x &&
                    aBox.x < bBox.x + bBox.width &&
                    aBox.x + aBox.height >bBox.y &&
                    aBox.y < bBox.y + bBox.height;
                if(collision) {
                    Core.Managers.TickerManager.instance.removeTicker("Spawn");
                    this._player.playAnimation(Enum.CharacterState.Destroyed);
                    for(let i = 0; i<this._enemy.length; i++){
                        Core.Managers.TickerManager.instance.removeTicker("Collision"+i);
                        for(let j = 0; j<this._player.bullet.length; j++){
                            Core.Managers.TickerManager.instance.removeTicker("CollisionBullet"+j.toString()+i.toString());
                        }
                    }

                    Core.Managers.TickerManager.instance.addTimeout("GameOver",1,()=>{
                        this.onGameOver();
                    },false);
                }
            }
        }

        private initGameEvents(){
            let dataListener = Object.keys(Enum.DataListener);
            for(let i = 0; i<dataListener.length; i++){
                let dataName = Enum.DataListener[dataListener[i]];
                this.game.on(dataName,(data:Interface.IResponseData)=>{
                    this.onGameDataAction(dataName,data);
                });
            }       
        }

        setVisualPortrait(): void {
        }

        setVisualLandscape(): void {
        }

        /** running when destroying stage*/
        public dispose() {
            this._background.dispose();
            let dataListener = Object.keys(Enum.DataListener);
            for(let i = 0; i<dataListener.length; i++){
                let dataName = Enum.DataListener[dataListener[i]];
                this.game.off(dataName);
            } 
            this._player.dispose();
            for(let i = 0 ; i<this._enemy.length; i++)
                this._enemy[i].dispose();
            for(let i = 0 ; i<this._player.bullet.length; i++)
                this._player.bullet[i].dispose();
            this._container.destroy({children:true})
            Core.Managers.TickerManager.instance.removeTicker("Spawn");
            for(let i = 0; i<this._enemy.length; i++){
                Core.Managers.TickerManager.instance.removeTicker("Collision"+i);
                for(let j = 0; j<this._player.bullet.length; j++)
                Core.Managers.TickerManager.instance.removeTicker("CollisionBullet"+j.toString()+i.toString());
            }
        }
    }
}