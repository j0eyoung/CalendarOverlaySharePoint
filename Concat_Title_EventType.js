<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
});
//Concat the Event Type to the Title right before saving
function PreSaveAction()
{
    var savedTitle = $("#Title").parent().parent().find("input").val();
	var eventCategory = $("select[title*='EventType'] option:selected").text();
	if(savedTitle.indexOf("|") >= 0){
		savedTitle = savedTitle.split(" |")[0];
	}
	var concatTitleEvent = savedTitle + " | ("+eventCategory+")";
	if(savedTitle != null && eventCategory != "(None)"){
		$("#Title").parent().parent().find("input").val(concatTitleEvent);
		return true;	
	}else{
		alert("Please make sure Title and Event Type are filled in.");
	}
}
</script>