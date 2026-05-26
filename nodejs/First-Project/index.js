const express = require('express')
const app = express()

app.listen(3000, ()=>{
    console.log('Successfully Connected on port 3000')
})

app.set('view engine', 'ejs')

// app.get('/',(req, res)=>{
//     res.send("<h1>Welcome to Home page</h1>")
// })
// app.get('/about',(req, res)=>{
//     res.send("<h1>About page</h1>")
// })
// app.get('/gallery',(req, res)=>{
//     res.send("<h1>Gallery page</h1>")
// })
// app.get('/about/user',(req, res)=>{
//     res.send("<h1>User page</h1>")
// })
// app.get('/random.text',(req, res)=>{
//     res.send("<h1>Random page</h1>")
// })
// app.get('/about:id',(req, res)=>{
//     res.send(req.params)
// })
// app.get('/user/:userid-:bookid',(req, res)=>{
//     res.send(req.params)
// })
app.get('/search',(req, res)=>{
    const name = req.query.name
    const age = req.query.age
    res.send(`Search Resulrt for Name : ${name} , Age :${age}`)
})

app.get('/about',(req, res)=>{
   res.redirect('..')
})
app.get('/download',(req, res)=>{
  res.download('C:\Users\Student\Desktop\shortcut.txt', 'Download.txt')
})

