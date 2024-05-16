using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryBouteille
{
    public class Bouteille
    {
        private double capaciteMaxEnMl;
        private bool estOuverte;
        private double quantiteLiquideEnMl;

        
        public bool EstOuverte { get => estOuverte;}
        public double CapaciteMaxEnMl { get => capaciteMaxEnMl;}
        public double QuantiteLiquideEnMl { get => quantiteLiquideEnMl; set => quantiteLiquideEnMl = value; }

        public Bouteille(double _capaciteMaxEnMl)
        {
            this.capaciteMaxEnMl = _capaciteMaxEnMl;
            this.estOuverte = false;
            this.quantiteLiquideEnMl = _capaciteMaxEnMl;
        }
        public Bouteille() 
        {
            capaciteMaxEnMl = 1000;
            estOuverte = false;
            quantiteLiquideEnMl = 1000;
        }
        public bool Fermer()
        {
            if ( this.estOuverte == true )
            {
                this.estOuverte = false;
                return true;
            }
            else
            { 
                return false; 
            }
        }
        public bool Ouvrir()
        {
            if ( this.estOuverte == false)
            {
                this.estOuverte = true;
                return true;
            }
            else
            {
                return false;
            }            
        }
        public bool Remplir(double _quantiteLiquideEmMl) // Quantité a ajouter 
        {   
            if ( this.estOuverte == true && this.quantiteLiquideEnMl == this.capaciteMaxEnMl )
            {
                return false;
            }
            if ( this.estOuverte == true && this.quantiteLiquideEnMl + _quantiteLiquideEmMl <= this.capaciteMaxEnMl )
            {
                this.quantiteLiquideEnMl += _quantiteLiquideEmMl;
                return true;
            }
            if (this.estOuverte == true && this.quantiteLiquideEnMl + _quantiteLiquideEmMl > this.capaciteMaxEnMl)
            {
                this.quantiteLiquideEnMl = this.capaciteMaxEnMl;
                return true;
            }                
            else
            {   
                return false;
            }                         
        }
        public bool RemplirTout()
        {
            if ( this.estOuverte ==false || this.quantiteLiquideEnMl == this.capaciteMaxEnMl)
            {
                return false;
            }
            else 
            {
                this.quantiteLiquideEnMl = this.capaciteMaxEnMl;
                return true;
            }          
        }
        public bool Vider(double quantiteLiquideEmMl)
        {
            if ( this.estOuverte == true && this.quantiteLiquideEnMl > 0 )
            {
                this.quantiteLiquideEnMl -= quantiteLiquideEmMl;
                return true;
            }
            else
            { 
                return false;
            }            
        }
        public bool ViderTout()
        {
            if ( this.estOuverte == true && this.quantiteLiquideEnMl > 0 )
            {
                this.quantiteLiquideEnMl -= this.quantiteLiquideEnMl;
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
