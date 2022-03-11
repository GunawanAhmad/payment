$(document).ready(function () {
    $(".abrev-text-1").html($(".lang").val());
    $(".abrev-text-2").html($(".country").val());
    $(".abrev-text-3").html($(".currency").val());
});
$(".lang").change(function (e) {
    $(".abrev-text-1").html(e.target.value);
    e.preventDefault();
});

$(".country").change(function (e) {
    $(".abrev-text-2").html(e.target.value);
    e.preventDefault();
});

$(".currency").change(function (e) {
    $(".abrev-text-3").html(e.target.value);
    e.preventDefault();
});

$(".toggle-details").click(function (e) {
    if (!$(".cost-breakdown-wrapper").hasClass("hide")) {
        $(".toggle-details").html("Show details");
    } else {
        $(".toggle-details").html("Hide details");
    }
    $(".cost-breakdown-wrapper").toggleClass("hide");
    e.preventDefault();
});
