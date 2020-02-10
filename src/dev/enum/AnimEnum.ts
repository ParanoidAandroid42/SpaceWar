namespace Dev.Enum {
    
    /** Animation State Type*/
    export enum AnimationStateType {
        /** Playing Animation*/
        AnimationPlaying = "AnimationPlaying",
        /** Stopped Animation */
        AnimationStopped = "AnimationStopped"
    }

    /**
     * GameAnimListener actions
     */
    export enum GameAnimListener {
    };

    export enum AnimListener {
    }

    /**
     * Anim names
     */
    export enum AnimNames {
        Idle = "MovingNIdle",
        Destroyed = "Destroy",
        EnemyIdle = "Moving",
        EnemyDestroyed = "Destroyed",
        EnemyHit = "GetHit"
    }
}