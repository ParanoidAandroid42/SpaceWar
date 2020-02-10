/// <reference path= '../enum/AnimEnum.ts'/>
/// <reference path= '../enum/SpaceEnum.ts'/>
namespace Dev.Config {

    import AnimNames = Enum.AnimNames;
    import Listener = Enum.GameAnimListener;
    export class AnimConfig {

        /** Sorting animation according to Scenario */
        static AnimationSort: Array<Dev.Enum.GameAnimListener> = [
        ];

        static PlayerShipAnimation : { [animName: string]: Core.Interface.IAnimation; } = { 
            [AnimNames.Idle] : {resource: AnimNames.Idle, loop: true,speed:.5,tint:0x06ff6a},
            [AnimNames.Destroyed]: { resource: AnimNames.Destroyed, loop: false,speed:.5,tint:0xff1e1e}
        };

        static EnemyShipAnimation : { [animName: string]: Core.Interface.IAnimation; } = { 
            [AnimNames.EnemyIdle] : {resource: AnimNames.EnemyIdle, loop: true,speed:1,tint:0x06ff6a},
            [AnimNames.EnemyHit] : {resource: AnimNames.EnemyHit, loop: false,speed:1,tint:0x06ff6a},
            [AnimNames.EnemyDestroyed]: { resource: AnimNames.EnemyDestroyed, loop: false,speed:1,tint:0xffea00 }
        };

        /**
         * Animation  of animation config for general animation
         */
        static Animation : Interface.IAnimation = {
            ease : {
                logoScale:"bounce.out",
                logoAlpha:"bounce.out",
                boxFillsAlpha:"power1.inOut"
            },
            duration : {
                logoScale:.75,
                logoAlpha:.75,
                boxFillsAlpha:.25,
                logoScreen:2,
                enemySpawnOffset:2,
            },
            speed:{
                boxFillsOffset:.35
            },
            count:{
            }
        }
    }
}