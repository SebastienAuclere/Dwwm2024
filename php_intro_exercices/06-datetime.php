<?php

function getToday(): string
{
    $date = new DateTime("now");
    return $date->format('d/m/Y');
}

function getToday2(): string
{
    $dateToday = new DateTime("now");
    return $dateToday->format("Y-m-d");
}

function getTimeLeft(string $date): string
{
    if ( $date === date("Y-m-d")){
        if ( $date < getToday2())
        {
            return "Evenement passé";
        }
        elseif ( $date === getToday2())
        {
            return "Aujourd'hui";
        } 
        else 
        {
            return "Dans " . ( $date("Y") - ((new DateTime("now"))->format("Y"))) . " ans" 
            . ( $date("m") - ((new DateTime("now"))->format("m"))) . " mois et "
             . ( $date("d") - ((new DateTime("now"))->format("d"))) . " jours";
        }
    } 
    else
    {
        return "date is not valid, enter a new date.";
    }
}

function getTimeLeft2(string $annee, string $mois, string $jour): string
{
    $date = new DateTime('now');
    $ladate = $date->format('Y-m-d');
    $ladateseconde = strtotime($date->format('Y-m-d'));
    $customdateseconde = strtotime($annee . '-' . $mois . '-' . $jour);
    $datediff = $customdateseconde - $ladateseconde;
    $years = floor($datediff / (365.25 * 60 * 60 * 24));
    $months = floor(($datediff - $years * 365.25 * 60 * 60 * 24) / (30.437 * 60 * 60 * 24)); /* 30.437 = moyenne des mois */
    $days = floor(($datediff - $years * 365.25 * 60 * 60 * 24 - $months * 30.437 * 60 * 60 * 24) / (60 * 60 * 24));

    if ($annee . '-' . $mois . '-' . $jour === $ladate) {
        return "Aujourd'hui";
    } elseif ($annee . '-' . $mois . '-' . $jour < $ladate) {
        return "Évènement passé";
    } elseif ($datediff <= 2419200 && $datediff >= 86400) {
        return 'Dans ' . $days  . ' jour(s)';
    } elseif ($datediff <= 31536000 && $datediff > 2419200) {
        return 'Dans ' . $months . ' mois et ' . $days . ' jour(s)';
    } elseif ($datediff > 31536000) {
        return 'Dans ' . $years . ' année(s) et ' . $months . ' mois';
    }
}

$booleen = false;

echo getToday() . PHP_EOL;
echo getToday2() . PHP_EOL;
echo getTimeLeft("2020-11-23") . PHP_EOL;
echo getTimeLeft("2024-08-28") . PHP_EOL;
echo getTimeLeft("2024-08-26") . PHP_EOL;
echo getTimeLeft("2025-09-29") . PHP_EOL;
echo $boleen;
