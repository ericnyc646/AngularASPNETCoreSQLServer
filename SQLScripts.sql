IF OBJECT_ID('dbo.Astronauts', 'U') IS NOT NULL 
  DROP TABLE dbo.Astronauts; 
GO

CREATE TABLE Astronauts (
	AstronautID int Identity(1,1) NOT NULL PRIMARY KEY,
	AstrunautName varchar(200) NOT NULL,
	Nationality varchar(50) NOT NULL
)
GO

IF OBJECT_ID('dbo.Nationalities', 'U') IS NOT NULL 
  DROP TABLE dbo.Nationalities; 
GO

CREATE TABLE Nationalities (
	NationalityID int Identity(1,1) NOT NULL PRIMARY KEY,
	Nationality varchar(50) NOT NULL
)
GO

INSERT INTO Nationalities (Nationality)
VALUES 
('Afgahanistan'), ('Austria'), ('Belgium'), ('Brazil'), ('Bulgaria'), ('Canada'),
('China'), ('Cuba'), ('Czech Republic'), ('Denmark'), ('France'), ('Germany'),
('Hungary'), ('India'), ('Israel'), ('Italy'), ('Japan'), ('Kazakhstan'), ('Malaysia'),
('Mexico'), ('Mongolia'), ('Netherlands'), ('Poland'), ('Romania'), ('Russia'),
('Saudi Arabia'), ('Slovakia'), ('South Africa'), ('South Korea'), ('Spain'),
('Sweden'), ('Switzerland'), ('Syria'), ('Ukraine'), ('United Kingdom'), ('United States');
GO
