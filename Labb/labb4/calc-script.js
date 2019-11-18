
$("input").change(function () {
    var nbr1 = $("#nbr1").val();
    var nbr2 = $("#nbr2").val();
    var sum = nbr1 * nbr2;
    $("#result").val(sum);
});