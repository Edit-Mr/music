input.onButtonPressed(Button.A, function () {
    if (Status == 1) {
        if (Sound == 1) {
        	
        } else {
        	
        }
    }
})
let Sound = 0
let Status = 0
Status = 0
Sound = 0
let Playing = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    # # . # #
    # . # . #
    . # . # .
    # . # . #
    # # . # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
Status = 1
music.playMelody("C E G C5 G E C - ", 300)
basic.forever(function () {
    if (Status == 1) {
        basic.showNumber(Playing)
    }
})
