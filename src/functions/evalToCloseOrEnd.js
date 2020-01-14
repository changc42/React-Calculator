export default function evalToCloseOrEnd(arr){
    equalize(arr);
    findSum(arr);
}

function equalize(arr){
    if(arr.length==0) alert("length of arr is zero in equalize");
    let i=0;
    while(i<arr.length){
        let result = 0;
        if(arr[i]=="x" || arr[i] =="/"){
            if(arr[i] =="x") result=arr[i-1]*arr[i+1];
            else result =arr[i-1]/arr[i+1];

            arr=arr.splice(i-1,i+1,result.toString());
            i--;
        }
        if( !isNaN(arr[i]) && i+1<arr.length && !isNaN(arr[i+1]) ){
            result = arr[i]*arr[i+1];
            arr=arr.splice(i,i+1, result.toString());
        }
        i++;
    }
}