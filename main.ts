let variable6 = 0
let variable1 = 0
input.onButtonPressed(Button.A, function () {
    variable6 = 6
    basic.showNumber(variable6)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable1 * variable6)
})
