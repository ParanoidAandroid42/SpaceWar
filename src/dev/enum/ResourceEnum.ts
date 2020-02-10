namespace Dev.Enum {
    
    /**
     * Resource listener
     */
    export enum ResourceListener  {
        AssetLoadCompleted = "AssetLoadCompleted",
        AssetLoading = "AssetLoading",
        AddTextures = "AddTextures",
        AddSounds = "AddSounds",
        AddSpines = "AddSpines",
        AddWebFonts = "AddWebFonts",
        AddPreTextures = "AddPreTextures",
        AssetPreLoadCompleted = "AssetPreLoadCompleted"
    }
    
    /**
     * Spine animation
     */
    export enum SpineAnimation {
         PlayerShip1 = "assets/gfx/Player/Plane01/skeleton.json",
         PlayerShip2 = "assets/gfx/Player/Plane02/skeleton.json",
         PlayerShip3 = "assets/gfx/Player/Plane03/skeleton.json",
         PlayerShip4 = "assets/gfx/Player/Plane04/skeleton.json",
         EnemyShip1 = "assets/gfx/Enemy/Char01/skeleton.json",
         EnemyShip2 = "assets/gfx/Enemy/Char02/skeleton.json",
         EnemyShip3 = "assets/gfx/Enemy/Char03/skeleton.json",
         EnemyShip4 = "assets/gfx/Enemy/Char04/skeleton.json",
         EnemyShip5 = "assets/gfx/Enemy/Char05/skeleton.json",
         EnemyShip6 = "assets/gfx/Enemy/Char06/skeleton.json",
         EnemyShip7 = "assets/gfx/Enemy/Char07/skeleton.json",
         EnemyShip8 = "assets/gfx/Enemy/Char08/skeleton.json",
         EnemyShip9 = "assets/gfx/Enemy/Char09/skeleton.json",
         EnemyShip10 = "assets/gfx/Enemy/Char10/skeleton.json",
    }

    /**
     * Web font
     */
    export enum WebFont {
        LuckiestGuy = "Luckiest Guy",
        BOB = "BoB",
        FontUrl = "assets/fonts/stylesheet.css"
    }

    /**
     * Pre texture
     */
    export enum PreTexture {
        Logo = "assets/gfx/Background/Loader/logo.png",
        LogoBackground = "assets/gfx/Background/Loader/logoBackground.png"
    }

    /**
     * Texture
     */
    export enum Texture {
        GeneralButtonOut = "assets/gfx/Menu/generalbutton_out.png",
        CloseButtonOut = "assets/gfx/Menu/close_out.png",
        CloseButtonOver = "assets/gfx/Menu/close_over.png",
        GeneralButtonOver = "assets/gfx/Menu/generalbutton_over.png",
        GeneralButtonDown = "assets/gfx/Menu/generalbutton_down.png",
        GeneralButtonDisabled = "assets/gfx/Menu/generalbutton_disabled.png",
        MainBackgroundLayer1 = "assets/gfx/Background/Main/Layer1.png",
        MainBackgroundLayer2 = "assets/gfx/Background/Main/Layer2.png",
        MainBackgroundLayer3 = "assets/gfx/Background/Main/Layer3.png",
        MainBackgroundLayer4 = "assets/gfx/Background/Main/Layer4.png",
        MainBackgroundLayer5 = "assets/gfx/Background/Main/Layer5.png",
        ParticleSpark = "assets/gfx/Enemy/particle.png",
        PlayerIcon1 = "assets/gfx/PlayerIcon/Pilot01.png",
        PlayerIcon2 = "assets/gfx/PlayerIcon/Pilot02.png",
        PlayerIcon3 = "assets/gfx/PlayerIcon/Pilot03.png",
        PlayerIcon4 = "assets/gfx/PlayerIcon/Pilot04.png",
        Bullet = "assets/gfx/Player/bullet.png",
    }
}