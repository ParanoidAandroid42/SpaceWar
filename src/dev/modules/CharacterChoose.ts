namespace Dev.Modules {

    export class CharacterChoose extends PIXI.utils.EventEmitter{

        private _bg: Core.Modules.Sprite;
        private _playerCharacters:Array<Core.Modules.Button>;
        private _container: Core.Modules.Container;
        private _headerText:Core.Modules.Text;
        private _infoText:Core.Modules.Text;
        
        public constructor(container:Core.Modules.Container) {
            super();
            this._container = new Core.Modules.Container(0,0,container,"ChooseContainer");
            this.initProperties();
        }

        public set visible(visible:boolean){
            this._container.visible = visible;
        }

        private onChoose(choosingPlayer:number){
            this.emit(Enum.Listeners.OnChooseAction,choosingPlayer);
            this.visible = false;
        }

        private initProperties(){
            let r = Dev.Config.GameConfig.DisplayConfig;
            let aI = Config.AssetConfig;
            let a = Core.Enum.Anchor;
            this.visible = true;
            this._bg = new Core.Modules.Sprite(r.width/2,r.height/2,aI.MainBackgroundLayer[0],this._container,800,600);
            this._playerCharacters = new Array<Core.Modules.Button>();
            let iconScale = {x:100,y:100};
            let offsetButtons = 120;

            let startPosition = r.width/2 - 1.5*iconScale.x - 1.5*offsetButtons;
            for(let i = 0; i<4; i++){
                let x = startPosition+iconScale.x+offsetButtons*i;
                let icon = new Core.Modules.Button(x,r.height/2,aI.PlayerIconButtons[i],this.onChoose.bind(this,i),this._container,iconScale.x,iconScale.y,a.MiddleLeft);
            }

            this._headerText = new Core.Modules.Text(r.width/2,r.height/2 - 130,aI.ChooseScreenHeaderText,this._container);
            this._infoText = new Core.Modules.Text(r.width/2,r.height - 130,aI.ChooseScreenInfoText,this._container);
        }
    }
}

