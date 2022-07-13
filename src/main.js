$(document).ready(function () {
    $(".loading-container").css("display", "none");
    $(".abrev-text-1").html($(".lang").val());
    $(".abrev-text-2").html($(".country").val());
    $(".abrev-text-3").html($(".currency").val());

    var langSelectorElm = document.querySelector(".selectpick.lang");
    var selectedLang =
        langSelectorElm.options[langSelectorElm.selectedIndex].innerHTML;
    var countrySelectorElm = document.querySelector(".selectpick.country");
    var selectedCountry =
        countrySelectorElm.options[countrySelectorElm.selectedIndex].innerHTML;
    var currencySelectorElm = document.querySelector(".selectpick.currency");
    var selectedCurrency =
        currencySelectorElm.options[currencySelectorElm.selectedIndex]
            .innerHTML;

    selectpicker(selectedLang, selectedCountry, selectedCurrency);
    $(".country-container select").val("AF");
});

function selectpicker(selectedLang, selectedCountry, selectedCurrency) {
    $(".selectpick").selectpicker();
    $(".btn").attr("data-tooltip", "tooltip");
    $(".lang-container .btn").attr(
        "data-original-title",
        "Language: " + selectedLang
    );
    $(".country-container .btn").attr(
        "data-original-title",
        "Country: " + selectedCountry
    );

    $(".currency-container .btn").attr(
        "data-original-title",
        "Currency: " + selectedCurrency
    );
    $(".btn").attr("data-placement", "top");
    $('[data-tooltip="tooltip"]').tooltip({
        trigger: "hover",
        container: ".left-container .sticky-container",
    });

    //fixing Safari 14/15 tooltip bug
    $(".selectpick.country").selectpicker("toggle");
    $(".selectpick.country").selectpicker("toggle");
    var val = $(".country-container select").val();
    $(".country-container select").val(val);
}

$(".lang").change(function (e) {
    $(".abrev-text-1").html(e.target.value);
    var title = e.target.options[e.target.selectedIndex].innerHTML;
    $(".lang-container .btn").attr("data-original-title", "Language: " + title);
    e.preventDefault();
});

$(".country").change(function (e) {
    $(".abrev-text-2").html(e.target.value);
    var title = e.target.options[e.target.selectedIndex].innerHTML;
    $(".country-container .btn").attr(
        "data-original-title",
        "Country: " + title
    );

    e.preventDefault();
});

$(".currency").change(function (e) {
    $(".abrev-text-3").html(e.target.value);
    var title = e.target.options[e.target.selectedIndex].innerHTML;
    $(".currency-container .btn").attr(
        "data-original-title",
        "Currency: " + title
    );
    e.preventDefault();
});

$("#detail-cost-collapse").on("hide.bs.collapse", function () {
    $(".toggle-details").text("Show details");
});

$("#detail-cost-collapse").on("show.bs.collapse", function () {
    $(".toggle-details").text("Hide details");
});

$(".accordion").on("show.bs.collapse", function (e) {
    $(e.target).parent().find(".arrow-icon").first().addClass("rotate");
});
$(".accordion").on("hide.bs.collapse", function (e) {
    $(e.target).parent().find(".arrow-icon").first().removeClass("rotate");
});
