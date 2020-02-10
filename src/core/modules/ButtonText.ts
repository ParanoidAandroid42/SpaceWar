
namespace Core.Modules {

    export class ButtonText extends Modules.Button {

        private _text: Modules.Text;

        /**
         * running when loading class
         * @param x - position x
         * @param y - position y 
         * @param w - width
         * @param h - height
         * @param c - button text config
         * @param cB - callback function
         * @param p - parent
         */
        constructor(x: number, y: number, c: Interface.IButtonTextConfig, cB?: Function, p?: PIXI.Container,w?: number, h?: number,a?:Enum.Anchor) {
            super(x, y, c.bConfig, cB, p,w, h);
            this._text = new Modules.Text(0, h/2,c.tConfig, this);
            if(c.name) this.name = c.name;
            this.setAnchor(a);
        }

        public set text(text:string){
            this._text.text = text;
        }

        public get textAsset() {
            return this._text;
        }
    }
}