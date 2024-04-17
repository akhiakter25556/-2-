<?php
$username=$-POST['username'];
$email=$-POST['email'];
$phone=$-POST['phone'];
$password=$-POST['password'];
$gender=$-POST['gender'];
//connection--------->>>>>>>>>>>>>>>

$conn=new
mysqli('localhost','root',"",'seni cake');
if($conn->connect_error){

    die('connection faild'.
    $conn->connect_error
    
);
}else{
$stmt=$conn-.prepare("insert
into
seni-cake(username,email,phone,password,gender)
values(?,?,?,?,?)");
$stmt->bind_param('ssiss',
$username,$email,$phone,$password,$gender);
$stmt->execute();
echo 'Submission is succesfully done!';
$stmt->close();
$conn->close();
}











?>