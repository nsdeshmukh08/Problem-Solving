class Fibonacci{
    constructor(){

    }

    getSumFib(num){
        let prev = 0;
        let next = 1;
       // let sum = 1;
        let nextNum=1;

        for(let i=0; i<(num-2); i++){
            nextNum = prev + next;
            prev = next;
            next= nextNum;
            //sum = sum + nextNum;
        }

        console.log(nextNum);
    }
}

const obj = new Fibonacci();
obj.getSumFib(40);