const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('build'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.render('index.html')
});

app.post('/xyz', (req,res) => {
  if ( req.body.firstname === '' || req.body.lastname === '' || req.body.age === '' || req.body.username === ''){
    res.send({status: 'Не все поля заполнены', text: { message : 'Пусто'}})
  } else {
    res.send({status: 'Данные получены сервером', text: req.body});
  }

})

app.listen(3000, () => {
  console.log('Listen port #3000')
});
