/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function windowWidthInitCheck(contentElem){
    var w = window.innerWidth;
    var ele = document.getElementsByClassName(contentElem);
    if(w <= 730){
        for(i = 0; i < ele.length; i++){
            ele[i].style.flexDirection = "column";
        }
    }
    else{
        for(i = 0; i < ele.length; i++){
            ele[i].style.flexDirection = "row";
        }
    }
}