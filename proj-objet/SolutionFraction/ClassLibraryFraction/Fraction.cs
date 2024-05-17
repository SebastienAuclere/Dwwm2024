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

        // oppose 

        public Fraction Oppose()
        {
            return new Fraction(-(this.numerateur), this.denominateur);
        }

        // inverse

        public Fraction Inverse()
        {
            return new Fraction(this.denominateur, this.numerateur);
        }

        // superieurA

        public bool SuperieurA()
        {
            Fraction f = new Fraction();
            Fraction f1 = new Fraction();
            if (f.denominateur/f.numerateur > f1.denominateur/f1.numerateur)
            { 
                return true;
            }
            else
            { 
                return false; 
            }
        }

        // egalA

        public bool EgalA()
        {
            Fraction f = new Fraction();
            Fraction f1 = new Fraction();
            if ((f.denominateur / f.numerateur) == (f1.denominateur / f1.numerateur))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        // reduire

        private
    }
}