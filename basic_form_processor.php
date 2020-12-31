<?php
print('
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Hello world</title>
	</head>
	<body>
')

print($_GET["square_dis_number"]);

$Dnumber = $_GET["square_dis_number"];
$Dnumber *= $Dnumber;

$myName = $_GET["person"];

print('<h2>Oh hi '.$myName.' the value that you entered, squared, is '.$Dnumber.'</h2>');

print('
	</body>
</html>
');
