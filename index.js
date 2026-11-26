import express from "express";
import cors from "cors"

const app = express();
const port = process.env.PORT
app.use(cors())
app.use(express.json())

const users = [
  {
    id: 1,
    name: "Sabiha Sabnam",
    email: "sabiha@gmail.com",
    age: 22,
    city: "Dhaka"
  },
  {
    id: 2,
    name: "Rifa Akter",
    email: "rifa@gmail.com",
    age: 23,
    city: "Cumilla"
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    email: "nusrat@gmail.com",
    age: 21,
    city: "Chittagong"
  },
  {
    id: 4,
    name: "Tania Islam",
    email: "tania@gmail.com",
    age: 24,
    city: "Sylhet"
  },
  {
    id: 5,
    name: "Sumaiya Akter",
    email: "sumaiya@gmail.com",
    age: 22,
    city: "Dhaka"
  }
];
app.get("/", (req, res) => {
  res.send("hello server");
});
app.get("/about" , (req,res) =>{
    res.send("about page")
})
app.get("/users" , (req,res) =>{
    res.json(users)
})


app.listen(port, () => {
  console.log("server is running");
});
