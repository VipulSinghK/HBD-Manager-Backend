const cron = require('node-cron');
const pool = require('../db');
const sendBirthdayMail = require('../mailer');

cron.schedule('*/1 * * * *', async () => {
    console.log("🎂 Checking birthdays...");

    try {
        const result = await pool.query(`
            SELECT * FROM employees
            WHERE EXTRACT(MONTH FROM birthday) = EXTRACT(MONTH FROM CURRENT_DATE)
            AND EXTRACT(DAY FROM birthday) = EXTRACT(DAY FROM CURRENT_DATE)
        `);

        if (result.rows.length > 0) {
            console.log("🎉 Today's birthdays:", result.rows);

            for (const emp of result.rows) {
                await sendBirthdayMail(emp);
                console.log(`📧 Birthday mail sent to ${emp.email}`);
            }

        } else {
            console.log("No birthdays today");
        }

    } catch (err) {
        console.error("Scheduler error:", err);
    }
});
