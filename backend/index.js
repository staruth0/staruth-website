import app from './app.js';
import { connection } from './src/config/database.mjs';


app.listen(process.env.PORT, () => {
  connection();
  console.log(`app listening on port ${process.env.PORT}`)
})