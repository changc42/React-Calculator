export default function evalToCloseOrEnd(arr){
    let subArr = [];
    while(arr[0]!=")" && arr.length>0){
        subArr.push(arr.shift());
    }
    findProducts(subArr);
    findSum(subArr);
    if(arr[0]==")") arr.shift();
    arr.unshift(subArr[0]);
}

function findProducts(arr){
    let i=0;
    while(i<arr.length){
        let result = 0;
        if(arr[i]=="x" || arr[i] =="/"){
            if(arr[i] =="x") result=arr[i-1]*arr[i+1];
            else result =arr[i-1]/arr[i+1];

            arr.splice(i-1,3,result.toString());
            i-=2;
        }
        else if( !isNaN(arr[i]) && i+1<arr.length && !isNaN(arr[i+1]) ){
            result = arr[i]*arr[i+1];
            arr.splice(i,2, result.toString());
            i--;
        }
        i++;
    }
}

function findSum(arr){
    let result=parseInt(arr.shift());
    
    while(arr.slice(0,1)[0]!=")" && arr.length>0){
        let operation = arr.shift();
        let operand = parseInt(arr.shift());
        if(operation=="+") result += operand;
        if(operation=="-") result -= operand;
    }
    arr.push(result.toString());
}