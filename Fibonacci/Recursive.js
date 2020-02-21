class Fibo {
    constructor(){

    }

    fib = (num) => {
        if(num <= 1){
            return num;
        }else{
            return this.fib(num-1) + this.fib(num-2)
        }
    }
}

const obj = new Fibo();
console.log(obj.fib(40))