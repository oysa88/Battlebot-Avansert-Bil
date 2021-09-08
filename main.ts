radio.onReceivedValue(function (name, value) {
    if (name == "P") {
        Pitch = value * -20
    } else if (name == "A") {
        AvPå = value
    } else if (name == "R") {
        Roll = value * -20
    }
})
let DriveRight = 0
let DriveLeft = 0
let Roll = 0
let AvPå = 0
let Pitch = 0
bitbot.select_model(BBModel.XL)
bitbot.ledRainbow()
radio.setGroup(1)
basic.forever(function () {
    if (AvPå == 1) {
        DriveLeft = Pitch - pins.map(
        Roll,
        0,
        1023,
        Pitch,
        Pitch * -1
        )
        DriveRight = Pitch - pins.map(
        Roll,
        0,
        -1023,
        Pitch,
        Pitch * -1
        )
        bitbot.motor(BBMotor.Left, Pitch - DriveLeft)
        bitbot.motor(BBMotor.Right, Pitch - DriveRight)
    } else {
        bitbot.motor(BBMotor.Both, 0)
    }
})
