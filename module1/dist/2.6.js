"use strict";
{
    // constraints
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student3 = addCourseToStudent({ id: 44, name: 'Mr Z', email: 'munir@gmail.com', emni: 'emni' });
    const student1 = addCourseToStudent({
        id: 222,
        name: 'Munir',
        email: 'munir@gmail.com',
        devType: 'NLWD'
    });
    const student2 = addCourseToStudent({
        id: 345,
        name: 'Sirajul',
        email: 'sirajul@gmail.com',
        hasWatch: 'Apple Watch'
    });
    // 
}
