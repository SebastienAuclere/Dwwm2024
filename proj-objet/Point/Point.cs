using System.Runtime.InteropServices;

namespace LibPoint
{
    public class Point
    {
        // variables

        private float x, y;
        

        // getters setters

        public float X { get => x; set => x = value; }
        public float Y { get => y; set => y = value; }

        // constructeurs
        public Point()
        {
            this.x = 5;
            this.y = 4;
        }
        public Point(float _x, float _y) 
        {
            this.x = _x;
            this.y = _y;
        }

        public Point(Point p)
        {   
            this.x = p.x; 
            this.y = p.y; 
        }
        
        // methodes

        // afficher
        public override string ToString()
        {
            return "la coordonnée de l'abcisse est : " + x + " et l'ordonnée est :" + y ;
        }

        // deplacer
        public void Deplacer(float _nouveauX,float _nouveauY)
        {
            this.x = _nouveauX;
            this.y = _nouveauY;
        }

        // symetrie axe abcisse

        public Point SymetrieAxeAbscisse() 

        {
            return new Point(this.x, -(this.y));         
        }

        // symetrie axe ordonnee

        public Point SymetrieAxeOrdonnee()
        {
            return new Point(-(this.x), this.y);
        }

        // symetrie point d'origine

        public Point SymetriePointOrigine()
        {
            return new Point(-(this.x), -(this.y));
        }

        // permutter coordonnees bissectrices

        public Point SymetrieBissectrice() 
        {           
            return new Point(this.y, this.x);            
        }
    }
}