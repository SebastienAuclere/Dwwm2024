<?php
$names = ['Joe', 'Jack', 'Léa', 'Zoé', 'Néo'];

function firstItem(array $names)
{
  if ($names === array())
  {
    return null;
  }
  else
  {
    return $names[0];
  }
}

function lastItem(array $names): string
{
    if ($names === array()) {
        return null;
    } else {        
        $lastElement = end($names);
        return $lastElement;
    }    
}

function sortItems(array $names): array
{
    if ($names === array()) {
        return null;
    } else {
        arsort($names);
        return $names;
    }   
}

echo firstItem($names) . PHP_EOL;
echo lastItem($names) . PHP_EOL;
var_dump(sortItems($names));