export class equasionQueue {
    queue = [];

    addNumber(val){
        if(isNaN(this.queue[this.queue.length - 1])){
            this.queue.push(val);
            return;
        }

        this.queue[this.queue.length - 1] += val;
    }

    addDecimal(){
        if(isNaN(this.queue[this.queue.length - 1])){
            return;
        }

        this.queue[this.queue.length - 1] += '.';
    }

    addOperator(val){
        if(isNaN(this.queue[this.queue.length - 1])){
            return;
        }

        this.queue.push(val);
    }

    remove(){

    }

    clear(){
        this.queue = [];
    }

    toString(){
        let ret = '';
        for(let i = 0; i < this.queue.length; i++){
            ret += this.queue[i];
        }

        return ret;
    }
}

const equasion = new equasionQueue();

equasion.addNumber('1');