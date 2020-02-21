class Factorial {
    constrctor(){

    }

    calculateFact = (num) => {
        let factorial = 1;
        for(let i=num; i>=1; i--){
            factorial = factorial * i;
        }

        // while(num){
        //     factorial = factorial * num;
        //     num--;
        // }

        console.log(factorial);
    }

};

const f = new Factorial();
f.calculateFact(5);
