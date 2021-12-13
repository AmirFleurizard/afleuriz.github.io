<?php
if (isset($_REQUEST['name'],$_REQUEST['email'])) 
{
      
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
	$contact = $_REQUEST['contact'];
    $message = $_REQUEST['message'];
      
    
    $to = 'sample@uncc.edu';
      
    $subject = 'Contact Request From Website';
    $headers = "From: ".$name." <".$email."> \r\n";
      
    $send_email = mail($to,$subject,$message,$headers);
      
    echo ($send_email) ? 'success' : 'error';
      
}
?>