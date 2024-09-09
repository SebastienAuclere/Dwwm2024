<?php

class Moteur
{
    // Attributs

    protected $marqueMoteur = null;
    protected $vitesseMaxMoteur = null;
    

    // Public getters

    public function getMarqueMoteur()
    {
        return $this->marqueMoteur;
    }

    public function getVitesseMaxMoteur()
    {
        return $this->vitesseMaxMoteur;
    }   

    // Public setters

    public function setMarqueMoteur($marqueMoteur)
    {
        return $this->marqueMoteur = $marqueMoteur;
    }

    public function setVitesseMaxMoteur($vitesseMaxMoteur)
    {
        return $this->vitesseMaxMoteur = $vitesseMaxMoteur;
    }

    // Constructeur

    public function _construct($marqueMoteur, $vitesseMaxMoteur)
    {
        $this->marqueMoteur = $marqueMoteur;
        $this->vitesseMaxMoteur = $vitesseMaxMoteur;
        
    }

    // Fonction ensembleInformations

    public function ensembleInformations($marqueMoteur, $vitesseMaxMoteur): string
    {
        return "Le moteur est de marque " . $marqueMoteur . " et possède une vitesse maximum de: " . $vitesseMaxMoteur . " .";
    }
}
