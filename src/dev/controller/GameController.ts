
namespace Dev.Controller{

    export class GameController extends Core.Controller.GameController {

        constructor(data:Core.Interface.IStartConfig) {
            super(data);
            GameController.Instance = this;
        }

        init(): void {
            this.resourceController = new ResourceController();
        }

        initResource(): void {
            let listener = Dev.Enum.ResourceListener;
            this.once(listener.AssetLoadCompleted,this.onAssetLoadedCompleted);
        }

        initEventData():void {
            let dataListener = Object.keys(Dev.Enum.DataListener);
            for(let i = 0; i<dataListener.length; i++){
                let dataName = Dev.Enum.DataListener[dataListener[i]];
                this.dataController.on(dataName,(data:Interface.IResponseData)=>{
                    this.emit(dataName,data);
                });
            }
        }

        initEventAnimation(): void {
        }

        initEventsDisplay(){
            let display = Core.Managers.DisplayManager.instance;
            display.on(Dev.Enum.DisplayListener.OrientationChanged,this.onOrientationChanged.bind(this));
        }

        onOrientationChanged(value:Dev.Enum.Orientation){
            this.emit(Dev.Enum.DisplayListener.OrientationChanged,value);
        }

        onAssetLoadedCompleted():void{
            this.dataController = new DataController();
            this.initEventsDisplay();
            this.initEventData();
            this.initEventAnimation();
        }
    }
}