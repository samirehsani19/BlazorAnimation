// C# calling this method
function GetResult(num1, num2) {
    return num1 * num2;
}


var jsFunctions = {};
jsFunctions.GetSum = function () { // calling C# method
    var num1 = prompt("Enter first number");
    var num2 = prompt("Enter second number");
    DotNet.invokeMethodAsync("BlazorAnimation", "GetSum", parseInt(num1), parseInt(num2))
        .then(result => {
            console.log(result);
            var el = document.getElementById("result");
            el.innerHTML = 'the summation of your numbers is: ' + result;
        }
    );
}



 // calling c# void method, dotNetObjRef needs for calling void method
jsFunctions.GetInstance = function (dotNetObjRef) { 
    var name = prompt("Enter your name");
    dotNetObjRef.invokeMethodAsync("GetName", name);
}