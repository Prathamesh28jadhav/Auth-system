const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

dotenv.config();

const app = express();
connectDB();

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
}));

// Content Security Policy
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            fontSrc: ["'self'", "http://localhost:4000"],
        },
    })
);

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Add root route
app.get('/', (req, res) => {
    res.send('Welcome to the Auth System API!');
});
// Add this route before the API routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', adminRoutes); 

// Start the server
const PORT = process.env.PORT || 4000;  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
