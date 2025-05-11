/*
3. Longest Substring Without Repeating Characters
Medium
Topics
Companies
Hint
Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/


const longestSubstrWithoutRepeatingChar = (s) => {
    let start = 0;
    let maxLength = 0;
    const charMap = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (charMap[char] !== undefined && charMap[char] >= start) {
            start = charMap[char] + 1;
        }

        charMap[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};


console.log(longestSubstrWithoutRepeatingChar("abcabcbb"))
console.log(longestSubstrWithoutRepeatingChar("bbbbb"))
console.log(longestSubstrWithoutRepeatingChar("pwwkew"))