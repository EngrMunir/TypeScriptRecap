{
    // getter and setter
    class BankAccount {
        readonly id:number;
        name:string;
        protected _balance:number;

        constructor(id:number, name:string, balance:number){
            this.id =id;
            this.name = name;
            this._balance = balance;
        }

        get getBalance(){
            return this._balance;
        }
        
        set addBalance(amount:number){
            this._balance= this._balance + amount;
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this._balance 
        }
    }

    const poorDeveloperAccount = new BankAccount(111, "Poor Developer", 20);
    poorDeveloperAccount.addBalance =500;
    poorDeveloperAccount.getBalance;
}