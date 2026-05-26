let weight = Number(prompt("Nhập cân nặng (kg):"));
let height = Number(prompt("Nhập chiều cao (m):"));

let bmi = weight / (height * height);

if (bmi < 18.5) {
    alert("BMI = " + bmi + " : Gầy");
} else if (bmi < 23) {
    alert("BMI = " + bmi + " : Bình thường");
} else if (bmi < 25) {
    alert("BMI = " + bmi + " : Tiền béo phì");
} else if (bmi < 30) {
    alert("BMI = " + bmi + " : Béo phì độ I");
} else {
    alert("BMI = " + bmi + " : Béo phì độ II");
}