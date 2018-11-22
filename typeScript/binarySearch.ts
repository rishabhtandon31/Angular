function binarySearch(arr:number[],l:number,r:number,x:number):number{
    if(r>=l){
        var mid=l+(r-l)/2;
        console.log("hello")
        if(arr[mid]==x)
            return mid;
        if(arr[mid]<x)
            return binarySearch(arr,mid+1,r,x);
        return binarySearch(arr,l,mid-1,x);
    }
    return -1;
}

var numArray:number[]=[2,5,7,10,15];
var result=binarySearch(numArray,0,numArray.length-1,5);
if(result==-1)
    console.log("Element not found");
else
    console.log("Element 5 is found at "+result);