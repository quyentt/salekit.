function browserSupportFileUpload() {
	var isCompatible = false;
	if (window.File && window.FileReader && window.FileList && window.Blob) {
	isCompatible = true;
	}
	return isCompatible;
}
function splitCSVtoCells(row, separator) {
    return row.split(separator);
}
function download_file(url) {
	window.location.href = url;
	return false;
}
function validateImage(fileInput){
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        fileInput.value = '';
        return false;
    }
    return true;
}
function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	return pattern.test(emailAddress);
}
function validatePhone(txtPhone) {
    var a = txtPhone;
    var filter = /^[0-9-+]+$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
function checkIsValidDomain(domain) { 
	var re = new RegExp(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/);
	if(!domain.match(re)){
		
		var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		return regexp.test(domain);
	}
	return domain.match(re);
}
function showMsgPop(msg, alert_type = 'danger') {
	$("#message_pop_show").html('<div class="alert alert-'+alert_type+'">' +
		'<button type="button" class="close" data-dismiss="alert">' +
			'<i class="ace-icon fa fa-times"></i>'+
		'</button>'+ msg +'</div>');
	$('#myModalUser').modal('show');
	setTimeout(function(){ $('#myModalUser').modal('hide'); }, 1500);
}
function showMsg(msg, alert_type = 'danger') {
	$("#message_show").html('<div class="alert alert-'+alert_type+'">' +
		'<button type="button" class="close" data-dismiss="alert">' +
			'<i class="ace-icon fa fa-times"></i>'+
		'</button>'+ msg +'</div>');
}
function closeMsg(){
    $("#message_show").html('');
}
function closeMsgPop(){
    $("#message_pop_show").html('');
}
function notification(style = 'success', msg, title = false) {
    $.gritter.add({
        title: title,
        text: msg,
        class_name: 'gritter-'+style + ' gritter-light'
    });

    return false;

}
var waitingDialog = waitingDialog || (function ($) {
    'use strict';

	// Creating modal dialog's DOM
	var $dialog = $(
		'<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
		'<div class="modal-dialog modal-m">' +
		'<div class="modal-content">' +
			'<div class="modal-header"><h5 style="margin:0;"></h5></div>' +
			'<div class="modal-body">' +
				'<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>' +
			'</div>' +
		'</div></div></div>');

	return {
		/**
		 * Opens our dialog
		 * @param message Custom message
		 * @param options Custom options:
		 * 				  options.dialogSize - bootstrap postfix for dialog size, e.g. "sm", "m";
		 * 				  options.progressType - bootstrap postfix for progress bar type, e.g. "success", "warning".
		 */
		show: function (message, options) {
			// Assigning defaults
			if (typeof options === 'undefined') {
				options = {};
			}
			if (typeof message === 'undefined') {
				message = 'Loading';
			}
			var settings = $.extend({
				dialogSize: 'm',
				progressType: '',
				onHide: null // This callback runs after the dialog was hidden
			}, options);

			// Configuring dialog
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
			$dialog.find('.progress-bar').attr('class', 'progress-bar');
			if (settings.progressType) {
				$dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
			}
			$dialog.find('h5').text(message);
			// Adding callbacks
			if (typeof settings.onHide === 'function') {
				$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
					settings.onHide.call($dialog);
				});
			}
			// Opening dialog
			$dialog.modal();
		},
		/**
		 * Closes dialog
		 */
		hide: function () {
			$dialog.modal('hide');
		}
	};

})(jQuery);

function checkPhoneNumber(phone) {
    //var flag = false;
    //phone = phone.replace('(+84)', '0');
    //phone = phone.replace('+84', '0');
    //phone = phone.replace('0084', '0');
    //phone = phone.replace(/ /g, '');
    //if (phone != '') {
    //    var firstNumber = phone.substring(0, 2);
    //    if ((firstNumber == '09' || firstNumber == '08') && phone.length == 10) {
    //        if (phone.match(/^\d{10}/)) {
    //            flag = true;
    //        }
    //    } else if (firstNumber == '01' && phone.length == 11) {
    //        if (phone.match(/^\d{11}/)) {
    //            flag = true;
    //        }
    //    }
    //}
    return true;
}
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
function formatNumber2(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
function countEmailCam() {
    var arr_tags = [];
    $('.email_camp .u-tags li.active').each(function (event) {
        var id = $(this).attr('data-id');
        arr_tags.push(id);
    });
    var province_id = $('.email_camp .province_id').val();
    $.ajax({
        type: "POST",
        url: BASE_URL + 'email/countEmailCam',
        data: {
            arr_tags: arr_tags, province_id: province_id
        },
        success: function(response){
            if(!response.error){
                $('.email_camp .msg-count').html(response.msg);
            }
            else{
                notification('danger', response.msg);
            }
            $();order_
        }
    })
}

$(document).on('click', '.invite-role', function() {   
    var id = $('#shop_user_role').val();
    if (!id || id == '') {
    	$.notifyDefaults({ type: 'danger', allow_dismiss: false});
    	$.notify(lang_json['please_select_permission']);
    }else{
	    $.ajax({
	        type: "POST",
	        url: BASE_URL + 'role/createinvite',
	        data : {
	            id:id
	        },
	        async: true,
	        success: function(result){
	            var obj = JSON.parse(result);
	            if(obj.status == 200){
	                $('.url-clone').val(obj.auth);    
	                $('#myModalUser').modal('show');
	            }
	        }
	    });
    }
});
$(document).on('click', '.copy-this-token', function() {
    var text = $('.url-clone').val();
    copyToClipboard(text);
    $.notifyDefaults({ type: 'success', allow_dismiss: false});
    $.notify(lang_json['the_group_link_has_been_copied']);
});
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}
