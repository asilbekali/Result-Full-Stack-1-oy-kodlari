function arrayIntersection(arr1, arr2){
    let res = arr1.filter(itm => arr2.includes(itm))
    console.log(res);
    
}
arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])