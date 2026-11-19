function AStar() {
    let vis = [];
    let path = [];

    start = document.getElementsByClassName("start")[0].id;
    end = document.getElementsByClassName("end")[0].id;
    let Unvnodes = document.getElementsByTagName('td');

    ListOfNodes = getAllNodes(Unvnodes);

    sNode = getNodeById(start);
    sNode.distance = 0;
    enode = getNodeById(end);
    pq = new PriorityQueue();
    pq.enqueue(sNode, 0)
    var finished = null;
    while (!pq.isEmpty()) {
        let u = pq.dequeue();
        u.element.visited = true;
        vis.push(u.element);
        // goal found
        if (u.element.id == end) {
            finished = u.element;
            break;
        }
        let neighbours = getNeighboursForGreedy(u.element);

        for (var i in neighbours) {
            let weight = u.element.distance + 1; //G(n)
            let gN = weight;
            neighbours[i].distance = weight;
            let distance = calculateSignleLineDistance(enode, neighbours[i]) + gN; // H(n) + G(n)
            neighbours[i].parent = u.element;
            neighbours[i].visited = true;
            pq.enqueue(neighbours[i], distance);
        }
    }
    while (finished != null) {
        path.unshift(finished);
        finished = finished.parent;
    }
    return [vis, path];

}