function getAllNodes(list) {
    let nodes = []
    for (let i = 0; i < list.length; i++) nodes.push(new _Node(list[i]))
    return nodes;
}
//get node by id;'s
function getNodeById(id) {
    for (var i in ListOfNodes) {
        if (ListOfNodes[i].id == id)
            return ListOfNodes[i]
    }
}
//update the distance
function updateDistance(node, distance) {
    node.distance = distance;
    return node;
}
//object node

//get neighbours according to start's positon 
function getNeighboursForUnweighted(node) {
    neighbours = [];
    let row = parseInt(node.row);
    let col = parseInt(node.col);
    let n1 = getNodeById(`${row + 1}-${col}`);
    let n2 = getNodeById(`${row - 1}-${col}`);
    let n3 = getNodeById(`${row}-${col - 1}`);
    let n4 = getNodeById(`${row}-${col + 1}`);
    neighbours.push(n1);
    neighbours.push(n2);
    neighbours.push(n3);
    neighbours.push(n4);
    return neighbours.filter((element) => {
        return element != undefined && !element.wall && !element.visited;
    });
}
function getNeighboursForGreedy(node) {
    neighbours = [];
    let row = parseInt(node.row);
    let col = parseInt(node.col);

    let n1 = getNodeById(`${row + 1}-${col}`);
    let n2 = getNodeById(`${row - 1}-${col}`);
    let n3 = getNodeById(`${row}-${col - 1}`);
    let n4 = getNodeById(`${row}-${col + 1}`);


    neighbours.push(n1);
    neighbours.push(n2);
    neighbours.push(n3);
    neighbours.push(n4);


    return neighbours.filter((element) => {
        return element != undefined && !element.wall && !element.visited;
    });
}
// end node
//faster then others
function findMinDistanceInGraph(graph) {
    let len = graph.length;
    let min = Infinity;
    while ((len--) != 0) {
        if (graph[len].distance < min)
            min = graph[len].distance;
    }
    return graph.find(element => element.distance == min);
}