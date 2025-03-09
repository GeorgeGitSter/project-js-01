// data type ชนิดข้อมูล
// คือ ตัวข้อมูล (literal) ที่เก็บไว้ในตัวแปร (variable) หรือที่ทำไปใช้งาน
//------------------------------
// string
let aa = "AAAA"
let bb = "BBBB ${10 * 8}"
let cc = `CCCC ${10 * 8}` //${ expression } // แนะนำ
console.log(aa,bb,cc)

// number
let dd = 10 //integer
let ee = 10.512 //float
console.log(dd,ee)
console.log(`${dd} ${ee}`)


// boolean
let ff = true
let gg = false
console.log(ff,gg)

// object
let hh = {
    //key: value
    name: "George",
    age: 20,
    major: "Computer Science",
    university: "KMITL"
}
console.log(hh)
console.log(`${hh.name} ${hh.age} ${hh.major} ${hh.university}`)
console.log(hh.name)


// array
let ii = [10,20,30,40,50]
console.log(ii)
console.log(ii[0])
console.log(ii[1])
console.log(ii[2])
console.log(ii[3] * ii[4])
console.log(ii[4])
console.log(ii[5])

// undefined
let jj 
let kk = undefined
console.log(jj)
console.log(kk)



// null ค่าว่าง ไปหางานทำนะ
let ll = null
console.log(ll)


// type checking การตรวจสอบชนิดข้อมูล
console.log(typeof ll)
console.log(typeof aa)
console.log(typeof hh)
console.log(typeof kk)
console.log(typeof dd)