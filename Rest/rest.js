const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
app.use(express.urlencoded({extended:false}));
app.use((req,res,next)=>{
    console.log("hello from second middleware");
    // res.json({msg : "hello from middleware"});
    next();
})

app.get("/users",(req,res)=>{
    const html =`
    <ul>
    ${users.map(x=> `<li>${x.first_name}</li>`)}
    </ul>
    `

    res.send(html);
})
app.get("/api/users",(req,res)=>{
    return res.json(users);
});
// app.get("/api/users/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find(user=>user.id===id);
//     res.json(user);
// })

app.route("/api/users/:id").get((req,res)=>{
        const id = Number(req.params.id);
    const user = users.find(user=>user.id===id);
    res.json(user);
}).put((req,res)=>{
    console.log("pending");
    res.json({status:"pending"});
}).delete((req,res)=>{
    console.log("pending");
    res.json({status:"pending"});
})

app.patch("/api/user/profile",(req,res)=>{
    console.log("pending");
    res.json({status:"pending"});
})
app.post("/api/user",(req,res)=>{
    const body = req.body;
    console.log(body);
    users.push(body);
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
        console.log("writting data");
    })
    console.log("pending");
    res.json({status:"pending"});
})








app.listen(3000,()=>{
    console.log("Server Is running!!!");
})

/**
 * Tasks: 
 *     1. GET/User -> list all users
 *     2. GET/user/:1 -> get user with id 1
 *     3. POST/ users -> create new user
 *     4. PATCH/users/user
 */
