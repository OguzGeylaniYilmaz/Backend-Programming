

SELECT * FROM Customers WHERE CustomerName LIKE 'a%';

SELECT * FROM Customers Order by postalcode desc

SELECT * FROM Customers Where Country = "Mexico" Order By City,CustomerName 

SELECT * FROM Customers Where Country IN ("Germany","UK","France")

SELECT * FROM Products WHERE Unit LIKE '%boxes%';

SELECT * FROM Products Where Price Between 20 and 30

SELECT CategoryID, Count(*) As ProductCount FROM Products Group By CategoryID