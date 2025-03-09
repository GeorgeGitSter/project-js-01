// funtion Ep.3
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function for default parameter
function myFunct1(xx, yy = 200, zz = 100) { //ต้องเริ่มจากตัวท้ายสุดเสมอ ไม่มีไม่ได้
    console.log(xx)
    console.log(yy)
    console.log(zz)
}
myFunct1(10,20,30)
console.log("-----------------------")
myFunct1(11,22)
console.log("-----------------------")
myFunct1(13)


// function for return mulitple value
// return array value
// ตัวเดียวแต่เก็บได้หลายค่า
function myFunct2() {
    let aa = [10,20,30]
    return aa
}


// return object value
function myFunct3() {
    let bb = {
        name: "Sombat",
        age: 20
    }
    return bb
}

// use destruction to get value from object and array
console.log("-----------------------")
let [n1,n2,n3] = myFunct2() // array สร้างตัวแปรใน []
console.log(n1,n2,n3)

console.log("-----------------------")
let {name, age} = myFunct3() // object สร้างตัวแปรใน {} ชื่อเดียวกับ key
console.log(name, age)