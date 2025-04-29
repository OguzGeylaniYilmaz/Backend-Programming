
-- 1. Zeige **alle Kunden** aus der Customers-Tabelle an, deren **Name mit A beginnt*
SELECT * FROM Customers WHERE CustomerName LIKE 'a%';
-- 2. Sortiere die **Kunden absteigend** nach **Postleitzahl** 
SELECT * FROM Customers Order by postalcode desc
-- 3. Zeige alle **Kunden aus Mexico**, **sortiert** zuerst nach **Stadt** und dann nach **Kundenname**
SELECT * FROM Customers Where Country = "Mexico" Order By City,CustomerName 

-- 4. Zeige  alle Kunden an, die sich in **Deutschland**, dem **Vereinigten Königreich** oder **Frankreich** befinden.
SELECT * FROM Customers Where Country IN ("Germany","UK","France")
-- 5. Zeige alle **Produkte** an, die **in Flaschen** verkauft werden
SELECT * FROM Products WHERE Unit LIKE '%boxes%';
-- 6. Zeige alle Produkte an, deren **Preis** **zwischen 20 und 30 Dollar** liegt
SELECT * FROM Products Where Price Between 20 and 30
-- 7. Erstelle eine Liste, die die **Anzahl der Produkte pro Kategorie** anzeigt.
SELECT CategoryID, Count(*) As ProductCount FROM Products Group By CategoryID