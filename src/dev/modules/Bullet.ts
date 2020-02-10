namespace Dev.Modules {

    export class Bullet extends PIXI.utils.EventEmitter{

        private _bullet: Core.Modules.Sprite;
        private _container: Core.Modules.Container;
        private _tween:any;
        
        public constructor(ship:Core.Modules.Container) {
            super();
            this._container = ship;
            this.initProperties(ship.x+50,ship.y-5);
        }

        private initProperties(x:number,y:number){
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aI = Config.AssetConfig;
            let a = Core.Enum.Anchor;

            this._bullet = new Core.Modules.Sprite(x,y,aI.Bullet,this._container.parent,136/2,23/2);
            this._tween = TweenMax.fromTo(this._bullet,5,{x:x},{x:r.width+140,ease:"power0",onComplete:()=>{
                this.emit(Enum.Listeners.OnPlayerAction,Enum.Actions.BulletDestroyed,this);
                this._bullet.destroy();
                this.dispose();
                delete this._bullet;
            }});
        }

        public get bullet(){
            return this._bullet;
        }

        public dispose(){
            if(this._tween)
                this._tween.kill();
        }
    }
}
