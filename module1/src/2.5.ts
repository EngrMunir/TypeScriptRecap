{
    // function with generics

    const createArray =(param: string):string[]=>{
        return [param]
    }
    const createArrayWithGeneric =<T>(param: T):T[]=>{
        return [param]
    }

    const res1 = createArray('Bangladesh')

    // const resGeneric = createArrayWithGeneric<boolean>(true)
    const resGeneric = createArrayWithGeneric<string>('munir');

    type User ={
        id:number;
        name:string;
    }
    const resGenericObj = createArrayWithGeneric<User>({id:222, name:'Munir'});


    const createArrayWithTuple =<T,Q>(param1: T, param2:Q):[T,Q]=>{
        return [param1, param2];
    }

    const res3 = createArrayWithTuple<string, number>('Bangladesh', 222);

    const resGeneric1 = createArrayWithTuple<string, {name:string}>('munir',{name:'Asia'});

    const addCourseToStudent =<T>(student: T)=>{
        const course ="Next Level Web Development";

        return {
            ...student,
            course
        }
    }

    const student1 =  addCourseToStudent({
        name:'Munir', email:'munir@gmail.com', devType:'NLWD'
    })
    const student2 =  addCourseToStudent({
        name:'Sirajul', email:'sirajul@gmail.com', hasWatch:'Apple Watch'
    })
  

}