// funtion Ep.5
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// callback function คือ ฟังก์ชันที่ทำงานหลังจากเรียกใช้ฟังก์ชันอื่น

function funcA(xx, yy, zz) {
    console.log(xx)
    let aa = yy * 10

    zz(aa) // callback function
}

function funcB(nn) {
    console.log(nn * 200)
}

funcA(11, 22, funcB) // ส่ง argument ไปเป็นฟังก์ชัน 
console.log("-----------------------")
funcA(10,20,(data)=>{
    console.log(`wow`)
    console.log(`woo`)
    console.log(data)
})
console.log("-----------------------")
funcA(10,20,function (data){
    console.log(`wow`)
    console.log(`woo`)
    console.log(data)
})