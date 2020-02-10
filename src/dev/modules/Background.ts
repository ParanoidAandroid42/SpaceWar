
namespace Dev.Modules {

    export class Background extends PIXI.utils.EventEmitter{

        private _container : Core.Modules.Container;
        private _bgLayers:Array<Core.Modules.Sprite>;
        private _timeLine:any;

        private _backBg2d : Core.Modules.Container2d;
        private _midBg2d : Core.Modules.Container2d;
        private _frontBg2d : Core.Modules.Container2d;
        private _plane2d : Core.Modules.Plane2d;

        public constructor(container:Core.Modules.Container) {
            super();
            this._container = new Core.Modules.Container(0,0,container,"BackgroundContainer");
            this.initProperties();
        }

        private initProperties(){
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aI = Config.AssetConfig;
            let a = Core.Enum.Anchor;
            this._bgLayers = new Array<Core.Modules.Sprite>();
            let bg = new Core.Modules.Sprite(r.width/2,r.height/2,aI.MainBackgroundLayer[0],this._container,800,600);
            this._bgLayers.push(bg);
            this._plane2d = new Core.Modules.Plane2d(0,0, this._container,null,"Plane");
            this._backBg2d = new Core.Modules.Container2d(0,-20,this._plane2d,"backBg2d");
            this._midBg2d = new Core.Modules.Container2d(0,-10,this._plane2d,"midBg2d");
            this._frontBg2d = new Core.Modules.Container2d(0,0,this._plane2d,"frontBg2d");
            bg = new Core.Modules.Sprite(0,-r.height/2,aI.MainBackgroundLayer[1],this._backBg2d,1280,r.height/2,a.UpCenter);
            this._bgLayers.push(bg);
            bg = new Core.Modules.Sprite(0,r.height/2,aI.MainBackgroundLayer[1],this._backBg2d,1280,r.height/2,a.DownCenter);
            this._bgLayers.push(bg);
            bg = new Core.Modules.Sprite(1280,-r.height/2,aI.MainBackgroundLayer[1],this._backBg2d,1280,r.height/2,a.UpCenter);
            this._bgLayers.push(bg);
            bg = new Core.Modules.Sprite(1280,r.height/2,aI.MainBackgroundLayer[1],this._backBg2d,1280,r.height/2,a.DownCenter);
            this._bgLayers.push(bg);
            bg = new Core.Modules.Sprite(-r.width/2,-r.height/2,aI.MainBackgroundLayer[3],this._midBg2d,550,150,a.UpLeft);
            this._bgLayers.push(bg);
            bg = new Core.Modules.Sprite(0,r.height/2,aI.MainBackgroundLayer[2],this._midBg2d,550,170,a.DownCenter);
            this._bgLayers.push(bg);
            bg = new Core.Modules.Sprite(0,r.height/2-120,aI.MainBackgroundLayer[4],this._frontBg2d,750,150,a.DownCenter);
            this._bgLayers.push(bg);
            this.playBackgroundAnimation();
        }

        private playBackgroundAnimation(){
            let r = Dev.Config.GameConfig.DisplayConfig;
            this._timeLine = new TimelineMax({repeat:-1});
            this._timeLine.fromTo(this._bgLayers[1],20,{x:0},{x:-1280,ease:"power0"});
            this._timeLine.fromTo(this._bgLayers[2],20,{x:0},{x:-1280,ease:"power0"},"-="+20);
            this._timeLine.fromTo(this._bgLayers[3],20,{x:1280},{x:0,ease:"power0"},"-="+20);
            this._timeLine.fromTo(this._bgLayers[4],20,{x:1280},{x:0,ease:"power0"},"-="+20);
        }

        public dispose(){
            this._timeLine.kill();
        }

        public get container(){
            return this._container;
        }
    }
}
