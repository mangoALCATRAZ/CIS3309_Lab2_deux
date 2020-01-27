/* 
 *This routing function takes in all of its parameters from the master HTML document,
 *and simply performs the replacing operation. This is so that it can be reused
 *and extended without fundamentally changing functionality. 
 */

function routeFW(params){
    var box = params.viewID;
    var arr = params.routeArray;
    
    function router(){
        var curHash = window.location.hash;
        
        if(!arr[curHash]){
            alert("router error on line 14!");
        }
        else{
            arr[curHash](box);
        }
    }
    
    window.addEventListener('hashchange', router);
    window.location.hash = "#/";
    
    return;
}
