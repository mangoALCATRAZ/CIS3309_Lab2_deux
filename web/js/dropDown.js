/* 
 * dropDown functionality, based on sally k's code, updated with new functionality 
 * and custom things.
 */


function dropDown(headerClassName, dropClassName){
    var headList = document.getElementsByClassName(headerClassName);
    
    var iconFlag = false; // helps negotiate if icon is clicked
    
    for(var i = 0; i < headList.length; i++){
        headList[i].onclick = function (){
            var dropContent = this.getElementsByClassName(dropClassName)[0];
            
            toggle(dropContent, true);
        };
        /*
        headList[i].onmouseover = toggleRollover(headList[i]);
        
        headList[i].onmouseout = function(){
            var thisHeadList2 = headList[i];
            
            toggleRollover(thisHeadList2);
        };
            // This will need to be adjusted manually.
            // i will think of another solution soon
            // for each additional menu functionality
            // needed, a new check must be coded here.
            // This has already been done for all the icons
            // in the icons folder
            
        } 
        */
    }                                           
    /* commented out. took way too long and detracted from focus. Will attempt again in later build.
    /*function toggleRollover(navButton){
        
        var thisHeadImgList = navButton.getElementsByTagName("img");        
            for(var j = 0; j < thisHeadImgList.length; j++){
                if(thisHeadImgList[j].getAttribute("src") === "icons/dark/home_icon_H24.png"){
                    thisHeadImgList[j].setAttribute("src", "icons/light/home_icon_H24.png");
                }
                else if(thisHeadImgList[j].getAttribute("src") === "icons/light/home_icon_H24.png"){
                    thisHeadImgList[j].setAttribute("src" === "icons/dark/home_icon_H24.png");
                }
                
                
                else if(thisHeadImgList[j].getAttribute("src") === "icons/dark/blog_icon_H24.png"){
                    thisHeadImgList[j].setAttribute("src", "icons/light/blog_icon_H24.png");
                }
                else if(thisHeadImgList[j].getAttribute("src" === "icons/light/blog_icon_H24.png")){
                    thisHeadImgList[j].setAttribute("src", "icons/dark/blog_icon_H24.png");
                }
                
                
                else if(thisHeadImgList[j].getAttribute("src") === "icons/dark/account_dd_icon_H24.png"){
                    thisHeadImgList[j].setAttribute("src", "icons/light/account_icon_H24.png");
                }
                else if(thisHeadImgList[j].getAttribute("src") === "icons/light/acocunt_dd_icon_H24.png"){
                    thisHeadImgList[j].setAttribute("src", "icons/dark/account_dd_icon_H24.png");
                }
                
                
                else if(thisHeadImgList[j].getAttribute("src") === "icons/dark/search_dd_icon_H24.png"){
                    thisHeadImgList[j].setAttribute("src", "icons/light/search_dd_icon_H24.png");
                }
                else if(thisHeadImgList[j].getAttribute("src") === "icons/light/search_dd_icon_H24.png"){
                    thisHeadImgList[j].setAttribute("src", "icons/dark/search_dd_icon_H24.png");
                }
                
                
                else if(thisHeadImgList[j].getAttribute("src") === "icons/dark/tutorial_dd_icon_H24.png"){
                    thisHeadImgList[j].setAttribute("src", "icons/light/tutorial_dd_icon_H24.png");
                }
                else if(thisHeadImgList[j].getAttribute("src") === "icons/light/tutorial_dd_icon_H24.png"){
                    thisHeadImgList[j].setAttribute("src", "icons/dark/tutorial_dd_icon_H24.png");
                }
            }
    }
    */
    function toggle(elem){                       
        if(elem.style.visibility === "hidden"){
            elem.style.visibility = "visible";
        }
        else if(elem.style.visibility === "visible"){
            elem.style.visibility = "hidden";
        }
        
        iconFlag = true;
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
        if((!event.target.className.includes(headerClassName) && iconFlag === false)){
            hideExcept(null);
        }
        iconFlag = false;
    };
}