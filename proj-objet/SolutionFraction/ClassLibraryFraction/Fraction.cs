using System.Drawing;

namespace ClassLibraryFraction
{
    public class Fraction
    {        
        // variables

        private int numerateur, denominateur;


        // getters setters

        public int Numerateur { get => numerateur; private set => numerateur = value; }
        public int Denominateur { get => denominateur; private set => denominateur = value; }

        // constructeurs
        public Fraction()
        {
            this.numerateur = 5;
            this.denominateur = 4;
        }
        public Fraction(int _numerateur, int _denominateur)
        {
            this.numerateur = _numerateur;
            this.denominateur = _denominateur;
        }

        public Fraction(Fraction f)
        {
            this.numerateur = f.numerateur;
            this.denominateur = f.denominateur;
        }

        // methodes

        // afficher
        public override string ToString()
        {
            return "le numérateur est : " + numerateur + " et le dénominateur est : " + denominateur + "ils sont séparés par une division.";
        }
        
        // representation textuelle

        public string RepresentationTextuelle()
        {
            if (denominateur == 1)
            {
                return "<<" + numerateur + ">>";
            }
            else  
            {
                return "<<" + numerateur + "/" + denominateur + ">> ";
            }            
        }

        // oppose 1        
        public Fraction Oppose()
        {
            return new Fraction(-(this.numerateur), this.denominateur);
        }
        
        // oppose 2
        /*
        public void Oppose()
        {
            this.numerateur = -this.numerateur;            
        }
        */

        // inverse

        public Fraction Inverse()
        {
            return new Fraction(this.denominateur, this.numerateur);
        }

        // superieurA

        public bool SuperieurA(Fraction f1)
        {
            if ((double)this.numerateur / this.denominateur > (double)f1.numerateur / f1.denominateur)
            { 
                return true;
            }
            else
            { 
                return false; 
            }
        }

        // egalA

        public bool EgalA(Fraction f1)
        {         
            if ((double)this.numerateur / this.denominateur == (double)f1.numerateur / f1.denominateur)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        // reduire



         
    }
}