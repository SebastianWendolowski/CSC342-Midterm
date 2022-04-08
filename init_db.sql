CREATE TABLE games (
	ID integer PRIMARY KEY AUTOINCREMENT,
	title text NOT NULL UNIQUE,
   	release_year integer NOT NULL,
	console text NOT NULL,
	genre text NOT NULL,
	developer text NOT NULL
);

INSERT INTO games(title,release_year,console,genre,developer) VALUES
('Legend of Zelda: Ocarina of Time','1998','N64', 'Action Adventure', 'Nintendo'),
('Legend of Zelda: Majoras Mask','2000','N64', 'Action Adventure', 'Nintendo'),
('Legend of Zelda: Wind Waker','2002','Gamecube', 'Action Adventure', 'Nintendo'),
('Legend of Zelda: Twilight Princess','2004','Gamecube', 'Action Adventure', 'Nintendo'),
('Legend of Zelda: Breath of the Wild','2016','Switch','Open-world Action Adventure', 'Nintendo');


CREATE TABLE anime (
	ID integer PRIMARY KEY AUTOINCREMENT,
	title text NOT NULL UNIQUE,
   	release_year integer NOT NULL,
	genre text NOT NULL,
	studio text NOT NULL
);

INSERT INTO anime(title, release_year, genre, studio) VALUES
('Attack On Titan ', '2013', 'Action, Fantasy, Drama, Mystery', 'Studio Wit'),
('Attack On Titan season 2', '2017', 'Action, Fantasy, Drama, Mystery', 'Studio Wit'),
('Attack On Titan the final season part one', '2020', 'Action, Fantasy, Drama, Mystery', 'MAPPA'),
('Attack On Titan the final season part two', '2022', 'Action, Fantasy, Drama, Mystery', 'MAPPA'),
('Full Metal Alchemist Brotherhood', '2009', 'Action, Adventure, Comedy, Drama, Fantasy', 'Bones'),
('Steins;gate', '2011', 'Drama, Sci-Fi, Suspense', 'White Fox'),
('Monster', '2005', 'Drama, Mystery, Suspense', 'Madhouse'),
('Link Click', '2021', 'Drama, Supernatural', 'Studio LAN'),
('Cowboy Bebop', '1998', 'Action, Adventure, Comedy, Drama, Sci-Fi', 'Sunrise'),
('Ranking of Kings', '2021', 'Adventure, Fantasy', 'Studio Wit'),
('Vinland Sagaq', '2019', 'Action, Adventure, Drama', 'Studio Wit'),
('Jujutsu Kaisen', '2020', 'Action, Supernatural', 'MAPPA'),
('Death Note', '2007', 'Mystery, Supernatural, Suspense', 'Madhouse'),
('Demon Slayer', '2019', 'Action, Supernatural', 'Ufotable'),
('One Punch man', '2015', 'Action, Comedy, Sci-Fi, Supernatural', 'Madhouse'),
('Samurai Champloo', '2005', 'Action, Adventure, Comedy', 'Manglobe'),
('Mob Psycho 100', '2016', 'Action, Comedy, Slice of Life, Supernatural', 'Bones');
