
-- 1. Zeige alle **Länder** an, die **mehr als fünf Kunden** haben
SELECT Country, COUNT(*) AS CustomerCount FROM Customers
GROUP BY Country HAVING COUNT(*) > 5;

--Zeige alle **Bestellungen** im **August 1996** an
SELECT * FROM Orders
WHERE OrderDate BETWEEN '1996-08-01' AND '1996-08-31';
Zeige alle CustomerIds, die **mehr als eine Bestellung** getätigt haben
SELECT CustomerID, Count(*) FROM Orders Group BY CustomerID Having Count(*) > 1

-- Bonus: Zeige direkt den Kundennamen an (nutze JOIN um zwei Tabellenabfragen zu verbinden)
SELECT c.CustomerID, c.ContactName, COUNT(o.OrderID) AS OrderCount FROM Customers c
JOIN Orders o ON c.CustomerID = o.CustomerID GROUP BY c.CustomerID
ORDER BY OrderCount DESC LIMIT 1;



Select * from Products WHERE SupplierID  = (Select SupplierID from Suppliers where SupplierName = 'Heli Süßwaren GmbH & Co. KG')

--Zeige den **Durchschnittspreis** aller Produkte an
SELECT AVG(Price) as AverageProducts FROM Products;

-- Zeige den **Höchstpreis** aller Produkte an
SELECT Max(Price) as HighestPrice FROM Products;

-- Zeige alle **Lieferanten** an, deren **Telefonnummer** **keine Klammern** () enthält
SELECT SupplierName, Phone FROM Suppliers WHERE Phone NOT LIKE '%(%)%';




