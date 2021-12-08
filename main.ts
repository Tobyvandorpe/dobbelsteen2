input.onGesture(Gesture.LogoDown, function () {
    dobbelsteen = 0
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
let dobbelsteen = 0
dobbelsteen = 0
basic.forever(function () {
    if (dobbelsteen > 0) {
        basic.showNumber(dobbelsteen)
    }
})
