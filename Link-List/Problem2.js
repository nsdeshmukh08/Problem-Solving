//Remove duplicate element from sorted Linked List

// Remove Zero Sum Consecutive Nodes from Linked List

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
    // With xOR 
    removeDuplicates(){
        let current = this.head;
        let nextNode = current.next;
        while(nextNode){
            let xOR = current.data ^ nextNode.data;
           
             if(xOR === 0){
                current.next = nextNode.next;
                nextNode = nextNode.next;
             }else{
                 current = nextNode;
                 nextNode = nextNode.next;
             }
        }
    }
    
}

// Create Link List Object
const ll = new LinkList();

 [1,1,2,3,4,4].forEach((data) => {
    ll.addNodeAtLast(data);
});

// Print data from the list.
ll.printData();

ll.removeDuplicates();

ll.printData();