import express from 'express'
const app= express()

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.send("Home Page")
})


app.get('/about', (req, res) =>{

var users = [
    {name: 'Akshay Kumar', age: 25, city: 'Delhi'},
    {name: 'Salman Khan', age: 24, city: 'Mumbai' },
    {name: 'Shahid Kapoor', age: 23,city: 'Goa'},
    {name: 'John Abraham', age: 22,city: 'Delhi'},
    {name: 'Kartrina Kaif', age: 23,city: 'Agra'}
];`
























`

    res.render("about",{
                        title:'Home page',
                        message:'Welcome',
                        items:'users'
    })
})

app.listen(3001,()=>{
    console.log("server started successfully on port : 3001")
})

