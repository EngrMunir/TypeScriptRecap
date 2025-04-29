"use strict";
{
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: 'Mr Munir',
        age: 26,
        address: 'ctg'
    };
    const result1 = getPropertyValue(user, 'name');
    // obj['key']
}
