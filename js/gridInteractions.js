function createWall(event) {
    event.stopPropagation();
    cn = event.target;
    if (!cn.id.includes("row") && !(cn.className.includes("start") || cn.className.includes("end"))) {
        cn.classList.remove("unv");
        cn.classList.add("wall");
        nodes.push(cn.id);
    }
}