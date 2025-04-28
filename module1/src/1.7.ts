{

    // spread operator
    // rest operator
    // destructuring

    const bros1:string[] = [
        'Mir',
        'Sazzad', 
        'Munir'
    ];
    const bros2: string[]=['amran','shivlo', 'saifulla'];

    bros1.push(...bros2)

    const mentors2 ={
        prisma:'Firoz',
        next:'Tanmoy',
        cloud:'Nahid'
    }


    const mentorList ={
        ...mentors2,
        ...bros1,
    }

    // rest operator
    const greetFriends =(...friends:string[])=>{
        friends.forEach((friend:string)=> console.log(`hi ${friend}`))
    }

    greetFriends('munir','sirajul','abol','lokman','ubul')
}