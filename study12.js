// funtion Ep.1
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function) 
//------------------------------
// function มี 4 ประเภทใหญ่
// 1. no parameter, no return
function myFunctA() {
    console.log("Hello")
    console.log(`Hi`)
}

// 2. have parameters, no return
function myFunctB(data1, data2, data3) {
    console.log(data1)
    console.log(data2 + data3)
}
// NaN = Not a Number
myFunctA()
myFunctA()
console.log('-----------------')
myFunctB("Hello", 5, 10) //argument คือ ข้อมูลที่ส่งให้ parameter
myFunctB("Hello", 200, 100)


