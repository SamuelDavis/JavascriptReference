(function() {  
    if(window.jQuery === undefined) {
        var s = document.createElement('script');
        s.src = 'http://code.jquery.com/jquery-latest.min.js';
        document.body.appendChild(s);
        console.log("Added jQuery.");
    }
    setTimeout(function(){
        $("#bookmarklet").remove(); // Remove inclusion script
        main(); // Run main JS
    }, 100);

    function main()
    {
    	console.log("This is the main JS file!");
    }
})();