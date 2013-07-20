/*
This is the bookmarklet which will live on in the bookmarks.
When its bookmark is clicked, all it will do is
include an external script (in this case, script.js).
*/
(function() {
    /*
    For the sake of having it available...
    If jQuery does not exist on the page, include it.
    */
    if(typeof window.$ === "undefined") {
        /* NOTE: You must use /* commenting because this code is compressed to 1 line. */
        /* Create the script tag */
        var jQ = document.createElement("script");
        /* Set an id (for the sake of being tidy). */
        jQ.id = "bm_jq";
        /* Set the source -- where it's included from. */
        jQ.src = "http://code.jquery.com/jquery-latest.min.js";
        /* Append the script so it's available. */
        document.body.appendChild(jQ);
    }
    /*
    Use a timeout so jQuery has time to be included from the Content Delivery Network.
    */
    setTimeout(function() {
        /*
        If the script was already included, ie. the bookmark was already clicked,
        remove it, then re-add it.
        */
        if($("#bm_src").length >= 1) {
            /* Error logging is always valuable, especially during development. */
            console.log("Script exists: removing.");
            $("#bm_src").remove();
        }
        /*
        In the same style that jQuery was included above: grab the external script.
        */
        var bM = document.createElement("script");
        bM.id = "bm_src";
        bM.src = "http://localhost:8888/myStuff/bookmarklet/script.js";
        document.body.appendChild(bM);
        console.log("Added script!");
    }, 250);
})();