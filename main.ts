input.onButtonPressed(Button.A, function () {
    for (let y = 0; y <= 7; y++) {
        led.plot(y, 7 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 5; y++) {
        led.plot(y, 5 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 3; y++) {
        led.plot(y, 3 - y)
        basic.pause(100)
    }
    for (let y = 0; y <= 1; y++) {
        led.plot(y, 1 - y)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
