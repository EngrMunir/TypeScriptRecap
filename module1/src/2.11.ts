{
    // utility types
    // Pick

    type Person ={
        name:string;
        age:number;
        email?:string;
        contactNo:string;
    }

    type NameAge = Pick<Person,"name"|"age">

    // Omit
    type ContactInfo = Omit<Person,"name"|"age">

    // Required
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // read only
    type PersonReadonly = Readonly<Person>

    const person1 : PersonReadonly ={
        name: "Mr XY",
        age: 200,
        contactNo:"017"
    }

    // Record
    // type MyObj ={
    //     a:string,
    //     b:string
    // }

    type MyObj = Record<string, string>

    const EmptyObj :Record<string, unknown> ={};

    const obj1: MyObj ={
        a:'aa',
        b:'bb',
        c:'cc',
    }

    // 
}