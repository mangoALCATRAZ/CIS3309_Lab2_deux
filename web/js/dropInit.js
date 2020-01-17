/* 
 Initializes all drop down menus as hidden. This had to be done due to
probelms found while debugging. This runs upon execution of the webpage.
 */
function dropInit(dropClassName){
    var dropList = document.getElementsByClassName(dropClassName);
    
    for(var i = 0; i < dropList.length; i++){
        dropList[i].style.visibility = "hidden";
    }
}

