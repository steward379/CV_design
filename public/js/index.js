"use strict";

$(".switch-r").click(function () {
  $(".red").show();
  $(".yellow").hide();
  $(".green").hide();
});
$(".switch-y").click(function () {
  $(".yellow").show();
  $(".red").hide();
  $(".green").hide();
});
$(".switch-g").click(function () {
  $(".green").show();
  $(".red").hide();
  $(".yellow").hide();
});
$(".switch-all").click(function () {
  $(".green").show();
  $(".red").show();
  $(".yellow").show();
});

$(".word1").click(function () {
  $(".word-less1").toggle("normal");
});
$(".word2").click(function () {
  $(".word-less2").toggle("normal");
});
$(".word3").click(function () {
  $(".word-less3").toggle("normal");
});
$(".word4").click(function () {
  $(".word-less4").toggle("normal");
});
$(".word5").click(function () {
  $(".word-less5").toggle("normal");
});
