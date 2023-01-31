//importing functions from other files
//importing utility functions
import { $QS} from './util.js';


let yellowBtn=$QS('.player-btn');
yellowBtn.onclick=function(){
    window.location.href='./player.html';
}