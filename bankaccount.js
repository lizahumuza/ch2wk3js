class BankAccount{
     /*Bank accounts have thefollowing properties:
     Attributes:
        
     balance: A float tracking the current balance of the customer's account.*/
     __init__(self,balance=0.0){
        
        self.status = true;
        self.balance = balance;
    }
     active(self){
        self.status = true;
    }
    getBalance(self){
        if (self.status == False){
            alert('closed account');
        return self.balance}
    }
     withdraw(self, amount){
        /*Return the balance remaining after withdrawing *amount*
        dollars.*/
        if (amount > self.balance){
            alert('Amount greater than available balance.');}
        if (amount < 0){
            alert('wrong entry');
        self.balance -= amount
        return self.balance
        }
    }
     deposit(self, amount){
        /*Return the balance remaining after depositing *amount*
        dollars.*/
        if (self.status == False){
            alert('account closed');}
        if (amount < 0){
            alert('wrong value');
        self.balance += amount;
        return self.balance}
    }
     close(self){
        self.status = False;
    }
    }

   

