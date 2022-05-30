const exp=require('express')
const adminApi=exp.Router()
const asyncHandler=require('express-async-handler')

adminApi.use(exp.json())
adminApi.post('/addcontent',asyncHandler(async(req,res,next)=>{


content=req.body
dbObj=req.app.get('databaseObject')
colObj=dbObj.collection('teachersContent')
teacherObject=await colObj.findOne({mail:{$eq:content.mail}})
dayName=content.day
console.log(dayName)
console.log(typeof(dayName))
newArray=teacherObject[dayName]
console.log(newArray)
const newPeriod={}
newPeriod.time=content.time
newPeriod.class=content.class
newPeriod.subject=content.subject
newPeriod.text=content.text

newArray.push(newPeriod)

if(dayName==='monday'){
    let result=await colObj.updateOne({mail:{$eq:content.mail}},{$set:{monday:newArray}})
    res.send({message:'text added'})
}

if(dayName==='tuesday'){
    let result=await colObj.updateOne({mail:{$eq:content.mail}},{$set:{tuesday:newArray}})
    res.send({message:'text added'})
}

if(dayName==='wednesday'){
    let result=await colObj.updateOne({mail:{$eq:content.mail}},{$set:{monday:newArray}})
    res.send({message:'text added'})
}



if(dayName==='thursday'){
    let result=await colObj.updateOne({mail:{$eq:content.mail}},{$set:{thursday:newArray}})
    res.send({message:'text added'})
}

if(dayName==='friday'){
    let result=await colObj.updateOne({mail:{$eq:content.mail}},{$set:{friday:newArray}})
    res.send({message:'text added'})
}

if(dayName==='saturday'){
    let result=await colObj.updateOne({mail:{$eq:content.mail}},{$set:{saturday:newArray}})
    res.send({message:'text added'})
}


}))


adminApi.post('/getcontent',asyncHandler(async(req,res,next)=>{

content=req.body
let 






}))




module.exports = adminApi