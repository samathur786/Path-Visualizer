var listM = []
function randomMaze() {
    if (listM.length > 0) {
        clearMaze(listM, 0);
        listM.length = 0
    }
    const listNodes = document.getElementsByClassName('unv');
    let len = listNodes.length - 1;

    for (var i = 0; i < len / 4; i++) {
        listM.push(listNodes[(Math.floor(Math.random() * len))].id)
    }
    Animation(listM, 0)
}
//animate visited nodes
function Animation(list, i) {
    if (i == list.length)
        return;
    document.getElementById(list[i]).classList.remove("unv");
    document.getElementById(list[i]).classList.add("wall");
    Animation(list, i + 1);
}

function clearMaze(listM, i) {
    if (i == listM.length)
        return;
    document.getElementById(listM[i]).classList.remove("wall");
    document.getElementById(listM[i]).classList.add("unv");
    clearMaze(listM, i + 1);
}
