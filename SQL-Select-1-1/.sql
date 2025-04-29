

--1. Zeige alle Daten aus der Customers-Tabelle an
SELECT * FROM Customers
-- 2. Zeige nur die **Spalten CustomerName, City und Country** aus der Customers-Tabelle an.
SELECT CustomerName,City,Country FROM Customers
-- 3. Zeige alle **Kunden aus Deutschland** an.
SELECT CustomerName,Country FROM Customers Where Country = "Germany";
-- 4. Zeige alle **Kunden** aus **London, UK** an.
SELECT CustomerName,City FROM Customers Where City = "London";
-- 5. Zeige alle **Kunden alphabetisch** nach **CustomerName** sortiert an
SELECT * FROM Customers order by CustomerName
-- 6. Zeige nur die **ersten 5 Einträge** der Tabelle Customers an
SELECT TOP 5 * FROM Customers 
-- 7. Gib die **Gesamtzahl aller Einträge** in der Customers-Tabelle aus
SELECT COUNT(*) FROM Customers;