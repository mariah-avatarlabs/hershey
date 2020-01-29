<?php

$hostname="localhost";
$username="root";
$password="";
$dbname="hershey_sweep";

$conn = new mysqli($hostname, $username, $password, $dbname); 

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// utils
function generateTimestamp(){
	return date("Y-m-d H:i:s", $unixTimeStampValue);
}



function create(){
    global $conn;
	
	 $firstname = $_POST["firstname"];
	 $lastname = $_POST["lastname"];
	 $email = $_POST["email"];

    $query = "INSERT INTO Users (firstname, lastname, email) VALUES (?, ?, ?) ";
    
    $sql = $conn->prepare($query);
    $sql->bind_param("sss", $firstname, $lastname, $email);

    if ($sql->execute()) { 
        echo "Records inserted successfully.";
     } else {
        echo " ERROR: " . $sql->error;
     }
    
};



function retrieve(){
    global $conn;
	
	$email = $_POST["email"];

    $query = "SELECT * FROM `Users` WHERE `email` = (?) ";
    $sql = $conn->prepare($query);
    $sql->bind_param("s", $email);

    $users = array();

    if ($sql -> execute()) { 
        $result = $sql->get_result();

        // REFACTOR: CHECK HOW MANY RESULTS
        while ($row = $result->fetch_array(MYSQLI_ASSOC)){
	 	    echo json_encode($row);
	 	    return json_encode($row);
        }


     } else {
        echo " ERROR: " ;
     }
    
};

function retrievePrize(){

}

 function wonPrize(){
 	/// attach prize id to user

 	// add timestamp to prize

 }

 function claimedPrize(){
 	// add timesstamp to prize

 }




$action =  $_POST['action'];
switch ($action) {
	case 'create':
		create();		
		break;

	case 'retrieve':
		retrieve();		
		break;	

	case 'retrievePrize':
		retrievePrize();
		break;

	case 'won':
		wonPrize();		
		break;	

	case 'claim':
		claimedPrize();		
		break;			
	
	default:
		retrieve();
		break;
}


?>

