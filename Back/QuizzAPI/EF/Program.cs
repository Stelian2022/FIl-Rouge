using EF.Data;
using System;
using System.Linq;

namespace EF
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var db = new NORTHWNDEntities())
            {
                db.Database.Log = s => System.Diagnostics.Debug.WriteLine(s);

                foreach (var customer in db.Customers)
                {
                    Console.WriteLine(
                        $"Id: {customer.CustomerID} Name: {customer.ContactName} Job: {customer.ContactTitle}");

                    foreach (var order in customer.Orders
                        .Where(o => o.Order_Details.Sum(d => d.UnitPrice * d.Quantity) > 1000))
                    {
                        Console.WriteLine(
                        $"\t Id: {order.OrderID} Date: {order.OrderDate} Amount: {order.Order_Details.Sum(d => d.UnitPrice * d.Quantity)}");
                    }

                }
            }

            Console.WriteLine("Appuyez sur une touche");
            Console.ReadLine();
        }
    }
}
