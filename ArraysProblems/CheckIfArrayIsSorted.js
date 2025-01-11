function solution(array){
    for(let i = 0 ; i < array.length ; i++){
        if(array[i+1] && array[i] > array[i+1]){
            return false;
        }
    }
    return true;
}


const result = solution([10, 20, 30, 40, 50])
console.log(result)