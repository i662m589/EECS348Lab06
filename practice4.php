<?php

$num = $_POST["size"];

echo "<table border='1'>";
    for ($i = 0; $i <= $num; $i++) {
        echo "<tr>";
            for ($j = 0; $j <= $num; $j++) {
                if ($j == 0) {
                    echo "<td>" . $i . "<td>";
                }
                elseif ($i == 0) {
                    echo "<td>" . $j . "</td>";
                }
                else {
                    echo "<td>" . $i * $j . "</td>";
                }
            }
            echo "</tr>";
    }
echo "</table>";
?>