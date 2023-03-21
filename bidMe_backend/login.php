<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    require("db_config.php");

    if(isset($_POST)){

        $email = $_POST['email'];
        $password = sha1(($_POST['password']));

        $sql = "SELECT * from user where email='$email' and password='$password'";
        $smtmtfetch = $db->prepare($sql);
        $result = $smtmtfetch->execute();
        if($result){
            $userDetails = $smtmtfetch->fetch(PDO::FETCH_ASSOC);
        if ($userDetails) {
            echo json_encode($userDetails);
        }
        else{
            echo "login failed";
        }
        }
        else{
        echo "login failed";
        }
}
else{
    echo "post data not recieved";
}
    
?>