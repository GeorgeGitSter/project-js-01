// control statement (loop/iteration/repetition) Ep.1
// การทำงานเดิม ๆ ซ้ำๆ จนถึงเงื่อนไขเป็นเท็จค่อยหยุด loop
//------------------------------
// 1. while พิสูจน์ก่อน เป็นจริงทำ เป็นเท็จจบ
let aa = 1
while (aa <= 5) {
        console.log("Hello")
        aa++;
} 


// 2. do-while ทำก่อนแล้วพิสูจน์ เป็นจริงกลับไปทำ
let bb = 1
do {
    console.log("Hi")
    bb++
} while (bb <= 5)

 let gg = 10
    do {
        console.log("Ha")
        gg--
    } while (gg > 5)


// 3. for ทำจนถึงเงื่อนไขเป็นเท็จค่อยหยุด loop (ทำงานเร็วสุด) ทำส่วนที่ 1 และไม่ต้องยุ่ง > 2 > log แล้วค่อยมาส่วนที่ 3
for (let cc = 1; cc <= 5; cc++) {
    console.log("Hey")
}