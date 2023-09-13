//function to calclulate interest
function calcInterest(a,b,c) {
        //get input values for function calcInterest
    let principal = parseFloat(document.getElementById('principal').value);
    let intRate = parseFloat(document.getElementById('intRate').value/100);
    let term = parseFloat(document.getElementById('term').value);
        //calculate interest
    let totalMoney = (principal*(1 + intRate*term)).toFixed(2);
    //console log to see if I got the values from input fields
    console.log(principal);
    console.log(intRate);
    console.log(term);
    let totalInterest = totalMoney - principal;
    //innerHTML to display final interest calculation
    document.getElementById('finalCalc').innerHTML = "With a beginning principal of $" + principal + ", with an interest rate of " + intRate + " over " + term + " years, you will make $" + totalInterest + " in interest, to a grand total of $" + totalMoney + "."; 
}
