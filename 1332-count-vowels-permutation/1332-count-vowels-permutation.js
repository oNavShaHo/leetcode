var countVowelPermutation = function(n) {
    const MOD = 1000000007;
    
    let countA = 1, countE = 1, countI = 1, countO = 1, countU = 1;
    
    for (let length = 1; length < n; length++) {
        // Calculate the next counts for each vowel based on the previous counts
        let nextCountA = countE;
        let nextCountE = (countA + countI) % MOD;
        let nextCountI = (countA + countE + countO + countU) % MOD;
        let nextCountO = (countI + countU) % MOD;
        let nextCountU = countA;
        
        // Update the counts with the newly calculated values for the next length
        countA = nextCountA;
        countE = nextCountE;
        countI = nextCountI;
        countO = nextCountO;
        countU = nextCountU;
    }
    
    // Calculate the total count of valid strings for length n
    let totalCount = (countA + countE + countI + countO + countU) % MOD;
    
    return totalCount;
};