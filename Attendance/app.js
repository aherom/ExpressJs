const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('./config');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Route to fetch attendance records for a specific date
app.post('/fechdata', async (req, res) => {
    const date = req.body.Date;
    console.log(date);
    if (!date) {
        return res.status(400).send('Date is required');
    }

    try {
        const [attendance] = await db.execute('SELECT * FROM attendance WHERE attendance_date = ?', [date]);

        if (attendance.length > 0) {
            res.status(200).json(attendance);
        } else {
            const [students] = await db.execute('SELECT * FROM students');
            res.status(200).json({ students, message: 'No attendance records found for this date' });
        }
    } catch (error) {
        console.error('Error fetching attendance:', error);
        res.status(500).send('Failed to fetch attendance.');
    }
});

app.post('/submitAttendance', async (req, res) => {
    const { date, attendance } = req.body;

    try {
        const insertPromises = attendance.map(record => {
            return db.execute(
                'INSERT INTO attendance (student_id, attendance_date, attendance_status) VALUES (?, ?, ?)',
                [record.student_id, date, record.attendance_status]
            );
        });

        await Promise.all(insertPromises);
        res.status(200).send('Attendance marked successfully');
    } catch (error) {
        console.error('Error submitting attendance:', error);
        res.status(500).send('Failed to submit attendance.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
