express = require('express');
app = express();


app.use(express.static(__dirname + '/public'));
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"public/index.html"));
});


app.listen(8000);
