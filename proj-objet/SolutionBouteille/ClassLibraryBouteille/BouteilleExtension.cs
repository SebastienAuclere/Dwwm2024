using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryBouteille
{
    public static class BouteilleExtension
    {
        public static bool Remplir(this Bouteille b, double _quantiteLiquideEmMl) // Quantité a ajouter 
        {
            /*
            if (this.estOuverte == true && this.quantiteLiquideEnMl == this.capaciteMaxEnMl)
            {
                return false;
            }
            if (this.estOuverte == true && this.quantiteLiquideEnMl + _quantiteLiquideEmMl <= this.capaciteMaxEnMl)
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
            */
            if ( b.EstOuverte == false )
            {
                return false;     
            }
            if (b.QuantiteLiquideEnMl == b.CapaciteMaxEnMl)
            {
                return false;
            }

            b.QuantiteLiquideEnMl += _quantiteLiquideEmMl;
            if (b.QuantiteLiquideEnMl > b.CapaciteMaxEnMl)
            {
                b.QuantiteLiquideEnMl = b.CapaciteMaxEnMl;
            }

            return true;
        }
    }
}
