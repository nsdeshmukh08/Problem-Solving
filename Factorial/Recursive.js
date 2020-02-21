class Recursive {
    constructor(){

    }

    calFactorial = (num) => {
        if(num == 1){
            return 1;
        }else {
            return num * this.calFactorial(num-1);
        }
    }
}

const fact = new Recursive();
console.log(fact.calFactorial(5));
