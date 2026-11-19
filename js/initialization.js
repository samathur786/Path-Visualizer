window.onload = () => {
    make_Grid();

    previousStart = document.getElementsByClassName('start')[0];
    previousEnd = document.getElementsByClassName('end')[0];

    for (i = 0; i < HEIGHT; i += 1) {
        let id = i + "-" + 0;
        let a = document.getElementById(id); a.style.borderLeft = '1px solid rgb(175, 216, 248)'
    }
    for (i = 0; i < WIDTH; i += 1) {
        let id = HEIGHT - 1 + "-" + i;
        let a = document.getElementById(id);
        a.style.borderBottom = '1px solid rgb(175, 216, 248)'
    }
    modalalgo.style.pointerEvents = "none";
    modelMaze.style.pointerEvents = 'none';
    modalclear.style.pointerEvents = 'none';
    modalspeed.style.pointerEevent = 'none';
    gridTable.style.pointerEvents = 'none';
}