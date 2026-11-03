gridTable.onmousedown = (event) => {
    if (event.button == 2) {
        rightpressed = true;
    }
    if (!mouseclicked && !(event.target.className.includes("start") || event.target.className.includes("end")))
        mouseclicked = true;
    else {
        mouseclicked = false;
        if (event.target.className == 'start')
            startDrag = true;
        else
            endDrag = true;
    }
}

gridTable.onmouseup = () => {
    if (rightpressed)
        rightpressed = false;
    if (mouseclicked)
        mouseclicked = false;
    else if (startDrag || endDrag)
        startDrag = false;
    endDrag = false;
}

gridTable.onmousemove = (event) => {
    event.stopPropagation();

    if (rightpressed && event.target.className == "wall") {
        event.preventDefault();
        event.target.classList.remove("wall");
        event.target.classList.add("unv");
    }
    if (!rightpressed && mouseclicked &&
        !(event.target.tagName == "TBODY" || event.target.tagName == "TABLE" ||
            event.target.tagName == "TR" || event.target.className == "start" || event.target.className == "end")) {
        let p = event.target;
        p.classList.remove("unv");
        p.classList.add("wall");
    } else if (!(event.target.tagName == "TABLE")) {
        //if start node is selected
        if (startDrag) {
            curr = event.target
            currClassName = curr.className;
            previousStart.classList.remove("start")
            previousStart.classList.add(pps) //pps is prevous start class
            curr.classList.remove("unv");
            if (event.target.className == "end") {
                curr.classList.remove("end");
                curr.classList.add("start");
                previousEnd.classList.remove("end");
                previousEnd.classList.add("unv");
                previousEnd = previousStart;
                previousEnd.classList.remove("unv");
                previousEnd.classList.remove("start");
                previousEnd.classList.add("end");
                previousStart = event.target;
                return;
            }
            if (event.target.className == 'wall') {
                pps = "wall"
                curr.classList.remove("wall")
            } else {
                pps = "unv"
            }
            curr.classList.add("start");
            previousStart = event.target;

        }
        // if end node is selected
        else if (endDrag) {
            let curr = event.target
            previousEnd.classList.remove("end")
            previousEnd.classList.add(ppe)//ppe previous end class
            curr.classList.remove("unv");
            if (event.target.className == "start") {
                curr.classList.remove("start");
                curr.classList.add("end");
                previousStart.classList.remove("start");
                previousStart.classList.add("unv");
                previousStart = previousEnd;
                previousStart.classList.remove("unv");
                previousStart.classList.remove("end");
                previousStart.classList.add("start");
                previousEnd = event.target;
                return
            } if (event.target.className == "wall") {
                ppe = "wall"
                curr.classList.remove("wall");
            } else {
                ppe = "unv"
            }
            curr.classList.add("end")
            previousEnd = event.target;
        }
    }
    pN = event.target;

}