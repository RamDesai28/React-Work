function genTicket(n){
    let arr=new Array(n)  //size of array =n
    for(let i=0; i<n; i++){
       arr[i]=Math.floor(Math.random() * 10)
    }
    return arr;
}

function sum (arr){
    return arr.reduce((sum,curr)=>sum+curr,0)
}//it return the sum of Array
export {genTicket,sum};