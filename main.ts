let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.forever(function () {
    strip.setBrightness(input.soundLevel())
    for (let indeks = 0; indeks <= 8; indeks++) {
        strip.setPixelColor(indeks, neopixel.colors(NeoPixelColors.Violet))
        strip.show()
    }
})
