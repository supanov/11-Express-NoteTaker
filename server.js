const express = require ('express');

const app  = express();
const PORT = process.env.PORT || 3001;
const htmlRoutes = require ('./routes/htmlRoutes');
const apiRoutes = require ('./routes/apiRoutes');

app.use(express.json());
app.use(express.urlencoded({ extnded: true}));
app.use(express.static('public'));

// API routes 
app.use("/api", apiRoutes);


// HTML routes
app.use("/", htmlRoutes);



app.listen(PORT, () => console.log('Listening on PORT: ${PORT}')); 

