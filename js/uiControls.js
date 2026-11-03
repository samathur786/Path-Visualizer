function changeAlgo(element) {
    modalalgo.textContent = element.textContent;
    algoName.textContent = element.textContent;
    algoselected = true;
    dropDownAlgo.style.display = 'none';
}

function changeMaze(element) {
    modelMaze.textContent = element.textContent;
    dropDownmaze.style.display = 'none';
}

function changeSpeed(element) {
    modalspeed.textContent = element.textContent;
    dropDownspeed.style.display = 'none';
    if (element.textContent.includes('Super Fast'))
        speed = 1;
    if (element.textContent.includes('Fast'))
        speed = 10;
    if (element.textContent.includes('Medium'))
        speed = 75;
    if (element.textContent.includes('Slow'))
        speed = 550;
}

function DropDown(event) {
    if (event.target == modalalgo && dropDownAlgo.style.display == 'flex') {
        dropDownAlgo.style.display = 'none';
        
    } else if (event.target == modalalgo && dropDownAlgo.style.display != 'flex') {
        dropDownAlgo.style.display = 'flex';
        dropDownspeed.style.display = 'none';
        dropDownmaze.style.display = 'none';
    }
    if (event.target == modalspeed && dropDownspeed.style.display == 'block') {
        dropDownspeed.style.display = 'none';
    } else if (event.target == modalspeed && dropDownspeed.style.display != 'block') {
        dropDownspeed.style.display = 'block';
        dropDownAlgo.style.display = 'none';
        dropDownmaze.style.display = 'none';
    }
    if (event.target == modelMaze && dropDownmaze.style.display == 'block') {
        dropDownmaze.style.display = 'none';
    } else if (event.target == modelMaze && dropDownmaze.style.display != 'block') {
        dropDownmaze.style.display = 'block';
        dropDownAlgo.style.display = 'none';
        dropDownspeed.style.display = 'none';
    }
}

function closePopUp(element){
    modalalgo.style.pointerEvents = "all";
    modelMaze.style.pointerEvents = 'all';
    modalclear.style.pointerEvents = 'all';
    gridTable.style.pointerEvents = 'all';
    element.parentNode.remove()
}