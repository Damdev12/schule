input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        . . . # .
        # # # # #
        . . . # .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.showString("Damian ")
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # # #
        . # . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        # . . . #
        # # . # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Szygula")
    basic.showIcon(IconNames.Sad)
})
basic.showString("Hi")
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # # . # #
    # # . # #
    `)
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
	
})
