// Javascript Code.
$.get('_posts/2014-07-09-cognits-frontend-blog.md', function(data) {
	$("#contenidoPost").html(data);
}, 'text');

$(document).ready(function(){


	var showChar = 200;
    var ellipsestext = "...";
    var moretext = "more";
    var lesstext = "less";
    $('.primerContenido').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar-1, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);

        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });


    $("#button").click(function(){
        var nombre = $("input[name=checkListItem]").val();
        var comentario = $("input[name=checkListItem2]").val();
        if (nombre.length!=0 && comentario.length!=0){
        $(".list").append("<div class='comentario'><span style=\"color: #088da5;font-weight: bolder; font-variant:small-caps; text-transform:capitalize;\">"+nombre+"</span> dice: "+comentario+"</div>");
        }else{
        	alert("No puedes dejar las casillas vacias!")
        }

    });


});
