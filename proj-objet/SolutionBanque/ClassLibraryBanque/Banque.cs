using AppCompteBancaire_Banque;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryBanque
{
    public class Banque
    {
        // Les Attributs

        private List<Compte> mesComptes;
        private int nbComptes;
        private string nom;
        private string ville;

        // getters setters
        public List<Compte> MesComptes { get => mesComptes; set => mesComptes = value; }
        public int NbComptes { get => nbComptes; set => nbComptes = value; }
        public string Nom { get => nom; set => nom = value; }
        public string Ville { get => ville; set => ville = value; }

        // Constructeurs

        public Banque()
        {
            this.mesComptes = new List<Compte>();
            this.nbComptes = 150;
            this.nom = "Martin";
            this.ville = "Mulhouse";
        }
        public Banque(List<Compte> _mesComptes, int _nbComptes, string _nom, string _ville)
        {
            this.mesComptes = _mesComptes;
            this.nbComptes = _nbComptes;
            this.nom = _nom;
            this.ville = _ville;
        }

        public Banque(Banque CreditMutuel)
        {
            this.mesComptes = CreditMutuel.MesComptes;
            this.nbComptes = CreditMutuel.nbComptes;
            this.nom = CreditMutuel.nom;
            this.ville = CreditMutuel.ville;
        }

        // methodes

        // ajouter un compte constructeur clone

        private void AjouterCompte(Compte compte) 
        {
            
        }

        // ajouter un compte constructeur parametre

        public void AjouterCompteP(int _numero, string _nom, double _solde, double _decouvertAutorise)
        {

        }

        // methode ToString de la classe Compte

        public override string ToString()
        {
            return base.ToString();
        }

        // methode CompteSup

        public string CompteSup()
        {
            double soldeMax = 50000;
            return soldeMax.ToString();
        }
        
        // methode RendCompte

        public string RendCompte(Compte this.numero) 
        {
            if(this.numero = numero)
            {
                return Compte.ToString;
            }
            
        }
    }
}
