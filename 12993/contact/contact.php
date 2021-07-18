<?php 
	
	$name = $_REQUEST[ 'name' ];
	$email = $_REQUEST[ 'email' ];
	$message = $_REQUEST[ 'message' ];
	$mail_subject = "Customer Contact from coming soon page";
	$message = "Name: ".$name." || Email: ".$email." || Message: ".$message;
	
	/* Replace YOUR_MAIL With Your Mail Address inside '' */
	if ( mail( 'YOUR_MAIL', $mail_subject, $message, "From:" . $email ) ) {
		echo "Thank you <strong>$name</strong> for contacting with us !!!";
	} else {
		echo "Error in sending message !!! Please try again";
	}
	
 ?>