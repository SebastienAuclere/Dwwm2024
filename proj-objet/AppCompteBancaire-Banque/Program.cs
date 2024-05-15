namespace AppCompteBancaire_Banque
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /*Compte c = new Compte();
            Compte c1 = new Compte(12345, "toto", 1000, -500);
            Console.WriteLine(c);
            Console.WriteLine(c1.ToString());*/

            /*Compte b = new Compte(545454,"Laurent", 2000, -500);
            b.CrediterCompte(100);
            Console.WriteLine(b);
            bool ok = b.DebiterCompte(100000);
            Console.WriteLine(b.ToString());
            if (ok) 
            {
                Console.WriteLine("Débit réussi!");
            }
            else
            {
                Console.WriteLine("Débit pas réussi!");
            }*/

            /*Compte c1 = new Compte(12345, "toto", 1000, 500);
            Compte c2 = new Compte(45657, "titi", 2000, -1000);         
            Console.WriteLine(c1.ToString());
            Console.WriteLine(c2.ToString());*/

            Compte c1 = new Compte(12345, "toto", 3000, -500); //Code fait avec Franck.C
            Compte c2 = new Compte(45657, "titi", 2000, -1000);
            
            if (c1.Transferer(c2, 4000))
            {
                Console.WriteLine("transfert réussit \n" + c1.ToString() + "\n débit ok \n" + c2 + "");
            }
            else
            {
                Console.WriteLine("solde insuffisant virement impossible");
            }
            
            Console.ReadLine(); //Console.Readline sert a enlever le texte dans la console lors de l'éxécution.
           

            //if (c1.Superieur(c2))
            //{
            //    Console.WriteLine(c1.ToString() +" est superieur à " +c2);
            //}
            //else 
            //{
            //    Console.WriteLine("inferieur");
            //}


        }
    }
}