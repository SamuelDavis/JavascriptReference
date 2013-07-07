<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
        <?php
            $inject_script = "(function() { var s = document.createElement('script'); if(document.getElementById('bookmarklet') === null) { s.id = 'bookmarklet'; s.src = 'http://localhost/Bookmarklet/booklet.js'; document.body.appendChild(s); } else alert('Script already exists!'); })();";
        ?>
    </head>
    <body>
        <a href="javascript:<?=$inject_script?>">Drag me to your bookmarks and click me while browsing another page!</a>
    </body>
</html>