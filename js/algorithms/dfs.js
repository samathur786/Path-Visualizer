function depthFirstSearch() {
    let vis = [];
    let path = [];
    start = document.getElementsByClassName("start")[0].id;
    end = document.getElementsByClassName("end")[0].id;
    let Unvnodes = document.getElementsByTagName("td");
    ListOfNodes = getAllNodes(Unvnodes);
    let startNode = getNodeById(start);
    let endNode = getNodeById(end);
    // Call the recursive DFS function
    let found = dfsRecursive(startNode, endNode, vis);
    // If path is found, backtrack from the end node
    if (found) {
      let currentNode = endNode;
      while (currentNode != null) {
        path.unshift(currentNode); // Unshift adds the node at the beginning
        currentNode = currentNode.parent;
      }
    }
    return [vis, path];
  }

 // Recursive DFS function
  function dfsRecursive(currentNode, endNode, vis) {
    currentNode.visited = true;
    vis.push(currentNode);
    // If we reach the end node, return true (path found)
    if (currentNode.id == endNode.id) {
      return true;
    }
    // Get all unvisited neighbors
    let neighbours = getNeighboursForUnweighted(currentNode);
    // Recursively visit each unvisited neighbor
    for (let i in neighbours) {
      if (!neighbours[i].visited) {
        neighbours[i].parent = currentNode; // Track parent for backtracking
        if (dfsRecursive(neighbours[i], endNode, vis)) {
          return true; // Stop recursion if path to the end is found
        }
      }
    }
    return false; // Return false if no path is found from this node
  }
