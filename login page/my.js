$(".query a").click (function(){
	$("form").animate({height:"toggle", opacity: "toggle"}, "slow");
	} );
	
	function check(form)
	{
		if(form.userid.value == "lyz" && form.pwd.value == "1234")
	{ window.open("https://www.youtube.com/channel/UCWbSwHCUBeJ6BuknAOhdCOQ")
	}
	else
	{
		alert("The username you entered or password is incorrect")
	}}
