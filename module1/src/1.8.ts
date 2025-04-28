// destructuring

{
    const user = {
    id:23,
    name:{
        firstName:'Sayed',
        middleName:'Sirajul',
        lastName:'Munir'
    },
    contactNo:"01831013421",
    address:"uganda"
};

const {
    contactNo,
    name:{middleName: midName},
} = user;

}