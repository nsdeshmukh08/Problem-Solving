//Add 1 to a number represented as linked list

//Number is represented in linked list such that each digit corresponds to a node in linked list. 
//Add 1 to it. For example 1999 is represented as (1-> 9-> 9 -> 9) and 
//adding 1 to it should change it to (2->0->0->0)

class Node {
    constructor(data, next =null){
        this.data = data;
        this.next = next;
    }
}

class LinkList {

    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Add Node at last
    addNodeAtLast = (data) => {
        const newNode = new Node(data);
        let current = this.head;
        let lastNode = null;
        if(!current) {
            this.head = newNode;
        } else {
            while(current){
                if(current.next === null){
                    lastNode = current;
                }
                current = current.next;
            }
            lastNode.next = newNode;
        }
        this.size ++;
    }

    //Print link list data
    printData = () => {
        let current = this.head;
        let result = '';
        while(current){
            result = result.concat(` ${current.data} ->`)
            current = current.next;
        } 
        result = result.split(' ');
        result.pop();
        result = result.join(' ');
        console.log("Link List ====>", result);      
    }

    //get node at perticular index
    getAtIndex = (index) => {
        let count = 0;
        let current = this.head;
        while(count < index){
            current = current.next;
            count++;
        }
        return current;
    }

    //Iterative way to reverse the Link List
    reverceLinkList = () => {
       let current = this.head;
       let previouse = null;

       while(current){
            let nextNode = current.next;
            current.next = previouse;
            previouse=current;
            current = nextNode;
       }

       this.head = previouse;
    }

    //Add number 1 
    addOneUtile(){
        this.reverceLinkList();
        let current = this.head;
        let sum = current.data + 1;
        let carry = 0;

        while(current){
            //sum = carry ? current.data + carry : current.data + 1;
            if(sum >= 10){
                carry = 1;
                current.data = sum % 10;
            }else{
                carry = 0;
                current.data = sum;
            }

            current = current.next;
            sum = current ? current.data + carry : 0;
        }
        this.reverceLinkList();
    }

    
}

// Create Link List Object
const ll = new LinkList();

 [3,1,9,9].forEach((data) => {
    ll.addNodeAtLast(data);
});

ll.addOneUtile();

// Print data from the list.
ll.printData();

