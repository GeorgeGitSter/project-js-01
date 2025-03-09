// control statement (loop/iteration/repetition) Ep.3
// ทำงานเดิม ๆ ซ้ำ ๆ
//------------------------------
// forEach ใฃ้กับ array ย่อคำสั่งให้สั้นลง
let aa = [10,20,30,40,50]
console.log(aa[0] * 10)
console.log(aa[1] * 10)
console.log(aa[2] * 10)
console.log(aa[3] * 10)
console.log(aa[4] * 10)

console.log('-----------------')
aa.forEach((item)=> {
    console.log(item * 10)    
});

console.log('-----------------')
let bb = [`สมชาย`, `สมหญิง`,`สมหมาย`] // backtrick ใช้กับ string ที่จะมี ตัวแปร
console.log(`Hello ${bb[0]}`)
console.log(`Hello ${bb[1]}`)
console.log(`Hello ${bb[2]}`)
console.log('-----------------')
bb.forEach((item)=>{
    console.log(`Hello ${item}`)
})

// bb.forEach(()=>{})
console.log('-----------------')
// for..in ใช้กับ object (ไม่แนะนำกับ array)
let cc = {
    fullname: `George`,
    age: 20,
    score: [10,20,30],
    address: {
        street: `Petchkasam`,
        province: `Bangkok`,
        city: `Bangkok`
    }

}
console.log(cc.fullname)
console.log(cc.age)
console.log(cc.score[0])
console.log(cc.address.city)
console.log('-----------------')
for ( keyname in cc ){
    console.log(keyname)
    console.log(cc[keyname]) // เอา value ให้ใส่ใน []

}

// for..of ใช้กับ array
let dd = [`สมชาย`, `สมหญิง`,`สมหมาย`] // backtrick ใช้กับ string ที่จะมี ตัวแปร
console.log(`Hello ${bb[0]}`)
console.log(`Hello ${bb[1]}`)
console.log(`Hello ${bb[2]}`)
console.log('-----------------')
for (item of dd){
    console.log(`Hello ${item}`) // เขียนสั้น
}
dd.forEach((item)=>{
    console.log(`Hello ${item}`)
})