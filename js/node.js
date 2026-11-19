function _Node(node) {
    this.node = node;
    this.id = node.id;
    this.visited = false;
    this.distance = Infinity;
    this.wall = node.className == "wall" ? true : false;
    this.row = node.id.split('-')[0];
    this.col = node.id.split('-')[1];
    this.parent = null;
}