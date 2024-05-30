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

        private Compte mesComptes;
        private int nbComptes;
        private string nom;
        private string ville;

        // getters setters
        public Compte MesComptes { get => mesComptes; set => mesComptes = value; }
        public int NbComptes { get => nbComptes; set => nbComptes = value; }
        public string Nom { get => nom; set => nom = value; }
        public string Ville { get => ville; set => ville = value; }

        // Constructeurs

        public Banque()
        {
            this.MesComptes = 1000;
            this.NbComptes = 150;
            this.Nom = "Martin";
            this.Ville = "Mulhouse";
        }
        public Banque(Compte mesComptes, int nbComptes, string nom, string ville)
        {
            this.MesComptes = mesComptes;
            this.NbComptes = nbComptes;
            this.Nom = nom;
            this.Ville = ville;
        }

        public Banque(Banque 1)
        {
            this.numerateur = f.numerateur;
            this.denominateur = f.denominateur;
        }



        //
    }
}
