// arr = [1,1,1,2,2,3], k=2; output:[1,2] 

const frequencyMap = (arr, k)=>{
    let map = {};
    for (let num of arr) {
        if (map[num] !== undefined) {
            map[num] = (map[num] || 0) + 1;
        } else {
            map[num] = 1;
        }
    }

    return Object.entries(map).filter(([key, val]) => val >= k).map(([key])=> Number(key));
    // return Object.keys(map).slice(0,k).map(Number);
}


console.log(frequencyMap(arr = [4,1,-1,2,-1,2,3], k=2))