<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    require("db_config.php");

    if(isset($_GET)){

        $sql = "SELECT * from products";
        $smtmtfetch = $db->prepare($sql);
        $result = $smtmtfetch->execute();
        if($result){
            $productArray = $smtmtfetch->fetchAll(PDO::FETCH_ASSOC);
        if ($productArray) {
            echo json_encode($productArray);
        }
        else{
            echo "no products";
        }
        }
        else{
        echo "could not fetch products";
        }
}
else{
    echo "could not fullfill request";
}
    
?>