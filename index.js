import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const production = process.env.NODE_ENV === 'production';

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

console.log('production:', production);
console.log('PORT:', PORT);
app.listen(PORT, `${production ? '0.0.0.0':'127.0.0.1'}`, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});