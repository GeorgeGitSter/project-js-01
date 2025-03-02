// variable ตัวแปร
// เป็นชื่อที่ตั้งเอง ใช้เก็บข้อมูล
// การใช้งานตัวแปร คือ เอาค่าไปเก็บในตัวแปร หรือ เอาค่าในตัวแปรมาใช้
//------------------------------
// var  can change, ไม่จำเป็นต้องกำหนดค่าแต่แรก, global
var aa = 10

// let  can change, ไม่จำเป็นต้องกำหนดค่าแต่แรก, local
let bb = 20

// const  cannot change, ต้องกําหนดค่าแรก, local
const cc = 30

aa = 15
console.log(aa)
console.log(cc)

{

    var wow = 10
    {
        console.log(wow)
        let wee = 20
        const hoo = 30
    }

    {
        console.log(wee)
    }
}