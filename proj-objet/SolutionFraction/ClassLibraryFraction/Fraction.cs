namespace ClassLibraryFraction
{
    public class Fraction
    {        
        // variables

        private int numerateur, denominateur;


        // getters setters

        public int numerateurX { get => numerateur; set => numerateur = value; }
        public int denominateurY { get => denominateur; set => denominateur = value; }

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
            return "la numérateur est : " + numerateur + " et le dénominateur est : " + denominateur +"ils sont séparés par une division.";
        }      
    }
}