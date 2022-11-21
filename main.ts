radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.Sad)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
    }
})
input.onButtonPressed(Button.A, function () {
    Entry = "" + Entry + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (Entry == Password) {
        radio.sendNumber(4)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showIcon(IconNames.Yes)
        music.stopMelody(MelodyStopOptions.All)
    } else {
        basic.showIcon(IconNames.No)
        music.playTone(175, music.beat(BeatFraction.Whole))
        Entry = ""
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(200)
    Entry = ""
})
input.onButtonPressed(Button.B, function () {
    Entry = "" + Entry + "B"
})
input.onGesture(Gesture.Shake, function () {
	
})
let Password = ""
let Entry = ""
basic.showIcon(IconNames.Yes)
Entry = ""
Password = "BABAA"
pins.servoWritePin(AnalogPin.P0, 0)
radio.setGroup(77)
