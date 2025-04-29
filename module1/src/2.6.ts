{
    // constraints
    const addCourseToStudent =<T extends {id:number;name:string; email:string;}>(student: T)=>{
        const course ="Next Level Web Development";

        return {
            ...student,
            course
        }
    }

    const student3 = addCourseToStudent({id:44, name:'Mr Z', email:'munir@gmail.com', emni:'emni'});

    const student1 =  addCourseToStudent<{
        id:number;
        name:string;
        email:string;
        devType:string;
    }>({
        id:222,
        name:'Munir', 
        email:'munir@gmail.com', 
        devType:'NLWD'
    });
    const student2 =  addCourseToStudent({
        id:345,
        name:'Sirajul', 
        email:'sirajul@gmail.com', 
        hasWatch:'Apple Watch'
    })
  

    // 
}