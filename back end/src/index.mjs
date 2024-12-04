import express from "express";

const app = express();

const default_to_do_list = {
    "title":"default list",
    "id":"000000",
    "list":["initialize a project","learn react","make the project a success"]
}

app.get("/",
    (req,res) => {
        res.send(default_to_do_list);
    }
)

app.listen(4000);