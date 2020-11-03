function nameandrank(event) {

    event.preventDefault();

    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var rank = $("input[name='rank']:checked").val();

    $("#afterSub").text("Hello " + rank + " " + fname + " " + lname);

}

function init() {

    $("#submit").click(nameandrank);

}

$(init);
