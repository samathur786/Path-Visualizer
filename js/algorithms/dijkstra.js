function dijkstra() {
    prev = [];
    visited = [];

    start = document.getElementsByClassName("start")[0].id;
    end = document.getElementsByClassName("end")[0].id;

    let Unvnodes = document.getElementsByTagName('td');

    ListOfNodes = getAllNodes(Unvnodes);
    temp = ListOfNodes;
    updateDistance(getNodeById(start), 0)
    var finished = null;

    while (temp.length != 0) {
        //get min distance node
        let current = findMinDistanceInGraph(temp);
        if (current.id == getNodeById(end).id) {
            //finished becomes the last visited node
            finished = current;
            break
        }
        // no path
        if (current.distance == Infinity) break;

        visited.push(current);

        //deleting the min distance node from graph
        temp = temp.filter(ele => ele != current);

        current.visited = true;

        let neighbours = getNeighboursForUnweighted(current);

        for (var i in neighbours) {
            let distance = current.distance + 1;
            if (distance < neighbours[i].distance) {
                updateDistance(neighbours[i], distance);
                neighbours[i].parent = current;
            }
        }
    }
    //back track from finished to start
    while (finished != null) {
        prev.unshift(finished);
        finished = finished.parent;
    }
    return [visited, (prev.length > 0) ? prev : null];
}