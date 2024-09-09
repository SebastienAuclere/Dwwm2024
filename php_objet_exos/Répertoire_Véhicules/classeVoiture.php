<?php

class Voiture
{
    // Attributs

    protected $marque = null;
    protected $modele = null;    
    protected $poids = 1000;
    
    // Public getters
    
    public function getMarque()
    {
        return $this->marque;
    }

    public function getModele()
    {
        return $this->modele;
    }

    public function getPoids()
    {
        return $this->poids;
    }

    // Public setters

    public function setMarque($marque)
    {
        return $this->marque = $marque;
    }

    public function setModele($modele)
    {
        return $this->modele = $modele;
    }

    public function setPoids($poids)
    {
        return $this->poids = $poids;
    }
    
    // Constructeur

    public function _construct($marque, $modele, $poids)
    {
        $this->marque = $marque;
        $this->modele = $modele;        
        $this->poids = $poids;
    }
    
    // Fonction ensembleInformations
    
    public function ensembleInformations($marque, $modele, $poids ): string
    {
        return $marque . $modele . ", " . $poids . " kg.";
    }

    // Fonction vitesseMaxVoiture

    public function vitesseMaxVoiture($vitesseMaxMoteur, $poids): string
    {
        $vitesseMaxVoiture = ($vitesseMaxMoteur - ($poids * 0.3));
        return " La vitesse maximale de la voiture est: " . $vitesseMaxVoiture . " km/h.";
    }
}