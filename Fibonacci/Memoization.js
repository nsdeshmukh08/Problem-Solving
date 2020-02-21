class Memoization{
    constructor(){
        this.memo = [];
    }

    fib = (n) => {
        if(n<=1) {
            return n;
        }else if(this.memo[n]){
            return this.memo[n];
        }else{
            this.memo[n] = this.fib(n-1) + this.fib(n-2);
            return this.memo[n];
        }
    }
}

const obj = new Memoization();
console.log(obj.fib(40));