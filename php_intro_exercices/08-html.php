<?php

$names = ["Joe", "Jack", "Léa", "Zoé", "Néo"];

function htmlList(string $nomListe, array $elementListe)
{
    echo "<h3>" . $nomListe . "</h3>" . PHP_EOL;
    if ($elementListe == [])
    {
        return "<p>Aucun résultat</p>";
    } 
    else
    {
        sort($elementListe);
        $liste = "<ul>";
        foreach ($elementListe as $value)
        {            
            $liste .= PHP_EOL . "    <li>" . $value . "</li>";           
        } 
        $liste .= PHP_EOL . "</ul>";
        return $liste;               
    }   
}

echo htmlList("Listes des personnes", $names);