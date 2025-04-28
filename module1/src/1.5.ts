// Reference Type  --> Object

const user: {
    readonly company: string;
    firstName:string;
    middleName?:string;
    lastName:string;
    isMarried:boolean;
} ={
    company:'Programming Hero',
    firstName:'Sayed',
    lastName:'Munir',
    isMarried:true
};

user.firstName='S';
user.lastName='M';
user.middleName='S';