const express=require('express')
const route=express.Router()


const users=[
    {
        id:'suman',
        avatar:'https://img.freepik.com/free-vector/young-man-face-cartoon_18591-44460.jpg?w=740',
        name:"Suman Maity",
        posts:[
            {
                id:1,
                image:'https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?t=st=1653636816~exp=1653637416~hmac=b9454d33505659aee5ccceb30ef95aed89342f9904a1639b0f1804002bbd8f14&w=826',
                caption:''
            },
            {
                id:2,
                image:'https://img.freepik.com/free-vector/indian-group-india-cartoon_18591-52115.jpg?w=740&t=st=1653636829~exp=1653637429~hmac=3aaada5cb9f7afaeee34e6cc510d1fbfe388395bf3f52d0702d6ffadab7e6327',
                caption:''
            },
            {
                id:3,
                image:'https://img.freepik.com/free-vector/animation-character-portrait-woman-thinking-problem-pose-flat-design_40876-2328.jpg?t=st=1653636816~exp=1653637416~hmac=0ff63e88a3e594eacddf201887273ac8f149ca463b6ebbbc8c97c87c1019fdfc&w=740',
                caption:''
            }
        ]
    },
    {
        id:'sss2',
        avatar:'https://cdn.vectorstock.com/i/1000x1000/10/95/cute-young-man-avatar-character-cartoon-style-vector-36081095.webp',
        name:"SD Maity",
        posts:[
            {
                id:1,
                image:'',
                caption:''
            },
            {
                id:2,
                image:'',
                caption:''
            },
            {
                id:3,
                image:'',
                caption:''
            }
        ]
    }
]
route.post('/',async (req,res)=>{
    const index=users.map(user=>user.id).indexOf(req.body.id)
    res.send(users[index])
})

module.exports=route;