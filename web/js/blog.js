/* 
 * Injects blog.html content into div with id specified.
 */

function blog(viewID){
    var blogContent = `<div class="content">
                <p class="centerText">Blog 1 - Initial Website Structure - 1/19/2020<br /><br />This exercise, beginning with the construction of the dropdown navbar, gave me a much-needed crash course in JavaScript. This was helpful in ensuring a perfectly fluid layout, as well. I was already familiar with designing using HTML and CSS, but initially when I learned JavaScript I found the concept of the DOM confusing, and this halted my progress. However, now that I have experience with OOP, the DOM came easy to me and I was able to use JS for various things.<br /><br />I experimented heavily with extensibility in this build. I designed everything so that an arbitrary number of elements, such as content boxes (which this blog is in!), can be added and removed without breaking the site. This should come in handy in the future. CSS flexboxes also were invaluable for easily adjusting the positioning of common elements in a consistent and easily-made-fluid way. These are used alongside with custom-written JS code to create a flexible, extendible layout that can be used for a variety of things. For example, this blog.html page only took around 2 minutes to make due to these preadjustments.<br /></p>
                <img class="leftImg" src="pics/mgs2Screenshot.png" alt="la le lu li lo" />
            </div>`;
    
    document.getElementById(viewID).innerHTML = blogContent;
}

