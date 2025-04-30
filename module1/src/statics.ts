{
    // static

    class Counter {
        // count: number =0;
        static count: number =0;
        // increment(){
        static increment(){
            // return (this.count = this.count+ 1);
            return (Counter.count = Counter.count+ 1);
        }
        // decrement(){
        static decrement(){
            // return (this.count = this.count -1);
            return (Counter.count = Counter.count -1);
        }
    }

    // const instance1 = new Counter();
    // console.log(instance1.increment()); //different memory
    console.log(Counter.increment()); //different memory

    // const instance2 = new Counter();
    // console.log(instance2.increment()); //different memory
    console.log(Counter.increment()); //different memory
}