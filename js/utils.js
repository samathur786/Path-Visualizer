function calculateSignleLineDistance(Node1, Node2) {
    var dis = 0;
    let x1 = parseInt(Node1.row)
    let y1 = parseInt(Node1.col);
    let x2 = parseInt(Node2.row);
    let y2 = parseInt(Node2.col);

    dis = Math.abs(x2 - x1) + Math.abs(y2 - y1);

    return dis;
}