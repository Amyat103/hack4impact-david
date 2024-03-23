const pool = require("./db");

const createTableText = `
    CREATE TABLE tweets (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        content VARCHAR(255) NOT NULL,
        create_at VARCHAR(255) NOT NULL
    );`;

    // 255 character limit, NOT NULL, cant be empty

pool.query(createTableText).then(() => { 
        console.log("Done!");
    }).catch((err) => {
        console.log("UH OH", err)
    });

