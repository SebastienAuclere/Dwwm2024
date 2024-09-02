<?php

function stringLength(string $motDePasse): bool
{
    if(strlen($motDePasse) >= 9 )
    {
        return true;
    }
    else
    {
        return false;
    }
}

echo stringLength("turlututu") . PHP_EOL;
echo stringLength("turlute") . PHP_EOL;