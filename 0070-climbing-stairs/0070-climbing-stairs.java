class Solution {
    int dp[]=new int[46];
    public int climbStairs(int n) {
       for(int i=0;i<46;i++)
       {
           dp[i]=-1;
       }
       return help(n);
    }

    public int help(int n)
    {
        if(n==0)
        {
            return 1;
        }
        else if(n<0)
        return 0;
         if(dp[n]!=-1)
         return dp[n];
         else 
        return dp[n]=help(n-1)+help(n-2);

    }
}