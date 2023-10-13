let analyzeArray = arr => {

    let getAverage = arr => {
        let sum = arr.reduce((sum, cur) => sum + cur, 0);
        return sum/arr.length;
    }

    let getMin = arr => Math.min(...arr);

    let getMax = arr => Math.max(...arr);

    let getLength = arr => arr.length;

    return { average: getAverage(arr), min: getMin(arr), 
            max: getMax(arr), length: getLength(arr) }
}

module.exports = analyzeArray;