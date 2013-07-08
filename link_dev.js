// Do not use double-quotes (")
(function() {
    var s = document.createElement('script');
    if(document.getElementById('bookmarklet') === null) {
        s.id = 'bookmarklet';
        // Full path to js file
        s.src = 'http://localhost:8888/myStuff/bookmarklet/booklet.js';
        document.body.appendChild(s);
    }
    else
        alert('Script already exists!');
})();