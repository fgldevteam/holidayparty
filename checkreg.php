<?php

//connect to DB
//$host = "calmys1db01.fglsports.dmz";
// $user = "holidayparty";
// $pass = "holidayparty";
// $db = "holidayparty";

$host = "127.0.0.1";
$user = "root";
$pass = "root";
$db = "holidayparty";

//$connection = mysqli_connect($host, $user, $pass, $db);
$email = $_REQUEST['email'];
$email = ltrim(rtrim($email));

$q = "SELECT * from registrations WHERE email = '".$email."'";

$mysqli = new mysqli($host, $user, $pass, $db);

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

$result = $mysqli->query($q);

$rows = [];

while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }

print_r(json_encode($rows));
//return $rows;



