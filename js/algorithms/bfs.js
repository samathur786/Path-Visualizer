function bredthFirstSearch() {
    let vis = [];
    let path = [];

    start = document.getElementsByClassName("start")[0].id;
    end = document.getElementsByClassName("end")[0].id;

    let Unvnodes = document.getElementsByTagName('td');

    ListOfNodes = getAllNodes(Unvnodes);

    let visited = [];

    let finished = null;
    visited.unshift(getNodeById(start));

    while (visited.length != 0) {
        let currentNode = visited.pop();
        currentNode.visited = true;

        if (currentNode.id == end) {
            finished = currentNode;
            break;
        }
        vis.push(currentNode);
        let neighbours = getNeighboursForUnweighted(currentNode);

        for (var i in neighbours) {
            neighbours[i].visited = true;
            neighbours[i].parent = currentNode; //backtracing
            visited.unshift(neighbours[i]);
        }
    }
    while (finished != null) {
        path.unshift(finished);
        finished = finished.parent
    }
    return [vis, path]
}