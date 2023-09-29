<?php
  $servername = "localhost";
  $username = "root";
  $password = "nest1007";
  $dbname = "motorhome";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  $name = $_POST['name'];
  $lastname = $_POST['lastname'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "<script>console.log('Connected')</script>";
  $sql = "INSERT INTO customer (name, lastname, phone, email) VALUES ('$name', '$lastname', '$phone' ,'$email')";

  if ($conn->query($sql) === TRUE) {
    echo "<script>console.log('New record created successfully')</script>";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
?>