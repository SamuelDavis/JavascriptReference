(function() {    
    if(window.jQuery === undefined) {
        var s = document.createElement('script');
        s.src = 'http://code.jquery.com/jquery-latest.min.js';
        document.body.appendChild(s);
    }
    setTimeout(function(){
        $("#bookmarklet").remove();
        console.log($);
    }, 100);
})();