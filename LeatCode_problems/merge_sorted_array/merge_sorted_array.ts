/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): any {
        nums1.splice(m,n)
       nums1= (nums1.concat(nums2)).sort((a,b)=>a-b)
        return nums1
};
console.log (merge([1,2,3,0,0,0] , 3 , [2,5,6] , 3))