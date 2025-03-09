// funtion Ep.2
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
//3. no parameters, has return
function myFunctC(){
    console.log(`Woo`)
    return `Wow Wow Wow`
}

//4. have parameters, has return
function myFunctD(n1,n2){
    return n1 + n2
}
// return คือ การส่งค่ากลับมาจุดเรียกใช้
// ควรเอา return ไปใช้งาน

console.log(myFunctD(10,20)) 

let xx = myFunctC()
console.log(`${xx} >_<`)
