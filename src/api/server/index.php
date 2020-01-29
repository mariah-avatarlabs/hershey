<?php
echo "Hello World!";


$conn = new mysqli($hostname, $username, $password, $dbname); 


function createUser(){
    global $conn;
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $firstname = "testFM";
    $lastname = "testLM";
    $email = "testgmailM";

    $query = "INSERT INTO Users (firstname, lastname, email) VALUES (?, ?, ?) ";
    
    $sql = $conn->prepare($query);
    $sql->bind_param("sss", $firstname, $lastname, $email);

    if ($sql->execute()) { 
        echo "Records inserted successfully.";
     } else {
        echo " ERROR: " . $sql->error;
     }
    


};

createUser();


?>

