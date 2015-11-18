var str = $("input[name="Email Address"]").val()
if( str.indexOf(" ") !== -1 )
{
    alert("bad input");
}