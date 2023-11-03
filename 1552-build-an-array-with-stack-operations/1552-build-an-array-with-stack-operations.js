/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let ans=[];
    let a=[];
    
    
    
    
    let j=0;
     for(let i =0;i<target.length;i++)
     {
         if(target[i]==j+1)
         {
             ans.push("Push");
            
         }
         else 
         {
             ans.push("Push");
             ans.push("Pop");
             i--;
             
         }
         j++;
     }  
        
    

   return ans;

     
       
    
};