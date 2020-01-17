/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function dropInit(dropClassName){
    var dropList = document.getElementsByClassName(dropClassName);
    
    for(var i = 0; i < dropList.length; i++){
        dropList[i].style.visibility = "hidden";
    }
}

function dropDown(headerClassName, dropClassName){
    var headList = document.getElementsByClassName(headerClassName);
    
    for(var i = 0; i < headList.length; i++){
        headList[i].onclick = function (){
            var dropContent = this.getElementsByClassName(dropClassName)[0];
            
            toggle(dropContent);
        };
    }
    
    function toggle(elem){
        if(elem.style.visibility === "hidden"){
            elem.style.visibility = "visible";
        }
        else if(elem.style.visibility === "visible"){
            elem.style.visibility = "hidden";
        }
    }
    
    function hideExcept(loneElem){
        var dropList = document.getElementsByClassName(dropClassName);
        for(var i = 0; i < dropList.length; i++){
            if(loneElem === null || !(dropList[i] === loneElem)){
                if(dropList[i].style.visibility === "visible"){
                    dropList[i].style.visibility = "hidden";
                }
            }
        }
    }
    
    window.onclick = function(event){
        if(!(event.target.className.includes(headerClassName))){
            hideExcept(null);
        }
    };
}