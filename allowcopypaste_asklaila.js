/*
* Made in 2010 by AGB
* http://mir-w.info
*/



$('#listngInfoDetBox').onselectstart = new Function("return true");
$('#ldpAdrsDetails').onselectstart = new Function("return false")
$('#listngInfoDetBox').onmousedown = disabletext;
$('#listngInfoDetBox').onclick = reEnable;
$('#ldpAdrsDetails').onmousedown = disabletext;
$('#ldpAdrsDetails').onclick = reEnable