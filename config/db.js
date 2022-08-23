const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_Connection)
        console.log(`heyy girl youre connected to the database: ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}


module.exports = connectDB