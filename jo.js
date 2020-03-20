'use strict';

const express = require("express");
const bodyParser = require('body-parser');
const app = express();

// app.use(express.static(__dirname + "/src"));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', function(req, res) {
    return res.send('Hallo');
});

app.post('/', function(req, res) {
    console.log(req.body);
    console.log(req.params);
    if (req.body.name && req.body.phone && req.body.email) {
        console.log('load')
        let name_ = req.body.name+", length_param: "+req.body.name.length;
        let phone_ = req.body.phone+", length_param: "+req.body.phone.length;
        let email_ = req.body.email+", length_param: "+req.body.email.length;
        let object = {
            User: name_,
            Phone: phone_,
            Email: email_
        }
        // return res.send(`<p>USER : ${req.body.name+", length_param: "+req.body.name.length}</p> `+
        // `<p>Phone : ${req.body.phone}</p>`+`<p>Email : ${req.body.email}</p>`);
        return res.send(JSON.stringify(object));
    }
    console.log('Error');
    return res.send('404');
    });

app.listen(3000, function() {
    console.log('Example listening to the port 3000');
});