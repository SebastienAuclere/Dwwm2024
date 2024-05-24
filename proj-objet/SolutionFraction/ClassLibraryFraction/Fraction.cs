using System.Drawing;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices.ObjectiveC;

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
            return numerateur + "/" + denominateur;
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
        
        public void Oppose() //pour une procedure
        {
            this.numerateur = -this.numerateur;            
        }
        
        //inverse 1

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

        public void Reduire()
        {
            int pgcd = this.GetPgcd();
            (this.numerateur, this.denominateur) = (this.numerateur / pgcd, this.denominateur / pgcd);
            if (this.denominateur < 0)
                {
                this.numerateur *= -1;
                this.denominateur *= -1;
                }                        
        }

        // pgcd

        private int GetPgcd()
        {
            int a = this.numerateur;
            int b = this.denominateur;
            int pgcd = 1;
        if(a != 0 &&  b != 0) 
            {
                if (a < 0) a = -a;
                if (b < 0) b = -b;
                while (a != b)
                {
                    if (a < b)
                    {
                        b = b - a;
                    }
                    else 
                    {
                    a = a- b;
                    }
                }
                pgcd = a;
            }
                return pgcd;
        }

        // plus

        public Fraction Plus(Fraction _autreFraction)
        {
            int numerateurN = this.numerateur * _autreFraction.denominateur + _autreFraction.numerateur * this.denominateur;
            int denominateurN = this.denominateur * _autreFraction.denominateur;

            Fraction s = new Fraction(numerateurN, denominateurN);
            s.Reduire();

            return s;
            
        }

        // moins
        public Fraction Moins(Fraction _autreFraction) 
        {
            int numerateurN = this.numerateur * _autreFraction.denominateur - _autreFraction.numerateur * this.denominateur;
            int denominateurN = this.denominateur * _autreFraction.denominateur;
            
            Fraction t = new Fraction(numerateurN, denominateurN);
            t.Reduire();
            
            return t;
        }

        // multiplie

        public Fraction Multiplie(Fraction _autreFraction)
        {
            int numerateurN = this.numerateur * _autreFraction.numerateur;
            int denominateurN = this.denominateur * _autreFraction.denominateur;

            Fraction t = new Fraction(numerateurN, denominateurN);
            t.Reduire();

            return t;
        }

        // divise

        public Fraction Divise(Fraction _autreFraction)
        {
            int numerateurN = this.numerateur * _autreFraction.denominateur;
            int denominateurN = this.denominateur * _autreFraction.numerateur;

            Fraction t = new Fraction(numerateurN, denominateurN);
            t.Reduire();

            return t;
        }
    }
}
