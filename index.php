<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
</head>
<body>
	<div id="output"></div>

	<div id="scripts">
	<?php
	/* Create a footer including all JS files in this folder. */
	foreach(scandir(__DIR__) as $file)
	{
		if(end(explode(".", $file)) == "js")
			echo "<script type='text/javascript' src='$file'></script>";
	}
	?>
	</div>
</body>
</html>