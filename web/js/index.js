/* 
 * Injects blog.html content into div with id specified.
 *
 */

function index(viewID){
    var indexContent = `<div class="content">
                <img class="leftImg" src="pics/dump.jpeg" alt="A dumping ground of user-generated content." />
                <p class="centerText">://dump is a new sort of media-sharing website that emphasizes content over everything else. It is mean to be a combination of "dumping ground of novel, user-generated content" and "a less toxic, more civil alternative to 4chan, but with less emphasis on discussion". The idea is very much in experimental phases and I will be expanding on the concept further in the semester. 
                    <br /><br /><a href="https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif">Here</a> is an external link, styled differently from the navbar links.
                </p>
            </div>`;
    
    document.getElementById(viewID).innerHTML = indexContent;
}


