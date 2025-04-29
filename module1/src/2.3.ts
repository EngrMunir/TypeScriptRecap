{
    // generic type

    type GenericArray<T> = Array<T>

    // const rollNumbers : number[] =[1,4,23];
    const rollNumbers : GenericArray<number> =[1,4,23];

    // const mentors: string[] = ['Mr X', 'Mr Y', 'Mr Z'];
    const mentors: Array<string> = ['Mr X', 'Mr Y', 'Mr Z'];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: Array<boolean> = [true, false, true];

    interface User {
        name:string;
        age:number;
    }


    const user: GenericArray<User>=[
        {
            name:'munir',
            age:100
        },
        {
            name:'Sirajul',
            age:230
        }
    ]

    const add =(x:number, y:number) =>x+y

    add(30,20);
    // 
}