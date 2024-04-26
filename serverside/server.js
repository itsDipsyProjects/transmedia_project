const express = require('express');
const path = require('path');
const { stringify } = require('querystring');

const app = express();
const port = 4000;
// Serve static files from the parent directory

app.use((req, res, next) => {
 
    
    if (req.query.test === "hej") {
        console.log("yes");
        res.send("Allowed");
        allowed = 1;
    }else{
        next();
    }

    
});

app.use(express.static(path.join(__dirname, '../')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'startPage', 'index.html'));
    
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
