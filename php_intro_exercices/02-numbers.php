<?php

function getSum(int $val1, $val2): int{
    return $val1 + $val2;
}

echo getSum(5, 3);

function getSub(int $val1, $val2): int{
    return $val1 - $val2;
}

echo getSub(5, 3);

function getMulti(float $val1, $val2): float{
    return round(($val1 * $val2),2);
} 

echo getMulti(8.2589, 3.256);