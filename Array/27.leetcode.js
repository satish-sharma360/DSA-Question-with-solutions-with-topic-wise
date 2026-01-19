// 27. Remove Element
/*   x
a =[ 3, 2, 1, 5, 3, 4, 8, 3] val = 3
     i
     i==val do nothing move i++
        i
        i != x a[x] = a[i] x++ 
        x=2    i
*/        

function removeElement(nums,val){
 let x = 0;
 for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
        nums[x] = nums[i]
        x++
    }
 }
 return x

//  return x + 1
//  “I use a pointer to count elements not equal to val and overwrite the array in place. Since the pointer already tracks the count, I return it directly.”
}
console.log(removeElement([3,2,2,3],3))
  
        