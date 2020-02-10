namespace Dev.Modules {

    export class Player extends PIXI.utils.EventEmitter{

        private _ship: Core.Modules.Spine;
        private _container: Core.Modules.Container;
        private _currentCharacterState:Enum.CharacterState;
        private _choosingPlayer:number = 0;
        private _bullet:Array<Modules.Bullet>;

        public constructor(container:Core.Modules.Container,choosingPlayer:number) {
            super();
            this._choosingPlayer = choosingPlayer;
            this._container = container;
            this._currentCharacterState = Enum.CharacterState.Idle;
            this.initProperties();
            this.initEvents();
        }

        private initEvents(){
            this.on(Enum.Listeners.OnPlayerAction,this.checkActions.bind(this));
        }

        private checkActions(action:Enum.Actions,data:any){
            switch(action){
                case Enum.Actions.BulletDestroyed:
                    delete this.bullet[data.bullet.name];
                    this.emit(Enum.Listeners.OnPlayerAction,Enum.Actions.BulletDestroyed,data);
                    var index: number = this._bullet.indexOf(data, 0);
                    delete this._bullet[index];
                    break;
            }
        }

        public playAnimation(state:Enum.CharacterState){
            switch(state){
                case Enum.CharacterState.Idle:
                    this._ship.playAnimation(Enum.AnimNames.Idle);
                    break;
                case Enum.CharacterState.Destroyed:
                    this._ship.playAnimation(Enum.AnimNames.Destroyed);
                    break;
            }
        }

        public onKeyDown(key:Enum.KeyCode){
            let r = Dev.Config.GameConfig.DisplayConfig
            switch(key){
                case Enum.KeyCode.up:
                    if (this._ship.position.y >= this._ship.height/2) {
                        this._ship.position.y -= 5;
                    }
                    break;
                case Enum.KeyCode.down:
                    if (this._ship.position.y <= r.height + this._ship.height/2) {
                        this._ship.position.y += 5;
                     }
                    break;
                case Enum.KeyCode.left:
                    if (this._ship.position.x >= this._ship.width/2) {
                        this._ship.position.x -= 5;
                    }
                    break;
                case Enum.KeyCode.right: 
                    if (this._ship.position.x <= r.width - this._ship.width/2) {
                        this._ship.position.x += 5;
                    }
                    break;
                case Enum.KeyCode.fire:
                    this.spawnBullet();
                    break;
            }
        }

        private spawnBullet(){
            let bullet = new Modules.Bullet(this._ship);
            this._bullet.push(bullet);
            bullet.bullet.name = this._bullet.length.toString();
            this.emit(Enum.Listeners.OnPlayerAction,Enum.Actions.BulletSpawn,bullet);
        }

        private initProperties(){
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aI = Config.AssetConfig;
            let a = Core.Enum.Anchor;

            this._ship = new Core.Modules.Spine(200,r.height/2,aI.PlayerShips[this._choosingPlayer],this._container,100,100);
            this.playAnimation(this._currentCharacterState);
            this._bullet = new Array<Modules.Bullet>();
        }

        public get ship():Core.Modules.Spine{
            return this._ship;
        }

        public dispose(){
            for(let i = 0; i<this._bullet.length; i++){
                this._bullet[i].dispose();
            }
        }   

        public get bullet():Array<Modules.Bullet>{
            return this._bullet;
        }
    }
}
