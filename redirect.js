function substr_count( haystack, needle, offset, length ) {	// Count the number of substring occurrences
	//
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)

	var pos = 0, cnt = 0;

	if(isNaN(offset)) offset = 0;
	if(isNaN(length)) length = 0;
	offset--;

	while( (offset = haystack.indexOf(needle, offset+1)) != -1 ){
		if(length > 0 && (offset+needle.length) > length){
			return false;
		} else{
			cnt++;
		}
	}

	return cnt;
}



var cur_addr=document.location.href;
var cur_ref=document.referrer;

if(substr_count(cur_ref,'puh.lv')==0 && substr_count(cur_ref,'localhost')==0){
	if(substr_count(cur_addr,'puh.lv')==0 && substr_count(cur_addr,'localhost')==0 && substr_count(cur_addr,'google')==0 && substr_count(cur_addr,'gmail')==0){
		var new_addr='http://puh.lv/redirect.php?redir_url='+escape(cur_addr);
		//window.location=new_addr;

	}
}
