class Solution {
    int dp[][]=new int[5010][1010];
    int mod= 1000000007;
    public int numberOfWays(int startPos, int endPos, int k) {
         
         for(int i=0;i<5010;i++)
         {
             for(int j=0;j<1010;j++)
             dp[i][j]=-1;
         }

      return help(startPos,endPos,k) %mod;
    }

    public int help(int s,int e,int k)
    {
        
        
        if(k==0)
        {
            if(s==e)
            return 1;
           
            return 0;
        }
           if(dp[s+1000][k]!=-1)
           return dp[s+1000][k]%mod;
         else 
        return dp[s+1000][k]=(help(s+1,e,k-1)%mod+help(s-1,e,k-1)%mod)%mod;
            }

}