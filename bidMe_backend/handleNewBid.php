<?php 
    header('Access-Control-Allow-Origin: http://localhost:3000');
require("db_config.php");
if (isset($_GET)) {
    $id = $_GET["id"];
    $latest_bid = $_GET["bidAmount"];
    var_dump($id);
    $sql = "UPDATE products SET latest_bid = '$latest_bid' where id = '$id'";
    $smtmtfetch = $db->prepare($sql);
    $result = $smtmtfetch->execute();
    if($result === TRUE){
        echo "successfully updated ";
    }
}
?>