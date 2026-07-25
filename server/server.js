document.getElementById('bookingform').addEventListener('submit', async (e) => {
    e.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;

    await fetch('http://localhost:5500/BookingSystem/client/index.html', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        }, 
        body: JSON.stringify({name, service, date })
    });
    alert('Booking submitted!');
});





sql.connect(config).then(() => console.log('Connected to mssql server')).catch(err => console.log('Database cannot connect: ' + err));


const e = require('express');
const express = require('express');
const app = express();
const port = 5000;

app.get('/bookings', async (req, res) => {
    try{
        const pool = await sql.connect(config);
        const result = await pool.request().query('SELECT * FROM bookings');
        res.json(result.recordset);
    }catch(error){
        console.error(error);
        res.status(500).send('Error fetching');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


const sql = require('mssql');

const config = {
    user: 'jaylink6',
    password: 'root',
    host: 'localhost',
    port: '1433',
    database: 'techrepair',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

app.post('/bookings', async (req, res) => {
    const {FirstName, LastName, Services, BookingDate} = req.body;

    try{
        const pool = await sql.connect(config);
        const results = await pool.request()
            .input('FirstName', sql.NVARCHAR, FirstName)
            .input('LastName', sql.NVARCHAR, LastName)
            .input('Services', sql.NVARCHAR, Services)
            .input('BookingDate', sql.DATE, BookingDate)
            .query(`
                INSERT INTO bookings (FirstName, LastName, Services, BookingDate) 
                OUTPUT INSERTED.*
                VALUES (@FirstName, @LastName, @Services, @BookingDate)
                `);
        res.json(results.recordset[0]);
    }
    catch(error){

        console.error(error);
        res.status(500).send('Server error');
    } 
});


