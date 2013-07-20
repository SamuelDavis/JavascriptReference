<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
        <?php
        ?>
    </head>
    <body>
        <!-- Print out the scripts to the page to see what's actually being included. -->

        <!-- This is the script which will go on the bookmark bar. It only includes the 'real' script. -->
        <h3>Bookmarklet code:</h3>
        <?="<pre>".str_replace("\"", "'", file_get_contents("./bookmarklet.js"))."</pre>"?>

        <!-- This is the script which is included by the bookmarklet script. All the 'real' code goes in here. -->
        <h3>Bookmarklet included script:</h3>
        <?="<pre>".str_replace("\"", "'", file_get_contents("./script.js"))."</pre>"?>

        <!--
        Create the actual bookmarklet link. Echo the inlusion-script (bookmarklet.js) into its href.
        Use a little php to format and print the script so you don't have to manually use a minifier.
        -->
        <a href="javascript:<?=str_replace("\"", "'", file_get_contents("./bookmarklet.js"))?>">Put this in your bookmarks!</a>
    </body>
</html>