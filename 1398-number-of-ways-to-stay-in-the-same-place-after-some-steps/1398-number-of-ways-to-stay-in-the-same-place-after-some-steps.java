class Solution {
    int dp[][] = new int[2001][501];
    int mod = 1000000007;

    public int numWays(int steps, int arrLen) {
        for (int j = 0; j < 2001; j++) {
            for (int i = 0; i < 501; i++) {
                dp[j][i] = -1;
            }
        }
        return help(0, 0, steps, arrLen) % mod;
    }

    public int help(int s, int e, int k, int l) {
        if (s >= l || s < 0) {
            return 0;
        }

        if (k == 0) {
            if (s == e) {
                return 1;
            }
            return 0;
        }

        if (dp[s + 1000][k] != -1) {
            return dp[s + 1000][k];
        }

        int ways = 0;
        ways = (ways + help(s + 1, e, k - 1, l)) % mod;
        ways = (ways + help(s, e, k - 1, l)) % mod;
        ways = (ways + help(s - 1, e, k - 1, l)) % mod;

        return dp[s + 1000][k] = ways;
    }
}
