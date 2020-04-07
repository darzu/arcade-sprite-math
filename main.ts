
namespace spritemath {
    //% block="distance between $a and $b"
    //% a.shadow=variables_get
    //% a.defl=mySpriteA
    //% b.shadow=variables_get
    //% b.defl=mySpriteB
    export function distance(a: Sprite, b: Sprite): number {
        return Math.sqrt(distanceSqr(a, b))
    }

    export function distanceSqr(a: Sprite, b: Sprite): number {
        const dx = a.x - b.x
        const dy = a.y - b.y
        return dx ^ 2 + dy ^ 2
    }

    
}