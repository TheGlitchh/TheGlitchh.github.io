## StartOf numeric restriction code.   ---->

```

<script type="text/javascript">
//$("#Check_1").closest(".inner_table").css("margin-left","10px");
function findrange(cellid)
{
   max_num=100;
   restrict_zero=false;
}
</script>


```

**EndOf numeric restriction code**


## StartOf shuffle code 

```

Begin Unverified Perl

use List::Util qw(shuffle);
my @sorted_array = (1,2,3);
my @random_array = shuffle(@sorted_array);
foreach $a (@random_array){
	
	ADD("B6BlockConst".$a);
}
ADD(PARENTLISTNAME(),11);
End Unverified


```

**EndOf shuffle Code**


## First table corner with span

```

<script>
	
	$( window ).on( "load", function() {
		
		$('td:first').addClass('corner_label_cell1');
			$(".corner_label_cell1").attr("rowspan","2");
			$(".corner_label_cell").hide();
			$(".corner_label_cell1").append("<b><center> Insomnia Treatments</center></b>");
});
</script>


```

**EndOf table corner with span Code**


## Hiding and showing Question text 

```
<script>
	$( window ).on("load", function() {
	
	$(".labelc").hide();
	$(".labelc1").hide();
		
		if([% S5aX1_r10_c1 %] ==1 || [% S5aX1_r16_c1 %] ==1){
			
		$(".labelc").show();	
}

		if([% S5aX1_r17_c1 %] ==1){
			
		$(".labelc1").show();	
}
});
	
</script>


```

**EndOf Hiding and showing Question text  Code**
 
## Other Validation normal on grid type 

```
//removing all the error highlightings
$(".error_highlight").removeClass("error_highlight");
$(".error_highlight_top").removeClass("error_highlight_top");
$(".error_highlight_bottom").removeClass("error_highlight_bottom");
$(".error_highlight_right").removeClass("error_highlight_right");
$(".error_highlight_left").removeClass("error_highlight_left");
$("td").css("border-width","1px");


//Validation of other specify
if($("#[% QuestionName() %]_r14_1_graphical").hasClass("radiobox") && (SSI_GetValue("[% QuestionName() %]_r14_other")!=""))
{
	strErrorMessage = "You forgot to answer this question.<br>Please select your response in the 'Other' row if you fill in the 'Other specify' box.";
	$(".grid_r14:lt(2)").addClass("error_highlight_top");
	$(".grid_r14:lt(2)").addClass("error_highlight_bottom");
	$(".grid_r14:first").addClass("error_highlight_left");
	$(".grid_r14:eq(1)").addClass("error_highlight_right");
	$(".grid_r14").css("border-width","2px");
	$("#error_box").show();	
}
else if($("#[% QuestionName() %]_r14_1_graphical").hasClass("radioboxselected") && (SSI_GetValue("[% QuestionName() %]_r14_other")==""))
{
	strErrorMessage = "You forgot to answer this question.<br>If you select 'Other', then please specify your answer in the text box provided.";
	$("#[% QuestionName() %]_r14_other").addClass("error_highlight");
	$("#error_box").show();
}



```

**EndOf Other Validation(normal) on grid type Code**

## Auto fill in constant sum(Column wise)

```
//validation for other specify for both the cases
$(".error_highlight").removeClass("error_highlight");
$(".error_highlight_top").removeClass("error_highlight_top");
$(".error_highlight_middle").removeClass("error_highlight_middle");
$(".error_highlight_bottom").removeClass("error_highlight_bottom");
$(".error_highlight_right").removeClass("error_highlight_right");
$(".error_highlight_left").removeClass("error_highlight_left");
$(".grid_r6").css("border-width","1px");

var flow=true;
// Auto filling with 0's for two columns
else 
	{
		 if(SSI_GetValue("[% QuestionName()%]_r_total_c1")==100)
			{
				$(".grid_c1").find("input.numeric_input").each(function()
				{
					if($(this).val()=="")
					{
						$(this).val(0);
					}
				});
			}
			
		if(SSI_GetValue("[% QuestionName()%]_r_total_c2")==100)
			{
				$(".grid_c2").find("input.numeric_input").each(function()
				{
					if($(this).val()=="")
					{
						$(this).val(0);
					}
				});
			}
	
}



```

**EndOf Row Wise auto fill**

## StartOf Column wise auto fill

```
var ar=[% ListValuesArray(CS4RowList) %];
	for(var i=0;i<ar.length;i++)
	{
		if($("#[% QuestionName() %]_r"+ar[i]+"_c_total").val()==100)
		{
			$(".grid_r"+ar[i]).find("input.numeric_input").each(function(){
			if($(this).val()=="")
			{
				$(this).val(0);
			}	
			});
		}	
		
		if(i==ar.length-1 && flow)
		{
			$(".grid_r"+ar[i]).find("input.numeric_input").each(function(){
				if($(this).val()=="")
				{
				$(this).val(0);
				}	
			});
		}
	}
	
	
	
```
	
**End of Column wise autofill**
	
## Auto Populate COlumn wise

```
	
	<script type="text/javascript">
//Auto Populate code Column wise
	$(".numeric_input").keyup(function(event)
	{
		var d=$(this).attr("id");
		cid=d.split("_")[2].substr(1);
		if($(this).attr('id')=="[% QuestionName() %]_r1_c"+cid)  
		{
			if($("#[% QuestionName() %]_r1_c"+cid).val()!="")
			{
				$("#[% QuestionName() %]_r2_c"+cid).val(sum1(cid));
			}
			else if($("#[% QuestionName() %]_r1_c"+cid).val()=="")
			{
				$("#[% QuestionName() %]_r2_c"+cid).val("");
			}
		}
		if($(this).attr('id')=="[% QuestionName() %]_r2_c"+cid)  
		{
			if($("#[% QuestionName() %]_r2_c"+cid).val()!="")
			{
				$("#[% QuestionName() %]_r1_c"+cid).val(sum2(cid));
			}
			else if($("#[% QuestionName() %]_r2_c"+cid).val()=="")
			{
				$("#[% QuestionName() %]_r1_c"+cid).val("");
			}
		}			
	});
function sum1(cid)
{
	return Number([% S9a %])-Number($("#[% QuestionName() %]_r1_c"+cid).val());
}
function sum2(cid)
{
	return Number([% S9a %])-Number($("#[% QuestionName() %]_r2_c"+cid).val());
}
//Fast filling
var brw="[% Browser() %]";
//alert(brw);
if(brw.indexOf("IE")==-1)
{
	$(".inner_table").find("input.numeric_input").blur(function(){ $(this).keyup(); });

}
</script>
	
	
```
	
**End of Auto populate Column wise**
	
	
	
	
	
## Auto Populate Row wise code
	
```
	<script type="text/javascript">
/*$("#[% QuestionName() %]_r1_c1").val(sum2(1));
$("#[% QuestionName() %]_r2_c1").val(sum1(1));
$("#[% QuestionName() %]_r1_c2").val(sum2(2));
$("#[% QuestionName() %]_r2_c2").val(sum1(2));*/
//Auto Populate code Row wise
$(".numeric_input").keyup(function(){
	var d=$(this).attr("id");
	rid=d.split("_")[1].substr(1);

	if($(this).attr('id')=="[% QuestionName() %]_r"+rid+"_c1")  
	{
		if($("#[% QuestionName() %]_r"+rid+"_c1").val()!="")
		{
			$("#[% QuestionName() %]_r"+rid+"_c2").val(sum1(rid));
		}
		else if($("#[% QuestionName() %]_r"+rid+"_c1").val()=="")
		{
			$("#[% QuestionName() %]_r"+rid+"_c2").val("");
		}
	}
	if($(this).attr("id")=="[% QuestionName() %]_r"+rid+"_c2")
	{
		if($("#[% QuestionName() %]_r"+rid+"_c2").val()!="")
		{
			$("#[% QuestionName() %]_r"+rid+"_c1").val(sum2(rid));
		}
		else if($("#[% QuestionName() %]_r"+rid+"_c2").val()=="")
		{
			$("#[% QuestionName() %]_r"+rid+"_c1").val("");
		}
	}	
});
function sum1(rid)
{
	return Number(100)-Number($("#[% QuestionName() %]_r"+rid+"_c1").val());
}
function sum2(rid)
{
	return Number(100)-Number($("#[% QuestionName() %]_r"+rid+"_c2").val());
}
//fast filling code
var brw="[% Browser() %]";
//alert(brw);
if(brw.indexOf("IE")==-1)
{
	$(".inner_table").find("input.numeric_input").blur(function(){ $(this).keyup(); });

}
</script>  

```

** EndOf Auto populate Row wise code**

## StartOf Hiding label based on multiple vs single row

```
<script>
	$( window ).on("load", function() {
	
	$(".labelc").hide();
	$(".labelc1").hide();
	

		
		var setattr = false; // Assuming setattr is false by default
var countGreaterThanZero = 0;

		var a1 = [% S11_r1_c1 %] ;
		var a2 = [% S11_r2_c1 %] ;
		var a3 = [% S11_r3_c1 %] ;
		var a4 = [% S11_r4_c1 %] ;
		var a5 = [% S11_r5_c1 %] ;
		var a6 = [% S11_r6_c1 %] ;

var variables = [a1, a2, a3, a4, a5, a6];

for (var i = 0; i < variables.length; i++) {
  if (variables[i] > 0) {
    countGreaterThanZero++;
  }
}

if (countGreaterThanZero === 1) {
} else if (countGreaterThanZero > 1) {
   $(".labelc").show();
}
		
		
});
	
</script>



```

** EndOf Hiding label based on multiple vs single row**


## StartOf Dynamic Radio using loop

```

<script>


window.onload = function() {refactorhtml()};
	
	function refactorhtml(){
			 var inputElement = document.getElementById("S4_18");
			
			 inputElement.setAttribute("type", "radio");
		
		
		
} 
</script>


<script type="text/javascript">
function SSI_CustomGraphicalCheckbox(GraphicalCheckboxObj, InputObj, blnCheck)
{ 
for(i=1;i<=17; i++){
	
	if(InputObj.name == "S4_"+i && blnCheck == true)
    {            $("#S4_18_graphical").removeClass("radioboxselected");
                 $("#S4_18_graphical").addClass("radiobox");
                
    } 	
	
}

	
}
function SSI_CustomGraphicalRadiobox(GraphicalRadioboxObj, InputObj)
{


	if(InputObj.name == "S4_18")
    {
	
	for(j=1;j<=17;j++){
        
		SSI_SetSelect("S4_"+j, false);
	}
       
		
    
} }
</script>


```

** EndOf Dynamic Radio Using loop**

## Piping Of Values from other Question

```


<script type="text/javascript">

//Piping the values from Previous Question
[% Begin Unverified Perl
my $i=0;
my $va="";
my $msg="";
for($i=1;$i<=9;$i++)
{
	my $c=$i;

		
	$va=VALUE("A1_r".$c."_c1"); #pipings from prevoius question name should be inserted
	if($va eq "")
	{
		$msg.='$("#'.QUESTIONNAME().'_r'.$i.'_c1").hide();';
		$msg.='$("#'.QUESTIONNAME().'_r'.$i.'_c1").parent().next().hide();';
		$msg.='$("#'.QUESTIONNAME().'_r'.$i.'_c1").after("<b>N/A</b>");'; 
	}
	elsif($va>=0)
	{
		$msg.='$("#'.QUESTIONNAME().'_r'.$i.'_c1").val('.$va.');';
	}

}
return $msg;
End Unverified %]
$(".grid_c1").find("input.numeric_input").each(function(){$(this).attr('disabled', true);});
$(".grid_c1").addClass("cgrey"); //greying out for the column which is piped from previous
</script>


```

** EndOf Piping Of Values from other Question**

## StartOf OpenEnd with checkbox greyOut

```


$(".error_highlight").removeClass("error_highlight");
if(SSI_GetValue("[% QuestionName() %]_r2_c1")==0)
{
	var spclchar=/^^[\\.`,*:;"'~!@#$%{}\[\]|^&*()_+\-=\/?><]+[\\.`,*:;"'~!@#$%{}\[\]\s|^&*()_+\-=\/?><]*$/;
	var sp=/^[\s]+$/;
	var b=$("#[% QuestionName() %]").val();
	if($.trim(b)=="" && !$("#A1bx_1").prop("checked"))
	{
		strErrorMessage="You forgot to answer this question.";
	}
	else if($.trim(b)!="" && spclchar.test($.trim(b)))
	{
		strErrorMessage="Please provide a valid response.";
		$("#[% QuestionName() %]").addClass("error_highlight");
	
	}
}



```

** EndOf OpenEnd with checkbox greyOut**

## StartOF searching for a word in html

```


<script>
	function boldTextContainingMS() {
  var searchText = 'MS';
  
  $('*:not(script)').contents().filter(function() {
    return this.nodeType === 3 && this.textContent.includes(searchText);
  }).each(function() {
    var $wrapperElement = $('').text(this.textContent);
    $(this).replaceWith($wrapperElement);
  });
}
boldTextContainingMS();
</script>


```

** EndOf searching for a word in html**

## StartOf Radio Button pipe in

```
<script type="text/javascript">
[% Begin Unverified Perl
		my $msg;
		my $va;
		my $li=LISTVALUESARRAY("A14cRowList");
		my $l=substr($li,1,length($li)-2);
		my @ar=split(",",$l);
		for(my $i=0;$i<@ar;$i++)
		{
			my $c=$ar[$i];
			
			if(GETVALUE("A14c1_c1")==$ar[$i])
			{
				$msg.='SSI_SetSelect("A14c2_c1_'.$ar[$i].'",true);';
				$msg.='$(".grid_r'.$ar[$i].'.grid_c1").removeClass("clickable");';
				$msg.='$(".grid_r'.$ar[$i].'.grid_c1").addClass("cgrey");';
				$msg.='$("#A14c2_c1_'.$ar[$i].'_graphical").css("cursor","default");';
			}
			else
			{
				$msg.='$("#A14c2_c1_'.$ar[$i].'_graphical").hide();';
				$msg.='$(".grid_r'.$ar[$i].'.grid_c1").removeClass("clickable");';
				$msg.='$(".grid_r'.$ar[$i].'.grid_c1").addClass("cgrey");';
				$msg.='$("#A14c2_r'.$ar[$i].'_c1_graphical").css("cursor","default");';
			}
}
		return $msg;
	End Unverified %]
$(".grid_c1").removeClass("clickable");
$(".grid_c1").addClass("cgrey");
</script>


```

** EndOf Radio Button Pipe In**

## StartOf Block Header insert

```


 var labelOpt1 = $('label.opt1:first');
      var divParent = labelOpt1.parent("div");
      var tdParent = divParent.parent("td");
var trParent = tdParent.parent("tr");
      var newTr = $("<tr><td colspan='4'></td></tr>");
      trParent.before(newTr);
	  
	  
```

** EndOf Block Header insert**


## StartOf Okay PopUp

```

var ar = [% ListValuesArray(S7BlockConst) %];
var count = 0;
var flag = true;
var strErrorMessage = "";

for (var i = 0; i < ar.length - 1; i++) {
  var value = SSI_GetValue("[% QuestionName() %]_r" + ar[i]);
  
  if (value == 0) {
    strErrorMessage = "You forgot to answer this question.";
  } else if (value == 2) {
    count = count + 1;
  }
}
console.error(count);
if (count == 9 && flag) {
 	strErrorMessage=" ";
	$("#[% QuestionName() %]_err").hide();
	$("#error_box").hide();
	//$("#next_button").attr("disabled","disabled");
	$("#[% QuestionName() %]_div").removeClass("error_quest_highlight");
    var msg = 'Please confirm that none of these messages were communicated to you by the sales rep during the most recent visit.';
    var div = $('<div>' + msg + '</div>');
	 div.dialog({		
		width: 500,
		height: 'auto',
		modal:true,
		draggable: false,
		resizable: false,
		closeOnEscape: false,
       	title: "Confirm",
        buttons: [
                    {
                        text: "OK",
                     	click: function () 
							{
								strErrorMessage="";
	                            div.dialog("close");
                            }
                    }
                ]
    });
	$(".ui-widget-overlay").unbind("click");
 	$('.ui-dialog').on('keydown', function (e) {
  		if (e.keyCode == "13" || e.keyCode == "32") {
   			return false;
  		}
    });
}


```

** EndOf Okay PopUp**

## StartOf First td class search and add class


```

       $('.inner_table tbody tr td:first').addClass('firsttdclass'); 
		
		
```

** EndOf First td class search and add class**


## StartOf Product profile code

```

Please <a href="[%GraphicsPath()%]avycaz.html" target="_blank"><b>click here</b></a> if you'd like to review the Avycaz profile again. </p>


```

** EndOf Product profile code**


## StartOf Other specify for grid with multiple checkbox 


```

//Removing all the error highlighings
$(".error_highlight").removeClass("error_highlight");
$(".error_highlight_top").removeClass("error_highlight_top");
$(".error_highlight_bottom").removeClass("error_highlight_bottom");
$(".error_highlight_left").removeClass("error_highlight_left");
$(".error_highlight_right").removeClass("error_highlight_right");
$("td").css("border-width","1px");
	//First otherspecify validation (Other digital sources)
	if( SSI_GetValue("A9_r9_c1")!=1 && SSI_GetValue("A9_r9_c2")!=1 && SSI_GetValue("A9_r9_c3")!=1 && SSI_GetValue("[% QuestionName() %]_r9_other")!="" )
	{
		strErrorMessage = "You forgot to answer this question.<br>Please select your response in the 'Other digital sources' row if you fill in the 'Other specify' box.";
		$(".grid_r9").addClass("error_highlight_top");
		$(".grid_r9").addClass("error_highlight_bottom");
		$(".grid_r9:first").addClass("error_highlight_left");
		$(".grid_r9:last").addClass("error_highlight_right");
		$(".grid_r9").css("border-width","2px");
	}
	else if((SSI_GetValue("A9_r9_c1")==1 || SSI_GetValue("A9_r9_c2")==1 || SSI_GetValue("A9_r9_c3")==1) && SSI_GetValue("[% QuestionName() %]_r9_other")=="")
	{
		strErrorMessage = "You forgot to answer this question.<br>If you select 'Other digital sources', then please specify your answer in the text box provided. ";
		$("#[% QuestionName() %]_r12_other").addClass("error_highlight");
	}
	

```
	
** EndOF Other specify for grid with multiple checkbox**



## StartOf CheckBox pipe in

```

<script type="text/javascript">
/*Piping in Values from C1 into 8th column*/
[% Begin Unverified Perl
my $msg="";

	my $c;
	my $va=0;
	my $li=LISTVALUESARRAY("A15a2RowConst");
	my $l=substr($li,1,length($li)-2);
	my @ar=split(",",$l);
	my $a;
	my $i;
	my $c1=LISTVALUE("A15a2ColConst",1);
	foreach $a (@ar)
	{
		$i=$a;
	if($a==18) 
	{
		$i=17;  
	}
		$va=VALUE("A15a1_r".$i."_c".$c1);
		{
			if($va==1 && $a!=17)
			{
				$msg.='SSI_SetSelect("'.QUESTIONNAME().'_r'.$a.'_c'.$c1.'",true);';
				$msg.='$(".grid_c'.$c1.'.grid_r'.$a.'").removeClass("clickable");';
				$msg.='$(".grid_c'.$c1.'.grid_r'.$a.'").addClass("cgrey");';
				$msg.='$("#'.QUESTIONNAME().'_r'.$a.'_c'.$c1.'_graphical").css("cursor","default");';
			}
			if($va==0 || $a==17)
			{
				$msg.='$("#'.QUESTIONNAME().'_r'.$a.'_c'.$c1.'_graphical").hide();';
				$msg.='$(".grid_c'.$c1.'.grid_r'.$a.'").removeClass("clickable");';
				$msg.='$(".grid_c'.$c1.'.grid_r'.$a.'").addClass("cgrey");';
			}
		}
	}


return $msg;
End Unverified %]
</script>



```

** EndOF CheckBox pipe in**



## StartOf Grid resize

```

<script>
$( document ).ready(function() {
  
 [% Begin Unverified Perl
if(LISTLENGTH("A2ColConst") ==1 ){
	return '$(".row_label_cell").attr("width","70%");';
}elsif(LISTLENGTH("A2ColConst") ==2 ){
	return '$(".row_label_cell").attr("width","55%");';
}elsif(LISTLENGTH("A2ColConst") ==3 ){
	return '$(".row_label_cell").attr("width","40%");';
}elsif (LISTLENGTH("A2ColConst") >3){
	return 'console.error('.LISTLENGTH("A2ColConst").');';  #this will return an error with the length of list, incase we mismatch the list name
}
End Unverified %] 
});

</script>


```

** EndOF Grid resize**

## StartOf Subroutine

```
ADD(ParentListName(),1,18)
Randomize()

Begin Unverified Perl
use List::Util qw(shuffle);
sub GroupRandN
{
	my ($NArgs,$one_ref,$order) = @_;
	my @ar = @{ $one_ref }; 
	my @nums = @{ $NArgs }; 
	if($order==0)	{
		@nums = shuffle(@nums);
	}
	my $i;
	
	for(my $j=0;$j<@ar;$j++)
	{
		if(grep $_ eq $ar[$j], @nums)
		{
			foreach $i (@nums)
			{
				@ar = grep {$_ ne $i} @ar;
			}
			splice @ar, $j, 0, @nums;	
			last;
		}
	}
	return @ar;
}

my $li=LISTVALUESARRAY("S10RandConst");my $l=substr($li,1,length($li)-2);my @ar=split(",",$l);
my @nums=(1);
my @RowArray=GroupRandN(\@nums,\@ar,0); #Randomize with in
my @nums1=(2,3);
my @RowArray=GroupRandN(\@nums1,\@RowArray,0); #Randomize with in
my @nums2=(4,5,6,7);
my @RowArray=GroupRandN(\@nums2,\@RowArray,0); #Randomize with in
my @nums3=(8,9,10);
my @RowArray=GroupRandN(\@nums3,\@RowArray,0); #Randomize with in
my @nums4=(11,12);
my @RowArray=GroupRandN(\@nums4,\@RowArray,0); #Randomize with in
my @nums5=(13,14,15);
my @RowArray=GroupRandN(\@nums5,\@RowArray,0); #Randomize with in
my @nums6=(16,17,18);
my @RowArray=GroupRandN(\@nums6,\@RowArray,0); #Randomize with in

REMOVE(PARENTLISTNAME());
for(my $a=0;$a<@RowArray;$a++)
{
    ADD(PARENTLISTNAME(),$RowArray[$a]);
}
End Unverified

```

** EndOf Subroutine**

## StartOf Alt Color Remove

```

<script type="text/javascript">
if([% ListLength(A1RowList) %]<=3)
{
	$("#[% QuestionName() %]_div").find(".inner_table>tbody>tr>td").each(function()
	{
		if($(this).hasClass("alt_color1") && ($(this).hasClass("input_cell") || $(this).hasClass("row_label_cell")))
		{
			$(this).removeClass("alt_color1");
		}
	});
}
</script>

```

** EndOf Alt Color Remove**

## Start of Other Specify checkbox
```
if(SSI_GetValue("[% QuestionName() %]_r16_other")!="" && SSI_GetValue("[% QuestionName() %]_r16_c1")!=1)
{
	strErrorMessage = "You forgot to answer this question.<br>Please select your response in the 'Other' row if you fill in the 'Other specify' box.";
	$(".grid_r13:lt(2)").addClass("error_highlight_top");
	$(".grid_r13:lt(2)").addClass("error_highlight_bottom");
	$(".grid_r13:first").addClass("error_highlight_left");
	$(".grid_r13:eq(1)").addClass("error_highlight_right");
	$(".grid_r13").css("border-width","2px");
	
}
else if(SSI_GetValue("[% QuestionName() %]_r16_other")=="" && SSI_GetValue("[% QuestionName() %]_r16_c1")==1)
{
	strErrorMessage = "You forgot to answer this question.<br>If you select 'Other', then please specify your answer in the text box provided.";
	$("#[% QuestionName() %]_r13_other").addClass("error_highlight");	
}
```

** End of Other Specify checkbox**

## Start of Dynamic radio button (2) 

```
<script type="text/javascript">
$(".grid_header_cell").attr("colspan",2);
$(".grid_header_cell").prev().hide();
$(".grid_header_cell").removeClass("alt_color2").addClass("alt_color1");
</script>
<script type="text/javascript">
$("#[% QuestionName() %]_r17_c1").prop("type","radio");			

function SSI_CustomGraphicalRadiobox(GraphicalRadioboxObj, InputObj)
{
    var id=InputObj.id.split("_")[1].substr(1); 
	var idc=InputObj.id.split("_")[2].substr(1); 
    var ar = [% ListValuesArray(A13RowConst) %];		//Update the list used in the current question
	 for(i=0;i<ar.length;i++)
		{
			if(ar[i]!=id)
			{
		    SSI_SetSelect("[% QuestionName() %]_r"+ar[i]+"_c"+idc, false);
			$("#[% QuestionName() %]_r"+ar[i]+"_other").val("").removeClass("x onX");
			}
		}
}
</script>
<script type="text/javascript">
//code for checkbox removing 'x' mark
function SSI_CustomGraphicalCheckbox(GraphicalCheckboxObj, InputObj, blnCheck)
{
 	var id=InputObj.id;
	var other=$("#"+id).closest('tr').find('td.row_label_cell').find(".open_end_text_box").attr("id");
	if(blnCheck==false && other)
	{
		$('#'+other).val("").removeClass("x onX");
	}
}
</script>
```
** End of Dynamic radio button (2)**

