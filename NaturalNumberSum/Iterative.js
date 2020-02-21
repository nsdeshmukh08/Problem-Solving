class Iterative {
    constructor(){}
    //using while loop
    sumWhile(num){
        let temp = 0;
        while(num){
            temp = temp + num;
            num --;
        }
        return temp;
    }
    //using for loop
    sumFor(num){
        let temp = 0;
        for(let i=1; i<=10; i++){
            temp = temp + i
        }
        return temp;
    }
}

const obj = new Iterative();
console.log(obj.sumWhile(10));
console.log(obj.sumFor(10));