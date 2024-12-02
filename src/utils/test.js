class Solution {
    // Function to check if two arrays are equal or not.
    check(arr1, arr2) {
    
    let i=0;
    
    let result =0;
        // code here
        if(arr1.length==0&& arr2.length==0){
            return true;
        }
        
        if(arr1.length!=arr2.length){
            return false;
        }else{
        for(let i=0;i<arr1.length;i++){
            let index=1;
            for (let j =0;j<arr.length;j++){
                ++index;                    
                  if(arr1[i]==arr2[j]){
                 result =arr.slice(index);
                 
             }
             
                
            }
        }
             
           
         }
        }
        
    }
}
