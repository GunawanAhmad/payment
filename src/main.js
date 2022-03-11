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

$("#detail-cost-collapse").on("hide.bs.collapse", function () {
    $(".toggle-details").text("Show details");
});

$("#detail-cost-collapse").on("show.bs.collapse", function () {
    $(".toggle-details").text("Hide details");
});
