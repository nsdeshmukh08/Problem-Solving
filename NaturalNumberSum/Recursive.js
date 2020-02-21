class Recursive {
    constructor(){}

    sum(num){
        if(num){
            let temp = num -1;
            return num + this.sum(temp);
        }else{
            return 0;
        }
    }
}

const obj = new Recursive();
console.log(obj.sum(10));