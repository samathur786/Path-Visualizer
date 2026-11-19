var algoselected = false;
const modalalgo = document.getElementById('algobtntext')
const modelMaze = document.getElementById('mazebtntext')
const modalspeed = document.getElementById('speedbtntext')
const modalclear = document.getElementById('btnclearswalls')
const dropDownAlgo = document.getElementsByClassName('algodropdownContent')[0];
const dropDownspeed = document.getElementsByClassName('speeddropdownContent')[0];
const dropDownmaze = document.getElementsByClassName('mazaDropDowncontent')[0];
const dropDownsclear = document.getElementById('clear');
const gridTable = document.getElementById('gridTable');
const bv = document.getElementById('boxVisited');
var textP = document.getElementById('textP');
var pn = document.getElementById('pn');
var textV = document.getElementById('textV');
var algoName = document.getElementById('algoName');
var algoDesc = document.getElementById('algoDesc');
var td = document.getElementsByTagName('td')
var pv = document.getElementById('pathVisited')
var ListOfNodes = [];
var nodes = [];
var visiteds = [];
var vis = [];
var path = [];
var viz = false;
var start;
var end;
var count = 0;
var WIDTH = 50;
var HEIGHT = screen.height> 800 ?30:16;
var speed = 5;
var mouseclicked = false;
var startDrag = false;
var endDrag = false;
var rightpressed = false;
var previousStart;
var previousEnd;
let curr;
var pps = 'unv'
var ppe = 'unv'
var visualizing = false;
