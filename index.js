const express = require('express');
const app = express();
const chalk=require('chalk');
const PORT = 3000;
const hostName = '127.0.0.1';

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let program = [];
app.get('/', (req, res) => {
    res.render('index', { programs: program });
});

app.get('/contact',(req,res)=>{
    res.render('home',{});
})

app.post('/', (req, res) => {
    const plName = req.body.pName;
    program.push(plName);
    res.redirect('/');
})
app.listen(PORT, hostName, () => {
    console.log(chalk.blue.bgRed.bold(`Server is running at http://${hostName}:${PORT}`));
});
