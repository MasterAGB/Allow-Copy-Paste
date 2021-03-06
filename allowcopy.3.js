/* Allow Copy - for investigation */

var c = "* { user-select: text !important; -webkit-user-select: text !important; }";
var s = document.createElement("style");
s.type = "text/css";
if(s.styleSheet){s.styleSheet.cssText = c;}
else{s.appendChild(document.createTextNode(c));}
document.getElementsByTagName("head")[0].appendChild(s);
//window.getSelection=null;

//window.alert = window.prompt = function (){return true};

function $$$clean(el, t){

	console.log("Allow Copy has cleaned an object.");
	var h = '';

	el['on'+t] = null;

	if(el.getAttribute && el.getAttribute('on'+t)){
		el.setAttribute('on'+t, null);
	}

	if(window.jQuery) window.jQuery(el).unbind(t);
	if(el.observe) el.stopObserving(t);

	if(el.style){
		el.style.webkitUserSelect = "text";
		el.style.userSelect = "text";
	}

	if(h=el.outerHTML){
		if(h.match(/on(contextmenu|selectstart) *= *["'][^"']*(return|alert)[^"']*["']/gi)){
			el.outerHTML = h.replace(/on(mouseup|mousedown|contextmenu|selectstart) *= *["'][^"']*(return|alert)[^"']*["']/gi, '');
		}
	} else if(el.parentNode) {
		h = el.parentNode.innerHTML;
		if(h.match(/on(contextmenu|selectstart) *= *["'][^"']*(return|alert)[^"']*["']/gi)){
			el.parentNode.innerHTML = h.replace(/on(mouseup|mousedown|contextmenu|selectstart) *= *["'][^"']*(return|alert)[^"']*["']/gi, '');
		}
	}
}


function $$$check(event){

	// Basic, general disabling
	var d = null;
	var el = event.target||event.srcElement;

	if(event['stopPropagation']){
		event.stopPropagation();
	}

	$$$clean(document, event.type);

	if(el){
		while(el){
			try{
				$$$clean(el, event.type);
				//if(el.wrappedJSObject) $$$clean(el.wrappedJSObject, event.type);
			} catch(e){}
			el = el.parentNode;
		}
	}

	return event;
}

var events = ['contextmenu','selectstart'];

for(var i=0;i<events.length;i++){
	document['on'+events[i]] = $$$check;
	document.addEventListener(events[i], $$$check, true, true);
}

var m = document.createElement('img');
document.getElementsByTagName('body')[0].appendChild(m);
m.src = "data:image/png;base64,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";
m.style.position = 'fixed';
m.style.top = '12px';
m.style.right = '12px';
m.style.opacity = 1;
m.style.width = '64px';
m.style.height = '64px';
m.style.zIndex = 9999999;

for(var i=1;i<20;i++)
	{
		setTimeout("m.style.opacity="+((20-i)*(1/20))+";", i*40);
	}
setTimeout("m.parentNode.removeChild(m);", 21*40);