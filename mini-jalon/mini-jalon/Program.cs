// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

/*
 Afficher la moyenne des valeurs d'un tableau d'entiers
 Afficher la valeur maximale dans le tableau élevée au carré
*/


/********** variables **********/


int[] valeurs = { 2, 4, 1, 8, 6, 14, 23, 25, 7, 42 }; // Le tableau de valeurs
double sommeValeurs = 0; // La somme des valeurs du tableau ( pour calculer la moyenne ) 
double moyenneValeurs;   // La moyenne des valeurs du tableau
double maxNbre;          // La valeur MAX dans le tableau
double maxNbre2;         // La valeur MAX au carré 
int i;                   // Sert pour l'incrémentation dans la boucle for


/********** traitement **********/


// Calcul de la somme des valeurs du tableau
for ( i = 0 ; i < valeurs.Length ; i++ )
{
    sommeValeurs = sommeValeurs + valeurs[i];

    //sommeValeurs += valeurs[i];   // autre manière pour additionner  
}

// Calcul de la moyenne
moyenneValeurs = sommeValeurs / valeurs.Length;

// Récupération de la valeur la plus élevée du tableau
maxNbre = valeurs.Max();

// Elévation de la valeur MAX au carré
maxNbre2 = Math.Pow(maxNbre, 2);


/********** affichage **********/

Console.Write("Bienvenue dans le programme de calcul du tableau d'entier ");
Console.WriteLine("Moyenne des valeurs du tableau: " + moyenneValeurs + ".");
Console.WriteLine("Valeur la plus grande (" + maxNbre + ") élevée au carré: " + maxNbre2 + ".");