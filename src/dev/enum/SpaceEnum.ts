namespace Dev.Enum {

    /**
     * Listeners
     */
    export enum Listeners{
        OnGameAnimAction = "OnGameAnimAction",
        OnChooseAction = "OnChooseAction",
        OnEnemyAction = "OnEnemyAction",
        OnPlayerAction = "OnPlayerAction"
    }

    export enum Actions{
        EnemySpawn = "EnemySpawn",
        BulletSpawn = "BulletSpawn",
        BulletDestroyed = "BulletDestroyed",
        EnemyDestroyed = "EnemyDestroyed",
        GameOver = "GameOver"
    }

    export enum CharacterState{
        Idle = "Idle",
        Hit = "Hit",
        Destroyed = "Destroyed"
    }
}