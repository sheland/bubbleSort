var insertionSort = function (arr) {
    for(var i = 1; i < arr.length; i++){ //start loop at index 1
        for(var j = 0; j<i; j++) {
            if(arr[i] < arr[j]){
                var temp = arr.splice(i,1) //store deleted element in temp
                arr.splice(j,0,temp[0]) //swap
            }
        }
    }
   return arr
}
let arr = [2,3,5,1,0]
console.log(insertionSort(arr))