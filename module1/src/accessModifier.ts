{
    // access modifier
    class BankAccount {
        readonly id:number;
        name:string;
        private balance:number;

        constructor(id:number, name:string, balance:number){
            this.id =id;
            this.name = name;
            this.balance = balance;
        }
        
        addBalance(amount:number){
            this.balance= this.balance + amount;
        }
    }

    const poorDeveloperAccount = new BankAccount(111, "Poor Developer", 20);
    poorDeveloperAccount.addBalance(500);
}