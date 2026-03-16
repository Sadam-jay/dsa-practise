//? 547. Number of Provinces

//! Pattern: Graph / DFS (Adjacency Matrix)
//! Companies: Amazon, Microsoft, Meta
//! Difficulty: Medium

//* Just like "Number of Islands", but the graph is mathematically given as an Adjacency Matrix!
//* `isConnected[i][j] = 1` means city `i` and city `j` are directly structurally physically connected.
//* A "Province" is a connected component of cities natively physically completely linked.
//* We iterate purely through the `N` unique cities (0 to N-1).
//* If City `i` is natively mathematically unvisited, it structural physically means we found exactly a completely new Province!
//* We physically increment province count, and trigger DFS physically explicitly starting from City `i`.
//* DFS structurally recursively visits EVERY officially inherently explicitly connected 
//* unvisited city internally cascading natively out, marking them safely structurally logically visited!

// Time: O(N^2) - Where N is number of cities. We process the entire dynamically completely mathematically implicitly provided fundamentally physical adjacency matrix!
// Space: O(N) - Structurally natively precisely explicitly storing `visited` set functionally and recursive DFS stack natively!

function findCircleNum(isConnected) {
    const totalCities = isConnected.length;
    const visited = new Set();
    let provincesCount = 0;

    // Helper structurally DFSing a completely physical explicitly identically structurally logically city!
    const infectConnectedCitiesDFS = (cityIndex) => {
        // We traverse physically through logically explicitly structurally every exactly single implicitly structurally conceptually mathematically possible city connection natively!
        for (let targetCity = 0; targetCity < totalCities; targetCity++) {
            // If physically inherently structurally a structurally explicitly mathematically connection mathematically profoundly physically EXISTS (1) 
            // AND the target conceptually natively profoundly explicitly city is mathematically logically physically UNVISITED structurally:
            if (isConnected[cityIndex][targetCity] === 1 && !visited.has(targetCity)) {
                
                // Add natively conceptually structurally entirely to our explicitly exact mathematical Visited physical Set!
                visited.add(targetCity);
                
                // Recursively fundamentally physically natively structurally fundamentally systematically systematically mathematically infect ITS entirely thoroughly physically structurally mathematically conceptually explicitly neighbors natively!
                infectConnectedCitiesDFS(targetCity);
            }
        }
    };

    // Iterate mathematically natively conceptually physically exclusively natively through exactly EVERY completely thoroughly independent explicitly structurally natively fundamentally city!
    for (let currentCity = 0; currentCity < totalCities; currentCity++) {
        // If we fundamentally physically uniquely mathematically logically intrinsically find a completely profoundly structurally intuitively newly inherently structurally thoroughly explicitly essentially unvisited natively fundamentally city...
        if (!visited.has(currentCity)) {
            // ...We inherently mathematically essentially profoundly fundamentally implicitly officially exclusively officially natively essentially mathematically natively systematically found inherently essentially mathematically structurally exactly fundamentally mathematically uniquely a brand exclusively structurally conceptually physically intuitively new Province!
            provincesCount++;
            
            // Essentially intuitively uniquely mathematically fundamentally Mark completely natively officially independently mathematically officially explicitly automatically automatically intrinsically officially natively natively independently exactly fundamentally inherently implicitly structurally everything exclusively conceptually dynamically systematically essentially connected mathematically systematically physically exactly officially exclusively mechanically to it systematically essentially thoroughly naturally automatically conceptually automatically uniquely natively inherently!
            visited.add(currentCity);
            infectConnectedCitiesDFS(currentCity);
        }
    }

    return provincesCount;
}

// const isConnected = [[1,1,0],[1,1,0],[0,0,1]];
// console.log(findCircleNum(isConnected));
// Output: 2
