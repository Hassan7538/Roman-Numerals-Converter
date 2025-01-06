
$("#inp").keyup(function () {
    var num = parseFloat($("#inp").val());

    //console.log(num);

    if (num < 0) {
        $("#inp").val('');
        $("#error").html("Don't enter negative numbers");
        $("#error").css("display", "block");
    }

    // else{
    //     $("#error").css("display", "none");
    // }
})

$("#convert").click(function () {
    convertor();
})

function convertor() {

    goingBlank();

    var givenArr = $("#inp").val();
    $("#givenNo").html(givenArr + " in Romman is ");
    $("#givenNo").css("display", "inline");

    var n = parseFloat($("#inp").val());
    console.log("Number is " + n);

    var romanArr = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    var digitArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

    var limit = romanArr.length - 1;

    for (var i = limit; i >= 0; i--) {

        while (n - digitArr[i] >= 0) {
            
            console.log(romanArr[i]);

            $("#convertedNo").append(romanArr[i]);
            $("#convertedNo").css("display", "inline");

            let d = n - digitArr[i];
            n = d;
        }

    }

}

function goingBlank(){
    $("#givenNo").html("");
    $("#givenNo").css("display", "inline");
    $("#convertedNo").html("");
    $("#convertedNo").css("display", "inline");
}