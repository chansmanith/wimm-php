<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "wimm";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM major";
$result = $conn->query($sql);
$majorData = array();

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $eachMajor = array();

        array_push( $eachMajor, $row["majorName"], $row["majorAbv"], $row["majorInfo"], $row["careerInfo"], $row["careerList"], $row["courseList"]);

        $majorData[$row["majorAbv"]] = $eachMajor;
    }
} 
// print_r($majorData);

$sqlQuiz = "SELECT * FROM questions";
$result2 = $conn->query($sqlQuiz);
$quizData = array();

if ($result2->num_rows > 0) {
    // output data of each row
    while($row = $result2->fetch_assoc()) {
        $eachQuestion = array();

        array_push( $eachQuestion, 
        $row["question"],
        $row["subtitle"],
        $row["answer"]);


        array_push($quizData, $eachQuestion);
    }
} 

// print_r($quizData);


$sqlPoint = "SELECT * FROM point";
$result3 = $conn->query($sqlPoint);
$pointData = array();

if ($result2->num_rows > 0) {
    // output data of each row
    while($row = $result3->fetch_assoc()) {
        $pointData[$row["qNum"]] = $row["point"];
    }
} 

// print_r($pointData);

$conn->close();



?>