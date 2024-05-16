using ClassLibraryBouteille;

namespace ConsoleAppTestBouteille
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            
            //afficher la bouteille
            Bouteille a = new Bouteille();
            bool bouchon = a.Ouvrir();            
            bool vide = a.ViderTout();
            Console.WriteLine("Voici la quantité de la bouteille:" + a.QuantiteLiquideEnMl);
            Console.WriteLine("La bouteille est ouverte? " + a.EstOuverte);
            Console.WriteLine("Voici la quantité de la bouteille:" + a.CapaciteMaxEnMl);
            Console.WriteLine("J'ai réussi a ouvrir ma bouteille:" + bouchon);
            Console.WriteLine("J'ai réussi a vider ma bouteille:" + vide);

            Bouteille b = new Bouteille(800);
            bouchon = b.Ouvrir();
            vide = b.ViderTout();
            bool ferme = b.Fermer();
            bouchon = b.Ouvrir();
            bool plein = b.Remplir(900);
            Console.WriteLine("Est ce que la bouteille b deborde? "+ plein);
            Console.WriteLine("Voici la quantité de la bouteille:" + b.QuantiteLiquideEnMl);
            Console.WriteLine("La bouteille est ouverte? " + b.EstOuverte);
            Console.WriteLine("Voici la quantité de la bouteille:" + b.CapaciteMaxEnMl);
            Console.WriteLine("J'ai réussi a ouvrir ma bouteille:" + bouchon);
            Console.WriteLine("J'ai réussi a vider ma bouteille:" + vide);
            Console.WriteLine("J'ai réussi a fermer ma bouteille:" + ferme);
        }
    }
}
