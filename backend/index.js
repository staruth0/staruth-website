import app from './main.js';
import connection from './src/config/database.mjs';

await connection();
app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`)
})