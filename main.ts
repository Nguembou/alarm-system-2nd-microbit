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
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(4)
})
radio.setGroup(77)
basic.forever(function () {
	
})
