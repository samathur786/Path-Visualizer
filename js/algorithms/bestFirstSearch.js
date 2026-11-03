function bestFirstSearch() {

    let vis = [];
    let path = [];

    start = document.getElementsByClassName("start")[0].id;
    end = document.getElementsByClassName("end")[0].id;
    let Unvnodes = document.getElementsByTagName('td');

    ListOfNodes = getAllNodes(Unvnodes);

    pq = new PriorityQueue();

    Snode = getNodeById(start)
    pq.enqueue(Snode, Snode.distance);

    endNode = getNodeById(end);

    while (!pq.isEmpty()) {
        let u = pq.dequeue();

        vis.push(u.element);

        u.element.visited = true;

        let neighbours = getNeighboursForGreedy(u.element);

        if (u.element.id == end) {
            finished = u.element;
            break;
        }
        for (var i in neighbours) {
            neighbours[i].visited = true;
            let distance = calculateSignleLineDistance(endNode, neighbours[i]);
            neighbours[i].distance = distance;
            neighbours[i].parent = u.element;
            pq.enqueue(neighbours[i], neighbours[i].distance);
        }
    }
    while (finished != null) {
        path.unshift(finished);
        finished = finished.parent;
    }
    return [vis, path]
}