namespace Dev.Modules {

    export class Enemy extends PIXI.utils.EventEmitter{

        private _ship: Core.Modules.Spine;
        private _container: Core.Modules.Container;
        private _currentCharacterState:Enum.CharacterState;
        private _tween:any;
        private _destroyEmitter:PIXI.particles.Emitter;

        public constructor(container:Core.Modules.Container) {
            super();
            this._container = container;
            this._currentCharacterState = Enum.CharacterState.Idle;
            this.initProperties();
        }

        public playAnimation(state:Enum.CharacterState){
            let aI = Config.AssetConfig;
            switch(state){
                case Enum.CharacterState.Idle:
                    this._ship.playAnimation(Enum.AnimNames.EnemyIdle);
                    break;
                case Enum.CharacterState.Destroyed:
                    this._destroyEmitter = new PIXI.particles.Emitter(this._ship, aI.ParticleSpark.frame, aI.Expo); 
                    let elapsed = Date.now();      //current time
                    PIXI.Ticker.shared.add((deltatime) => {
                        this._destroyEmitter.update((Date.now() - elapsed) * 0.0008);
                        elapsed = Date.now();
                    }, this);
                    this._ship.playAnimation(Enum.AnimNames.EnemyDestroyed);
                    break;
                case Enum.CharacterState.Hit:
                    this._ship.playAnimation(Enum.AnimNames.EnemyHit);
                    break;
            }
        }

        private initProperties(){
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aI = Config.AssetConfig;
            let a = Core.Enum.Anchor;

            let ran =  0 + Math.floor(Math.random() * Math.floor(aI.EnemyShips.length));;
            this._ship = new Core.Modules.Spine(r.width+150,r.height/2,aI.EnemyShips[ran],this._container,100,100);
            let random = {fY:this.randomY(),tY:this.randomY()};
            this._tween = TweenMax.fromTo(this._ship,10,{x:r.width+150,y:random.fY},{x:-200,y:random.tY,ease:"power0",onComplete:()=>{
                this.emit(Enum.Listeners.OnEnemyAction,Enum.Actions.EnemyDestroyed,this);
                this._ship.destroy();
                this.dispose();
                delete this._ship;
            }});
            this.playAnimation(this._currentCharacterState);
        }

        public dispose(){
            if(this._tween)
            this._tween.kill();
        }

        private randomY(){
            let r = Dev.Config.GameConfig.DisplayConfig;
            let y = 0 + Math.floor(Math.random() * Math.floor(r.height));;
            return y;
        }

        public get ship(){
            return this._ship;
        }

        public get destroyEmitter(){
            return this._destroyEmitter;
        }
    }
}
