namespace Dev.Interface {

    export interface IAnimation {
        ease : {
            logoScale:string;
            logoAlpha:string;
            boxFillsAlpha:string;
        },
        duration : {
            logoScale:number,
            logoAlpha:number;
            boxFillsAlpha:number;
            logoScreen?:number;
            enemySpawnOffset?:number;
        },
        count?:{
        },
        speed:{
            boxFillsOffset:number
        }
    }
}