<?php 

$dbName = "test";
try{
	$db = new PDO("mysql:dbname=".$dbName.";host=localhost", "root", "root");
	$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	$year=$_GET["q"];
	$rows=$db->query("SELECT * FROM babynames WHERE year=".$year." order by gender,ranking");
	foreach ($rows as $row) {
		echo $row['name']." ".$row['ranking']." ";
	}
	}catch(PDOException $ex) {
	echo "<p>error connection to db.</p>";
	exit;		
}

?>
