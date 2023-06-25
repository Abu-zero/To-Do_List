const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(cors());

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

const db = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "",
    port : "3306",
    database : "todolist",
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const result = {
        "status" : 0,
        "message" : "",
    };
    db.query("INSERT INTO login (username, password) VALUES (?,?)",
        [username, password],
        (err, resx) => {
            if(!err){
                result["status"]=1;
                result.message="Kayıt Başarılı";
            }
            else{
                result.status=0;
                result.message="Hata Oluştu";
                console.log(err);
            }
            res.json(result);
        }
    )
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const result = {
        "status" : 0,
        "message" : "",
        "userid" : "",
    };
    db.query("SELECT * FROM login WHERE username=? AND password=?",
        [username, password],
        (err, resx) => {
            if(resx.length>=1){
                console.log(resx);
                result["status"]=1;
                session.loginId=JSON.parse(JSON.stringify(resx[0].uid));
                result.userid=session.loginId;
                result.message="Giriş Yapıldı";
            }
            else{
                result.status=0;
                result.message="Şifre veya kullanıcı adı hatalı";
                console.log(err);
            }
            res.json(result);
        }
    )
});

app.post("/signout", (req, res) => {
    session.loginId=null;
    res.json("Çıkış Yapıldı");
});

app.get("/user", (req, res) => {
    const result = {
        "status" : 0,
        "message" : "",
        "userid" : ""
    };
    result["status"]=1;
    result.message="Liste Yazdırıldı";
    result.userid=session.loginId;
    res.json([result])
});

app.post("/insert", (req, res) => {
    const userid = session.loginId;
    const todocontent = req.body.todocont;
    const result = {
        "status" : 0,
        "message" : "",
    };
    db.query("INSERT INTO todoslist (uid, todo) VALUES (?,?)",
        [userid, todocontent],
        (err, resx) => {
            if(!err){
                result["status"]=1;
                result.message="Listeye Eklendi";
            }
            else{
                result.status=0;
                result.message="Hata Oluştu";
                console.log(err);
            }
            res.json(result);
        }
    )
});

app.get("/write", (req, res) => {
    const userid = session.loginId;
    const result = {
        "status" : 0,
        "message" : "",
        "userid" : ""
    };
    db.query("SELECT * FROM todoslist WHERE uid=?",
        [userid],
        (err, data) => {
            if(!err){
                result["status"]=1;
                result.message="Liste Yazdırıldı";
                result.userid=session.loginId;
            }
            else{
                result.status=0;
                result.message="Hata Oluştu";
                result.userid=session.loginId;
                console.log(err);
            }
            res.json([data, result])
        }
    )
});

app.post("/delete", (req, res) => {
    const todo_id = req.body.todo_id;
    const result = {
        "status" : 0,
        "message" : "",
    };
    db.query("DELETE FROM todoslist WHERE todoid=?",
        [todo_id],
        (err, resx) => {
            if(!err){
                result["status"]=1;
                result.message="Todo Silindi";
            }
            else{
                result.status=0;
                result.message="Hata Oluştu";
                console.log(err);
            }
            res.json(result);
        }
    )
});

app.post("/update", (req, res) => {
    const todo_content = req.body.todo_content;
    const button_id = req.body.button_id;
    const result = {
        "status" : 0,
        "message" : "",
    };
    db.query("UPDATE todoslist SET todo = ? WHERE todoid = ?",
        [todo_content, button_id],
        (err, resx) => {
            if(!err){
                result["status"]=1;
                result.message="Todo Update Edildi";
            }
            else{
                result.status=0;
                result.message="Hata Oluştu";
                console.log(err);
            }
            res.json(result);
        }
    )
});

app.post("/selected", (req, res) => {
    const button_id = req.body.button_id;
    const inputselected = 0+req.body.input_selected;
    console.log(inputselected)
    const result = {
        "status" : 0,
        "message" : "",
        "selected" : 0,
    };
    db.query("UPDATE todoslist SET selected = ? WHERE todoid = ?",
        [inputselected, button_id],
        (err, resx) => {
            if(!err){
                result["status"]=1;
                result.message="Todo Durumu Değişti";
            }
            else{
                result.status=0;
                result.message="Hata Oluştu";
                console.log(err);
            }
            res.json(result);
        }
    )
});

app.listen(3001, () => {
    console.log("running server");
});





