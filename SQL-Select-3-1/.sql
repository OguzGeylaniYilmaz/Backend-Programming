

SELECT Country, COUNT(*) AS CustomerCount FROM Customers
GROUP BY Country HAVING COUNT(*) > 5;

SELECT * FROM Orders
WHERE OrderDate BETWEEN '1996-08-01' AND '1996-08-31';

SELECT CustomerID, Count(*) FROM Orders Group BY CustomerID Having Count(*) > 1

SELECT c.CustomerID, c.ContactName, COUNT(o.OrderID) AS OrderCount FROM Customers c
JOIN Orders o ON c.CustomerID = o.CustomerID GROUP BY c.CustomerID
ORDER BY OrderCount DESC LIMIT 1;



Select * from Products WHERE SupplierID  = (Select SupplierID from Suppliers where SupplierName = 'Heli Süßwaren GmbH & Co. KG')

SELECT AVG(Price) as AverageProducts FROM Products;

SELECT Max(Price) as HighestPrice FROM Products;


