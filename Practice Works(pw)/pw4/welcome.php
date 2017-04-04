<?php
	session_start();
	$timeout = 4; //24*60*60*60 seconds
	$noOfVisits="counter".$_POST["u_name"];
	$randomimage="image".$_POST["u_name"];
	if((isset($_SESSION[$noOfVisits])) && (isset($_SESSION[$_POST["u_name"]])) && (isset($_SESSION[$randomimage])))   
	{
		$_SESSION[$noOfVisits] += 1;
		$duration = time() - (int)$_SESSION['timeout'];
		if($duration > $timeout) 
		{
			// Destroy the session and restart it.
			session_destroy();
			session_start();
			$_SESSION[$noOfVisits] = 1;
		}
	}
	else 
	{
		$_SESSION[$noOfVisits] = 1;
		$_SESSION[$_POST["u_name"]]=$_POST["u_name"];
		$_SESSION[$randomimage]=rand(1,11);
	}
    $_SESSION['username']=$_POST["u_name"];
	$_SESSION['fullname']=$_POST["full_name"];
	$_SESSION['emailid']=$_POST["email"];
	$_SESSION['timeout']=$timeout ;
   
	
   $message = "This page has been visited ". $_SESSION[$noOfVisits]. " times in this session.";
   $userName= "Hi ". $_SESSION['username'];
   $firstName= "Full name : ". $_SESSION['fullname'];
   $userEmail="Email Id : ". $_SESSION['emailid'];
   $imgNo=$_SESSION[$randomimage];
   $_SESSION['timeout'] = time();

?>

<html>
   
   <head>
      <title>Setting up a PHP session</title>
   </head>
   
   <body>
      <?php  echo ( $message ); ?><br/><br/><br/>
	  <?php  echo ( $userName ); ?><br/><br/>
	  <?php  echo ( $firstName ); ?><br/>
	  <?php  echo ( $userEmail ); ?><br/><br/>
	 <img src="http://localhost/<?php  echo $imgNo; ?>.png" alt="[ Random Image ]" height="150" width="150" />
   </body>
   
</html>