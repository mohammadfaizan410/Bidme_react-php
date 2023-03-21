<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    require("db_config.php");

    if(isset($_POST)){

        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $email = $_POST['email'];
        $password = sha1(($_POST['password']));

        $sql = "SELECT * from user where email='$email'";
        $smtmtfetch = $db->prepare($sql);
        $result = $smtmtfetch->execute();
        if($result){
            $user = $smtmtfetch->fetchAll(PDO::FETCH_ASSOC);
        }

        if(count($user) > 0){
            echo "user exists";
        }
        else{        
        $sql = "INSERT INTO user (name, surname, email, password) VALUES(?,?,?,?)";
        $smtminsert = $db->prepare($sql);
        $result = $smtminsert->execute([$name, $surname, $email, $password]);
        if ($result) {
            echo 'registered';
        } else {
            echo 'failed';
        }
    }
}
else{
    echo "post data not recieved!";
}
    
?>