/************************************************************/
/* Author: Sebastian Wendlolowski */
/* Major: Information Technology */
/* Creation Date: March 27th, 2022 */
/* Due Date: April 1st,2022 */
/* Course: CSC342 */
/* Professor Name: Dr. Schwesinger */
/* Assignment: Midterm Project */
/* Filename: README.md */
/************************************************************/

1. init_db.sql
	Decription: init_db.sql is used to initialize an established database with game and anime information
	Usage: initialize the database in a console with:
		sqlite3 games_and_anime.db
	then run:
		.read init_db.sql
	The database will be initialized and fully functional to use.
	Tables:
		games (
			ID integer PRIMARY KEY AUTOINCREMENT,
			title text NOT NULL UNIQUE,
   			release_year integer NOT NULL,
			console text NOT NULL,
			genre text NOT NULL,
			developer text NOT NULL
		)
		ID is the entry number of the entry game
		title is the title of the entry game
		released_year is the year the entry game was released
		console is the available console for the entry game
		genre is the primary genres for the entry game
		developer is the primary developer for the entry game

		anime (
			ID integer PRIMARY KEY AUTOINCREMENT,
			title text NOT NULL UNIQUE,
		   	release_year integer NOT NULL,
			genre text NOT NULL,
			studio text NOT NULL
		)
		ID is the entry number of the entry anime
		title is the title of the entry anime
		release_year is the year the entry anime started airing
		genre is the primary genres for the entry anime
		studio is the animation studio for the entry anime

2. index.js:
	Description: REST API designed to work with sqlite database, can get, push, put, and delete data in database
	Usage:
		1. Get Usage:
			/api/games/ - Usage: takes no parameters or body, returns all entries in database for the games table. Returns error status code 404 if no entry in games table, status code 200 if valid.

			/api/anime/ - Usage: takes no parameters or body, returns all entries in the database for the anime table. Returns error status code 404 if no entry in anime table, status code 200 if valid.

			/api/games/:id - Usage: takes :id as an integer, returns entry with the given ID integer in the games table. Returns error status code 404 if no entry at given id, status code 200 if valid.
			example: /api/games/1

			/api/anime/:id - Usage: takes :id as an integer, returns entry with the given ID integer in the anime table. Returns error status code 404 if no entry at given id, status code 200 if valid.
			example: /api/anime/1

		2. Post Usage: (NOTE: "TEXT" is replacable within the usage clauses with actual text and INTEGER is replacable with any valid integer)
			/api/games/ - Usage: takes JSON body of this format:
				{"title": "TEXT"(UNIQUE), "release_year": INTEGER, "console": "TEXT" "genre": "TEXT", "developer": "TEXT"}
			and places it in the games table in the database.
			Returns status code 201 if successfully created, and puts Location header to the URI of the created entry, returns error status code 400(Bad request) if invalid.

			/api/anime/ - Usage: takes JSON body of this format:
				{"title": "TEXT"(UNIQUE), "release_year": INTEGER, "genre": "TEXT", "studio": "TEXT"}
			and it places it in the anime table in the database.
			Returns status code 201 if successfully created, and puts Location header to the URI of the created entry, returns error status code 400(Bad request) if invalid.

			/api/games/:title/:release_year/:console/:genre/:developer/ - Usage: takes values for :title, :release_year, :console, :genre, :developer in order.
			example: /api/games/Pokemon Emerald/2003/GBA/JRPG/GameFreak/ - VALUES FOR :title, :console, :genre, :developer ARE TEXT, WHILE :release_year IS AN INTEGER.
			Places given entry in the database under the games table.
			Returns status code 201 if successfully created, and puts Location header to the URI of the created entry, returns error status code 400(Bad request) if invalid.

			/api/anime/:title/:release_year/:genre/:studio/ - Usage: takes values for :title, :release_year, :genre, :studio in order.
			example: /api/anime/OnePiece/1998/Adventure/Viz/ - VALUES FOR :title, :genre, :studio ARE TEXT, WHILE :release_year IS AN INTEGER.
			Places given entry in the database under the anime table.
			Returns status code 201 if successfully created, and puts Location header to the URI of the created entry, returns error status code 400(Bad request) if invalid.

		3. Put Usage: (NOTE: "TEXT" is replacable within the usage clauses with actual text and INTEGER is replacable with any valid integer)
			/api/games/ - Usage: takes JSON body of this format:
				{"ID": INTEGER, "title": "TEXT"(UNIQUE), "release_year": INTEGER, "console": "TEXT" "genre": "TEXT", "developer": "TEXT"}
			and updates entry if given ID in the games table with the given values if valid.
			Returns status code 200 if successfully updated, 404 if no entry is found, and 400 if a bad request is made.

			/api/anime/ - Usage: takes JSON body of this format:
				{"ID": INTEGER, "title": "TEXT"(UNIQUE), "release_year": INTEGER, "genre": "TEXT", "studio": "TEXT"}
			and it updates entry with given id in the anime table with the given values if valid.
			Returns status code 200 if successfully updated, 404 if no entry is found, and 400 if a bad request is made.

			/api/games/:title/:release_year/:console/:genre/:developer/:ID/ - Usage: takes values for :title, :release_year, :console, :genre, :developer in order.
			example: /api/games/Pokemon Emerald/2003/GBA/JRPG/GameFreak/8 - VALUES FOR :title, :console, :genre, :developer ARE TEXT, WHILE :release_year AND :ID IS AN INTEGER.
			and updates entry if given ID in the games table with the given values if valid.
			Returns status code 201 if successfully created, and puts Location header to the URI of the created entry, returns error status code 400(Bad request) if invalid.

			/api/anime/:title/:release_year/:genre/:studio/:ID/ - Usage: takes values for :title, :release_year, :genre, :studio in order.
			example: /api/anime/OnePiece/1998/Adventure/Viz/4 - VALUES FOR :title, :genre, :studio ARE TEXT, WHILE :release_year AND :ID IS AN INTEGER.
			and if updates entry with given id in the anime table with given values if valid.
			Returns status code 201 if successfully created, and puts Location header to the URI of the created entry, returns error status code 400(Bad request) if invalid.

		4. Delete Usage:
			/api/games/:ID - Usage: takes integer value for :ID,
			and deletes entry in games table with associated ID number if there is an entry associated with the ID.
			Returns status code 204 if successful deletion of entry, or 404 if there is no resource associated with the ID number.

			/api/anime/:ID - Usage: takes integer value for :ID,
			and deletes entry in anime table with associated ID number if there is an entry associated with the ID.
			Returns status code 204 if successful deletion of entry, or 404 if there is no resource associated with the ID number.


3. package.json
	File containing project details and dependancies.

4. package-lock.json
	File containing project details and dependancies in further detail