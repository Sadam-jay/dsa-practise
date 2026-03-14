function groupAnagrams(strs) {
  const map = {};

  for (let word of strs) {
    const signature = word.split("").sort().join("");

    if (!map[signature]) {
      map[signature] = [];
    }

    map[signature].push(word);
  }

  return Object.values(map);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
// Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
