{
    // object oriented programming

    class Animal {
        // public name:string;
        // public species:string;
        // public sound:string;

        // parameter properties

        constructor(public name:string, public species:string, public sound:string){
            // this.name= name;
            // this.species= species;
            // this.sound = sound;
        }

        // must use normal function not arrow function,, because this keyword not works in arrow function 
        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal("German Shapard Bhai","dog","Ghew Ghew");
    const cat = new Animal("Bangladeshi","cat","meaw meaw");

    cat.makeSound();

    // 
}