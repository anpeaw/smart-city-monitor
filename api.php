<?php
header("Content-Type: application/json");

$data = [
    "aria" => rand(20, 80),
    "traffico" => rand(30, 90),
    "energia" => rand(10, 100)
];

echo json_encode($data);
?>