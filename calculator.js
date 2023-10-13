let calculator = () => {

    let add = (a, b) => a + b;

    let subtract = (a, b) => a - b;

    let divide = (a, b) => a / b;

    let multiply = (a, b) => a * b;

    return { add, subtract, divide, multiply };
}


module.exports = calculator;