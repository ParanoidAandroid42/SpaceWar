/// <reference path= '../enum/ResourceEnum.ts'/>
/// <reference path= '../config/AnimConfig.ts'/>
/// <reference path= '../../core/enum/AssetEnum.ts'/>
module Dev.Config {
    
    import Shape = Core.Enum.Shape;
    import Texture = Enum.Texture;
    import PreTexture = Enum.PreTexture;
    
    export class AssetConfig {

        static ResourceManager = Core.Managers.ResourceManager.Instance;

        static TimerCircle : Core.Interface.IMaskConfig = {
            shape : Shape.Circle,
            name : "TimerCircleMask",
            radius : 1480,
            fill : 0x000000,
            alpha: .75
        }

        static TimerTextStyle = new PIXI.TextStyle({
            fontFamily: "Luckiest Guy",
            fontSize: 300,
            fontWeight: "600",
            fill: "#ffffff",
            align: "center"
        });

        /** Timer text's config*/
        static TimerText: Core.Interface.ITextConfig = {
            text: "5",
            textStyle: AssetConfig.TimerTextStyle,
            name: "timerText",
            anchor:  Core.Enum.Anchor.MiddleCenter
        };

        static StageRect: Core.Interface.IMaskConfig = {
            shape : Shape.Rectangle,
            name : "StageBg",
            fill : 0x00000,
            alpha:0
        }
        
        //
        // ─── Button Config ────────────────────────────────────────────────────────────
        //

        static CloseButton: Core.Interface.IButtonConfig = {
            frames: {
                out: Texture.CloseButtonOut,
                over: Texture.CloseButtonOver,
                down: Texture.CloseButtonOver,
                disabled: Texture.CloseButtonOver
            },
            name: "Close Button"
        }

        static PlayerIconButtons: Array<Core.Interface.IButtonConfig> = [
            { 
                frames: {
                    out: Texture.PlayerIcon1,
                    over: Texture.PlayerIcon1,
                    down: Texture.PlayerIcon1,
                    disabled: Texture.PlayerIcon1
                },
                name: "PlayerIcon1"
            },
            { 
                frames: {
                    out: Texture.PlayerIcon2,
                    over: Texture.PlayerIcon2,
                    down: Texture.PlayerIcon2,
                    disabled: Texture.PlayerIcon2
                },
                name: "PlayerIcon2"
            },
            { 
                frames: {
                    out: Texture.PlayerIcon3,
                    over: Texture.PlayerIcon3,
                    down: Texture.PlayerIcon3,
                    disabled: Texture.PlayerIcon3
                },
                name: "PlayerIcon3"
            },
            { 
                frames: {
                    out: Texture.PlayerIcon4,
                    over: Texture.PlayerIcon4,
                    down: Texture.PlayerIcon4,
                    disabled: Texture.PlayerIcon4
                },
                name: "PlayerIcon4"
            }
        ]

        //
        // ────────────────────────────────────────────────────────── Button Config ─────
        //


        //
        // ─── Text Config ────────────────────────────────────────────────────────────
        //
            
        /**
         * Win header of asset config
         */
        static WinHeader = new PIXI.TextStyle({
            fontFamily: Dev.Enum.WebFont.BOB,
            fontSize: 150,
            fontWeight: "400",
            align: "center",
            fill: [
                "#d7ced6",
                "#fffa17",
                "#ffbf00",
                "#db75d9"
            ],
            strokeThickness: 10,
            fontVariant: "small-caps",
        });

        /**
         * Big win text of asset config
         */
        static BigWinText: Core.Interface.ITextConfig = {
            text: "BIG WIN",
            textStyle: AssetConfig.WinHeader,
            name: "BigWinHeader"
        };

         /**
         * Win header of asset config
         */
        static UIHeaderStyle = new PIXI.TextStyle({
            fontFamily: Dev.Enum.WebFont.BOB,
            fontSize: 150,
            fontWeight: "400",
            align: "center",
            fill: [
                "#d7ced6",
                "#fffa17",
                "#ffbf00",
                "#db75d9"
            ],
            strokeThickness: 10,
            fontVariant: "small-caps"
        });

        static UIHeaderText: Core.Interface.ITextConfig = {
            text: "YOU WON",
            textStyle: AssetConfig.UIHeaderStyle,
            name: "UIHeader"
        };  
        
        /** general bold text's style*/
        static GeneralBoldTextStyle = new PIXI.TextStyle({
            fontFamily: "Montserrat, sans-serif",
            fontSize: "22px",
            fontWeight: "bold",
            fill: "#ffffff",
            stroke: 0x000000,
            strokeThickness: 3,
            align: "center"
        });
        
        /** generic bold text's config*/
        static GenericBoldText: Core.Interface.ITextConfig = {
            text: "Generic Bold Text",
            textStyle: AssetConfig.GeneralBoldTextStyle,
            name: "Generic Text"
        };

        static WinAmountStyle = new PIXI.TextStyle({
            fontFamily: Dev.Enum.WebFont.BOB,
            fontSize: 150,
            fontWeight: "400",
            align: "center",
            fill: [
                "#d7ced6",
                "#fffa17",
                "#ffbf00",
                "#db75d9"
            ],
            strokeThickness: 10,
            fontVariant: "small-caps",
        });

        static WinLineTextStyle = new PIXI.TextStyle({
            fontFamily: Dev.Enum.WebFont.BOB,
            fontSize: 150,
            fontWeight: "400",
            align: "center",
            fill: [
                "#d7ced6",
                "#fffa17",
                "#ffbf00",
                "#db75d9"
            ],
            strokeThickness: 10,
            fontVariant: "small-caps",
        });

        static WinAmountText: Core.Interface.ITextConfig = {
            text: "x5",
            textStyle: AssetConfig.WinAmountStyle,
            name: "WinAmountText"
        };

        static WinLineText: Core.Interface.ITextConfig = {
            text: "",
            textStyle: AssetConfig.WinLineTextStyle,
            name: "WinLineText"
        };

        /**
         * Mega win text of asset config
         */
        static MegaWinText: Core.Interface.ITextConfig = {
            text: "MEGA WIN",
            textStyle: AssetConfig.WinHeader,
            name: "MegaWinHeader"
        };

        /**
         * Super win text of asset config
         */
        static SuperWinText: Core.Interface.ITextConfig = {
            text: "SUPER WIN",
            textStyle: AssetConfig.WinHeader,
            name: "SuperWinHeader"
        };

        
        /**
         * free spin start win text of asset config
         */
        static FreeSpinStartWinText: Core.Interface.ITextConfig = {
            text: "FREE SPIN",
            textStyle: AssetConfig.WinHeader,
            name: "FreeSpinStartWinHeader"
        };

        /** general text's style*/
        static GeneralTextStyle = new PIXI.TextStyle({
            fontFamily: "Montserrat, sans-serif",
            fontSize: "14px",
            fontWeight: "bold",
            fill: "#d08f38",
            stroke: 0x000000,
            strokeThickness: 3,
            align: "center"
        });

        /**header text's style*/
        static HeaderTextStyle = new PIXI.TextStyle({
            fontFamily: Dev.Enum.WebFont.BOB,
            fontSize: 35,
            fontWeight: "400",
            align: "center",
            fill: [
                "#d7ced6",
                "#fffa17",
                "#ffbf00",
                "#db75d9"
            ],
            strokeThickness: 2,
            fontVariant: "small-caps",
        });

        /** generic text's config*/
        static GenericText: Core.Interface.ITextConfig = {
            text: "Generic Text",
            textStyle: AssetConfig.GeneralTextStyle,
            name: "Generic Text"
        };

         /** choose screen header text's config*/
         static ChooseScreenHeaderText: Core.Interface.ITextConfig = {
            text: "Please Select Your Character",
            textStyle: AssetConfig.HeaderTextStyle,
            name: "Header Text"
        };

        /** choose screen header text's config*/
        static ChooseScreenInfoText: Core.Interface.ITextConfig = {
            text: "Keys: W-A-S-D-Space",
            textStyle: AssetConfig.HeaderTextStyle,
            name: "ChooseScreenInfoText"
        };


        /** menu text's config*/
        static MenuText: Core.Interface.ITextConfig = {
            text: "Menu",
            textStyle: AssetConfig.GeneralTextStyle,
            name: "Menu Text"
        };

        //
        // ────────────────────────────────────────────────────────── Text Config ─────
        //

        //
        // ─── Button Text Config ────────────────────────────────────────────────────────────
        //

        
        static MenuButtonTextConfig: Core.Interface.IButtonTextConfig = {
            bConfig:{
                frames: {
                    out: Texture.GeneralButtonOut,
                    over: Texture.GeneralButtonOver,
                    down: Texture.GeneralButtonDown,
                    disabled: Texture.GeneralButtonDisabled
                },
                name: "Menu Button"
            },
            tConfig:{
                text: "5",
                textStyle: AssetConfig.GeneralBoldTextStyle,
                name: "MenuButtonText",
                anchor:  Core.Enum.Anchor.MiddleCenter
            }
        }

        //
        // ────────────────────────────────────────────────────────── Button Text Config ─────
        //

        //
        // ─── Sprite Config ────────────────────────────────────────────────────────────
        //

        /**
         * Logo  of asset config
         */
        static Logo : Core.Interface.ISpriteConfig = {
            frame : PreTexture.Logo,
            name : "Logo"
        }

        static Bullet : Core.Interface.ISpriteConfig = {
            frame : Texture.Bullet,
            name : "Bullet"
        }

        /**
         * LoadingBackground  of asset config
         */
        static LoadingBackground : Core.Interface.ISpriteConfig = {
            frame : PreTexture.LogoBackground,
            name : "LogoBackground"
        }

        static MainBackgroundLayer: Array<Core.Interface.ISpriteConfig> = [
            {
                frame : Texture.MainBackgroundLayer1,
                name : "MainBackgroundLayer1"
            },
            {
                frame : Texture.MainBackgroundLayer2,
                name : "MainBackgroundLayer2"
            },
            {
                frame : Texture.MainBackgroundLayer3,
                name : "MainBackgroundLayer3"
            },
            {
                frame : Texture.MainBackgroundLayer4,
                name : "MainBackgroundLayer4"
            },
            {
                frame : Texture.MainBackgroundLayer5,
                name : "MainBackgroundLayer5"
            }
        ]
        
        static ParticleSpark : Core.Interface.ISpriteConfig = {
            frame : Texture.ParticleSpark,
            name : "ParticleSpark"
        }

        //
        // ────────────────────────────────────────────────────────── Sprite Config ─────
        //

        //
        // ─── Mask Config ────────────────────────────────────────────────────────────
        //

        static LoadingCircleBg : Core.Interface.IMaskConfig = {
            shape : Shape.RoundRect,
            name : "LoadingCircle",
            radius : 10,
            fill : 0xba6329
        }

        static SlotWinLine : Core.Interface.IMaskConfig = {
            shape : Shape.Line,
            name : "SlotWinline",
            fill : 0xffffff
        }

        static LoadingCircleFill : Core.Interface.IMaskConfig = {
            shape : Shape.RoundRect,
            name : "LoadingCircle",
            radius : 10,
            fill : 0xe8cf5b
        }

        static FruitBarMask : Core.Interface.IMaskConfig = {
            shape : Shape.RoundRect,
            name : "FruitBarMask",
            radius : 30,
            fill : 0xffffff
        }

        static SliderFilterMask : Core.Interface.IMaskConfig = {
            shape : Shape.RoundRect,
            name : "SliderFilterMask",
            radius : 30,
            fill : 0xffffff,
            alpha:0
        }

        static PopupRect: Core.Interface.IMaskConfig = {
            shape : Shape.Rectangle,
            name : "PopupBg",
            fill : 0x00000,
            alpha:0
        }

        static WheelMask: Core.Interface.IMaskConfig = {
            shape : Shape.Circle,
            name : "WheelMask",
            fill : 0x00000,
            radius:352,
            alpha:1
        }

        static GeneralReelMask: Core.Interface.IMaskConfig = {
            shape : Shape.Rectangle,
            name : "GeneralReelMask",
            fill : 0x00000,
            alpha:0
        }

        static Frame: Core.Interface.IMaskConfig = {
            shape : Shape.RoundRect,
            name : "Frame",
            radius:30,
            fill : 0x00000,
            alpha:0.7
        }

        //
        // ────────────────────────────────────────────────────────── Mask Config ─────
        //

        //
        // ─── Spine Config ────────────────────────────────────────────────────────────
        //
            
        static PlayerShips: Array<Core.Interface.ISpineConfig> = [
            {
                skeletonDataName : Dev.Enum.SpineAnimation.PlayerShip1,
                animations : AnimConfig.PlayerShipAnimation,
                name : "PlayerShip"
            },
            {
                skeletonDataName : Dev.Enum.SpineAnimation.PlayerShip2,
                animations : AnimConfig.PlayerShipAnimation,
                name : "PlayerShip"
            },
            {
                skeletonDataName : Dev.Enum.SpineAnimation.PlayerShip3,
                animations : AnimConfig.PlayerShipAnimation,
                name : "PlayerShip"
            },
            {
                skeletonDataName : Dev.Enum.SpineAnimation.PlayerShip4,
                animations : AnimConfig.PlayerShipAnimation,
                name : "PlayerShip"
            }
        ]

        static EnemyShips: Array<Core.Interface.ISpineConfig> = [
            {
                skeletonDataName : Dev.Enum.SpineAnimation.EnemyShip1,
                animations : AnimConfig.EnemyShipAnimation,
                name : "EnemyShip"
            },
            {
                skeletonDataName : Dev.Enum.SpineAnimation.EnemyShip2,
                animations : AnimConfig.EnemyShipAnimation,
                name : "EnemyShip"
            },
            {
                skeletonDataName : Dev.Enum.SpineAnimation.EnemyShip3,
                animations : AnimConfig.EnemyShipAnimation,
                name : "EnemyShip"
            },
            {
                skeletonDataName : Dev.Enum.SpineAnimation.EnemyShip4,
                animations : AnimConfig.EnemyShipAnimation,
                name : "EnemyShip"
            },
            {
                skeletonDataName : Dev.Enum.SpineAnimation.EnemyShip5,
                animations : AnimConfig.EnemyShipAnimation,
                name : "EnemyShip"
            },
            {
                skeletonDataName : Dev.Enum.SpineAnimation.EnemyShip6,
                animations : AnimConfig.EnemyShipAnimation,
                name : "EnemyShip"
            },
            {
                skeletonDataName : Dev.Enum.SpineAnimation.EnemyShip7,
                animations : AnimConfig.EnemyShipAnimation,
                name : "EnemyShip"
            },
            {
                skeletonDataName : Dev.Enum.SpineAnimation.EnemyShip8,
                animations : AnimConfig.EnemyShipAnimation,
                name : "EnemyShip"
            },
            {
                skeletonDataName : Dev.Enum.SpineAnimation.EnemyShip9,
                animations : AnimConfig.EnemyShipAnimation,
                name : "EnemyShip"
            },
            {
                skeletonDataName : Dev.Enum.SpineAnimation.EnemyShip10,
                animations : AnimConfig.EnemyShipAnimation,
                name : "EnemyShip"
            }
        ]

        //
        // ────────────────────────────────────────────────────────── Spine Config ─────
        //

         //
        // ─── Particles Config ────────────────────────────────────────────────────────────
        // 

          /**fire spark emitter */
          static Expo = {
            "alpha": {
                "start": 0.56,
                "end": 0.36
            },
            "scale": {
                "start": 1,
                "end": 0.3,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#d11313",
                "end": "#474747"
            },
            "speed": {
                "start": 200,
                "end": 200,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 0
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 2,
                "max": 2
            },
            "blendMode": "normal",
            "frequency": 0.1,
            "emitterLifetime": 0.31,
            "maxParticles": 50,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "burst",
            "particlesPerWave": 10,
            "particleSpacing": 0,
            "angleStart": 0
        }
         //
        // ────────────────────────────────────────────────────────── Particles Config ─────
        //
    }
}