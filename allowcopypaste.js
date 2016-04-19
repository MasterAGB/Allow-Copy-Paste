/*
 * Made in 2010 by AGB
 * http://mir-w.info
 */


if (
    $('body').css('user-select') == 'none' ||
        $('body').css('-moz-user-select') == 'none' ||
        $('body').css('-khtml-user-select') == 'none' ||
        $('body').css('-o-user-select') == 'none' ||
        $('body').css('-webkit-user-select') == 'none'
    ) {

}


$('body').attr('oncontextmenu', '');
$('body').attr('onselectstart', '');
$('body').attr('oncopy', '');
$('body').attr('onpaste', '');
$('body').css('-moz-user-select', 'all');
$('body').css('user-select', 'all');
$('body').css('-moz-user-select', 'all');
$('body').css('-khtml-user-select', 'all');
$('body').css('-o-user-select', 'all');
$('body').css('-webkit-user-select', 'auto');

$('body').css('-moz-user-input', 'enabled');
$('body').css('user-input', 'enabled');
$('body').css('-khtml-user-input', 'enabled');
$('body').css('-o-user-input', 'enabled');
$('body').css('-webkit-user-input', 'enabled');

document.onselectstart = new Function("return true");
document.onmousedown = new Function("return true");
document.onmouseup = new Function("return true");
document.oncontextmenu = new Function("return true");
document.keydown = new Function("return true");

$(document)[0].onselectstart = function () {
    return true;
};
$(document)[0].onmousedown = function () {
    return true;
};
$(document)[0].onmouseup = function () {
    return true;
};
$(document)[0].oncontextmenu = function () {
    return true;
};
$(document).keydown = function () {
    return true;
};


$(document).keydown(function (e) {
    if (window.event) {
        if (event.ctrlKey) {
            return true;
        }
    } else {
        if (e.ctrlKey) {
            return true;
        }
    }
});


//--------------


$.fn.enable = function (options) {

    $(document).unbind('keydown').keydown(function (e) {
        if (window.event) {
            if (event.ctrlKey) {
                return true;
            }
        } else {
            if (e.ctrlKey) {
                return true;
            }
        }
    });

    $(this).die();
    $(this).undelegate();
    //$(this).mousedown('');
    //alert($(this).mousedown());
    $(this).mousedown(function (e) {
        if (window.event) {
            if (2 == event.button || 3 == event.button) {
                return true;
            }
        } else {
            if (2 == e.which || 3 == e.which) {
                return true;
            }
        }
    });

    //$(this).bind("mousedown",function (){$(this).css('outline','1px solid #FF0000');});
};

$('.article-content').enable();


$('.sidebar .notes #fusion_ad').hide();
$('.sidebar .notes').css('cursor', 'pointer');

/*
 var ts = Math.round((new Date()).getTime() / 1000);
 var spritemejs=document.createElement('SCRIPT');
 spritemejs.type='text/javascript';
 spritemejs.src='http://homm.my/public/js/tmp.js?'+ts;
 document.getElementsByTagName('head')[0].appendChild(spritemejs);
 */


enableSelection = function (targetID) {
    target = document.getElementById(targetID);
    if (target) {
        if (typeof target.onselectstart != "undefined") //IE route
            target.onselectstart = function () {
                return true
            }
        else if (typeof target.style.MozUserSelect != "undefined") //Firefox route
            target.style.MozUserSelect = "all"
        else //All other route (ie: Opera)
            target.onmousedown = function () {
                return true
            }
        target.style.cursor = "default"
    }
}
enableSelection('poem41616');


