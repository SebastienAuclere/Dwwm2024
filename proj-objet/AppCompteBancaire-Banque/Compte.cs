using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace AppCompteBancaire_Banque
{
    public class Compte
    {
        //attributs

        private int numero;
        private string nom;
        private double solde;
        private double decouvertAutorise;
        
        

        //get et set 

        public int Numero { get => numero; }
        public string Nom { get => nom; }
        public double Solde { get => solde; }
        public double DecouvertAutorise { get => decouvertAutorise; set => decouvertAutorise = value; }
                     

        //constructeurs

        public Compte()
        {
            this.numero = 1000;
            this.nom = "sans nom";
            this.solde = 0;
            this.decouvertAutorise = 0;
        }
        public Compte(int _numero, string _nom, double _solde, double _decouvertAutorise)
        {
            this.numero = _numero;
            this.nom = _nom;
            this.solde = _solde;
            this.decouvertAutorise = _decouvertAutorise;
        }

        //methodes

        //crediter-debiter

        public void CrediterCompte(double montant)
        {
            this.solde += montant;
        }

        public bool DebiterCompte(double montant)            
        {
            if (this.solde - montant >= this.decouvertAutorise)
            {
                this.solde -= montant;
                return true;
            }
            else
            {
                return false;
            }
            
        }

        //afficher

        public override string ToString()
        {
            return "numéro :"+numero+" nom :"+nom+" solde :"+solde+" découvert autorisé:"+decouvertAutorise;
        }

        //transferer

        public bool Transferer(Compte c2, double montant)
        {
            if(this.DebiterCompte(montant)==true)
            {   
              c2.CrediterCompte(montant);
                return true;
            }
            else 
            {
                return false;
            }
        }

        //Supérieur

        public bool Superieur(Compte _autreCompte) 
        {
            if (this.solde > _autreCompte.solde)
            {
                /*Console.WriteLine(this.solde + " supérieur à " + _autreCompte.solde);*/
                return true;
            }
            else
            {
                //Console.WriteLine(this.solde + "inférieur à " + _autreCompte.solde);
                return false;
            }
        }
    }
}
