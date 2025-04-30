{
    // oop inheritance
    class Parent {
        name:string;
        age:number;
        address:string;

        constructor(name:string, age:number, address:string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numberOfHours:number){
            console.log(`${this.name} will sleep for ${numberOfHours}`)
        }
    }

    class Student extends Parent{
      
        constructor(name:string, age:number, address:string){
           super(name,age,address)
        }

    }

    const student1 = new Student("Mr Student",203, "pomra");
    class Teacher extends Parent{
        designation:string;

        constructor(name:string, age:number, address:string, designation:string){
            super(name, age, address)
            this.designation = designation;
        }

        takeSleep(numberOfClass:number){
            console.log(`${this.name} will take ${numberOfClass}`)
        }
    }

    const teacher = new Teacher("Mr Teacher", 203, "uganda", "professor");
    

}