"use strict";
{
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray('Bangladesh');
    // const resGeneric = createArrayWithGeneric<boolean>(true)
    const resGeneric = createArrayWithGeneric('munir');
    const resGenericObj = createArrayWithGeneric({ id: 222, name: 'Munir' });
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res3 = createArrayWithTuple('Bangladesh', 222);
    const resGeneric1 = createArrayWithTuple('munir', { name: 'Asia' });
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        name: 'Munir', email: 'munir@gmail.com', devType: 'NLWD'
    });
    const student2 = addCourseToStudent({
        name: 'Sirajul', email: 'sirajul@gmail.com', hasWatch: 'Apple Watch'
    });
}
