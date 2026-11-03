function visualize() {
    if (algoselected && !visualizing) {
        document.getElementsByClassName('box')[0].style.display = 'flex';
        pn.style.display = 'none';
        pv.style.display = 'none';
        textP.style.display = 'none';
        visualizing = true;
        viz = true;
        gridTable.style.pointerEvents = 'none';
        algoVis(algoName.textContent);
        toAnimate(vis, 0, path);
        algoDesc.textContent = "Visualizing "+algoName.textContent 
        algoDesc.style.color = "green";
    } 
    else if (!algoselected && !visualizing) {
        algoDesc.textContent = "Select Algorithm to Visualize"
        algoDesc.style.color = "red";
    }
}

function algoVis(algo) {
    vis.length = 0;
    path.length = 0;
    if (algo.includes('Dijkstra')) {
        var node = dijkstra();
        vis = node[0];
        path = node[1];
    } if (algo.includes('Breadth First Search')) {
        var node = bredthFirstSearch();
        vis = node[0];
        path = node[1];
    } if (algo.includes('Best First Search')) {
        var node = bestFirstSearch();
        vis = node[0];
        path = node[1];
    } if (algo.includes('A *')) {
        var node = AStar();
        vis = node[0];
        path = node[1];
    }
    if (algo.includes("Depth First Search")) {
        var node = depthFirstSearch();
        vis = node[0];
        path = node[1];
      }
}
