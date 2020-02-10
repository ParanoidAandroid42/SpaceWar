
module Dev.Controller {
    export class DataController extends Core.Controller.DataController{

        private _data: Interface.IResponseData = {
            keyCode:null
        };

        /** DataController class's init function */
        public constructor() {
            super();
        }

        init(){
        }

        dataAction(data: any): void {
        }

        initEvents(){
            window.addEventListener(Dev.Enum.DataListener.message,(data:any)=>{ this.dataAction(data.data);});
            document.addEventListener(Dev.Enum.DataListener.keydown,this.onKeyDown.bind(this));
        }

        private onKeyDown(keyCode:any){
            this._data.keyCode = keyCode.code;
            this.emit(Dev.Enum.DataListener.keydown,this._data);
        }
        
        public get data(): Interface.IResponseData {
            return this._data;
        }
        public set data(value: Interface.IResponseData) {
            this._data = value;
        }
    }
}