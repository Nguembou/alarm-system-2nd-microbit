radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
    }
})
radio.setGroup(77)
basic.forever(function () {
	
})
