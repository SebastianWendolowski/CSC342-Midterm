/************************************************************/
/* Author: Sebastian Wendlolowski */
/* Major: Information Technology */
/* Creation Date: March 27th, 2022 */
/* Due Date: April 1st,2022 */
/* Course: CSC342 */
/* Professor Name: Dr. Schwesinger */
/* Assignment: Midterm Project */
/* Filename: index.js */
/* Purpose: Create and design a REST API */
/************************************************************/
"use strict";

const express = require("express");
const app = express();
app.use(express.json({ strict: false }))
const port = 3000;
const sqlite3 = require('sqlite3');
let db = new sqlite3.Database('./games_and_anime.db', (err) => {
    if (err) {
        console.log(err.message);
        throw err;
    }
})

// GET FUNCTIONS FOR API
 app.get("/api/games/", function (req, res) {
    let sql = "SELECT * from games";
    let params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(404);
            res.json({ "error": err.message })
        } else {
            if (rows.length === 0) {
                res.status(404);
                res.end();
            }
            res.status(200);
            res.send(rows);
        }
    });
 });

app.get("/api/games/:id", (req, res) => {
    let sql = "SELECT * FROM games WHERE ID = ?";
    let params = [req.params.id];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400);
            res.json({ "error": err.message });
        }
        else if (rows.length === 0) {
            res.status(404);
            res.end();
        }
        else {
            res.status(200);
            res.json(rows[0]);
        }
    });
});

app.get("/api/anime/", function (req, res) {
    let sql = "SELECT * from anime";
    let params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(404);
            res.json({ "error": err.message })
        } else {
            if (rows.length === 0) {
                res.status(404);
                res.end();
            }
            res.status(200);
            res.send(rows);
        }
    });
});

app.get("/api/anime/:id", (req, res) => {
    let sql = "SELECT * FROM anime WHERE ID = ?";
    let params = [req.params.id];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400);
            res.json({ "error": err.message });
        }
        else if (rows.length === 0) {
            res.status(404);
            res.end();
        }
        else {
            res.status(200);
            res.json(rows[0]);
        }
    });
});

// POST FUNCTIONS FOR API
app.post("/api/games/", (req, res) => {
    let sql = "INSERT INTO games(title,release_year,console,genre,developer) VALUES (?,?,?,?,?)"
    let params = [req.body.title, req.body.release_year, req.body.console, req.body.genre, req.body.developer];
    db.run(sql, params, function (err) {
        if (err) {
            res.status(400);
            res.json({ "error": err.message });
        }
        else {
            res.status(201);
            res.set("Location", "/api/games/" + this.lastID);
            res.end();
        }
    });
});

app.post("/api/anime/", (req, res) => {
    let sql = "INSERT INTO anime(title, release_year, genre, studio) VALUES(?,?,?,?)"
    let params = [req.body.title, req.body.release_year, req.body.genre, req.body.studio];
    db.run(sql, params, function (err) {
        if (err) {
            res.status(400);
            res.json({ "error": err.message });
        }
        else {
            res.status(201);
            res.set("Location", "/api/anime/" + this.lastID);
            res.end();
        }
    });
});

app.post("/api/games/:title/:release_year/:console/:genre/:developer/", (req, res) => {
    let sql = "INSERT INTO games(title,release_year,console,genre,developer) VALUES (?,?,?,?,?)"
    let params = [req.params.title, req.params.release_year, req.params.console, req.params.genre, req.params.developer];
    db.run(sql, params, function (err) {
        if (err) {
            res.status(400);
            res.json({ "error": err.message });
        }
        else {
            res.status(201);
            res.set("Location", "/api/games/" + this.lastID);
            res.end();
        }
    });
});

app.post("/api/anime/:title/:release_year/:genre/:studio/", (req, res) => {
    let sql = "INSERT INTO anime(title, release_year, genre, studio) VALUES(?,?,?,?)"
    let params = [req.params.title, req.params.release_year, req.params.genre, req.params.studio];
    db.run(sql, params, function (err) {
        if (err) {
            res.status(400);
            res.json({ "error": err.message });
        }
        else {
            res.status(201);
            res.set("Location", "/api/anime/" + this.lastID);
            res.end();
        }
    });
});

// PUT FUNCTIONS FOR API
app.put("/api/games/", (req, res) => {
    let sql = "UPDATE games SET title = ?, release_year = ?, console = ?, genre = ?, developer = ? WHERE ID = ?"
    let params = [req.body.title, req.body.release_year, req.body.console, req.body.genre, req.body.developer, req.body.ID];
    let getSql = "SELECT * FROM games WHERE ID = ?"
    let id = req.body.ID;
    db.all(getSql, id, (err, rows) => {
        if (err) {
            res.status(404);
            res.json({ "error": err.message })
        } else {
            if (rows.length === 0) {
                res.status(404);
                res.end();
            }
            db.run(sql, params, function (err) {
                if (err) {
                    res.status(400);
                    res.json({ "error": err.message })
                }
                else {
                    res.status(200);
                    res.end();
                }
            });
        }
    }); 
});

app.put("/api/anime/", (req, res) => {
    let sql = "UPDATE anime SET title = ?, release_year = ?, genre = ?, studio = ? WHERE ID = ?"
    let params = [req.body.title, req.body.release_year, req.body.genre, req.body.studio, req.body.ID];
    let getSql = "SELECT * FROM anime WHERE ID = ?"
    let id = req.body.ID;
    db.all(getSql, id, (err, rows) => {
        if (err) {
            res.status(404);
            res.json({ "error": err.message })
        } else {
            if (rows.length === 0) {
                res.status(404);
                res.end();
            }
            db.run(sql, params, function (err) {
                if (err) {
                    res.status(400);
                    res.json({ "error": err.message });
                }
                else {
                    res.status(200);
                    res.end();
                }
            });
        }
    });
});

app.put("/api/games/:title/:release_year/:console/:genre/:developer/:ID/", (req, res) => {
    let sql = "UPDATE games SET title = ?, release_year = ?, console = ?, genre = ?, developer = ? WHERE ID = ?"
    let params = [req.params.title, req.params.release_year, req.params.console, req.params.genre, req.params.developer, req.params.ID];
    let getSql = "SELECT * FROM games WHERE ID = ?"
    let id = req.params.ID;
    db.all(getSql, id, (err, rows) => {
        if (err) {
            res.status(404);
            res.json({ "error": err.message })
        } else {
            if (rows.length === 0) {
                res.status(404);
                res.end();
            }
            db.run(sql, params, function (err) {
                if (err) {
                    res.status(400);
                    res.json({ "error": err.message });
                }
                else {
                    res.status(200);
                    res.end();
                }
            });
        }
    });
});

app.put("/api/anime/:title/:release_year/:genre/:studio/:ID/", (req, res) => {
    let sql = "UPDATE anime SET title = ?, release_year = ?, genre = ?, studio = ? WHERE ID = ?"
    let params = [req.params.title, req.params.release_year, req.params.genre, req.params.studio, req.params.ID];
    let getSql = "SELECT * FROM anime WHERE ID = ?"
    let id = req.params.ID;
    db.all(getSql, id, (err, rows) => {
        if (err) {
            res.status(404);
            res.json({ "error": err.message })
        } else {
            if (rows.length === 0) {
                res.status(404);
                res.end();
            }
            db.run(sql, params, function (err) {
                if (err) {
                    res.status(400);
                    res.json({ "error": err.message });
                }
                else {
                    res.status(200);
                    res.end();
                }
            });
        }
    });
});

// DELETE FUNCTIONS FOR API
app.delete("/api/games/:ID/", (req, res) => {
    let sql = "DELETE FROM games WHERE ID = ?"
    let params = req.params.ID;
    let getSql = "SELECT * FROM games WHERE ID = ?"
    let id = req.params.ID;
    db.all(getSql, id, (err, rows) => {
        if (err) {
            res.status(404);
            res.json({ "error": err.message })
        } else {
            if (rows.length === 0) {
                res.status(404);
                res.end();
            }
            db.run(sql, params, function (err) {
                    res.status(204);
                    res.end();
            });
        }
    });
});

app.delete("/api/anime/:ID/", (req, res) => {
    let sql = "DELETE FROM anime WHERE ID = ?"
    let params = req.params.ID;
    let getSql = "SELECT * FROM anime WHERE ID = ?"
    let id = req.params.ID;
    db.all(getSql, id, (err, rows) => {
        if (err) {
            res.status(404);
            res.json({ "error": err.message })
        } else {
            if (rows.length === 0) {
                res.status(404);
                res.end();
            }
            db.run(sql, params, function (err) {
                res.status(204);
                res.end();
            });
        }
    });
});
// DEFAULT IF NOT AN ASSIGNED LINK UNDER THE PAGE
app.use((req, res) => {
    res.status(404); 
    res.end();
});

app.listen(port, () => console.log("Webpage up"));
