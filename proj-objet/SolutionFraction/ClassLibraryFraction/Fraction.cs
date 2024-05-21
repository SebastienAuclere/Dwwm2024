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
            return "le numérateur est : " + numerateur + " et le dénominateur est : " + denominateur + " ils sont séparés par une division.";
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
        /*
        public Fraction Oppose() //pour une fonction
        {
            return new Fraction(-(this.numerateur), this.denominateur);
        }
        */
        // oppose 2
        
        public void Oppose() //pour une procedure
        {
            this.numerateur = -this.numerateur;            
        }

        // inverse 1
        /*
        public Fraction Inverse()
        {
            return new Fraction(this.denominateur, this.numerateur);
        }
        */
        //inverse 2

        public void Inverse() //pour une procedure
        {
            int c;                                     
            c = this.numerateur;
            this.numerateur = this.denominateur;
            this.denominateur = c;
        }

        //inverse 3
        /*
        public void Inverse() // sucre syntaxique
        {
            (this.numerateur, this.denominateur) = (this.denominateur, this.numerateur);
        }
        */

        // superieurA
        /*
        public bool SuperieurA(Fraction f)
        {
            if ((double)this.numerateur / this.denominateur > (double)f.numerateur / f.denominateur)
            { 
                return true;
            }
            else
            { 
                return false; 
            }
        }
        */

        // superieurA2 // permet moins d'opérations pour le compileur : moins lourd...
       
        public bool SuperieurA(Fraction f1)
        {
            return (double)this.numerateur / this.denominateur > (double)f1.numerateur / f1.denominateur;
        }
        


        // egalA
        /*
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
        */
        // superieurA2 // permet moins d'opérations pour le compileur : moins lourd...

        public bool EgalA(Fraction f1)
        {
            return (double)this.numerateur / this.denominateur == (double)f1.numerateur / f1.denominateur;
        }

        // reduire




    }
}