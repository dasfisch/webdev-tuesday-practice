
export class calculator {
    add(left, right){
        if(left === null || left === undefined){
            left = 0;
        }
        if(right === null || right === undefined){
            right = 0;
        }
        if(isNaN(left)){
            throw new Error('left is not a number');
        }
        if(isNaN(right)){
            throw new Error('right is not a number');
        }

        left = Number(left);
        right = Number(right);

        return left + right;
    }
    subtract(left, right){
        if(left === null || left === undefined){
            left = 0;
        }
        if(right === null || right === undefined){
            right = 0;
        }
        if(isNaN(left)){
            throw new Error('left is not a number');
        }
        if(isNaN(right)){
            throw new Error('right is not a number');
        }

        left = Number(left);
        right = Number(right);

        return left - right;
    }
    divide(numerator, denominator){
        return numerator / denominator;
    }
    multiply(left, right){
        return left * right;
    }
}
