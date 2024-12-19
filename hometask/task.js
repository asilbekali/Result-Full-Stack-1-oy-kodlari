function removeDuplicates(arr){
    let res = [...new Set(arr)]
    console.log(res)
    }
removeDuplicates([1, 2, 3, 1, 2, 4])