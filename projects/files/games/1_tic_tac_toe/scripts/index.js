'use strict';
import { $QS } from './util.js';

let yellowBtn=$QS('.yellow-btn');
yellowBtn.onclick=function(e){
    e.preventDefault();
    window.location.href='./cpu.html';
}

let greenBtn=$QS('.green-btn');
greenBtn.onclick=function(e){
    e.preventDefault();
    window.location.href='./player.html';
}