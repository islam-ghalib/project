
/* Task 1 */
let mystudents = ["ahmad","anas","ali",["widad","layan","esraa"]]; 
for (let i = 0; i < mystudents.length; i++) {
    
    if(Array.isArray(mystudents[i])){
        for (let j = 0; j < mystudents[i].length; j++) {
            console.log(mystudents[i][j].toUpperCase())
        }
    }
    else{
        console.log(mystudents[i].toUpperCase())
    }
}
    

/* Task 2 */
let age = [20,22,60,45,77,32];

//بتبحث اذا العنصر موجود بترجع ترو و اذا غير موجود بترجع فولس
age.includes(5) //=>false 
console.log(age.includes(5))

// بترجع اريي بتحتوي على العناصر الي بتتطابق مع الشرط الي بعطيها ياه (بتاخد فنكشن)
age.filter(num=>num%2==0) // => [20,22,60,32]
console.log(age.filter(num=>num%2==0))

// (بتاخد فنكشن)بتطبق الفنكشن على كل عنصر بالاريي و بترجع اريي جديدة
age.map(num=>num+2) //=>[22,24,62,47,79,34]
console.log(age.map(num=>num+2))

// بترجع فقط اول عنصر بنطبق عليه الشرط
age.find(num=>num%2!=0) // =>45
console.log(age.find(num=>num%2!=0))

//بتنشأ اريي جديدة عبارة عن 2 اريي مدموجات مع بعض بدون ما تعدل على اي اريي فيهم
let age2=age.concat([30,70,40])
console.log(age2) // => age2 = 20 22 60 45 77 32 30 70 40

//بترجع طول الاريي
age.length // => 6
console.log(age.length)