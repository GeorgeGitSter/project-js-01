// operator ตัวดำเนินการ Ep.2
// คือ เครื่องหมายที่ใช้ในการดำเนินการกับข้อมูล
//------------------------------
// Assignment Operators = += -= *= /= %=

let x = 10 
x = x + 5       // X += 5
let y = 20 
y = y - 5 * x   // Y -= 5 * X

// Nullish Coalescing Operator __??__ ถ้าเป็น null จะได้หลังเครื่องหมาย ??
let aa = null
let bb = 111
console.log(aa ?? 888) 
console.log(bb ?? 555) 

// ******* Ternary Conditional Operator __?__:__ >> true : false
let cc = 10 < 500 ? 'hello' : 'world'
console.log(cc)

let dd = 'Sombat' > 'Somjai' ? 555 : 999 // ตัวอะไรมาก่อนจะน้อยกว่า เช่น b น้อยกว่า j , ตัวใหญ่น้อยกว่าตัวเล็ก
console.log(dd)

// Spread Operator __...__ use with objecdt or array
let ee = [1,2,3]
let ff = [10,20,30]
let gg = [...ee, ...ff]
console.log(gg)
