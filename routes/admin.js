const express = require('express');
const router = express.Router();
const pool = require('../db');

// Admin login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
 
    try {
        const result = await pool.query(
            'SELECT * FROM admin WHERE email = $1',
            [email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Admin not found' });
        }

        const admin = result.rows[0];

        if (admin.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.json({ message: 'Login successful' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Add employee
router.post('/add-employee', async (req, res) => {
    const { name, email, birthday, department } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO employees (name, email, birthday, department)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [name, email, birthday, department]
        );

        res.status(201).json({
            message: "Employee added successfully",
            employee: result.rows[0]
        });

    } catch (err) {
        console.error(err);

        // duplicate email protection
        if (err.code === '23505') {
            return res.status(400).json({
                message: "Employee email already exists"
            });
        }

        res.status(500).json({ message: "Server error" });
    }
});



// Get all employees
router.get('/employees', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM employees ORDER BY id DESC'
        );

        res.json(result.rows);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});


// Get today's birthdays
router.get('/birthdays/today', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT * FROM employees
            WHERE EXTRACT(MONTH FROM birthday) = EXTRACT(MONTH FROM CURRENT_DATE)
            AND EXTRACT(DAY FROM birthday) = EXTRACT(DAY FROM CURRENT_DATE)
        `);

        res.json(result.rows);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = router;

