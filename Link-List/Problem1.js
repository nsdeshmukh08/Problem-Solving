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

// Remove multiple nodes from - to index;
    removeMultipleNodes(from, to){
        if(from === 0){
            while(to >= from){
                let current = this.head;
                let previouse = current;
                let tempTo = to;
                let tempFrom = from;
    
                while(tempFrom < tempTo){
                    previouse = current;
                    current = current.next;
                    tempFrom +=1;
                }
    
                if(to == 0){
                    this.head = current.next;
                    current.next = null;
                }else{
                    previouse.next = current.next;
                }
                to -= 1;
            }
        }else{
            if(to === this.size - 1){
                ll.getAtIndex(from-1).next = null;
                return this.head;
            }else{
                while(to >= from){
                    let current = this.head;
                    let previouse = current;
                    let tempTo = to;
                    let tempFrom = from;
        
                    while(tempFrom <= tempTo){
                       
                        previouse = current;
                        console.log("previouse==>", previouse);
                        current = current.next;
                        tempFrom +=1;

                        if(from == to  ){
                            if(current){
                                previouse = current
                                current = current.next;
                            }
                        }
                    }
        
                    if(to == 0){
                        this.head = current.next;
                        current.next = null;
                    }else{
                        previouse.next = current.next;
                    }
                    to -= 1;
                }
            }
        }
        return this.head;
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
    // This is BRUT FORCE implementation.
    removeZeroSumSublists_B(){
        let current = this.head;
        let nextNode =current.next;
        let sum = 0;
        let currentCount = 0;
        let nextCount = 1;

        while(current && nextNode){
          sum = sum ? sum + nextNode.data : current.data + nextNode.data;
          if(sum !== 0){
            if(nextNode && nextNode.next == null){
                    sum = 0;
                    current = current.next;
                    currentCount += 1;
                    nextNode = current.next;
                    nextCount = currentCount + 1;

            }else{
                nextNode = nextNode.next;
                nextCount += 1;
            }
          } else {
              current = this.removeMultipleNodes(currentCount,nextCount);
              nextNode= current.next;
              currentCount=0;
              nextCount=1;
          }
        }
    }

    removeZeroSumSublists(){
       let current = this.head;
       let dummy = {};
       dummy.next = current;
       const hashMap = new Map();
       let cSum = 0;
       hashMap.set(cSum,dummy);
       
       while(current){
        cSum += current.data;

        if(hashMap.has(cSum)){
            let existingHash = hashMap.get(cSum);
            let toRemoved = existingHash.next;
            let sum = cSum;
            while(toRemoved != current){
                sum += toRemoved.data;
                hashMap.delete(sum);
                toRemoved=toRemoved.next;
            }
            existingHash.next = current.next;
        }else{
            hashMap.set(cSum,current);
        }
        current=current.next
       }
        
       this.head = dummy.next;
    }
}

// Create Link List Object
const ll = new LinkList();

//[1,2,-3,3,1] => [3,1]
//[1,2,3,-3,4] => [1,2,4]  
//[4,6,-10,8,9,10,-19,10,-18,20,25] => [20,25]
 //[8,10,4,-1,-3] => [8,10]
 //[6,-6,3,2,-5,4] => [4]
 // [1,2,3,-3,-2] = [1]

 [1,2,3,-3,-2].forEach((data) => {
    ll.addNodeAtLast(data);
});

// Print data from the list.
ll.printData();

//Remove zero Sum sublist with BRUT FORCE approach
//ll.removeZeroSumSublists_B();

//Remove zero Sum sublist with optimistic approach
ll.removeZeroSumSublists();

//ll.removeMultipleNodes(2,3)
ll.printData();

