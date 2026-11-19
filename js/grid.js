function make_Grid() {
    let cR = "";
    var nodeNo = 0;
    for (var i = 0; i < HEIGHT; i++) {
        cR += "<tr id='row-" + i + "'>";
        for (var k = 0; k < WIDTH; k++) {
            if (nodeNo == 655) {
                cR += "<td id='" + i + "-" + k + "' draggable='false' onclick='createWall(event)' class='start'></td>";
            } else if (nodeNo == 678) {
                cR += "<td id='" + i + "-" + k + "' draggable='false' onclick='createWall(event)' class='end' style=''></td>";
            }
            else {
                cR += "<td id='" + i + "-" + k + "' draggable='false' onclick='createWall(event)' class='unv'></td>";
            }
            nodeNo++;
        }
        cR += "</tr>"
    }
    gridTable.innerHTML = cR;
}