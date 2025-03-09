// control statement (condition/selection) Ep.2
// คำสั่งควบคุมในกลุ่มต้องมีการพิสูจน์ตรวจสอบก่อนทำงานใดๆ
//------------------------------
// 3. if-else-if พิสูจน์หลายครั้ง
let score = 55
if(score >= 80) {
    console.log("A")
} else if (score >= 70) {
    console.log("B")
} else if (score >= 60) {
    console.log("C")
} else if (score >= 50) {
    console.log("D")
} else { // ไม่จำเป็นต้องมี if
    console.log("F")
}

// 4. switch-case พิสูจน์หลายครั้ง (ไช้ > < ไม่ได้) ทำจนถึง break
let busno = 57
switch(busno) {
    case 3:
        console.log("สนามหลวง")
        break
    case 84:
        console.log("วงเวียนใหญ่")
        break
    case 57:
        console.log("ปิ่นเกล้า")
        break
    case 28:
        console.log("หมอชิต")
        break
    default:
        console.log("Bus not found")
        break
}
