

function classifyNumber(inputNumber1){

    switch(true)
    {
        case inputNumber1 > 0:
            console.log("Given Number is a Positive number");
            break
        case inputNumber1 == 0:
            console.log("Given Number is Neutral");
            break
        case inputNumber1 < 0:
            console.log("Given Number is a Negative number");
            break
        default:
            console.log("Invalid Number");
    }

}

classifyNumber('-1') //Given Number is a Negative number