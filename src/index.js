const express=require('express')
const app =express();
const userModel =require('../database/models/user')
const bcrypt=require('bcrypt')
const corsModule=require('cors')
const db=require('../database/index')
db.init()

app.use(corsModule())
app.use(express.json())

app.get('/',(req,res)=>{
    res.json(arr)
})
//verify user and getting user
 //let arr=[];

app.route('/user').get((req,res)=>{
   
	//  res.json(arr)
    userModel.find( {} )
		.then(function(data)
    {
		res.json(data);
      
      if(data === null)
      {
        // res.json({msg:"Nothing is Stored"});
		res.end("No data")
      } 
      
    }).catch(function(err)
    {
        res.json({msg:err});	
        console.log(err)
    })

}).post((req,res)=>{
	console.log(req.body);
	let response=req.body
//	arr.push(response)
	
// 	const username=req.body.username;
//     const email=req.body.email
// 	const password=req.body.password;
// 	const repeatpass=req.body.repeatpass;
	
// 	if(!username)
// 	{
// 			res.json({ msg:"Please Enter Username"})
// 			return
// 	}
// 		if(!password)
// 	{
//         res.json({ msg:"Please Enter Password"})
			
// 			return
// 	}
//     if(!email)
// 	{
//         res.json({ msg:"Please Enter Email"})
			
// 			return
// 	}
//     if(!repeatpass)
// 	{
//         res.json({ msg:"Please Enter Confirm Password"})
			
// 			return
// 	}
		

// 	console.log(username,password,email)

//   if(username && (password ===repeatpass))
//   {
    
//     bcrypt.hash(password,10).then(function(hash) {
//     console.log(typeof(hash));
// 					userModel.create(
// 						{
// 							username:username,
// 							password:hash,
//                             email:email

// 						}
// 					)
// 					.then(()=>
// 					{  
						
// 						 res.json({ msg:"Successfully registered"});
						
// 					})
// 					.catch((err)=>
// 					{
// 						console.log(err)
// 							res.json({ msg:"User Already Exist!!"})
// 					})
// 		})
// 	}
// 	else
// 	{
//     res.json({ msg:"Enter a valid detail!!"})
// 	}
	
})

//for register user

app.post('/register',(req,res)=>{
	// const data=JSON.parse(req.body.data)
	const response=req.body
	//arr.push(response)
	console.log("1st",response.username);

	const username=response.username;
    const email=response.email
	const password=response.password;
	const repeatpass=response.repeatPass;

	console.log("verify",username,email,password,repeatpass)
	
	if(!username)
	{
			res.json({ msg:"Please Enter Username"})
			return
	}
		if(!password)
	{
        res.json({ msg:"Please Enter Password"})
			
			return
	}
    if(!email)
	{
        res.json({ msg:"Please Enter Email"})
			
			return
	}
    if(!repeatpass)
	{
        res.json({ msg:"Please Enter Confirm Password"})
			
			return
	}

	console.log("2nd",username,password,email)

  if(username && (password ===repeatpass))
  {
    
    // bcrypt.hash(password,10).then(function(hash) {
    // console.log(typeof(hash));
					userModel.create(
						{
							username:username,
							// password:hash,
							password:password,
                            email:email

						}
					)
					.then(()=>
					{  
						 res.json({ msg:"Successfully registered"});
					})
					.catch((err)=>
					{
						console.log(err)
						res.json({ msg:"User Already Exist!!"})
					})
		// })
	}
	else
	{
    res.json({ msg:"Enter a valid detail || Password mismatch"})
	}


})

app.listen(8000,()=>{
    console.log("Listening on 8000")
})