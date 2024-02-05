const express =require('express');
const app=express();
const port =3001;
let users =[
    {id:1,name:'person1'},
    {id:2,name:'person2'},
];
app.use(express.json());
//route to get all the users
app.get('/users',(req,res)=>{
    res.json(users);
});
//route to get a user by id
app.get('users/:id',(req,res)=>{
    const userId=parseInt(req.params.id)
    //parseInt will analayse the req for id parameter
    const user=users.find(user =>user.id==userId)
    //find user where user.id== userId obtained from req
    if(!user){
        return res.status(404).send('user not found!')
    }
    res.status(200).json(user);
});
//route to create new user
app.post('/users',(req,res)=>{
    //take the data sent in the body while creating a new user
    const newUser=req.body;
    users.push(newUser);
    //send response 201 -created and send the response with body : json object of new user
    res.status(201).json(newUser)
    });
//update a user by id 
app.put('/users/:id',(req,res)=>{
    const userId=parseInt(req.params.id)
    const updatedUser=req.body;
    let found=false;
    users =users.map(user=>{
        if(user.id===userId){
            found=true;
            res.status(201)
            return{...user, ...updatedUser};
        }
        return user;
    })
    if (!found){
        return res.status(401).send('user not found')
    }
    //sends json of updated user
    res.json(updatedUser);
});

//delete a user by id
app.delete('/users/:id',(req,res)=>{
    const userId=parseInt(req.params.id);
    users=users.filter(user =>user.id !==userId);
    res.send('user deleted');
});

//start the server 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)});


