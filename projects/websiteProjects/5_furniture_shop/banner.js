import { $APC, $CESC } from "./util.js";

export const addBannerDiv=(container)=>{
    let div=$CESC('div', 'banner-div');
    let img=$CESC('img', 'banner-img');
    img.src="./images/sofa-collection.jpg";
    $APC(div, img);
    $APC(container, div);
    return container;
}

