// control statement (loop/iteration/repetition) Ep.2
// break and continue in loop
//------------------------------
// 1. break in loop ทำงานเมื่อไหร่จบลูปเลย
let aa = 1
while (aa <= 5) {
    aa++;
    if (aa == 3) {
        break
    }
        console.log(aa-1,"Hello")  
} 


// 2. continue in loop ทำงานเมื่อไหร่จบลูปรอบนั้น ไปรอบต่อไป ข้ามอันนั้นไปเลย
let bb = 1
while (bb <= 5) {
    bb++;
    if (bb == 3) {
        continue
    }
        console.log(bb,"HI")
} 
