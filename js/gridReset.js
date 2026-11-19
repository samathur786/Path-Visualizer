function clearAll() {
    if (!viz) {
        if (listM.length > 0) {
            clearMaze(listM, 0);
            listM.length = 0;
        }
        algoDesc.textContent=" Path Finder helps to visualizes various path finding Algorithms"
        document.getElementsByClassName('box')[0].style.display = 'none';

        gridTable.style.pointerEvents = 'all';
        startDrag = false;
        endDrag = false;
        visualizing = false;
        // Clear all manually created walls
        gridTable.querySelectorAll('.wall').forEach(element => {
            element.classList.remove('wall');
            element.classList.add('unv');
        });

        nodes.length = 0;
        ListOfNodes.forEach(element => {
            if (element.visited && element.id != start) {
                document.getElementById(end).classList.remove('shortestPath');
                document.getElementById(element.id).classList.remove('visited');
                document.getElementById(element.id).classList.remove('shortestPath');
                document.getElementById(element.id).classList.add('unv');
            } else if (element.wall && element.id != start) {
                document.getElementById(element.id).classList.remove('wall');
                document.getElementById(element.id).classList.add('unv');
            } else {
                document.getElementById(start).classList.remove('shortestPath');
                document.getElementById(element.id).classList.remove('visited');
            }
        });

        ListOfNodes.length = 0;
        visiteds.length = 0;
        vis.length = 0;
        path.length = 0;
    }
}

function clearPath() {
    if(!viz){
    algoDesc.textContent="Path Finder helps to visualizes various path finding Algorithms"
    document.getElementsByClassName('box')[0].style.display = 'none';
}
    if (ListOfNodes.length > 0 && !viz) {
        gridTable.style.pointerEvents = 'all'
        visualizing = false;
        ListOfNodes.forEach(element => {
            if (element.visited && element.id != start) {
                document.getElementById(end).classList.remove('shortestPath');
                document.getElementById(element.id).classList.remove('visited');
                document.getElementById(element.id).classList.remove('shortestPath');
                document.getElementById(element.id).classList.add('unv');
            } else {
                document.getElementById(start).classList.remove('shortestPath');
            }
        });
        vis.length = 0;
        path.length = 0;
    }
}