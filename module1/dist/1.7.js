"use strict";
{
    // spread operator
    // rest operator
    // destructuring
    const bros1 = [
        'Mir',
        'Sazzad',
        'Munir'
    ];
    const bros2 = ['amran', 'shivlo', 'saifulla'];
    bros1.push(...bros2);
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentors2), bros1);
    // rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`hi ${friend}`));
    };
    greetFriends('munir', 'sirajul', 'abol', 'lokman', 'ubul');
}
