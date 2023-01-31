//array list of win combo arrays
export const arrList=[
    [0,1,2],  [3,4,5], [6,7,8],
    [0, 3, 6],[1, 4, 7], [2, 5, 8], 
    [2, 4, 6], [0,4,8]
     
]; //horizontal , vertical and diagonal

export const TURN_INDICATOR_IMAGE_X=`
        <div class="turn-indicator-img-div">    
                <svg class="turn-img" viewbox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/></svg>
        </div>            
        <span>Turn </span>
`;
export const TURN_INDICATOR_IMAGE_O=`
                <div class="turn-indicator-img-div">
                        <svg class="turn-img" viewbox="0 0 64 64"  width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/></svg>
                </div>            
                <span>Turn </span>
        `;

export const X_IMAGE='<img src="./assets/icon-x.svg" alt="icon x"  />';
export const O_IMAGE='<img src="./assets/icon-o.svg" alt="icon o"  />';

export const X_WIN_MESSAGE="X TAKES THE ROUND";
export const O_WIN_MESSAGE="O TAKES THE ROUND";
export const TIE_MESSAGE="ROUND TIED";
export const RESTART_MESSAGE="RESTART GAME";