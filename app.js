const express = require('express')
const path = require('path')
const app = express();

const logger = require('morgan')
const port =  5000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('Home', {title:'Home | Alta'});
});

app.get('/Contact_Us', (req, res) => {
    res.render('Contact_Us');
});

app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/Contact_Us',(req, res) => {
    let {namaDepan, emailAdd, phoneNum, national, pesan} = req.body
    let data = {
        'fullname': namaDepan,
        'email': emailAdd,
        'phone': phoneNum,
        'nationality': national,
        'message' : pesan
    }
    res.render('review', {data})
})

app.listen(port);
console.log('Server started at http://localhost:' +port);   