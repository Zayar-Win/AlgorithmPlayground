const play = (nums) => {
    const n = nums.length;
    const prefix = Array(n + 1).fill(1);

    // Compute the prefix product array
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] * nums[i];
    }

    let maxLength = 0;

    // Iterate over all possible even-length subarrays
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j += 2) { // Only even-length subarrays
            const mid = Math.floor((i + j) / 2);
            if ((j - i + 1) % 2 === 0) {
                const leftProduct = prefix[mid + 1] / prefix[i];
                const rightProduct = prefix[j + 1] / prefix[mid + 1];
    
                if (leftProduct === rightProduct) {
                    maxLength = Math.max(maxLength, j - i + 1);
                }
            }
        }
    }

    return maxLength;
}

const nums = [1, 2, 1, 2, 1, 1, 1];
const result = play(nums);
console.log(result)