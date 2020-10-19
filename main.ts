namespace SpriteKind {
    export const Hoop = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    missile = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . f . . . 
        . . . f f f . . 
        . . . 7 7 7 . . 
        . . . 7 7 7 . . 
        . . . 7 7 7 . . 
        . . . 7 7 7 . . 
        `, knight, 0, -100)
    pause(200)
})
sprites.onOverlap(SpriteKind.Hoop, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.rings, 500)
    info.changeScoreBy(10000000)
    ghoul_speed += -5
    ghoul.setVelocity(ghoul_speed, 0)
})
let missile: Sprite = null
let knight: Sprite = null
let ghoul: Sprite = null
let ghoul_speed = 0
ghoul_speed = -15
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff1111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff1111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff1111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff1111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff1111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff1111111111111111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff1111111111111111111111
    1111111111111111111111ffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff1111111111111111111111
    111111111111ffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff1111111111111111111111
    111111111ffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffffff1111111111111111111111
    111111111ffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111
    111111111fffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111
    111111111fffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111
    11111111ffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111
    11111111ffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111
    1111111fffffffffffffffffffffffffffffffffffffff11111111fffff111111111111111111111111111111111111111111111111111111fffff111111111111111111111111111111111111111111
    111111ffffffffffffffffffffffffffffffffffffffff11111111ffffff1111111111111111111111111111111111111111111111111111ffffff111111111111111111111111111111111111111111
    1111ffffffffffffffffffffffffffffffffffffffffffffff1111ffffff1111111111111111111111111111111111111111111111111111ffffff111111111111111111111111111111111111111111
    111fffffffffffffffffffffffffffffffffffffffffffffff1111fffffff11111111fffff1111111fffff111111111fffff11111111111fffffff111111111111111111111111111111111111111111
    11ffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffff111111fffff1111111fffff111111111fffff11111111111fffffff111111111111111111111111111111111111111111
    1fffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffff111111fffff1111111fffff111111111fffff1111111111ffffffff111111111111111111111111111111111111111111
    1fffffffffffffffffffffffffffffffffffffffffffffffff11111feffffffff1111fffff1111111fffff111111111fffff1111111111fffffff1111111111111111111111111111111111111111111
    1ffffffffffffffffffffffffffffffffffffffffffffffff1111111efffffffff111fffff1111111fffff111111111fffff111111111ffffffff1111111111111111111111111111111111111111111
    1ffffffffffffffffffffffffffffffffffffffffffffff111111111effffffffff11111111111111111111111111111111111111111ffffffff11111111111111111111111111111111111111111111
    1ffffffffffffffffffffffffffffffffffffffffffff11111111111e1ffffffffff11111111111111111111111111111111111111fffffffff111111111111111111111111111111111111111111111
    1ffffffffffffffffffffffffffffffffffffffffff1111111111111e11ffffffffff11111111111111111111111111111111111fffffffffff111111111111111111111111111111111111111111111
    1fffffffffffffffffffffffffffffffffffffffff11111111111111e111fffffffffff1111111111111111111111111111111ffffffffffff1111111111111111111111111111111111111111111111
    1111111ffffffffffffffffffffffffffffffffff111111111111111e11111fffffffffff1111111111111111111111111fffffffffffffff11111111111111111111111111111111111111111111111
    1111111fffffffffffffffffffffffffffffffff1111111111111111e11111fffffffffffff1111111111111111111ffffffffffffffffff111111111111111111111111111111111111111111111111
    1111111ffffffffffffffffffffffffffffff1111111111111111111e1111111ffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111
    1111111ffffffffffffffffffffffffffffff1111111111111111111e11111111fffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111
    111111111111fffffffffffffffffffffff111111111111111111111e1111111111fffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111
    111111111111fffffffffffffffffffff11111111111111111111111e111111111111fffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111
    111111111111fffffffffffffff11111111111111111111111111111e11111111111111fffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111
    111111111111fffffffffff111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111111e1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff1
    11111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff1
    11111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff1
    11111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff1
    11111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff1
    111111111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff111111
    111111111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff111111
    111111111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff111111
    111111111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff111111
    111111111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff11111fffff111111
    1111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff11111111111
    1111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff11111111111
    1111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff11111111111
    1111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff11111111111
    1111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff11111111111
    1111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff11111111111
    1111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff11111111111
    1111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff11111111111
    1111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff11111111111
    1111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff111111111111111fffff11111111111
    ffff1111111111111111111111111fffff11111fffff1111111111111111111111111fffff11111fffff1111111111111111111111111fffff11111fffff1111111111111111111111111fffff111111
    ffff1111111111111111111111111fffff11111fffff1111111111111111111111111fffff11111fffff1111111111111111111111111fffff11111fffff1111111111111111111111111fffff111111
    ffff1111111111111111111111111fffff11111fffff1111111111111111111111111fffff11111fffff1111111111111111111111111fffff11111fffff1111111111111111111111111fffff111111
    ffff1111111111111111111111111fffff11111fffff1111111111111111111111111fffff11111fffff1111111111111111111111111fffff11111fffff1111111111111111111111111fffff111111
    ffff1111111111111111111111111fffff11111fffff1111111111111111111111111fffff11111fffff1111111111111111111111111fffff11111fffff1111111111111111111111111fffff111111
    `)
let queen = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . 5 f d f 5 . . . . . . . 
    . . . . 5 f d f 5 . . . . . . . 
    . . . . 5 d d d 5 . . . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    `, SpriteKind.Player)
ghoul = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Hoop)
knight = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
ghoul.setVelocity(ghoul_speed, 0)
knight.setPosition(80, 100)
queen.setPosition(100, 8)
ghoul.setPosition(80, 10)
knight.setVelocity(60, 0)
knight.setFlag(SpriteFlag.BounceOnWall, true)
ghoul.setFlag(SpriteFlag.BounceOnWall, true)
info.startCountdown(100)
game.onUpdate(function () {
    if (info.score() >= 10000000000000000) {
        game.over(true, effects.splatter)
    }
})
