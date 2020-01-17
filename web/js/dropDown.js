/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function dropDown(elementId){
    var ele = document.getElementById(elementId);
    
    if(ele.style.visibility === "hidden"){
        ele.style.visibility = "visible";
    }
    else{
        ele.style.visibility = "hidden";
    }
}