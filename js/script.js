// Javascript Code.
$.get('_posts/2014-07-09-cognits-frontend-blog.md', function(data) {
	$("#primerContenido").html(data);
}, 'text');
$.get('_posts/2014-08-09-cognits-frontend-blog.md', function(data) {
	$("#segundoContenido").html(data);
}, 'text');
$.get('_posts/2014-09-09-cognits-frontend-blog.md', function(data) {
	$("#tercerContenido").html(data);
}, 'text');
$.get('_posts/2014-10-09-cognits-frontend-blog.md', function(data) {
	$("#cuartoContenido").html(data);
}, 'text');
$(document).ready(function(){
	$(".menu").mouseover(function(){
		$(this).css("background-color","black");
		$(this).css("color","red");
	});
	$(".menu").mouseleave(function(){
		$(this).css("background-color", "grey");
		$(this).css("color","white")

	});

	$(".menu2").mouseover(function(){
		$(this).css("background-color","black");
		$(this).css("color","red");
	});
	$(".menu2").mouseleave(function(){
		$(this).css("background-color", "grey");
		$(this).css("color","white")

	});



	$(".menu2").click(function(){
		$(".menu2Buscador").slideToggle("slow");
	});
	
	$.expr[':'].icontains = function(obj, index, meta, stack){
		return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
	};
	$(document).ready(function(){
		var myHilitor = new Hilitor(".contenidoPost");
		$("#buscador").keyup(function(){
			buscar = $(this).val();
			$('.posts .contenidoPost').removeClass('resaltar');
			myHilitor.remove();
				if(jQuery.trim(buscar) != ''){
					$(".posts .contenidoPost:icontains('" + buscar + "')").addClass('resaltar');
					myHilitor.apply(buscar);
				}
		});
	});

/*		PENDIENTE: APARECER SOLO UN POST
	$("#primer_post").click(function(){
		$("#posts").fadeOut("slow");
	});

*/
	var showChar = 200;
	var ellipsestext = "...";
	var moretext = "more";
	var lesstext = "less";
	$('.contenidoPost').each(function() {
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


	$("#buttonPost1").click(function(){
		var currentdate = new Date(); 
		var datetime = "Posted: " + currentdate.getDate() + "/"
		+ (currentdate.getMonth()+1)  + "/" 
		+ currentdate.getFullYear() + " at "  
		+ currentdate.getHours() + ":"  
		+ currentdate.getMinutes() + ":" 
		+ currentdate.getSeconds();

		var nombre = $("input[name=nombrePost1]").val();
		var comentario = $("input[name=comentarioPost1]").val();
		if (nombre.length!=0 && comentario.length!=0){
		$("#listaPost1").append("<div class='comentarioPosteado'><span class=\"comentarioPosteado\" style=\"color: #088da5;font-weight: bolder; font-variant:small-caps; text-transform:capitalize;\">"+nombre+"</span> dice:<br/><span class=\"comentarioPosteado\">"+comentario+"</span><div class=\"horaComentario\">"+datetime+"</div></div>");
		}else{
			alert("No puedes dejar las casillas vacias!")
		}
		$("input").val("");
	});

	$("#buttonPost2").click(function(){
		var currentdate = new Date(); 
		var datetime = "Posted: " + currentdate.getDate() + "/"
		+ (currentdate.getMonth()+1)  + "/" 
		+ currentdate.getFullYear() + " at "  
		+ currentdate.getHours() + ":"  
		+ currentdate.getMinutes() + ":" 
		+ currentdate.getSeconds();

		var nombre = $("input[name=nombrePost2]").val();
		var comentario = $("input[name=comentarioPost2]").val();
		if (nombre.length!=0 && comentario.length!=0){
		$("#listaPost2").append("<div class='comentarioPosteado'><span class=\"comentarioPosteado\" style=\"color: #088da5;font-weight: bolder; font-variant:small-caps; text-transform:capitalize;\">"+nombre+"</span> dice:<br/><span class=\"comentarioPosteado\">"+comentario+"</span><div class=\"horaComentario\">"+datetime+"</div></div>");
		}else{
			alert("No puedes dejar las casillas vacias!")
		}
		$("input").val("");
	});


	$("#buttonPost3").click(function(){
		var currentdate = new Date(); 
		var datetime = "Posted: " + currentdate.getDate() + "/"
		+ (currentdate.getMonth()+1)  + "/" 
		+ currentdate.getFullYear() + " at "  
		+ currentdate.getHours() + ":"  
		+ currentdate.getMinutes() + ":" 
		+ currentdate.getSeconds();

		var nombre = $("input[name=nombrePost3]").val();
		var comentario = $("input[name=comentarioPost3]").val();
		if (nombre.length!=0 && comentario.length!=0){
		$("#listaPost3").append("<div class='comentarioPosteado'><span class=\"comentarioPosteado\" style=\"color: #088da5;font-weight: bolder; font-variant:small-caps; text-transform:capitalize;\">"+nombre+"</span> dice:<br/><span class=\"comentarioPosteado\">"+comentario+"</span><div class=\"horaComentario\">"+datetime+"</div></div>");
		}else{
			alert("No puedes dejar las casillas vacias!")
		}
		$("input").val("");
	});

	$("#buttonPost4").click(function(){
		var currentdate = new Date(); 
		var datetime = "Posted: " + currentdate.getDate() + "/"
		+ (currentdate.getMonth()+1)  + "/" 
		+ currentdate.getFullYear() + " at "  
		+ currentdate.getHours() + ":"  
		+ currentdate.getMinutes() + ":" 
		+ currentdate.getSeconds();

		var nombre = $("input[name=nombrePost4]").val();
		var comentario = $("input[name=comentarioPost4]").val();
		if (nombre.length!=0 && comentario.length!=0){
		$("#listaPost4").append("<div class='comentarioPosteado'><span class=\"comentarioPosteado\" style=\"color: #088da5;font-weight: bolder; font-variant:small-caps; text-transform:capitalize;\">"+nombre+"</span> dice:<br/><span class=\"comentarioPosteado\">"+comentario+"</span><div class=\"horaComentario\">"+datetime+"</div></div>");
		}else{
			alert("No puedes dejar las casillas vacias!")
		}
		$("input").val("");
	});
});