input.onButtonPressed(Button.A, function () {
    basic.showNumber(Min)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Max)
})
let Min = 0
let Max = 0
let Currenttemperatire = input.temperature()
Max = Currenttemperatire
Min = Currenttemperatire
basic.forever(function () {
    basic.showString(".")
    Currenttemperatire = input.temperature()
    if (Currenttemperatire < Min) {
        Min = Currenttemperatire
    } else if (Currenttemperatire > Max) {
        Max = Currenttemperatire
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
