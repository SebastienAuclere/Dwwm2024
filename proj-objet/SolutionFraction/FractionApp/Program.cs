using ClassLibraryFraction;
using System.Drawing;

namespace FractionApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            
            Fraction b = new Fraction(8,12);         
            b.Oppose();
            Console.WriteLine(b);
            b.Inverse();
            Console.WriteLine(b);
            Fraction d = new Fraction(9, 12);
            Console.WriteLine(b.SuperieurA(d));
            /*
            Point a = new Point();
            Point a1 = new Point(3, 2);
            Point a2 = new Point(a1);
            Point a3 = new Point(7, 9);
            Point a4 = new Point(9, 10);
            Point a5 = new Point(11, 13);
            Point a6 = new Point(12, 14);
            Console.WriteLine(a1);
            Console.WriteLine(a1.ToString());
            Console.WriteLine(a2);
            a1.Deplacer(6, 8);
            Console.WriteLine(a1.ToString());
            Point cloneA3 = a3.SymetrieAxeAbscisse();
            Console.WriteLine("Pour le point A3 " + cloneA3);
            */
        }
    }
}