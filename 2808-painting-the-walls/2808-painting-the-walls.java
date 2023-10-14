class Solution {
    int n;
    int dp[][]=new int[501][501];
    public int paintWalls(int[] cost, int[] time) {
        for(int i=0;i<501;i++)
        {
            for(int j=0;j<501;j++)
            {
                dp[i][j]=-1;
            }
        }
       int ans[]=new int[1];
       n=cost.length;
       ans[0]=Integer.MAX_VALUE;
       
       return  help(0,n,cost,time);
        
    }

    public int help(int i,int remains,int cost[],int time[])
    {    
       if(remains<=0)
       return 0;

       if(i>=n)
       return 999999999;
         if(dp[i][remains]!=-1)
          return dp[i][remains];
          else 
          {
       long p1=cost[i]+help(i+1,remains-1-time[i],cost,time);
       long p2=help(i+1,remains,cost,time);

       return dp[i][remains]=(int) Math.min(p1,p2);
       }
    }
}