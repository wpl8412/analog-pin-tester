let _0123456789 = 0
function _09 () {
    _0123456789 = pins.analogReadPin(AnalogPin.P0)
    while (input.buttonIsPressed(Button.A)) {
        basic.showNumber(_0123456789)
    }
}
basic.forever(function () {
    _09()
})
