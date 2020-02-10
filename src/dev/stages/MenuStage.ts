
namespace Dev.Stages { 
    
    import GameController = Controller.GameController;
    import DisplayManager = Core.Managers.DisplayManager;
    import AnimInfo = Config.AnimConfig;

    export class MenuStage extends Core.Modules.Stage {

        private _gameButtonTexts:Array<Core.Modules.Button>;
        private _exitButtonText:Core.Modules.ButtonText;
        private _container:Core.Modules.Container;
        private _bg : Core.Modules.Sprite;

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
            this._bg = new Core.Modules.Sprite(r.width/2,r.height/2,aI.LoadingBackground,this._container);
            this._gameButtonTexts = new Array<Core.Modules.Button>();
            let buttonScale = {x:157,y:70};
            let offsetButtons = 100;
            let startPosition = r.height/2 - 1.5*buttonScale.y - 1.5*offsetButtons;

            for(let i = 0; i<3; i++){
                let gameButton = new Core.Modules.ButtonText(r.width/2,startPosition+buttonScale.y+offsetButtons*i,aI.MenuButtonTextConfig,
                    this.onGameButton.bind(this,i),this._container,buttonScale.x,buttonScale.y,a.UpCenter);
                this._gameButtonTexts.push(gameButton);
                gameButton.text = "GAME"+(i+1);
            }
            let y = this._gameButtonTexts[this._gameButtonTexts.length-1].position.y;
            this._exitButtonText = new Core.Modules.ButtonText(r.width/2,y+offsetButtons,aI.MenuButtonTextConfig,
                this.onExitButton,this._container,buttonScale.x,buttonScale.y,a.UpCenter);
            this._exitButtonText.text = "EXIT";
        }

        private onExitButton(){
            window.open("https://www.google.com/",'_blank');
        }

        private onGameButton(buttonNumber:number){
            Core.Managers.StageManager.Instance.changeStage(Dev.Stages.MainStage,false);
        }


        initEvents(){
            this.initDisplayEvents();
        }

        setVisualPortrait(): void {
        }

        setVisualLandscape(): void {
        }

        /** running when destroying stage*/
        public dispose() {
        }
    }
}