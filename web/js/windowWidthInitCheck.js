/* 
 * This function initially runs upon loading of the page. It takes in the name 
 * of the content-box and header classes detailed in style.css. It then does a
 * check
 */


function windowWidthInitCheck(contentElem, headerElem){
    var w = window.innerWidth;
    var ele = document.getElementsByClassName(contentElem);
    
    
    if(w <= 730){ // if window width dips below 730 px, often on mobile
        for(i = 0; i < ele.length; i++){
            var thisEleChildren1 = ele[i].children;
            ele[i].style.flexDirection = "column"; //adjusts content elements to fit in column for portrait display, for mobile.
            
            for(j = 0; j < thisEleChildren1.length; j++){
                if(thisEleChildren1[j].className === "centerText"){
                    thisEleChildren1[j].style.marginBottom = "1.5%"; // setting content text margin-bottom to 1%, since it is no longer centered to the right of the image
                }
            }
        }
    }
    else{
        for(i = 0; i < ele.length; i++){
            var thisEleChildren2 = ele[i].children;
            ele[i].style.flexDirection = "row"; // adjusts content elements to landscape display, for desktop
            
            for(j = 0; j < thisEleChildren2.length; j++){ // setting content text margin back to auto, to center it in div
                if(thisEleChildren2[j].className === "centerText"){
                    thisEleChildren2[j].style.marginBottom = "auto";
                }
            }
        }
    }
    
    var headEle = document.getElementsByClassName(headerElem);
    
    if(w <= 730){ // if narrowed screen resolution below 730 px, usually for mobile
        for(i = 0; i < headEle.length; i++){          
            var thisHeadChildren1 = headEle[i].children; // get children from each header found
            
            for(j = 0; j < thisHeadChildren1.length; j++){
                if(thisHeadChildren1[j].className === "title"){ //adjusts title, centering it and removing margin
                    thisHeadChildren1[j].style.textAlign = "center";
                    thisHeadChildren1[j].style.marginLeft = "0";
                    
                }
                else if(thisHeadChildren1[j].className === "navFlex"){ // centers nav bar in its container
                    thisHeadChildren1[j].style.alignItems = "center";
                    thisHeadChildren1[j].style.marginLeft = "0";
                }
            }
            
            headEle[i].style.flexDirection = "column"; // adjusts layout of header to column for portrait-type displays
            headEle[i].style.alignItems = "center"; // centers all header elements
        }
        
    }
    else{ //large screen resolution aka not mobile
        for(i = 0; i < headEle.length; i++){
            var thisHeadChildren2 = headEle[i].children; //list of header objects, usually just one
            
            for(j = 0; j < thisHeadChildren2.length; j++){
                if(thisHeadChildren2[j].className === "title"){ // adjusting title to be left-aligned, with a slight margin. for non-mobile
                    thisHeadChildren2[j].style.textAlign = "left";
                    thisHeadChildren2[j].style.marginLeft = "1%";
                }
                else if(thisHeadChildren2[j].className === "navFlex"){ // uncenter nav bar for desktop display
                    thisHeadChildren2[j].style.alignItems = "flex-end";
                    thisHeadChildren2[j].style.marginLeft = "20%";
                }
            }
            
            headEle[i].style.flexDirection = "row"; // adjusts to widescreen landscape view for header
            headEle[i].style.alignItems = "stretch"; //sets default alignment fo rall items in header
        }
    }
}