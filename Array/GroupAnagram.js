/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]
*/


const groupEffMid = (strs) => {
    let map = {};

    for (let item of strs) {
        const sortedKey = item.split('').sort().join('');

        if (!map[sortedKey]) {
            map[sortedKey] = [item];
        } else {
            map[sortedKey].push(item);
        }
    }

    return Object.values(map);
}

const groupEffMidNewMap = (strs) => {
    let map = new Map();

    for (let item of strs) {
        const sortedKey = item.split('').sort().join('');

        if (!map.has(sortedKey)) {
            map.set(sortedKey,[item]);
        } else {
            map.get(sortedKey).push(item);
        }
    }

    return Array.from(map.values());
}


const groupAnagrams = (strs) => {
  const map = new Map();

  for (let str of strs) {
    const count = new Array(26).fill(0); // for 'a' to 'z'

    for (let char of str) {
      count[char.charCodeAt(0) - 97]++; // build frequency count
    }

    const key = count.join('#'); // create unique key like "1#0#0#0#...#1"
    
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }

  return Array.from(map.values());
}

console.log(groupEffMid(["eat","tea","tan","ate","nat","bat"]))
console.log(groupEffMidNewMap(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
