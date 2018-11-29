$(document).ready(function(){
   	$("#form1 .unchoosen").click(function(){
    $("#form1").removeClass("active_form").addClass("hide_form");
    $("#form2").removeClass("hide_form").addClass("active_form");
  });
   $("#form2 .unchoosen").click(function(){
    $("#form2").removeClass("active_form").addClass("hide_form");
    $("#form1").removeClass("hide_form").addClass("active_form");
	});
  $("#fullpage").fullpage({
        anchors: ['firstPage', 'secondPage'],
        menu: '#menu',
        navigation: true,
        navigationTooltips: ['Section1','Section2'],
        responsiveWidth: 700,
        responsiveHeight: 825,
        parallax: true,
        loopTop: true,
        loopBottom: true
   });
});
