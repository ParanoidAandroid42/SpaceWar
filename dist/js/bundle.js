var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Core;
(function (Core) {
    var Controller;
    (function (Controller) {
        var AnimationController = (function (_super) {
            __extends(AnimationController, _super);
            function AnimationController() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvents();
                return _this;
            }
            return AnimationController;
        }(PIXI.utils.EventEmitter));
        Controller.AnimationController = AnimationController;
    })(Controller = Core.Controller || (Core.Controller = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Controller;
    (function (Controller) {
        var DataController = (function (_super) {
            __extends(DataController, _super);
            function DataController() {
                var _this = _super.call(this) || this;
                _this._currencyPosition = "suffix";
                _this.init();
                _this.initEvents();
                return _this;
            }
            return DataController;
        }(PIXI.utils.EventEmitter));
        Controller.DataController = DataController;
    })(Controller = Core.Controller || (Core.Controller = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Controller;
    (function (Controller) {
        var GameController = (function (_super) {
            __extends(GameController, _super);
            function GameController(data) {
                var _this = _super.call(this) || this;
                Dev.Config.GameConfig.StartConfig = data;
                _this.initProperties();
                return _this;
            }
            GameController.prototype.initProperties = function () {
                this.createManagers();
                this.init();
                this.initResource();
            };
            GameController.prototype.createManagers = function () {
                new Core.Managers.TickerManager();
                if (Dev.Config.GameConfig.StartConfig.fpsMeter)
                    new Core.Modules.StatElement();
                new Core.Managers.AnimationManager();
                new Core.Managers.DisplayManager();
                new Core.Managers.StageManager();
                new Core.Managers.ResourceManager();
            };
            return GameController;
        }(PIXI.utils.EventEmitter));
        Controller.GameController = GameController;
    })(Controller = Core.Controller || (Core.Controller = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Controller;
    (function (Controller) {
        var ResourceController = (function (_super) {
            __extends(ResourceController, _super);
            function ResourceController() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvents();
                return _this;
            }
            return ResourceController;
        }(PIXI.utils.EventEmitter));
        Controller.ResourceController = ResourceController;
    })(Controller = Core.Controller || (Core.Controller = {}));
})(Core || (Core = {}));
var Dev;
(function (Dev) {
    var Common;
    (function (Common) {
        var Controller;
        (function (Controller) {
            var SoundController = (function () {
                function SoundController() {
                    this._isMuteSound = true;
                    this._isMuteMusic = false;
                    this._isMuteSoundFx = false;
                    this._soundFXVolume = .5;
                    this._backgroundSoundVolume = 1;
                }
                SoundController.prototype.muteBackgroundSound = function () {
                };
                SoundController.prototype.muteSpecialsSound = function () {
                };
                SoundController.prototype.muteSound = function (mute) {
                    if (mute) {
                        this.muteSpecialsSound();
                        this.muteBackgroundSound();
                    }
                    else {
                        this.unMuteSpecialsSound();
                        this.unMuteBackgroundSound();
                    }
                };
                SoundController.prototype.unMuteSpecialsSound = function () {
                };
                SoundController.prototype.unMuteBackgroundSound = function () {
                };
                SoundController.prototype.isMuteMusic = function (index) {
                    this._isMuteMusic = index;
                    if (!this._isMuteMusic && this._isMuteSound) {
                        this.unMuteBackgroundSound();
                    }
                    else {
                        this.muteBackgroundSound();
                    }
                };
                SoundController.prototype.isMuteSoundFx = function (index) {
                    this._isMuteSoundFx = index;
                    if (!this._isMuteSoundFx && this._isMuteSound) {
                        this.unMuteSpecialsSound();
                    }
                    else {
                        this.muteSpecialsSound();
                    }
                };
                SoundController.prototype.isMuteSound = function (index) {
                    this._isMuteSound = index;
                    if (this._isMuteSound) {
                        this.isMuteSoundFx(this._isMuteSoundFx);
                        this.isMuteMusic(this._isMuteMusic);
                    }
                    else {
                        this.muteSound(false);
                    }
                };
                return SoundController;
            }());
            Controller.SoundController = SoundController;
        })(Controller = Common.Controller || (Common.Controller = {}));
    })(Common = Dev.Common || (Dev.Common = {}));
})(Dev || (Dev = {}));
var Core;
(function (Core) {
    var Enum;
    (function (Enum) {
        var Anchor;
        (function (Anchor) {
            Anchor[Anchor["MiddleLeft"] = 0] = "MiddleLeft";
            Anchor[Anchor["MiddleRight"] = 1] = "MiddleRight";
            Anchor[Anchor["MiddleCenter"] = 2] = "MiddleCenter";
            Anchor[Anchor["UpLeft"] = 3] = "UpLeft";
            Anchor[Anchor["UpRight"] = 4] = "UpRight";
            Anchor[Anchor["UpCenter"] = 5] = "UpCenter";
            Anchor[Anchor["DownLeft"] = 6] = "DownLeft";
            Anchor[Anchor["DownRight"] = 7] = "DownRight";
            Anchor[Anchor["DownCenter"] = 8] = "DownCenter";
        })(Anchor = Enum.Anchor || (Enum.Anchor = {}));
        var Shape;
        (function (Shape) {
            Shape[Shape["Circle"] = 0] = "Circle";
            Shape[Shape["Rectangle"] = 1] = "Rectangle";
            Shape[Shape["RoundRect"] = 2] = "RoundRect";
            Shape[Shape["Line"] = 3] = "Line";
        })(Shape = Enum.Shape || (Enum.Shape = {}));
    })(Enum = Core.Enum || (Core.Enum = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Managers;
    (function (Managers) {
        var AnimationManager = (function (_super) {
            __extends(AnimationManager, _super);
            function AnimationManager() {
                var _this = _super.call(this) || this;
                AnimationManager.Instance = _this;
                return _this;
            }
            AnimationManager.prototype.playNextAnimations = function () {
                this._animationState = Dev.Enum.AnimationStateType.AnimationPlaying;
                if (this._animations.length == 0) {
                    this._animationState = Dev.Enum.AnimationStateType.AnimationStopped;
                    return;
                }
                else {
                    var animations = Object.keys(Dev.Enum.GameAnimListener);
                    for (var i = 0; i < animations.length; i++) {
                        if (this._animations[0] == Dev.Enum.GameAnimListener[animations[i]]) {
                            this.emit(Dev.Enum.Listeners.OnGameAnimAction, this._animations[0]);
                        }
                    }
                    delete this._animations[0];
                    this._animations.splice(0, 1);
                }
            };
            AnimationManager.prototype.deleteAnimations = function () {
                if (this._animations) {
                    for (var i = 0; i < this._animations.length; i++) {
                        delete this._animations[i];
                    }
                }
            };
            AnimationManager.prototype.sortScenarioAnimation = function (animations) {
                this.deleteAnimations();
                this._animations = animations;
                this.playNextAnimations();
            };
            Object.defineProperty(AnimationManager.prototype, "animationState", {
                get: function () {
                    return this._animationState;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AnimationManager.prototype, "animations", {
                get: function () {
                    return this._animations;
                },
                enumerable: true,
                configurable: true
            });
            return AnimationManager;
        }(PIXI.utils.EventEmitter));
        Managers.AnimationManager = AnimationManager;
    })(Managers = Core.Managers || (Core.Managers = {}));
})(Core || (Core = {}));
var Dev;
(function (Dev) {
    var Enum;
    (function (Enum) {
        var DisplayListener;
        (function (DisplayListener) {
            DisplayListener["Resize"] = "resize";
            DisplayListener["OrientationChanged"] = "OrientationChanged";
        })(DisplayListener = Enum.DisplayListener || (Enum.DisplayListener = {}));
        ;
        var Orientation;
        (function (Orientation) {
            Orientation[Orientation["Landscape"] = 0] = "Landscape";
            Orientation[Orientation["Portrait"] = 1] = "Portrait";
            Orientation[Orientation["None"] = 2] = "None";
        })(Orientation = Enum.Orientation || (Enum.Orientation = {}));
        var ScaleModeType;
        (function (ScaleModeType) {
            ScaleModeType[ScaleModeType["Full"] = 0] = "Full";
            ScaleModeType[ScaleModeType["MaxHeight"] = 1] = "MaxHeight";
            ScaleModeType[ScaleModeType["SafeArea"] = 2] = "SafeArea";
        })(ScaleModeType = Enum.ScaleModeType || (Enum.ScaleModeType = {}));
    })(Enum = Dev.Enum || (Dev.Enum = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Config;
    (function (Config) {
        var ScaleModeType = Dev.Enum.ScaleModeType;
        var GameConfig = (function () {
            function GameConfig() {
            }
            GameConfig.DisplayConfig = {
                width: 800,
                height: 600,
                resizeMode: ScaleModeType.Full,
                landscape: true,
                portrait: true
            };
            return GameConfig;
        }());
        Config.GameConfig = GameConfig;
    })(Config = Dev.Config || (Dev.Config = {}));
})(Dev || (Dev = {}));
var Core;
(function (Core) {
    var Managers;
    (function (Managers) {
        var GameInformation = Dev.Config.GameConfig;
        var ResizeModeType = Dev.Enum.ScaleModeType;
        var Orientation = Dev.Enum.Orientation;
        var DisplayListener = Dev.Enum.DisplayListener;
        var DisplayManager = (function (_super) {
            __extends(DisplayManager, _super);
            function DisplayManager() {
                var _this = _super.call(this) || this;
                _this.to = 0;
                DisplayManager.instance = _this;
                var w = GameInformation.DisplayConfig.width;
                var h = GameInformation.DisplayConfig.height;
                _this.initProperties(w, h);
                return _this;
            }
            ;
            DisplayManager.prototype.initProperties = function (w, h) {
                var targetCanvasName = GameInformation.StartConfig.targetCanvasName;
                this._targetCanvas = document.getElementById(targetCanvasName);
                this._app = new PIXI.Application({
                    width: w,
                    height: h,
                    backgroundColor: 0x0000,
                    antialias: true
                });
                this._app.renderer.view.id = "videoslot";
                if (this._targetCanvas != undefined)
                    this._targetCanvas.appendChild(this._app.view);
                else
                    document.body.appendChild(this._app.view);
                if (GameInformation.StartConfig.maxHeight != undefined && GameInformation.StartConfig.maxHeight != 0)
                    GameInformation.DisplayConfig.resizeMode = ResizeModeType.MaxHeight;
                this._rendererContainer = this._app.stage;
                this._renderer = this._app.renderer;
                this._width = w;
                this._height = h;
                this._currentOrientation = Dev.Enum.Orientation.None;
                document.getElementById("videoslot");
                this.onResizeHandler();
                this.initEvents();
            };
            DisplayManager.prototype.initEvents = function () {
                if (Dev.Config.GameConfig.StartConfig.fullScreen) {
                    document.body.ontouchend = this.onFullscreenChange.bind(this);
                    document.body.onclick = this.onFullscreenChange.bind(this);
                }
                window.addEventListener(DisplayListener.Resize, this.onResizeHandler.bind(this));
            };
            DisplayManager.prototype.onFullscreenChange = function () {
                var elem = document.documentElement;
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                }
                else if (elem["mozRequestFullScreen"]) {
                    elem["mozRequestFullScreen"]();
                }
                else if (elem["webkitRequestFullscreen"]) {
                    elem["webkitRequestFullscreen"]();
                }
                else if (elem["msRequestFullscreen"]) {
                    elem["msRequestFullscreen"]();
                }
            };
            DisplayManager.prototype.onResizeHandler = function () {
                var _this = this;
                this.setResizeMode();
                clearTimeout(this.to);
                this.to = setTimeout(function () {
                    _this.setOrientationMode();
                }, 50);
            };
            DisplayManager.prototype.setOrientationMode = function () {
                var width, height;
                switch (GameInformation.DisplayConfig.resizeMode) {
                    case ResizeModeType.Full:
                        width = window.innerWidth;
                        height = window.innerHeight;
                        if (height >= width && this._currentOrientation != Orientation.Portrait) {
                            this.currentOrientation = Orientation.Portrait;
                        }
                        else if (height < width && this._currentOrientation != Orientation.Landscape) {
                            this.currentOrientation = Orientation.Landscape;
                        }
                        break;
                    case ResizeModeType.MaxHeight:
                        width = this._targetCanvas.clientWidth;
                        height = this._targetCanvas.clientHeight;
                        if (width <= 450 && this._currentOrientation != Orientation.Portrait) {
                            this.currentOrientation = Orientation.Portrait;
                        }
                        else if (width > 450 && this._currentOrientation != Orientation.Landscape) {
                            this.currentOrientation = Orientation.Landscape;
                        }
                        break;
                    case ResizeModeType.SafeArea:
                        break;
                }
            };
            DisplayManager.prototype.setResizeMode = function () {
                var r;
                var w, h;
                switch (GameInformation.DisplayConfig.resizeMode) {
                    case ResizeModeType.Full:
                        h = window.innerHeight;
                        r = Math.min(window.innerWidth / GameInformation.DisplayConfig.width, window.innerHeight / GameInformation.DisplayConfig.height);
                        w = Math.ceil(GameInformation.DisplayConfig.width * r);
                        h = Math.ceil(GameInformation.DisplayConfig.height * r);
                        this._renderer.resize(w, h);
                        this._rendererContainer.scale.y = this._rendererContainer.scale.x = r;
                        break;
                    case ResizeModeType.MaxHeight:
                        var maxHeight = GameInformation.StartConfig.maxHeight;
                        w = this._targetCanvas.clientHeight;
                        r = Math.min(this._targetCanvas.clientWidth / GameInformation.DisplayConfig.width, this._targetCanvas.clientHeight / GameInformation.DisplayConfig.height);
                        w = Math.ceil(GameInformation.DisplayConfig.width * r);
                        h = Math.ceil(GameInformation.DisplayConfig.height * r);
                        if (h < maxHeight)
                            maxHeight = h;
                        this._renderer.resize(this._targetCanvas.clientWidth, maxHeight);
                        this._rendererContainer.scale.y = this._rendererContainer.scale.x = r;
                        var clientW = this._targetCanvas.clientWidth;
                        var displayW = GameInformation.DisplayConfig.width * r;
                        this._rendererContainer.position.x = (clientW - displayW) / 2;
                        break;
                    case ResizeModeType.SafeArea:
                        break;
                }
            };
            Object.defineProperty(DisplayManager.prototype, "renderer", {
                get: function () {
                    return this._renderer;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayManager.prototype, "rendererContainer", {
                get: function () {
                    return this._rendererContainer;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayManager.prototype, "width", {
                get: function () {
                    return this._width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayManager.prototype, "height", {
                get: function () {
                    return this._height;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayManager.prototype, "currentOrientation", {
                get: function () {
                    return this._currentOrientation;
                },
                set: function (value) {
                    this._currentOrientation = value;
                    this.emit(Dev.Enum.DisplayListener.OrientationChanged, value);
                },
                enumerable: true,
                configurable: true
            });
            return DisplayManager;
        }(PIXI.utils.EventEmitter));
        Managers.DisplayManager = DisplayManager;
    })(Managers = Core.Managers || (Core.Managers = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Managers;
    (function (Managers) {
        var ResourceManager = (function (_super) {
            __extends(ResourceManager, _super);
            function ResourceManager() {
                var _this = _super.call(this) || this;
                ResourceManager.Instance = _this;
                _this._cdnPath = Dev.Config.GameConfig.StartConfig.cdnPath;
                return _this;
            }
            ResourceManager.prototype.assetLoading = function () {
                this._loader = new PIXI.Loader();
                this.addTextures();
                this.addSpines();
                this.addWebFonts();
                this._loader.load();
                this._loader.onProgress.add(this.onProgress.bind(this));
                this._loader.onError.add(this.onError.bind(this));
                this._loader.onLoad.add(this.onLoad.bind(this));
                this._loader.onComplete.add(this.onComplete.bind(this));
            };
            ResourceManager.prototype.assetPreLoading = function () {
                this._loader = new PIXI.Loader();
                this.addPreTextures();
                this._loader.load();
                this._loader.onProgress.add(this.onPreProgress.bind(this));
                this._loader.onError.add(this.onPreError.bind(this));
                this._loader.onLoad.add(this.onPreLoad.bind(this));
                this._loader.onComplete.add(this.onPreComplete.bind(this));
            };
            ResourceManager.prototype.addTextures = function () {
                var textures = Object.keys(Dev.Enum.Texture);
                for (var i = 0; i < textures.length; i++)
                    this._loader.add(this._cdnPath + Dev.Enum.Texture[textures[i]]);
            };
            ResourceManager.prototype.addPreTextures = function () {
                var textures = Object.keys(Dev.Enum.PreTexture);
                for (var i = 0; i < textures.length; i++)
                    this._loader.add(this._cdnPath + Dev.Enum.PreTexture[textures[i]]);
            };
            ResourceManager.prototype.addWebFonts = function () {
                var webFonts = Object.keys(Dev.Enum.WebFont);
                for (var i = 0; i < webFonts.length; i++) {
                    WebFont.load({
                        custom: {
                            families: [Dev.Enum.WebFont[webFonts[i]]],
                            urls: [this._cdnPath + Dev.Enum.WebFont.FontUrl]
                        }
                    });
                }
            };
            ResourceManager.prototype.addSpines = function () {
                var spines = Object.keys(Dev.Enum.SpineAnimation);
                for (var i = 0; i < spines.length; i++)
                    this._loader.add(this._cdnPath + Dev.Enum.SpineAnimation[spines[i]]);
            };
            ResourceManager.prototype.onError = function () {
            };
            ResourceManager.prototype.onLoad = function () {
                this.emit(Dev.Enum.ResourceListener.AssetLoading);
            };
            ResourceManager.prototype.onComplete = function () {
                this.emit(Dev.Enum.ResourceListener.AssetLoadCompleted);
            };
            ResourceManager.prototype.onProgress = function () {
            };
            ResourceManager.prototype.onPreError = function () {
            };
            ResourceManager.prototype.onPreLoad = function () {
            };
            ResourceManager.prototype.onPreComplete = function () {
                this.emit(Dev.Enum.ResourceListener.AssetPreLoadCompleted);
            };
            ResourceManager.prototype.onPreProgress = function () {
            };
            ResourceManager.prototype.getSpineData = function (resourceName) {
                return this._loader.resources[resourceName].spineData;
            };
            return ResourceManager;
        }(PIXI.utils.EventEmitter));
        Managers.ResourceManager = ResourceManager;
    })(Managers = Core.Managers || (Core.Managers = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Managers;
    (function (Managers) {
        var StageManager = (function () {
            function StageManager() {
                this._stages = {};
                this._currentStage = null;
                var dR = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                StageManager.Instance = this;
                this._stageContainer = new Core.Modules.Container(0, 0, Managers.DisplayManager.instance.rendererContainer, "StageContainer");
                this._bg = new Core.Modules.Graphic(dR.width / 2, dR.height / 2, dR.width * 3, dR.height * 3, aI.StageRect, this._stageContainer);
            }
            StageManager.prototype.createStage = function (stage, stageName, tween) {
                if (this._stages[stageName] == null) {
                    this._stages[stageName] = new stage();
                    this._stages[stageName].name = stageName;
                    this._stageContainer.addChild(this._stages[stageName]);
                    if (tween) {
                        TweenMax.fromTo(this._bg, 1, { alpha: 1 }, { alpha: 0 });
                        TweenMax.fromTo(this._stages[stageName], 1, { alpha: 0 }, { alpha: 1 });
                    }
                    else {
                        this._bg.alpha = 0;
                        this._stages[stageName].alpha = 1;
                    }
                    this._stageContainer.addChild(this._bg);
                }
                this._currentStage = stage;
            };
            StageManager.prototype.changeStage = function (stage, tween) {
                StageManager.Instance.removeStage(this._currentStage, tween);
                if (tween) {
                    Core.Managers.TickerManager.instance.addTimeout("stageChange", 1, function () {
                        StageManager.Instance.startStage(stage, tween);
                    }, false);
                }
                else {
                    StageManager.Instance.startStage(stage, tween);
                }
            };
            StageManager.prototype.startStage = function (stage, tween) {
                this.createStage(stage, stage.name, tween);
                this._stages[stage.name].init();
                this._stages[stage.name].initEvents();
            };
            StageManager.prototype.getStage = function (stage) {
                return this._stages[stage.name];
            };
            StageManager.prototype.removeStage = function (stage, tween) {
                var _this = this;
                var stageName = stage.name;
                if (tween) {
                    TweenMax.fromTo(this._bg, 1, { alpha: 0 }, { alpha: 1 });
                    TweenMax.fromTo(this._stages[stageName], 1, { alpha: 1 }, { alpha: 0, onComplete: function () {
                            _this._stages[stageName].dispose();
                            _this._stages[stageName].destroy({ children: true, baseTexture: true });
                            delete _this._stages[stageName];
                        } });
                }
                else {
                    this._bg.alpha = 0;
                    this._stages[stageName].alpha = 0;
                    this._stages[stageName].dispose();
                    this._stages[stageName].destroy({ children: true, baseTexture: true });
                    delete this._stages[stageName];
                }
            };
            Object.defineProperty(StageManager.prototype, "stageContainer", {
                get: function () {
                    return this._stageContainer;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(StageManager.prototype, "currentStage", {
                get: function () {
                    return this._currentStage;
                },
                enumerable: true,
                configurable: true
            });
            return StageManager;
        }());
        Managers.StageManager = StageManager;
    })(Managers = Core.Managers || (Core.Managers = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Managers;
    (function (Managers) {
        var TickerManager = (function (_super) {
            __extends(TickerManager, _super);
            function TickerManager() {
                var _this = _super.call(this) || this;
                _this._tickers = {};
                _this._gTimes = {};
                _this._intervals = {};
                TickerManager.instance = _this;
                return _this;
            }
            TickerManager.prototype.addTimeout = function (key, duration, callback, loop) {
                var _this = this;
                if (!this._tickers[key]) {
                    var ticker = new PIXI.Ticker();
                    ticker.autoStart = true;
                    ticker.minFPS = 1;
                    this._tickers[key] = ticker;
                    this._gTimes[key] = performance.now();
                    this._intervals[key] = setInterval(function () {
                        _this.addLoop(key, duration, callback, loop);
                    }, duration);
                }
            };
            TickerManager.prototype.addLoop = function (key, duration, callback, loop) {
                var g_TICK = duration * 1000;
                var timeNow = performance.now();
                var timeDiff = timeNow - this._gTimes[key];
                if (timeDiff < g_TICK) {
                    return;
                }
                callback.call("", this);
                if (loop) {
                    this._gTimes[key] = performance.now();
                }
                else {
                    this.removeTicker(key);
                }
            };
            TickerManager.prototype.removeTicker = function (key) {
                if (this._tickers[key] != null && this._tickers[key] != undefined) {
                    this._tickers[key].destroy();
                    delete this._tickers[key];
                }
                if (this._intervals[key] != null && this._intervals[key] != undefined) {
                    clearInterval(this._intervals[key]);
                    delete this._intervals[key];
                }
                delete this._gTimes[key];
            };
            Object.defineProperty(TickerManager.prototype, "tickers", {
                get: function () {
                    return this._tickers;
                },
                enumerable: true,
                configurable: true
            });
            return TickerManager;
        }(PIXI.Ticker));
        Managers.TickerManager = TickerManager;
    })(Managers = Core.Managers || (Core.Managers = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var ButtonStates;
        (function (ButtonStates) {
            ButtonStates["Disabled"] = "Disabled";
            ButtonStates["Down"] = "Down";
            ButtonStates["Out"] = "Out";
            ButtonStates["Over"] = "Over";
        })(ButtonStates = Modules.ButtonStates || (Modules.ButtonStates = {}));
        var ButtonEvents;
        (function (ButtonEvents) {
            ButtonEvents["pointerdown"] = "pointerdown";
            ButtonEvents["pointerup"] = "pointerup";
            ButtonEvents["pointerover"] = "pointerover";
            ButtonEvents["pointerout"] = "pointerout";
            ButtonEvents["pointertap"] = "pointertap";
        })(ButtonEvents = Modules.ButtonEvents || (Modules.ButtonEvents = {}));
        var Button = (function (_super) {
            __extends(Button, _super);
            function Button(x, y, c, cB, p, w, h, a) {
                var _this = _super.call(this) || this;
                _this._frames = null;
                _this._state = ButtonStates.Out;
                _this._callback = null;
                _this._isEnabled = true;
                w && (_this.width = w);
                h && (_this.height = h);
                _this.anchor.set(0.5, 0.5);
                _this.position.set(x, y);
                _this.buttonMode = true;
                _this.interactive = true;
                _this._frames = c.frames;
                cB && (_this._callback = cB);
                _this.setAnchor(a);
                c.name ? _this.name = c.name : _this.name = "button";
                p && p.addChild(_this);
                _this.state = ButtonStates.Out;
                _this.initEvent();
                return _this;
            }
            Button.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            Button.prototype.initEvent = function () {
                this.on(ButtonEvents.pointerdown, this.onButtonDown);
                this.on(ButtonEvents.pointerup, this.onButtonUp);
                this.on(ButtonEvents.pointerover, this.onButtonOver);
                this.on(ButtonEvents.pointerout, this.onButtonOut);
                this.on(ButtonEvents.pointerout, this.onButtonOut);
            };
            Button.prototype.onButtonDown = function () {
                this.state = ButtonStates.Down;
            };
            Button.prototype.onButtonUp = function () {
                this._callback.call("", this);
            };
            Button.prototype.onButtonOver = function () {
                this.state = ButtonStates.Over;
            };
            Button.prototype.onButtonOut = function () {
                this.state = ButtonStates.Out;
            };
            Object.defineProperty(Button.prototype, "state", {
                set: function (state) {
                    this._state = state;
                    switch (state) {
                        case ButtonStates.Out:
                            this.texture = PIXI.Texture.from(this._frames.out);
                            break;
                        case ButtonStates.Over:
                            this.texture = PIXI.Texture.from(this._frames.over);
                            break;
                        case ButtonStates.Down:
                            this.texture = PIXI.Texture.from(this._frames.down);
                            break;
                        case ButtonStates.Disabled:
                            this.texture = PIXI.Texture.from(this._frames.disabled);
                            break;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Button.prototype.changeButtonConfig = function (buttonConfig) {
                this._frames = buttonConfig.frames;
                this.state = this._state;
            };
            Button.prototype.changeTexture = function (texture) {
                this.texture = PIXI.Texture.from(texture);
            };
            Object.defineProperty(Button.prototype, "isEnabled", {
                set: function (enable) {
                    this._isEnabled = enable;
                    if (!this._isEnabled) {
                        this.state = ButtonStates.Disabled;
                    }
                    else {
                        this.state = ButtonStates.Out;
                    }
                    this.interactive = enable;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Button.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (zIndex) {
                    this._zIndex = zIndex;
                },
                enumerable: true,
                configurable: true
            });
            return Button;
        }(PIXI.Sprite));
        Modules.Button = Button;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var ButtonText = (function (_super) {
            __extends(ButtonText, _super);
            function ButtonText(x, y, c, cB, p, w, h, a) {
                var _this = _super.call(this, x, y, c.bConfig, cB, p, w, h) || this;
                _this._text = new Modules.Text(0, h / 2, c.tConfig, _this);
                if (c.name)
                    _this.name = c.name;
                _this.setAnchor(a);
                return _this;
            }
            Object.defineProperty(ButtonText.prototype, "text", {
                set: function (text) {
                    this._text.text = text;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ButtonText.prototype, "textAsset", {
                get: function () {
                    return this._text;
                },
                enumerable: true,
                configurable: true
            });
            return ButtonText;
        }(Modules.Button));
        Modules.ButtonText = ButtonText;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Container = (function (_super) {
            __extends(Container, _super);
            function Container(x, y, p, n) {
                var _this = _super.call(this) || this;
                if (n)
                    _this.name = n;
                if (p)
                    p.addChild(_this);
                if (x)
                    _this.position.x = x;
                if (y)
                    _this.position.y = y;
                return _this;
            }
            return Container;
        }(PIXI.Container));
        Modules.Container = Container;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Container2d = (function (_super) {
            __extends(Container2d, _super);
            function Container2d(x, y, p, n) {
                var _this = _super.call(this) || this;
                var r = Dev.Config.GameConfig.DisplayConfig;
                if (n)
                    _this.name = n;
                if (p)
                    p.addChild(_this);
                _this.position.x = x;
                _this.position.y = y;
                return _this;
            }
            Container2d.prototype.setAffine = function (affine) {
                this.proj.affine = affine;
            };
            Container2d.prototype.setAxisX = function (pos, factor) {
                this.proj.setAxisX(pos, factor);
            };
            Container2d.prototype.setAxisY = function (pos, factor) {
                this.proj.setAxisY(pos, factor);
            };
            return Container2d;
        }(PIXI.projection.Container2d));
        Modules.Container2d = Container2d;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Graphic = (function (_super) {
            __extends(Graphic, _super);
            function Graphic(x, y, w, h, c, p, a) {
                var _this = _super.call(this) || this;
                _this._config = c;
                _this._width = w;
                _this._height = h;
                c.name ? _this.name = c.name : _this.name = "mask";
                _this._position = { x: x, y: y };
                _this._config.anchor = a;
                c.alpha ? _this.alpha = c.alpha : _this.alpha = 1;
                p && p.addChild(_this);
                _this.setShape(c);
                _this.setAnchor(a);
                _this.scale.set(1, 1);
                return _this;
            }
            Graphic.prototype.setShape = function (c) {
                switch (c.shape) {
                    case Core.Enum.Shape.Circle:
                        var fill = c.fill ? c.fill : 0x000000;
                        var radius = c.radius ? c.radius : 1000;
                        var alpha = c.alpha ? c.alpha : 1;
                        this.beginFill(fill, alpha).drawCircle(0, 0, radius).endFill();
                        break;
                    case Core.Enum.Shape.Rectangle:
                        fill = c.fill ? c.fill : 0x00000;
                        alpha = c.alpha ? c.alpha : 1;
                        this.beginFill(fill, alpha)
                            .drawRect(0, 0, this._width, this._height)
                            .endFill();
                        break;
                    case Core.Enum.Shape.Line:
                        fill = c.fill ? c.fill : 0x00000;
                        alpha = c.alpha ? c.alpha : 1;
                        this.beginFill(fill, alpha);
                        this.lineStyle(this._width, fill, 1, .5);
                        this.endFill();
                        break;
                    case Core.Enum.Shape.RoundRect:
                        fill = c.fill ? c.fill : 0x00000;
                        alpha = c.alpha ? c.alpha : 1;
                        radius = c.radius ? c.radius : 1000;
                        this.beginFill(fill, alpha);
                        this.drawRoundedRect(0, 0, this._width, this._height, radius);
                        this.endFill();
                        break;
                }
            };
            Graphic.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.pivot.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.pivot.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.pivot.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.pivot.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.position.set(this._position.x - this._width / 2, this._position.y - this.height / 2);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.pivot.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.pivot.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.pivot.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.pivot.set(1, 1);
                            break;
                    }
                }
                else {
                    this.position.set(this._position.x - this._width / 2, this._position.y - this.height / 2);
                }
            };
            Graphic.prototype.drawLine = function (endPoint, width) {
                this.lineTo(endPoint.x, endPoint.y);
                this.width = width;
            };
            Object.defineProperty(Graphic.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (zIndex) {
                    this._zIndex = zIndex;
                },
                enumerable: true,
                configurable: true
            });
            Graphic.prototype.setPosition = function (x, y) {
                this._position.x = x;
                this._position.y = y;
                this.setAnchor(this._config.anchor);
            };
            return Graphic;
        }(PIXI.Graphics));
        Modules.Graphic = Graphic;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Plane2d = (function (_super) {
            __extends(Plane2d, _super);
            function Plane2d(x, y, p, aC, n) {
                var _this = _super.call(this) || this;
                var r = Dev.Config.GameConfig.DisplayConfig;
                if (n)
                    _this.name = n;
                if (p)
                    p.addChild(_this);
                _this.position.x = x + r.width / 2;
                _this.position.y = y + r.height / 2;
                if (!aC)
                    aC = { yP: new PIXI.Point(0, r.height / 2), yFactor: -1 };
                if (aC.xP)
                    _this.setAxisX(aC.xP, aC.xFactor);
                if (aC.yP)
                    _this.setAxisY(aC.yP, aC.yFactor);
                return _this;
            }
            Plane2d.prototype.setAxisX = function (pos, factor) {
                this.proj.setAxisX(pos, factor);
            };
            Plane2d.prototype.setAxisY = function (pos, factor) {
                this.proj.setAxisY(pos, factor);
            };
            return Plane2d;
        }(PIXI.projection.Container2d));
        Modules.Plane2d = Plane2d;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var SequenceAnimation = (function (_super) {
            __extends(SequenceAnimation, _super);
            function SequenceAnimation(c, x, y, p, n) {
                var _this = _super.call(this, SequenceAnimation.generateTextures(c.resource, c.to)) || this;
                _this._config = c;
                _this.position.set(x, y);
                _this.name = n;
                _this.loop = c.loop;
                p.addChild(_this);
                _this.setAnchor(Core.Enum.Anchor.MiddleCenter);
                return _this;
            }
            SequenceAnimation.generateTextures = function (frame, length) {
                var textures = [];
                for (var i = 0; i < length; i++) {
                    var index = void 0;
                    if (i < 10) {
                        index = "0000" + i;
                    }
                    else if (i < 100) {
                        index = "000" + i;
                    }
                    else {
                        index = "00" + i;
                    }
                    var texture = PIXI.Texture.from(frame + index);
                    textures.push(texture);
                }
                return textures;
            };
            SequenceAnimation.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            SequenceAnimation.prototype.playAnimation = function () {
                this.gotoAndPlay(this._config.from);
                this.animationSpeed = this._config.speed;
                this.loop = this._config.loop;
            };
            return SequenceAnimation;
        }(PIXI.AnimatedSprite));
        Modules.SequenceAnimation = SequenceAnimation;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Spine = (function (_super) {
            __extends(Spine, _super);
            function Spine(x, y, c, p, w, h, a, n) {
                var _this = _super.call(this, Core.Managers.ResourceManager.Instance.getSpineData(c.skeletonDataName)) || this;
                _this._animationsConfig = c.animations;
                w && (_this.width = w);
                h && (_this.height = h);
                n ? _this.name = n : _this.name = "spine";
                _this.position.set(x, y);
                _this._spineConfig = c;
                _this._anchor = a;
                _this.setAnchor(a);
                p.addChild(_this);
                return _this;
            }
            Spine.prototype.setPosition = function (x, y) {
                this.position.set(x, y);
                this.setAnchor(this._anchor);
            };
            Spine.prototype.setAnchor = function (anchor) {
                if (anchor != null || anchor != undefined) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.pivot.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.pivot.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.pivot.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.pivot.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.position.set(this.position.x - this.width / 2, this.position.y - this.height / 2);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.pivot.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.pivot.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.pivot.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.pivot.set(1, 1);
                            break;
                        default:
                            this.position.set(this.position.x - this.width / 2, this.position.y - this.height / 2);
                            break;
                    }
                }
                else {
                    this.position.set(this.position.x - this.width / 2, this.position.y - this.height / 2);
                }
            };
            Spine.prototype.playAnimation = function (animationName) {
                var config = this._animationsConfig[animationName];
                config.speed ? this.state.timeScale = config.speed : this.state.timeScale = 1;
                this.state.setAnimation(0, config.resource, config.loop);
            };
            Spine.prototype.setMix = function (fromName, toName) {
                var fC = this._animationsConfig[fromName];
                var tC = this._animationsConfig[toName];
                var time = 1;
                tC.speed ? time = tC.speed : time = 1;
                this.stateData.setMix(fC.resource, tC.resource, 3);
            };
            Object.defineProperty(Spine.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (zIndex) {
                    this._zIndex = zIndex;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Spine.prototype, "animConfig", {
                get: function () {
                    return this._animationsConfig;
                },
                set: function (value) {
                    this._animationsConfig = value;
                },
                enumerable: true,
                configurable: true
            });
            return Spine;
        }(PIXI.spine.Spine));
        Modules.Spine = Spine;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Sprite = (function (_super) {
            __extends(Sprite, _super);
            function Sprite(x, y, c, p, w, h, a) {
                var _this = _super.call(this, PIXI.Texture.from(c.frame)) || this;
                w && (_this.width = w);
                h && (_this.height = h);
                c.name ? _this.name = c.name : _this.name = "button";
                _this.setAnchor(a);
                _this.position.set(x, y);
                p && p.addChild(_this);
                return _this;
            }
            Sprite.prototype.changeSprite = function (frameName) {
                this.texture = PIXI.Texture.from(frameName);
            };
            Sprite.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            Object.defineProperty(Sprite.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (zIndex) {
                    this._zIndex = zIndex;
                },
                enumerable: true,
                configurable: true
            });
            return Sprite;
        }(PIXI.Sprite));
        Modules.Sprite = Sprite;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Sprite2d = (function (_super) {
            __extends(Sprite2d, _super);
            function Sprite2d(x, y, c, p, a, w, h) {
                var _this = _super.call(this, PIXI.Texture.from(c.frame)) || this;
                var r = Dev.Config.GameConfig.DisplayConfig;
                w && (_this.width = w);
                h && (_this.height = h);
                c.name ? _this.name = c.name : _this.name = "sprite2d";
                _this._config = c;
                _this.setAnchor(a);
                _this.position.set(x, y);
                p && p.addChild(_this);
                return _this;
            }
            Sprite2d.prototype.changeSprite = function (frameName) {
                this.texture = PIXI.Texture.from(frameName);
            };
            Sprite2d.prototype.setAxisX = function (pos, factor) {
                this.proj.setAxisX(pos, factor);
            };
            Sprite2d.prototype.setAxisY = function (pos, factor) {
                this.proj.setAxisY(pos, factor);
            };
            Sprite2d.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            Object.defineProperty(Sprite2d.prototype, "zIndex", {
                get: function () {
                    return this._zIndex;
                },
                set: function (zIndex) {
                    this._zIndex = zIndex;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Sprite2d.prototype, "config", {
                get: function () {
                    return this._config;
                },
                enumerable: true,
                configurable: true
            });
            return Sprite2d;
        }(PIXI.projection.Sprite2d));
        Modules.Sprite2d = Sprite2d;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var SpriteText = (function (_super) {
            __extends(SpriteText, _super);
            function SpriteText(x, y, w, h, c, p) {
                var _this = _super.call(this, x, y, c.sConfig, p, w, h) || this;
                _this._text = new Modules.Text(0, 0, c.tConfig, _this, w, h);
                if (c.name)
                    _this.name = c.name;
                return _this;
            }
            Object.defineProperty(SpriteText.prototype, "textAsset", {
                get: function () {
                    return this._text;
                },
                enumerable: true,
                configurable: true
            });
            return SpriteText;
        }(Modules.Sprite));
        Modules.SpriteText = SpriteText;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Stage = (function (_super) {
            __extends(Stage, _super);
            function Stage(x, y, p, n) {
                return _super.call(this, x, y, p, n) || this;
            }
            Stage.prototype.initDisplayEvents = function () {
                var dI = Dev.Enum.DisplayListener;
                this.game.on(dI.OrientationChanged, this.onOrientationChanged.bind(this));
            };
            Stage.prototype.onOrientationChanged = function (value) {
                switch (value) {
                    case Dev.Enum.Orientation.Landscape:
                        this.setVisualLandscape();
                        break;
                    case Dev.Enum.Orientation.Portrait:
                        this.setVisualPortrait();
                        break;
                }
            };
            return Stage;
        }(Modules.Container));
        Modules.Stage = Stage;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var StatElement = (function () {
            function StatElement() {
                var stats = new Stats();
                document.body.appendChild(stats.domElement);
                function animate() {
                    var time = performance.now() / 1000;
                    stats.begin();
                    stats.end();
                    requestAnimationFrame(animate);
                }
                animate();
            }
            return StatElement;
        }());
        Modules.StatElement = StatElement;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Text = (function (_super) {
            __extends(Text, _super);
            function Text(x, y, c, p, w, h) {
                var _this = _super.call(this, c.text, c.textStyle) || this;
                if (c.name)
                    _this.name = c.name;
                w && (_this.width = w);
                h && (_this.height = h);
                _this.position.set(x, y);
                _this.anchor.set(.5, .5);
                p.addChild(_this);
                _this.setAnchor(c.anchor);
                return _this;
            }
            Text.prototype.setTextConfig = function (config) {
                this.style = new PIXI.TextStyle(config.textStyle);
                this.text = config.text;
            };
            Text.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            return Text;
        }(PIXI.Text));
        Modules.Text = Text;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
    var Modules;
    (function (Modules) {
        var Text2d = (function (_super) {
            __extends(Text2d, _super);
            function Text2d(x, y, z, w, h, c, p) {
                var _this = _super.call(this, c.text, c.textStyle) || this;
                if (c.name)
                    _this.name = c.name;
                w && (_this.width = w);
                h && (_this.height = h);
                _this.position.set(x, y, z);
                _this.anchor.set(.5, .5);
                p && p.addChild(_this);
                _this.setAnchor(c.anchor);
                return _this;
            }
            Text2d.prototype.setTextConfig = function (config) {
                this.style = new PIXI.TextStyle(config.textStyle);
                this.text = config.text;
            };
            Text2d.prototype.setAnchor = function (anchor) {
                if (anchor != null) {
                    switch (anchor) {
                        case Core.Enum.Anchor.UpLeft:
                            this.anchor.set(0, 0);
                            break;
                        case Core.Enum.Anchor.UpCenter:
                            this.anchor.set(0.5, 0);
                            break;
                        case Core.Enum.Anchor.UpRight:
                            this.anchor.set(1, 0);
                            break;
                        case Core.Enum.Anchor.MiddleLeft:
                            this.anchor.set(0, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleCenter:
                            this.anchor.set(0.5, 0.5);
                            break;
                        case Core.Enum.Anchor.MiddleRight:
                            this.anchor.set(1, 0.5);
                            break;
                        case Core.Enum.Anchor.DownLeft:
                            this.anchor.set(0, 1);
                            break;
                        case Core.Enum.Anchor.DownCenter:
                            this.anchor.set(0.5, 1);
                            break;
                        case Core.Enum.Anchor.DownRight:
                            this.anchor.set(1, 1);
                            break;
                    }
                }
                else {
                    this.anchor.set(0.5, 0.5);
                }
            };
            return Text2d;
        }(PIXI.projection.Text2d));
        Modules.Text2d = Text2d;
    })(Modules = Core.Modules || (Core.Modules = {}));
})(Core || (Core = {}));
var Dev;
(function (Dev) {
    var Animation;
    (function (Animation) {
        var TimerAnimation = (function (_super) {
            __extends(TimerAnimation, _super);
            function TimerAnimation(parentContainer) {
                var _this = _super.call(this) || this;
                _this._container = new Core.Modules.Container(0, 0, parentContainer, "TimerAnimation");
                parentContainer.addChild(_this._container);
                _this.init();
                return _this;
            }
            TimerAnimation.prototype.init = function () {
                var dR = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var a = Core.Enum.Anchor;
                this._mask = new Core.Modules.Graphic(300, 1450, 500, 500, aI.TimerCircle, this._container);
                this._timeText = new Core.Modules.Text(0, 0, aI.TimerText, this._container);
                this._container.alpha = 0;
            };
            TimerAnimation.prototype.maskAnimation = function () {
                var _this = this;
                this._mask.alpha = 0.85;
                TweenLite.fromTo(this._mask.scale, 0.25, { x: 0, y: 0 }, {
                    x: 1, y: 1,
                    onComplete: function () {
                        TweenLite.to(_this._mask, 0.25, { alpha: 0 });
                    }
                });
            };
            TimerAnimation.prototype.setVisualPortrait = function () {
                var dR = Dev.Config.GameConfig.DisplayConfig;
                this._container.position.set(dR.width / 2, dR.height / 2);
            };
            TimerAnimation.prototype.setVisualLandscape = function () {
                var dR = Dev.Config.GameConfig.DisplayConfig;
                this._container.position.set(dR.width / 2, dR.height / 2);
            };
            TimerAnimation.prototype.resolveTimer = function (isShow) {
                switch (isShow) {
                    case true:
                        TweenLite.to(this._container, 0.25, { alpha: 0.8 });
                        this.setTimeText(this.setTime);
                        break;
                    case false:
                        TweenLite.to(this._container, 0.25, { alpha: 0 });
                        this.setTimeText(this.setTime);
                        break;
                }
            };
            TimerAnimation.prototype.resolveTiming = function (value) {
                var _this = this;
                TweenLite.fromTo(this._timeText.scale, 0.25, { x: 1.5, y: 1.5 }, {
                    x: 1, y: 1, onStart: function () {
                        TweenLite.to(_this._timeText.scale, 0.25, { x: 1.5, y: 1.5 });
                        if (value == 0) {
                            _this.resolveTimer(false);
                        }
                        else {
                            _this.resolveTimer(true);
                        }
                    }
                });
            };
            TimerAnimation.prototype.setTimeText = function (value) {
                if (value != 0) {
                    this.maskAnimation();
                    this._timeText.text = (value) + "";
                    this.setTime = value;
                }
                else {
                    this._timeText.text = "";
                    this.setTime = value;
                }
            };
            Object.defineProperty(TimerAnimation.prototype, "setTime", {
                get: function () {
                    return this._time;
                },
                set: function (value) {
                    if (value != undefined) {
                        if (this._time != value) {
                            this._time = value;
                            this.resolveTiming(value);
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TimerAnimation.prototype, "container", {
                get: function () {
                    return this._container;
                },
                enumerable: true,
                configurable: true
            });
            return TimerAnimation;
        }(PIXI.utils.EventEmitter));
        Animation.TimerAnimation = TimerAnimation;
    })(Animation = Dev.Animation || (Dev.Animation = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Enum;
    (function (Enum) {
        var AnimationStateType;
        (function (AnimationStateType) {
            AnimationStateType["AnimationPlaying"] = "AnimationPlaying";
            AnimationStateType["AnimationStopped"] = "AnimationStopped";
        })(AnimationStateType = Enum.AnimationStateType || (Enum.AnimationStateType = {}));
        var GameAnimListener;
        (function (GameAnimListener) {
        })(GameAnimListener = Enum.GameAnimListener || (Enum.GameAnimListener = {}));
        ;
        var AnimListener;
        (function (AnimListener) {
        })(AnimListener = Enum.AnimListener || (Enum.AnimListener = {}));
        var AnimNames;
        (function (AnimNames) {
            AnimNames["Idle"] = "MovingNIdle";
            AnimNames["Destroyed"] = "Destroy";
            AnimNames["EnemyIdle"] = "Moving";
            AnimNames["EnemyDestroyed"] = "Destroyed";
            AnimNames["EnemyHit"] = "GetHit";
        })(AnimNames = Enum.AnimNames || (Enum.AnimNames = {}));
    })(Enum = Dev.Enum || (Dev.Enum = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Enum;
    (function (Enum) {
        var Listeners;
        (function (Listeners) {
            Listeners["OnGameAnimAction"] = "OnGameAnimAction";
            Listeners["OnChooseAction"] = "OnChooseAction";
            Listeners["OnEnemyAction"] = "OnEnemyAction";
            Listeners["OnPlayerAction"] = "OnPlayerAction";
        })(Listeners = Enum.Listeners || (Enum.Listeners = {}));
        var Actions;
        (function (Actions) {
            Actions["EnemySpawn"] = "EnemySpawn";
            Actions["BulletSpawn"] = "BulletSpawn";
            Actions["BulletDestroyed"] = "BulletDestroyed";
            Actions["EnemyDestroyed"] = "EnemyDestroyed";
            Actions["GameOver"] = "GameOver";
        })(Actions = Enum.Actions || (Enum.Actions = {}));
        var CharacterState;
        (function (CharacterState) {
            CharacterState["Idle"] = "Idle";
            CharacterState["Hit"] = "Hit";
            CharacterState["Destroyed"] = "Destroyed";
        })(CharacterState = Enum.CharacterState || (Enum.CharacterState = {}));
    })(Enum = Dev.Enum || (Dev.Enum = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Config;
    (function (Config) {
        var _a, _b;
        var AnimNames = Dev.Enum.AnimNames;
        var AnimConfig = (function () {
            function AnimConfig() {
            }
            AnimConfig.AnimationSort = [];
            AnimConfig.PlayerShipAnimation = (_a = {},
                _a[AnimNames.Idle] = { resource: AnimNames.Idle, loop: true, speed: .5, tint: 0x06ff6a },
                _a[AnimNames.Destroyed] = { resource: AnimNames.Destroyed, loop: false, speed: .5, tint: 0xff1e1e },
                _a);
            AnimConfig.EnemyShipAnimation = (_b = {},
                _b[AnimNames.EnemyIdle] = { resource: AnimNames.EnemyIdle, loop: true, speed: 1, tint: 0x06ff6a },
                _b[AnimNames.EnemyHit] = { resource: AnimNames.EnemyHit, loop: false, speed: 1, tint: 0x06ff6a },
                _b[AnimNames.EnemyDestroyed] = { resource: AnimNames.EnemyDestroyed, loop: false, speed: 1, tint: 0xffea00 },
                _b);
            AnimConfig.Animation = {
                ease: {
                    logoScale: "bounce.out",
                    logoAlpha: "bounce.out",
                    boxFillsAlpha: "power1.inOut"
                },
                duration: {
                    logoScale: .75,
                    logoAlpha: .75,
                    boxFillsAlpha: .25,
                    logoScreen: 2,
                    enemySpawnOffset: 2,
                },
                speed: {
                    boxFillsOffset: .35
                },
                count: {}
            };
            return AnimConfig;
        }());
        Config.AnimConfig = AnimConfig;
    })(Config = Dev.Config || (Dev.Config = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Enum;
    (function (Enum) {
        var ResourceListener;
        (function (ResourceListener) {
            ResourceListener["AssetLoadCompleted"] = "AssetLoadCompleted";
            ResourceListener["AssetLoading"] = "AssetLoading";
            ResourceListener["AddTextures"] = "AddTextures";
            ResourceListener["AddSounds"] = "AddSounds";
            ResourceListener["AddSpines"] = "AddSpines";
            ResourceListener["AddWebFonts"] = "AddWebFonts";
            ResourceListener["AddPreTextures"] = "AddPreTextures";
            ResourceListener["AssetPreLoadCompleted"] = "AssetPreLoadCompleted";
        })(ResourceListener = Enum.ResourceListener || (Enum.ResourceListener = {}));
        var SpineAnimation;
        (function (SpineAnimation) {
            SpineAnimation["PlayerShip1"] = "assets/gfx/Player/Plane01/skeleton.json";
            SpineAnimation["PlayerShip2"] = "assets/gfx/Player/Plane02/skeleton.json";
            SpineAnimation["PlayerShip3"] = "assets/gfx/Player/Plane03/skeleton.json";
            SpineAnimation["PlayerShip4"] = "assets/gfx/Player/Plane04/skeleton.json";
            SpineAnimation["EnemyShip1"] = "assets/gfx/Enemy/Char01/skeleton.json";
            SpineAnimation["EnemyShip2"] = "assets/gfx/Enemy/Char02/skeleton.json";
            SpineAnimation["EnemyShip3"] = "assets/gfx/Enemy/Char03/skeleton.json";
            SpineAnimation["EnemyShip4"] = "assets/gfx/Enemy/Char04/skeleton.json";
            SpineAnimation["EnemyShip5"] = "assets/gfx/Enemy/Char05/skeleton.json";
            SpineAnimation["EnemyShip6"] = "assets/gfx/Enemy/Char06/skeleton.json";
            SpineAnimation["EnemyShip7"] = "assets/gfx/Enemy/Char07/skeleton.json";
            SpineAnimation["EnemyShip8"] = "assets/gfx/Enemy/Char08/skeleton.json";
            SpineAnimation["EnemyShip9"] = "assets/gfx/Enemy/Char09/skeleton.json";
            SpineAnimation["EnemyShip10"] = "assets/gfx/Enemy/Char10/skeleton.json";
        })(SpineAnimation = Enum.SpineAnimation || (Enum.SpineAnimation = {}));
        var WebFont;
        (function (WebFont) {
            WebFont["LuckiestGuy"] = "Luckiest Guy";
            WebFont["BOB"] = "BoB";
            WebFont["FontUrl"] = "assets/fonts/stylesheet.css";
        })(WebFont = Enum.WebFont || (Enum.WebFont = {}));
        var PreTexture;
        (function (PreTexture) {
            PreTexture["Logo"] = "assets/gfx/Background/Loader/logo.png";
            PreTexture["LogoBackground"] = "assets/gfx/Background/Loader/logoBackground.png";
        })(PreTexture = Enum.PreTexture || (Enum.PreTexture = {}));
        var Texture;
        (function (Texture) {
            Texture["GeneralButtonOut"] = "assets/gfx/Menu/generalbutton_out.png";
            Texture["CloseButtonOut"] = "assets/gfx/Menu/close_out.png";
            Texture["CloseButtonOver"] = "assets/gfx/Menu/close_over.png";
            Texture["GeneralButtonOver"] = "assets/gfx/Menu/generalbutton_over.png";
            Texture["GeneralButtonDown"] = "assets/gfx/Menu/generalbutton_down.png";
            Texture["GeneralButtonDisabled"] = "assets/gfx/Menu/generalbutton_disabled.png";
            Texture["MainBackgroundLayer1"] = "assets/gfx/Background/Main/Layer1.png";
            Texture["MainBackgroundLayer2"] = "assets/gfx/Background/Main/Layer2.png";
            Texture["MainBackgroundLayer3"] = "assets/gfx/Background/Main/Layer3.png";
            Texture["MainBackgroundLayer4"] = "assets/gfx/Background/Main/Layer4.png";
            Texture["MainBackgroundLayer5"] = "assets/gfx/Background/Main/Layer5.png";
            Texture["PlayerIcon1"] = "assets/gfx/PlayerIcon/Pilot01.png";
            Texture["PlayerIcon2"] = "assets/gfx/PlayerIcon/Pilot02.png";
            Texture["PlayerIcon3"] = "assets/gfx/PlayerIcon/Pilot03.png";
            Texture["PlayerIcon4"] = "assets/gfx/PlayerIcon/Pilot04.png";
            Texture["Bullet"] = "assets/gfx/Player/bullet.png";
        })(Texture = Enum.Texture || (Enum.Texture = {}));
    })(Enum = Dev.Enum || (Dev.Enum = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Config;
    (function (Config) {
        var Shape = Core.Enum.Shape;
        var Texture = Dev.Enum.Texture;
        var PreTexture = Dev.Enum.PreTexture;
        var AssetConfig = (function () {
            function AssetConfig() {
            }
            AssetConfig.ResourceManager = Core.Managers.ResourceManager.Instance;
            AssetConfig.TimerCircle = {
                shape: Shape.Circle,
                name: "TimerCircleMask",
                radius: 1480,
                fill: 0x000000,
                alpha: .75
            };
            AssetConfig.TimerTextStyle = new PIXI.TextStyle({
                fontFamily: "Luckiest Guy",
                fontSize: 300,
                fontWeight: "600",
                fill: "#ffffff",
                align: "center"
            });
            AssetConfig.TimerText = {
                text: "5",
                textStyle: AssetConfig.TimerTextStyle,
                name: "timerText",
                anchor: Core.Enum.Anchor.MiddleCenter
            };
            AssetConfig.StageRect = {
                shape: Shape.Rectangle,
                name: "StageBg",
                fill: 0x00000,
                alpha: 0
            };
            AssetConfig.CloseButton = {
                frames: {
                    out: Texture.CloseButtonOut,
                    over: Texture.CloseButtonOver,
                    down: Texture.CloseButtonOver,
                    disabled: Texture.CloseButtonOver
                },
                name: "Close Button"
            };
            AssetConfig.PlayerIconButtons = [
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
            ];
            AssetConfig.WinHeader = new PIXI.TextStyle({
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
            AssetConfig.BigWinText = {
                text: "BIG WIN",
                textStyle: AssetConfig.WinHeader,
                name: "BigWinHeader"
            };
            AssetConfig.UIHeaderStyle = new PIXI.TextStyle({
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
            AssetConfig.UIHeaderText = {
                text: "YOU WON",
                textStyle: AssetConfig.UIHeaderStyle,
                name: "UIHeader"
            };
            AssetConfig.GeneralBoldTextStyle = new PIXI.TextStyle({
                fontFamily: "Montserrat, sans-serif",
                fontSize: "22px",
                fontWeight: "bold",
                fill: "#ffffff",
                stroke: 0x000000,
                strokeThickness: 3,
                align: "center"
            });
            AssetConfig.GenericBoldText = {
                text: "Generic Bold Text",
                textStyle: AssetConfig.GeneralBoldTextStyle,
                name: "Generic Text"
            };
            AssetConfig.WinAmountStyle = new PIXI.TextStyle({
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
            AssetConfig.WinLineTextStyle = new PIXI.TextStyle({
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
            AssetConfig.WinAmountText = {
                text: "x5",
                textStyle: AssetConfig.WinAmountStyle,
                name: "WinAmountText"
            };
            AssetConfig.WinLineText = {
                text: "",
                textStyle: AssetConfig.WinLineTextStyle,
                name: "WinLineText"
            };
            AssetConfig.MegaWinText = {
                text: "MEGA WIN",
                textStyle: AssetConfig.WinHeader,
                name: "MegaWinHeader"
            };
            AssetConfig.SuperWinText = {
                text: "SUPER WIN",
                textStyle: AssetConfig.WinHeader,
                name: "SuperWinHeader"
            };
            AssetConfig.FreeSpinStartWinText = {
                text: "FREE SPIN",
                textStyle: AssetConfig.WinHeader,
                name: "FreeSpinStartWinHeader"
            };
            AssetConfig.GeneralTextStyle = new PIXI.TextStyle({
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                fontWeight: "bold",
                fill: "#d08f38",
                stroke: 0x000000,
                strokeThickness: 3,
                align: "center"
            });
            AssetConfig.HeaderTextStyle = new PIXI.TextStyle({
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
            AssetConfig.GenericText = {
                text: "Generic Text",
                textStyle: AssetConfig.GeneralTextStyle,
                name: "Generic Text"
            };
            AssetConfig.ChooseScreenHeaderText = {
                text: "Please Select Your Character",
                textStyle: AssetConfig.HeaderTextStyle,
                name: "Header Text"
            };
            AssetConfig.ChooseScreenInfoText = {
                text: "Keys: W-A-S-D-Space",
                textStyle: AssetConfig.HeaderTextStyle,
                name: "ChooseScreenInfoText"
            };
            AssetConfig.MenuText = {
                text: "Menu",
                textStyle: AssetConfig.GeneralTextStyle,
                name: "Menu Text"
            };
            AssetConfig.MenuButtonTextConfig = {
                bConfig: {
                    frames: {
                        out: Texture.GeneralButtonOut,
                        over: Texture.GeneralButtonOver,
                        down: Texture.GeneralButtonDown,
                        disabled: Texture.GeneralButtonDisabled
                    },
                    name: "Menu Button"
                },
                tConfig: {
                    text: "5",
                    textStyle: AssetConfig.GeneralBoldTextStyle,
                    name: "MenuButtonText",
                    anchor: Core.Enum.Anchor.MiddleCenter
                }
            };
            AssetConfig.Logo = {
                frame: PreTexture.Logo,
                name: "Logo"
            };
            AssetConfig.Bullet = {
                frame: Texture.Bullet,
                name: "Bullet"
            };
            AssetConfig.LoadingBackground = {
                frame: PreTexture.LogoBackground,
                name: "LogoBackground"
            };
            AssetConfig.MainBackgroundLayer = [
                {
                    frame: Texture.MainBackgroundLayer1,
                    name: "MainBackgroundLayer1"
                },
                {
                    frame: Texture.MainBackgroundLayer2,
                    name: "MainBackgroundLayer2"
                },
                {
                    frame: Texture.MainBackgroundLayer3,
                    name: "MainBackgroundLayer3"
                },
                {
                    frame: Texture.MainBackgroundLayer4,
                    name: "MainBackgroundLayer4"
                },
                {
                    frame: Texture.MainBackgroundLayer5,
                    name: "MainBackgroundLayer5"
                }
            ];
            AssetConfig.LoadingCircleBg = {
                shape: Shape.RoundRect,
                name: "LoadingCircle",
                radius: 10,
                fill: 0xba6329
            };
            AssetConfig.SlotWinLine = {
                shape: Shape.Line,
                name: "SlotWinline",
                fill: 0xffffff
            };
            AssetConfig.LoadingCircleFill = {
                shape: Shape.RoundRect,
                name: "LoadingCircle",
                radius: 10,
                fill: 0xe8cf5b
            };
            AssetConfig.FruitBarMask = {
                shape: Shape.RoundRect,
                name: "FruitBarMask",
                radius: 30,
                fill: 0xffffff
            };
            AssetConfig.SliderFilterMask = {
                shape: Shape.RoundRect,
                name: "SliderFilterMask",
                radius: 30,
                fill: 0xffffff,
                alpha: 0
            };
            AssetConfig.PopupRect = {
                shape: Shape.Rectangle,
                name: "PopupBg",
                fill: 0x00000,
                alpha: 0
            };
            AssetConfig.WheelMask = {
                shape: Shape.Circle,
                name: "WheelMask",
                fill: 0x00000,
                radius: 352,
                alpha: 1
            };
            AssetConfig.GeneralReelMask = {
                shape: Shape.Rectangle,
                name: "GeneralReelMask",
                fill: 0x00000,
                alpha: 0
            };
            AssetConfig.Frame = {
                shape: Shape.RoundRect,
                name: "Frame",
                radius: 30,
                fill: 0x00000,
                alpha: 0.7
            };
            AssetConfig.PlayerShips = [
                {
                    skeletonDataName: Dev.Enum.SpineAnimation.PlayerShip1,
                    animations: Config.AnimConfig.PlayerShipAnimation,
                    name: "PlayerShip"
                },
                {
                    skeletonDataName: Dev.Enum.SpineAnimation.PlayerShip2,
                    animations: Config.AnimConfig.PlayerShipAnimation,
                    name: "PlayerShip"
                },
                {
                    skeletonDataName: Dev.Enum.SpineAnimation.PlayerShip3,
                    animations: Config.AnimConfig.PlayerShipAnimation,
                    name: "PlayerShip"
                },
                {
                    skeletonDataName: Dev.Enum.SpineAnimation.PlayerShip4,
                    animations: Config.AnimConfig.PlayerShipAnimation,
                    name: "PlayerShip"
                }
            ];
            AssetConfig.EnemyShips = [
                {
                    skeletonDataName: Dev.Enum.SpineAnimation.EnemyShip1,
                    animations: Config.AnimConfig.EnemyShipAnimation,
                    name: "EnemyShip"
                },
                {
                    skeletonDataName: Dev.Enum.SpineAnimation.EnemyShip2,
                    animations: Config.AnimConfig.EnemyShipAnimation,
                    name: "EnemyShip"
                },
                {
                    skeletonDataName: Dev.Enum.SpineAnimation.EnemyShip3,
                    animations: Config.AnimConfig.EnemyShipAnimation,
                    name: "EnemyShip"
                },
                {
                    skeletonDataName: Dev.Enum.SpineAnimation.EnemyShip4,
                    animations: Config.AnimConfig.EnemyShipAnimation,
                    name: "EnemyShip"
                },
                {
                    skeletonDataName: Dev.Enum.SpineAnimation.EnemyShip5,
                    animations: Config.AnimConfig.EnemyShipAnimation,
                    name: "EnemyShip"
                },
                {
                    skeletonDataName: Dev.Enum.SpineAnimation.EnemyShip6,
                    animations: Config.AnimConfig.EnemyShipAnimation,
                    name: "EnemyShip"
                },
                {
                    skeletonDataName: Dev.Enum.SpineAnimation.EnemyShip7,
                    animations: Config.AnimConfig.EnemyShipAnimation,
                    name: "EnemyShip"
                },
                {
                    skeletonDataName: Dev.Enum.SpineAnimation.EnemyShip8,
                    animations: Config.AnimConfig.EnemyShipAnimation,
                    name: "EnemyShip"
                },
                {
                    skeletonDataName: Dev.Enum.SpineAnimation.EnemyShip9,
                    animations: Config.AnimConfig.EnemyShipAnimation,
                    name: "EnemyShip"
                },
                {
                    skeletonDataName: Dev.Enum.SpineAnimation.EnemyShip10,
                    animations: Config.AnimConfig.EnemyShipAnimation,
                    name: "EnemyShip"
                }
            ];
            AssetConfig.FireSparkEmitter = {
                "alpha": {
                    "start": .5,
                    "end": 0.5
                },
                "scale": {
                    "start": 0.03,
                    "end": 0.22,
                    "minimumScaleMultiplier": 0.32
                },
                "color": {
                    "start": "#ffffff",
                    "end": "#ffffff"
                },
                "speed": {
                    "start": 85,
                    "end": 66,
                    "minimumSpeedMultiplier": 0.94
                },
                "acceleration": {
                    "x": 0,
                    "y": 0
                },
                "maxSpeed": 0,
                "startRotation": {
                    "min": 0,
                    "max": 360
                },
                "noRotation": false,
                "rotationSpeed": {
                    "min": 0,
                    "max": 0
                },
                "lifetime": {
                    "min": 0.13,
                    "max": 0.8
                },
                "blendMode": "normal",
                "frequency": 0.006,
                "emitterLifetime": -0.66,
                "maxParticles": 7,
                "pos": {
                    "x": 0,
                    "y": 0
                },
                "addAtBack": false,
                "spawnType": "circle",
                "spawnCircle": {
                    "x": 5,
                    "y": 0,
                    "r": 0
                }
            };
            return AssetConfig;
        }());
        Config.AssetConfig = AssetConfig;
    })(Config = Dev.Config || (Dev.Config = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Enum;
    (function (Enum) {
        var DataListener;
        (function (DataListener) {
            DataListener["keydown"] = "keydown";
            DataListener["message"] = "message";
        })(DataListener = Enum.DataListener || (Enum.DataListener = {}));
        ;
        var KeyCode;
        (function (KeyCode) {
            KeyCode["up"] = "KeyW";
            KeyCode["left"] = "KeyA";
            KeyCode["down"] = "KeyS";
            KeyCode["right"] = "KeyD";
            KeyCode["fire"] = "Space";
        })(KeyCode = Enum.KeyCode || (Enum.KeyCode = {}));
    })(Enum = Dev.Enum || (Dev.Enum = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Config;
    (function (Config) {
        var DataConfig = (function () {
            function DataConfig() {
            }
            return DataConfig;
        }());
        Config.DataConfig = DataConfig;
    })(Config = Dev.Config || (Dev.Config = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Controller;
    (function (Controller) {
        var DataController = (function (_super) {
            __extends(DataController, _super);
            function DataController() {
                var _this = _super.call(this) || this;
                _this._data = {
                    keyCode: null
                };
                return _this;
            }
            DataController.prototype.init = function () {
            };
            DataController.prototype.dataAction = function (data) {
            };
            DataController.prototype.initEvents = function () {
                var _this = this;
                window.addEventListener(Dev.Enum.DataListener.message, function (data) { _this.dataAction(data.data); });
                document.addEventListener(Dev.Enum.DataListener.keydown, this.onKeyDown.bind(this));
            };
            DataController.prototype.onKeyDown = function (keyCode) {
                this._data.keyCode = keyCode.code;
                this.emit(Dev.Enum.DataListener.keydown, this._data);
            };
            Object.defineProperty(DataController.prototype, "data", {
                get: function () {
                    return this._data;
                },
                set: function (value) {
                    this._data = value;
                },
                enumerable: true,
                configurable: true
            });
            return DataController;
        }(Core.Controller.DataController));
        Controller.DataController = DataController;
    })(Controller = Dev.Controller || (Dev.Controller = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Controller;
    (function (Controller) {
        var GameController = (function (_super) {
            __extends(GameController, _super);
            function GameController(data) {
                var _this = _super.call(this, data) || this;
                GameController.Instance = _this;
                return _this;
            }
            GameController.prototype.init = function () {
                this.resourceController = new Controller.ResourceController();
            };
            GameController.prototype.initResource = function () {
                var listener = Dev.Enum.ResourceListener;
                this.once(listener.AssetLoadCompleted, this.onAssetLoadedCompleted);
            };
            GameController.prototype.initEventData = function () {
                var _this = this;
                var dataListener = Object.keys(Dev.Enum.DataListener);
                var _loop_1 = function (i) {
                    var dataName = Dev.Enum.DataListener[dataListener[i]];
                    this_1.dataController.on(dataName, function (data) {
                        _this.emit(dataName, data);
                    });
                };
                var this_1 = this;
                for (var i = 0; i < dataListener.length; i++) {
                    _loop_1(i);
                }
            };
            GameController.prototype.initEventAnimation = function () {
            };
            GameController.prototype.initEventsDisplay = function () {
                var display = Core.Managers.DisplayManager.instance;
                display.on(Dev.Enum.DisplayListener.OrientationChanged, this.onOrientationChanged.bind(this));
            };
            GameController.prototype.onOrientationChanged = function (value) {
                this.emit(Dev.Enum.DisplayListener.OrientationChanged, value);
            };
            GameController.prototype.onAssetLoadedCompleted = function () {
                this.dataController = new Controller.DataController();
                this.initEventsDisplay();
                this.initEventData();
                this.initEventAnimation();
            };
            return GameController;
        }(Core.Controller.GameController));
        Controller.GameController = GameController;
    })(Controller = Dev.Controller || (Dev.Controller = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Stages;
    (function (Stages) {
        var GameController = Dev.Controller.GameController;
        var LoaderStage = (function (_super) {
            __extends(LoaderStage, _super);
            function LoaderStage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._loadingBorders = [];
                _this._loadingFills = [];
                return _this;
            }
            LoaderStage.prototype.init = function () {
                this.game = GameController.Instance;
                this._container = new Core.Modules.Container(0, 0, this, "Container");
                this.playLogoAnimation();
            };
            LoaderStage.prototype.playLogoAnimation = function () {
                var dR = Dev.Config.GameConfig.DisplayConfig;
                var aC = Dev.Config.AssetConfig;
                var aI = Dev.Config.AnimConfig.Animation;
                this._bg = new Core.Modules.Sprite(dR.width / 2, dR.height / 2, aC.LoadingBackground, this._container);
                this._logo = new Core.Modules.Sprite(dR.width / 2, 250, aC.Logo, this._container);
                for (var i = 0; i < 3; i++) {
                    this._loadingBorders.push(new Core.Modules.Graphic(dR.width / 2 - 50 + i * 50, dR.height / 2 + 110, 35, 35, aC.LoadingCircleBg, this._container));
                    this._loadingFills.push(new Core.Modules.Graphic(17.5, 17.5, 35, 35, aC.LoadingCircleFill, this._loadingBorders[i]));
                    this._loadingFills[i].alpha = 0;
                }
                TweenMax.fromTo(this._logo.scale, aI.duration.logoScale, { x: 0, y: 0 }, { x: 1, y: 1, ease: aI.ease.logoScale });
                TweenMax.fromTo(this._logo, aI.duration.logoAlpha, { alpha: 0 }, { alpha: 1, ease: aI.ease.logoAlpha });
                this._sequence = new TimelineMax({ repeat: -1, delay: .75 });
                var offset = aI.speed.boxFillsOffset;
                this._sequence.to(this._loadingFills[0], aI.duration.boxFillsAlpha, { alpha: 1, ease: aI.ease.boxFillsAlpha });
                this._sequence.to(this._loadingFills[0], aI.duration.boxFillsAlpha, { alpha: 0, ease: aI.ease.boxFillsAlpha });
                this._sequence.to(this._loadingFills[1], aI.duration.boxFillsAlpha, { alpha: 1, ease: aI.ease.boxFillsAlpha }, "-=" + offset);
                this._sequence.to(this._loadingFills[1], aI.duration.boxFillsAlpha, { alpha: 0, ease: aI.ease.boxFillsAlpha });
                this._sequence.to(this._loadingFills[2], aI.duration.boxFillsAlpha, { alpha: 1, ease: aI.ease.boxFillsAlpha }, "-=" + offset);
                this._sequence.to(this._loadingFills[2], aI.duration.boxFillsAlpha, { alpha: 0, ease: aI.ease.boxFillsAlpha });
            };
            LoaderStage.prototype.initEvents = function () {
            };
            LoaderStage.prototype.setVisualPortrait = function () {
            };
            LoaderStage.prototype.setVisualLandscape = function () {
            };
            LoaderStage.prototype.dispose = function () {
                this._sequence.kill();
            };
            return LoaderStage;
        }(Core.Modules.Stage));
        Stages.LoaderStage = LoaderStage;
    })(Stages = Dev.Stages || (Dev.Stages = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Controller;
    (function (Controller) {
        var ResourceManager = Core.Managers.ResourceManager;
        var StageManager = Core.Managers.StageManager;
        var ResourceController = (function (_super) {
            __extends(ResourceController, _super);
            function ResourceController() {
                return _super.call(this) || this;
            }
            ResourceController.prototype.init = function () {
            };
            ResourceController.prototype.initEvents = function () {
                var listener = Dev.Enum.ResourceListener;
                var resource = ResourceManager.Instance;
                resource.once(listener.AssetLoading, this.assetLoading.bind(this));
                resource.on(listener.AssetLoadCompleted, this.assetsLoadCompleted.bind(this));
                resource.once(listener.AssetPreLoadCompleted, resource.assetLoading.bind(resource));
                resource.assetPreLoading();
            };
            ResourceController.prototype.assetLoading = function () {
                StageManager.Instance.startStage(Dev.Stages.LoaderStage, true);
            };
            ResourceController.prototype.assetsLoadCompleted = function () {
                var listener = Dev.Enum.ResourceListener;
                var stage = StageManager.Instance;
                var duration = Dev.Config.AnimConfig.Animation.duration.logoScreen;
                Core.Managers.TickerManager.instance.addTimeout("loaded", duration, function () {
                    stage.changeStage(Dev.Stages.MenuStage, true);
                    Controller.GameController.Instance.emit(listener.AssetLoadCompleted);
                }, false);
            };
            return ResourceController;
        }(Core.Controller.ResourceController));
        Controller.ResourceController = ResourceController;
    })(Controller = Dev.Controller || (Dev.Controller = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var Background = (function (_super) {
            __extends(Background, _super);
            function Background(container) {
                var _this = _super.call(this) || this;
                _this._container = new Core.Modules.Container(0, 0, container, "BackgroundContainer");
                _this.initProperties();
                return _this;
            }
            Background.prototype.initProperties = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var a = Core.Enum.Anchor;
                this._bgLayers = new Array();
                var bg = new Core.Modules.Sprite(r.width / 2, r.height / 2, aI.MainBackgroundLayer[0], this._container, 800, 600);
                this._bgLayers.push(bg);
                this._plane2d = new Core.Modules.Plane2d(0, 0, this._container, null, "Plane");
                this._backBg2d = new Core.Modules.Container2d(0, -20, this._plane2d, "backBg2d");
                this._midBg2d = new Core.Modules.Container2d(0, -10, this._plane2d, "midBg2d");
                this._frontBg2d = new Core.Modules.Container2d(0, 0, this._plane2d, "frontBg2d");
                bg = new Core.Modules.Sprite(0, -r.height / 2, aI.MainBackgroundLayer[1], this._backBg2d, 1280, r.height / 2, a.UpCenter);
                this._bgLayers.push(bg);
                bg = new Core.Modules.Sprite(0, r.height / 2, aI.MainBackgroundLayer[1], this._backBg2d, 1280, r.height / 2, a.DownCenter);
                this._bgLayers.push(bg);
                bg = new Core.Modules.Sprite(1280, -r.height / 2, aI.MainBackgroundLayer[1], this._backBg2d, 1280, r.height / 2, a.UpCenter);
                this._bgLayers.push(bg);
                bg = new Core.Modules.Sprite(1280, r.height / 2, aI.MainBackgroundLayer[1], this._backBg2d, 1280, r.height / 2, a.DownCenter);
                this._bgLayers.push(bg);
                bg = new Core.Modules.Sprite(-r.width / 2, -r.height / 2, aI.MainBackgroundLayer[3], this._midBg2d, 550, 150, a.UpLeft);
                this._bgLayers.push(bg);
                bg = new Core.Modules.Sprite(0, r.height / 2, aI.MainBackgroundLayer[2], this._midBg2d, 550, 170, a.DownCenter);
                this._bgLayers.push(bg);
                bg = new Core.Modules.Sprite(0, r.height / 2 - 120, aI.MainBackgroundLayer[4], this._frontBg2d, 750, 150, a.DownCenter);
                this._bgLayers.push(bg);
                this.playBackgroundAnimation();
            };
            Background.prototype.playBackgroundAnimation = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                this._timeLine = new TimelineMax({ repeat: -1 });
                this._timeLine.fromTo(this._bgLayers[1], 20, { x: 0 }, { x: -1280, ease: "power0" });
                this._timeLine.fromTo(this._bgLayers[2], 20, { x: 0 }, { x: -1280, ease: "power0" }, "-=" + 20);
                this._timeLine.fromTo(this._bgLayers[3], 20, { x: 1280 }, { x: 0, ease: "power0" }, "-=" + 20);
                this._timeLine.fromTo(this._bgLayers[4], 20, { x: 1280 }, { x: 0, ease: "power0" }, "-=" + 20);
            };
            Background.prototype.dispose = function () {
                this._timeLine.kill();
            };
            Object.defineProperty(Background.prototype, "container", {
                get: function () {
                    return this._container;
                },
                enumerable: true,
                configurable: true
            });
            return Background;
        }(PIXI.utils.EventEmitter));
        Modules.Background = Background;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var Bullet = (function (_super) {
            __extends(Bullet, _super);
            function Bullet(ship) {
                var _this = _super.call(this) || this;
                _this._container = ship;
                _this.initProperties(ship.x + 50, ship.y - 5);
                return _this;
            }
            Bullet.prototype.initProperties = function (x, y) {
                var _this = this;
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var a = Core.Enum.Anchor;
                this._bullet = new Core.Modules.Sprite(x, y, aI.Bullet, this._container.parent, 136 / 2, 23 / 2);
                this._tween = TweenMax.fromTo(this._bullet, 5, { x: x }, { x: r.width + 140, ease: "power0", onComplete: function () {
                        _this.emit(Dev.Enum.Listeners.OnPlayerAction, Dev.Enum.Actions.BulletDestroyed, _this);
                        _this._bullet.destroy();
                        _this.dispose();
                        delete _this._bullet;
                    } });
            };
            Object.defineProperty(Bullet.prototype, "bullet", {
                get: function () {
                    return this._bullet;
                },
                enumerable: true,
                configurable: true
            });
            Bullet.prototype.dispose = function () {
                if (this._tween)
                    this._tween.kill();
            };
            return Bullet;
        }(PIXI.utils.EventEmitter));
        Modules.Bullet = Bullet;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var CharacterChoose = (function (_super) {
            __extends(CharacterChoose, _super);
            function CharacterChoose(container) {
                var _this = _super.call(this) || this;
                _this._container = new Core.Modules.Container(0, 0, container, "ChooseContainer");
                _this.initProperties();
                return _this;
            }
            Object.defineProperty(CharacterChoose.prototype, "visible", {
                set: function (visible) {
                    this._container.visible = visible;
                },
                enumerable: true,
                configurable: true
            });
            CharacterChoose.prototype.onChoose = function (choosingPlayer) {
                this.emit(Dev.Enum.Listeners.OnChooseAction, choosingPlayer);
                this.visible = false;
            };
            CharacterChoose.prototype.initProperties = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var a = Core.Enum.Anchor;
                this.visible = true;
                this._bg = new Core.Modules.Sprite(r.width / 2, r.height / 2, aI.MainBackgroundLayer[0], this._container, 800, 600);
                this._playerCharacters = new Array();
                var iconScale = { x: 100, y: 100 };
                var offsetButtons = 120;
                var startPosition = r.width / 2 - 1.5 * iconScale.x - 1.5 * offsetButtons;
                for (var i = 0; i < 4; i++) {
                    var x = startPosition + iconScale.x + offsetButtons * i;
                    var icon = new Core.Modules.Button(x, r.height / 2, aI.PlayerIconButtons[i], this.onChoose.bind(this, i), this._container, iconScale.x, iconScale.y, a.MiddleLeft);
                }
                this._headerText = new Core.Modules.Text(r.width / 2, r.height / 2 - 130, aI.ChooseScreenHeaderText, this._container);
                this._infoText = new Core.Modules.Text(r.width / 2, r.height - 130, aI.ChooseScreenInfoText, this._container);
            };
            return CharacterChoose;
        }(PIXI.utils.EventEmitter));
        Modules.CharacterChoose = CharacterChoose;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var Enemy = (function (_super) {
            __extends(Enemy, _super);
            function Enemy(container) {
                var _this = _super.call(this) || this;
                _this._container = container;
                _this._currentCharacterState = Dev.Enum.CharacterState.Idle;
                _this.initProperties();
                return _this;
            }
            Enemy.prototype.playAnimation = function (state) {
                switch (state) {
                    case Dev.Enum.CharacterState.Idle:
                        this._ship.playAnimation(Dev.Enum.AnimNames.EnemyIdle);
                        break;
                    case Dev.Enum.CharacterState.Destroyed:
                        this._ship.playAnimation(Dev.Enum.AnimNames.EnemyDestroyed);
                        break;
                    case Dev.Enum.CharacterState.Hit:
                        this._ship.playAnimation(Dev.Enum.AnimNames.EnemyDestroyed);
                        break;
                }
            };
            Enemy.prototype.initProperties = function () {
                var _this = this;
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var a = Core.Enum.Anchor;
                var ran = 0 + Math.floor(Math.random() * Math.floor(aI.EnemyShips.length));
                ;
                this._ship = new Core.Modules.Spine(r.width + 150, r.height / 2, aI.EnemyShips[ran], this._container, 100, 100);
                var random = { fY: this.randomY(), tY: this.randomY() };
                this._tween = TweenMax.fromTo(this._ship, 10, { x: r.width + 150, y: random.fY }, { x: -200, y: random.tY, ease: "power0", onComplete: function () {
                        _this.emit(Dev.Enum.Listeners.OnEnemyAction, Dev.Enum.Actions.EnemyDestroyed, _this);
                        _this._ship.destroy();
                        _this.dispose();
                        delete _this._ship;
                    } });
                this.playAnimation(this._currentCharacterState);
            };
            Enemy.prototype.dispose = function () {
                if (this._tween)
                    this._tween.kill();
                delete this._ship;
            };
            Enemy.prototype.randomY = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var y = 0 + Math.floor(Math.random() * Math.floor(r.height));
                ;
                return y;
            };
            Object.defineProperty(Enemy.prototype, "ship", {
                get: function () {
                    return this._ship;
                },
                enumerable: true,
                configurable: true
            });
            return Enemy;
        }(PIXI.utils.EventEmitter));
        Modules.Enemy = Enemy;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Modules;
    (function (Modules) {
        var Player = (function (_super) {
            __extends(Player, _super);
            function Player(container, choosingPlayer) {
                var _this = _super.call(this) || this;
                _this._choosingPlayer = 0;
                _this._choosingPlayer = choosingPlayer;
                _this._container = container;
                _this._currentCharacterState = Dev.Enum.CharacterState.Idle;
                _this.initProperties();
                _this.initEvents();
                return _this;
            }
            Player.prototype.initEvents = function () {
                this.on(Dev.Enum.Listeners.OnPlayerAction, this.checkActions.bind(this));
            };
            Player.prototype.checkActions = function (action, data) {
                switch (action) {
                    case Dev.Enum.Actions.BulletDestroyed:
                        delete this.bullet[data.bullet.name];
                        this.emit(Dev.Enum.Listeners.OnPlayerAction, Dev.Enum.Actions.BulletDestroyed, data);
                        break;
                }
            };
            Player.prototype.playAnimation = function (state) {
                switch (state) {
                    case Dev.Enum.CharacterState.Idle:
                        this._ship.playAnimation(Dev.Enum.AnimNames.Idle);
                        break;
                    case Dev.Enum.CharacterState.Destroyed:
                        this._ship.playAnimation(Dev.Enum.AnimNames.Destroyed);
                        break;
                }
            };
            Player.prototype.onKeyDown = function (key) {
                var r = Dev.Config.GameConfig.DisplayConfig;
                switch (key) {
                    case Dev.Enum.KeyCode.up:
                        if (this._ship.position.y >= this._ship.height / 2) {
                            this._ship.position.y -= 5;
                        }
                        break;
                    case Dev.Enum.KeyCode.down:
                        if (this._ship.position.y <= r.height + this._ship.height / 2) {
                            this._ship.position.y += 5;
                        }
                        break;
                    case Dev.Enum.KeyCode.left:
                        if (this._ship.position.x >= this._ship.width / 2) {
                            this._ship.position.x -= 5;
                        }
                        break;
                    case Dev.Enum.KeyCode.right:
                        if (this._ship.position.x <= r.width - this._ship.width / 2) {
                            this._ship.position.x += 5;
                        }
                        break;
                    case Dev.Enum.KeyCode.fire:
                        this.spawnBullet();
                        break;
                }
            };
            Player.prototype.spawnBullet = function () {
                var bullet = new Modules.Bullet(this._ship);
                this._bullet.push(bullet);
                bullet.bullet.name = this._bullet.length.toString();
                this.emit(Dev.Enum.Listeners.OnPlayerAction, Dev.Enum.Actions.BulletSpawn, bullet);
            };
            Player.prototype.initProperties = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var a = Core.Enum.Anchor;
                this._ship = new Core.Modules.Spine(200, r.height / 2, aI.PlayerShips[this._choosingPlayer], this._container, 100, 100);
                this.playAnimation(this._currentCharacterState);
                this._bullet = new Array();
            };
            Object.defineProperty(Player.prototype, "ship", {
                get: function () {
                    return this._ship;
                },
                enumerable: true,
                configurable: true
            });
            Player.prototype.dispose = function () {
                for (var i = 0; i < this._bullet.length; i++) {
                    this._bullet[i].dispose();
                }
            };
            Object.defineProperty(Player.prototype, "bullet", {
                get: function () {
                    return this._bullet;
                },
                enumerable: true,
                configurable: true
            });
            return Player;
        }(PIXI.utils.EventEmitter));
        Modules.Player = Player;
    })(Modules = Dev.Modules || (Dev.Modules = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Stages;
    (function (Stages) {
        var GameController = Dev.Controller.GameController;
        var DisplayManager = Core.Managers.DisplayManager;
        var MainStage = (function (_super) {
            __extends(MainStage, _super);
            function MainStage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MainStage.prototype.init = function () {
                this.game = GameController.Instance;
                this.initProperties();
                this.onOrientationChanged(DisplayManager.instance.currentOrientation);
            };
            MainStage.prototype.initProperties = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var a = Core.Enum.Anchor;
                this._container = new Core.Modules.Container(0, 0, this, "MainContainer");
                this._characterChooseScreen = new Dev.Modules.CharacterChoose(this._container);
                this._enemy = new Array();
            };
            MainStage.prototype.initEvents = function () {
                this.initDisplayEvents();
                this.initCharacterChoose();
            };
            MainStage.prototype.initPlayerEvents = function () {
                this._player.on(Dev.Enum.Listeners.OnGameAnimAction, this.onGameAnimAction.bind(this));
                this._player.on(Dev.Enum.Listeners.OnPlayerAction, this.onAction.bind(this));
            };
            MainStage.prototype.onGameAnimAction = function (action) {
                switch (action) {
                    case Dev.Enum.Actions.GameOver:
                        this.onGameOver();
                        break;
                }
            };
            MainStage.prototype.onAction = function (action, data) {
                switch (action) {
                    case Dev.Enum.Actions.BulletDestroyed:
                        for (var i = 0; i < this._enemy.length; i++) {
                            Core.Managers.TickerManager.instance.removeTicker("CollisionBullet" + data.bullet.name + i.toString());
                        }
                        break;
                    case Dev.Enum.Actions.EnemyDestroyed:
                        Core.Managers.TickerManager.instance.removeTicker("Collision" + data.ship.name);
                        for (var j = 0; j < this._player.bullet.length; j++) {
                            Core.Managers.TickerManager.instance.removeTicker("CollisionBullet" + j.toString() + data.ship.name);
                        }
                        break;
                    case Dev.Enum.Actions.BulletSpawn:
                        this.addBulletCollisionTicker(data);
                        break;
                }
            };
            MainStage.prototype.onGameOver = function () {
                this.dispose();
                Core.Managers.StageManager.Instance.changeStage(Dev.Stages.MenuStage, false);
            };
            MainStage.prototype.initCharacterChoose = function () {
                var _this = this;
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var a = Core.Enum.Anchor;
                this._characterChooseScreen.on(Dev.Enum.Listeners.OnChooseAction, function (choosingPlayer) {
                    _this._background = new Dev.Modules.Background(_this._container);
                    _this._player = new Dev.Modules.Player(_this._container, choosingPlayer);
                    _this.initPlayerEvents();
                    _this.spawnEnemy();
                    _this.initGameEvents();
                    _this._characterChooseScreen.visible = false;
                    _this._exitButton = new Core.Modules.Button(r.width - 5, 0, aI.CloseButton, _this.onCloseButton.bind(_this), _this._container, 50, 50, a.UpRight);
                });
            };
            MainStage.prototype.onCloseButton = function () {
                Core.Managers.StageManager.Instance.changeStage(Dev.Stages.MenuStage, false);
            };
            MainStage.prototype.onGameDataAction = function (action, data) {
                switch (action) {
                    case Dev.Enum.DataListener.message:
                        break;
                    case Dev.Enum.DataListener.keydown:
                        this._player.onKeyDown(data.keyCode);
                        break;
                }
            };
            MainStage.prototype.spawnEnemy = function () {
                var _this = this;
                var offset = Dev.Config.AnimConfig.Animation.duration.enemySpawnOffset;
                Core.Managers.TickerManager.instance.addTimeout("Spawn", offset, function () {
                    var enemy = new Dev.Modules.Enemy(_this._container);
                    enemy.ship.name = _this._enemy.length.toString();
                    enemy.on(Dev.Enum.Listeners.OnEnemyAction, _this.onAction.bind(_this));
                    _this.addEnemyCollisionTicker(enemy);
                    _this._enemy.push(enemy);
                }, true);
            };
            MainStage.prototype.addEnemyCollisionTicker = function (enemy) {
                var _this = this;
                Core.Managers.TickerManager.instance.addTimeout("Collision" + this._enemy.length, .2, function () {
                    _this.checkPlayerCollision(enemy);
                }, true);
            };
            MainStage.prototype.addBulletCollisionTicker = function (bullet) {
                var _this = this;
                var _loop_2 = function (i) {
                    Core.Managers.TickerManager.instance.addTimeout("CollisionBullet" + bullet.bullet.name + i, .2, function () {
                        if (_this._enemy[i])
                            _this.checkBulletCollision(bullet, _this._enemy[i]);
                    }, true);
                };
                for (var i = 0; i < this._enemy.length; i++) {
                    _loop_2(i);
                }
            };
            MainStage.prototype.checkBulletCollision = function (bullet, enemy) {
                if (enemy.ship != null && enemy.ship != undefined && bullet.bullet != null && bullet.bullet != undefined) {
                    var collision = false;
                    var aBox = bullet.bullet.getBounds();
                    var bBox = enemy.ship.getBounds();
                    collision = aBox.x + aBox.width > bBox.x &&
                        aBox.x < bBox.x + bBox.width &&
                        aBox.x + aBox.height > bBox.y &&
                        aBox.y < bBox.y + bBox.height;
                    if (collision) {
                        enemy.ship.playAnimation(Dev.Enum.AnimNames.EnemyDestroyed);
                        Core.Managers.TickerManager.instance.removeTicker("Collision" + enemy.ship.name);
                        for (var i = 0; i < this._enemy.length; i++) {
                            Core.Managers.TickerManager.instance.removeTicker("CollisionBullet" + bullet.bullet.name + i.toString());
                        }
                        bullet.dispose();
                        bullet.bullet.destroy();
                        enemy.dispose();
                        if (enemy.ship)
                            enemy.ship.destroy();
                    }
                }
            };
            MainStage.prototype.checkPlayerCollision = function (enemy) {
                var _this = this;
                if (enemy.ship != null && enemy.ship != undefined) {
                    var collision = false;
                    var aBox = this._player.ship.getBounds();
                    var bBox = enemy.ship.getBounds();
                    collision = aBox.x + aBox.width > bBox.x &&
                        aBox.x < bBox.x + bBox.width &&
                        aBox.x + aBox.height > bBox.y &&
                        aBox.y < bBox.y + bBox.height;
                    if (collision) {
                        Core.Managers.TickerManager.instance.removeTicker("Spawn");
                        this._player.playAnimation(Dev.Enum.CharacterState.Destroyed);
                        for (var i = 0; i < this._enemy.length; i++) {
                            Core.Managers.TickerManager.instance.removeTicker("Collision" + i);
                            for (var j = 0; j < this._player.bullet.length; j++) {
                                Core.Managers.TickerManager.instance.removeTicker("CollisionBullet" + j.toString() + i.toString());
                            }
                        }
                        Core.Managers.TickerManager.instance.addTimeout("GameOver", 1, function () {
                            _this.onGameOver();
                        }, false);
                    }
                }
            };
            MainStage.prototype.initGameEvents = function () {
                var _this = this;
                var dataListener = Object.keys(Dev.Enum.DataListener);
                var _loop_3 = function (i) {
                    var dataName = Dev.Enum.DataListener[dataListener[i]];
                    this_2.game.on(dataName, function (data) {
                        _this.onGameDataAction(dataName, data);
                    });
                };
                var this_2 = this;
                for (var i = 0; i < dataListener.length; i++) {
                    _loop_3(i);
                }
            };
            MainStage.prototype.setVisualPortrait = function () {
            };
            MainStage.prototype.setVisualLandscape = function () {
            };
            MainStage.prototype.dispose = function () {
                this._background.dispose();
                var dataListener = Object.keys(Dev.Enum.DataListener);
                for (var i = 0; i < dataListener.length; i++) {
                    var dataName = Dev.Enum.DataListener[dataListener[i]];
                    this.game.off(dataName);
                }
                this._player.dispose();
                for (var i = 0; i < this._enemy.length; i++)
                    this._enemy[i].dispose();
                for (var i = 0; i < this._player.bullet.length; i++)
                    this._player.bullet[i].dispose();
                this._container.destroy({ children: true });
                Core.Managers.TickerManager.instance.removeTicker("Spawn");
                for (var i = 0; i < this._enemy.length; i++) {
                    Core.Managers.TickerManager.instance.removeTicker("Collision" + i);
                    for (var j = 0; j < this._player.bullet.length; j++)
                        Core.Managers.TickerManager.instance.removeTicker("CollisionBullet" + j.toString() + i.toString());
                }
            };
            return MainStage;
        }(Core.Modules.Stage));
        Stages.MainStage = MainStage;
    })(Stages = Dev.Stages || (Dev.Stages = {}));
})(Dev || (Dev = {}));
var Dev;
(function (Dev) {
    var Stages;
    (function (Stages) {
        var GameController = Dev.Controller.GameController;
        var DisplayManager = Core.Managers.DisplayManager;
        var MenuStage = (function (_super) {
            __extends(MenuStage, _super);
            function MenuStage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MenuStage.prototype.init = function () {
                this.game = GameController.Instance;
                this.initProperties();
                this.onOrientationChanged(DisplayManager.instance.currentOrientation);
            };
            MenuStage.prototype.initProperties = function () {
                var r = Dev.Config.GameConfig.DisplayConfig;
                var aI = Dev.Config.AssetConfig;
                var a = Core.Enum.Anchor;
                this._container = new Core.Modules.Container(0, 0, this, "MainContainer");
                this._bg = new Core.Modules.Sprite(r.width / 2, r.height / 2, aI.LoadingBackground, this._container);
                this._gameButtonTexts = new Array();
                var buttonScale = { x: 157, y: 70 };
                var offsetButtons = 100;
                var startPosition = r.height / 2 - 1.5 * buttonScale.y - 1.5 * offsetButtons;
                for (var i = 0; i < 3; i++) {
                    var gameButton = new Core.Modules.ButtonText(r.width / 2, startPosition + buttonScale.y + offsetButtons * i, aI.MenuButtonTextConfig, this.onGameButton.bind(this, i), this._container, buttonScale.x, buttonScale.y, a.UpCenter);
                    this._gameButtonTexts.push(gameButton);
                    gameButton.text = "GAME" + (i + 1);
                }
                var y = this._gameButtonTexts[this._gameButtonTexts.length - 1].position.y;
                this._exitButtonText = new Core.Modules.ButtonText(r.width / 2, y + offsetButtons, aI.MenuButtonTextConfig, this.onExitButton, this._container, buttonScale.x, buttonScale.y, a.UpCenter);
                this._exitButtonText.text = "EXIT";
            };
            MenuStage.prototype.onExitButton = function () {
                window.open("https://www.google.com/", '_blank');
            };
            MenuStage.prototype.onGameButton = function (buttonNumber) {
                Core.Managers.StageManager.Instance.changeStage(Dev.Stages.MainStage, false);
            };
            MenuStage.prototype.initEvents = function () {
                this.initDisplayEvents();
            };
            MenuStage.prototype.setVisualPortrait = function () {
            };
            MenuStage.prototype.setVisualLandscape = function () {
            };
            MenuStage.prototype.dispose = function () {
            };
            return MenuStage;
        }(Core.Modules.Stage));
        Stages.MenuStage = MenuStage;
    })(Stages = Dev.Stages || (Dev.Stages = {}));
})(Dev || (Dev = {}));
