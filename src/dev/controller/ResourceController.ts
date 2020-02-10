
/// <reference path="../stages/LoaderStage.ts"/>

namespace Dev.Controller{

    import ResourceManager = Core.Managers.ResourceManager;

    import StageManager = Core.Managers.StageManager;
    import LoaderStage = Stages.LoaderStage;

    export class ResourceController extends Core.Controller.ResourceController {

        constructor() {
            super();
        }

        init(): void {
        }

        initEvents(): void {
            let listener = Dev.Enum.ResourceListener;
            let resource = ResourceManager.Instance;
            resource.once(listener.AssetLoading,this.assetLoading.bind(this));
            resource.on(listener.AssetLoadCompleted,this.assetsLoadCompleted.bind(this));
            resource.once(listener.AssetPreLoadCompleted,resource.assetLoading.bind(resource));
            
            resource.assetPreLoading();
        }

        assetLoading(): void {
            StageManager.Instance.startStage(Stages.LoaderStage,true); //todo change
        }

        assetsLoadCompleted(): void {
            let listener = Dev.Enum.ResourceListener;
            let stage = StageManager.Instance;
            let duration = Config.AnimConfig.Animation.duration.logoScreen;
            Core.Managers.TickerManager.instance.addTimeout("loaded",duration,()=>{
                stage.changeStage(Stages.MenuStage,true);
                GameController.Instance.emit(listener.AssetLoadCompleted);
            },false);
        }
    }
}