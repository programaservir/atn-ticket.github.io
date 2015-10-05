//Cufon
Cufon.replace('.destxt h4' , {fontFamily: 'Novel Sans Pro ExtraBold', textShadow: '#000000 2px 2px', hover:true}); 
Cufon.replace('.feat h3, .header h2', {fontFamily: 'Novel Sans Pro bold', hover:true}); 
Cufon.replace('.header h3', {fontFamily: 'Novel Sans Pro ExtraLight', hover:true}); 
//abas do box de login
$('.abas li').click(function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
	$('.abacontainer div').eq($(this).index()).css('display','block');
	$('.abacontainer div').eq($(this).index()).siblings().css('display','none');
});

//apaga palavra do input quando clicado
$.fn.preencher = function() {
	return this.focus(function() {
		if( this.value == this.defaultValue ) {
			this.value = "";
			this.style.fontStyle = "normal";
		}
	}).blur(function() {
		if( !this.value.length ) {
			this.value = this.defaultValue;
			this.style.fontStyle = "italic";
		}
	});
};
$('.user, .busca input[type="text"]').preencher();

//a mesma coisa que a função preencher acima, mas pra senhas
$('input.info').focus(function(){
	$(this).css('display','none');
	$(this).siblings('.senha').css('display','block');
	$(this).siblings('.senha').focus();
});

$('input.senha').blur(function(){
	if (!$(this).val().length){
	  $(this).css('display','none');
	  $(this).siblings('.info').css('display','block');
	}
});

//destaques
$(function() {
    $('.destaque').cycle({
        fx:     'fade',
        speed:  500,
        timeout: 12000,
        pager:  '.selector',
		slideExpr: '.slide'
    });
});

//cantos arredondados nos boxes da sidebar
$('.sbbox').each(function(){
	$(this).before('<span class="sbboxtop"></span>');
	$(this).after('<span class="sbboxbottom"></span>');
});

//abas da p�gina v�deos e fotos
$('.abasfv li').click(function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
	$('.container > div').eq($(this).index()).css('display','block');
	$('.container > div').eq($(this).index()).siblings().css('display','none');
});

//chamada do fancybox para vídeos
	$('.youtube').fancybox({
 		'type':'iframe',
 		'width': 640, 
 		'height': 390
	});

//insere o botão de play nos vídeos
$('.youtube').append('<img class="playit" src="img/play.png" />');


$('.youtube').hover(
  function () {
    $(this).find('.playit').show();
  },
  function () {
    $(this).find('.playit').hide();
  }
);

$('#fotos_pag').pajinate({
	items_per_page : 9,
	num_page_links_to_display : 6,
	nav_label_first : '<<',
	nav_label_last : '>>',
	nav_label_prev : '<',
	nav_label_next : '>'
});