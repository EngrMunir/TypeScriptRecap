"use strict";
{
    // type assertion
    let anything;
    anything = "Next Level Web Development";
    anything = 222;
    anything;
}
const kgToGm = (value) => {
    if (typeof value === 'string') {
        const convertedData = parseFloat(value) * 1000;
    }
    if (typeof value === "number") {
        return value * 1000;
    }
    const result1 = kgToGm(1000);
    const result2 = kgToGm("1000");
};
