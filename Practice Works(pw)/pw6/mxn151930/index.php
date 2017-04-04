<html>
<head>
<title> Books list</title>
</head>

<body>

<table border="2">
<tr><th>book-id</th><th>title</th><th>year</th><th>price</th><th>category</th></tr>

<?php

$dbName = "test";
try{
	$db = new PDO("mysql:dbname=".$dbName.";host=localhost", "root", "root");
	$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	$year=$_GET["q"];
	$rows=$db->query("SELECT * FROM book");
	foreach ($rows as $row) {
		//echo "\n".$row['book-id']." ".$row['title']." ".$row['year']." ".$row['price']." ".$row['category'];
		echo "<tr><td>".$row['book-id']."</td><td>".$row['title']."</td><td>".$row['year']."</td><td>".$row['price']."</td><td>".$row['category'];"</td></tr>";
	}
	}
	
catch(PDOException $ex) {
	echo "<p>error connection to db.</p>";
	exit;		
}


?>

</table>

</body>
</html>
