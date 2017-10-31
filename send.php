<?php

//connect to DB
$host = "calmys1db01.fglsports.dmz";
$user = "holidayparty";
$pass = "holidayparty";
$db = "holidayparty";

$connection = mysqli_connect($host, $user, $pass, $db);

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$fname  = $_REQUEST['fname'];
$lname = $_REQUEST['lname'];
$email = $_REQUEST['email'];
$diet = $_REQUEST['diet'];
$guest = $_REQUEST['guest'];

$q = "INSERT INTO registrations (first, last, email, guest, diet) VALUES(
	'".$fname."', 
	'".$lname."', 
	'".$email."', 
	'".$guest."', 
	'".$diet."'	 
)";
	 
mysqli_query($connection, $q) or die ("Error in query: $q. ".mysqli_error($connection));
