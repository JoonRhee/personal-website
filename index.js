
const express = require('express')
const path = require('path')
const request = require("request");
const PORT = process.env.PORT || 5000
const app = express();

const dataURL = "https://drive.google.com/uc?id=1yUeZFtZ62apAiHDOPa7AdDCVjElF6f_p";
var data = require(path.join(__dirname, 'data.json'));

/* fetch data */
function fetchData(){
    try{
        request.get(dataURL,(err,res,body)=>{
            data = JSON.parse(body);
        })
    }catch{
    }
}

fetchData();

app.use(express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => res.render('main',data));
app.get('/update',(req,res)=> {
    fetchData();
    res.send(`<script>alert("Updated!");window.location.href = "${data.URL}";</script>`);
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));