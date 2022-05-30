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

let result=await colObj.update({mail:{$eq:content.mail}},{$set:{dayName:newArray}})
res.send({message:'text added'})








}))


adminApi.post('/getcontent',asyncHandler(async(req,res,next)=>{

content=req.body
let 






}))




module.exports = adminApi