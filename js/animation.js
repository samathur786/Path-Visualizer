function toAnimate(vis, i, prev) {
    document.getElementById(vis[i].id).classList.add("current");
    setTimeout(() => {
        if (i == vis.length - 1) {
            document.getElementById(vis[i].id).classList.remove('unv');
            document.getElementById(vis[i].id).classList.remove('current');
            document.getElementById(vis[i].id).classList.add('visited');
            visiteds.push(vis[i].id);
            textV.innerText = count;
            //animate the shortest path
            pn.style.display = 'block';
            pv.style.display = 'block';
            textP.style.display = 'block';
            count = 0
            toAnimateP(prev, 0)
            return;
        }
        document.getElementById(vis[i].id).classList.remove('unv');
        document.getElementById(vis[i].id).classList.remove('current');
        document.getElementById(vis[i].id).classList.add('visited');
        textV.innerText = count;
        count++;
        visiteds.push(vis[i].id);
        toAnimate(vis, i + 1, prev);
    }, speed);
}
//animate path
function toAnimateP(prev, i) {
    if (prev == null) {
        return;
    }
    setTimeout(() => {
        if (i == prev.length) {
            viz = false;
            count = 0;
            return;
        }
        document.getElementById(prev[i].id).classList.remove("visited");
        document.getElementById(prev[i].id).classList.add("shortestPath");
        textP.innerText = count;
        count++;
        toAnimateP(prev, i + 1);
    }, 30);
}