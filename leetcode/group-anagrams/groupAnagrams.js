/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        let w = strs[i].split('').sort().join();
        if (map.has(w)) {
            let value = map.get(w);
            map.set(w, [...value, strs[i]]);
        } else {
            map.set(w, [strs[i]]);
        }
    }
    console.log(map);
    return Array.from(map.values());
};
module.exports = groupAnagrams;
