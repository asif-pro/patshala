const express = require ( 'express' );
const app     = express ();
const cors    = require ( 'cors' );
const router  = require ( './router' );

app.use ( express.json () );
app.use ( cors () );
app.use ( router );

//Handeling All Invalid URLs/Routs
app.use ( ( req, res ) => {
    res.status ( 404 ) . send ( ' 404, Page not Found ' ) ; 
} );


app.listen ( 3003, () => {
    console.log ( 'Server started' );
} );