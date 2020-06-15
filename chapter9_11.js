//                   chapter 9 - 11
var chap9="chapter 9  11 <br>"
var chap = chap9.bold()
document.write("<br>")
document.write("<br>")
document.write(chap)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("Ans.No 1")
document.write("<br>")

var city = prompt("Q.No1// Enter City name:")
if(city == "karachi"){
    document.write("<br>")
    document.write("Welcome to city of light")
}else{
    document.write("<br>")
    document.write("city of pakistan")
}
document.write("Ans.No 2")
document.write("<br>")
var gender = prompt("Enter Gender :")
if(gender == "male"){
    document.write("<br>")
    document.write("Good Morning Sir!")
}else if(gender == "female"){
    document.write("<br>")
    document.write("Good Morning Mam!")
}else{
    document.write("<br>")
    document.write("Gender is Invild")
}
document.write("<br>")
document.write("Ans.No 5")
document.write("<br>")
document.write("<br>")
document.write("<br>")
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
document.write("<br>")
document.write("<br>")
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
document.write("<br>")
document.write("<br>")
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
    }
if (++c < 14){
    alert("condition 3 is true");
    }
if(c === 14){
    alert("condition 4 is true");
    }
    document.write("<br>")
    document.write("<br>")
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    }
    document.write("<br>")
    document.write("<br>")
    if (true){
        alert("True");
        }
        if (false){
        alert("False");
        }
        document.write("<br>")
        document.write("<br>")
        if("car" < "cat"){
            alert("car is smaller than cat");
            }

 document.write("<br>")
 document.write("Ans.No 6")
 document.write("<br>")
var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

document.write("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          document.write("Grade : F");      
          } 
        else if (avg < 70) {
                document.write("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                document.write("Grade : C"); 
        } else if (avg < 90) {
                document.write("Grade : B"); 
        } else if (avg < 100) {
                document.write("Grade : A"); 
}
