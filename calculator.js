function calculate(){
    console.log("Calculator function");
    let num1=Number(prompt("Enter the number 1: "));
    console.log(num1);
    let num2=Number(prompt("Enter the number 2: "));
    console.log(num2);
    let sum,subs,mult,div;
    sum=num1+num2;
    subs=num1-num2;
    mult=num1*num2;
    div=num1/num2;
    //display the sum
    //display the subs
    //display the multiplication
    //display the division
    console.log(sum);
    console.log(subs);
    console.log(mult);
    console.log(div);

    document.getElementById("results").innerHTML=`
    <p>${num1} + ${num2} = ${sum}</p>
    <p>${num1} - ${num2} = ${subs}</p>
    <p>${num1} * ${num2} = ${mult}</p>
    <p>${num1} / ${num2} = ${div}</p>
    `;

    
    
}