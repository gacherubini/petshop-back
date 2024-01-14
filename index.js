const express = require('express');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

const app = express();

//banco de dados conecxao
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('database connected'))
.catch((err)=> console.log('databease not connected', err))

app.use(express.json())

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

// forma de ler json / middlewares
app.use(
    express.urlencoded({
        extended:true,
    }),
)

  
//rotas api produtos
app.use('/produtos', require('./routes/ProductRoutes'))

//rotas api auth
app.use('/userauth', require('./routes/authRoutes'))

