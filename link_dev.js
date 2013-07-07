(function() {
    var s = document.createElement('script');
    if(document.getElementById('bookmarklet') === null) {
        s.id = 'bookmarklet';
        s.src = 'http://localhost/Bookmarklet/booklet.js';
        document.body.appendChild(s);
    }
    else
        alert('Script already exists!');
})();