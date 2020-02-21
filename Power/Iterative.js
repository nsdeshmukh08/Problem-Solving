class Iterative{
    constructor(){

    }

    power = (x,y) => {
        let temp = 1;
        while(y){
            temp = temp * x;
            y--;
        }
        return temp;
    }
}

const obj = new Iterative();
console.log(obj.power(3,4));