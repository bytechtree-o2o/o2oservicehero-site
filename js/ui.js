


$(document).on('keyup focusin','.tbox.with-clear input',function (){

	if($(this).val() == ""){
		$(this).parents('.tbox').find('.clear-btn').hide();
	}else{
		$(this).parents('.tbox').find('.clear-btn').show();
	}
})

$(document).on('click','.tbox.with-clear .clear-btn',function (){

	$(this).parents('.tbox').find('input').val("");
	$(this).hide();

	$('.search-submit-btn').prop('disabled',true);

})

const txtInput = (e, success , cancel) => {

	if($(e).val() == ""){

		$(e).parents('.tbox').removeClass('active');
		if(cancel != null) cancel();

	}else{
		$(e).parents('.tbox').addClass('active');
		if(success != null) success();


	}
}

function confirmPopupClose(){
	$('article.popup.popup-confirm').remove();
}

function confirmPopupOpen(msg, cancel, success){

	let _str = '<article class="popup popup-confirm" style="display: block">\n' +
			'\n' +
			'\t<div class="popup-wrapper">\n' +
			'\n' +
			'\t\t<div class="popup-contents">\n' +
			'\n' +
			'\t\t\t<div class="popup-contents-box">\n' +
			'\n' +
			'\t\t\t\t<article class="popup-msg-layout">\n' +
			'\t\t\t\t\t<div class="msg-group-box">\n' +
			'\t\t\t\t\t\t<div class="msg-txt-box">'+ msg +'</div>\n' +
			'\t\t\t\t\t</div>\n' +
			'\n' +
			'\t\t\t\t\t<div class="msg-menu-box">\n' +
			'\t\t\t\t\t\t<a href="#none" class="msg-menu-btn type-cancel">미션종료</a>\n' +
			'\t\t\t\t\t\t<a href="#none" class="msg-menu-btn type-success">계속하기</a>\n' +
			'\t\t\t\t\t</div>\n' +
			'\t\t\t\t</article>\n' +
			'\n' +
			'\t\t\t</div>\n' +
			'\n' +
			'\t\t</div>\n' +
			'\t</div>\n' +
			'</article>';


	$('body').append(_str);

	if(cancel != null){
		$('article.popup-confirm .msg-menu-btn.type-cancel').on('click',function () {
			cancel();
		});
	}else{
		$('article.popup-confirm .msg-menu-btn.type-cancel').off("click");
		$('article.popup-confirm .msg-menu-btn.type-cancel').on('click',function () {
			$(this).parents('.popup-confirm').remove();
		});
	}

	if(success != null){
		$('article.popup-confirm .msg-menu-btn.type-success').on('click',function () {
			success();
		});
	}else{
		$('article.popup-confirm .msg-menu-btn.type-success').off("click");
		$('article.popup-confirm .msg-menu-btn.type-success').on('click',function () {
			$(this).parents('.popup-confirm').remove();
		});
	}





}



function alertPopupClose(){
	$('article.popup.popup-alert').remove();
}



function alertPopupOpen(msg, btn, func){

	if(btn == null){
		btn = '돌아가기'
	}

	let _str = '';

	_str += '<article class="popup popup-alert" style="display: block">';
	_str += ' <div class="popup-wrapper">';
	_str += '   <div class="popup-contents">';
	_str += '   <a href="#none" class="popup-close-btn" onclick="popupCloseDirect(this)"></a>';
	_str += '     <div class="popup-contents-box">';
	_str += '       <article class="popup-msg-layout">';
	_str += '         <div class="msg-group-box">';
	_str += '           <div class="msg-txt-box">'+ msg +'</div>';
	_str += '         </div>';
	_str += '         <div class="msg-menu-box">';
	_str += '           <a href="#none" class="msg-menu-btn type-success">'+btn+'</a>'
	_str += '         </div>';
	_str += '       </article>';
	_str += '     </div>';
	_str += '   </div>';
	_str += ' </div>';
	_str += '</article>';



	$('body').append(_str);

	if(func != null){
		$('article.popup-alert .msg-menu-btn.type-success').on('click',function () {
			func();
		});
	}else{
		$('article.popup-alert .msg-menu-btn.type-success').off("click");
		$('article.popup-alert .msg-menu-btn.type-success').on('click',function () {
			$(this).parents('.popup-alert').remove();
		});
	}



}


const popupOpen = (popupName) => {
	$('article.popup.popup-'+popupName).show();
}
const popupClose = (popupName) => {
	$('article.popup.popup-'+popupName).hide();
}
const popupCloseDirect = (e) => {
	$(e).parents('.popup').remove();
}