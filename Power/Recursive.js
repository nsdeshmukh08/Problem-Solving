class Recursive {
    constructor(){}

    power = (x,y) => {
        if(y>0){
            y = y-1;
            return x * this.power(x,y);
        }else{
            return 1;
        }
    }
}

const obj = new Recursive();

console.log(obj.power(3,4,1));