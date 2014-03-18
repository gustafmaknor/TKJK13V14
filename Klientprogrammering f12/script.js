
	
	
function ajaxRequest(url, callback) {

    var XHR = null;
    if (XMLHttpRequest) {
        XHR = new XMLHttpRequest();
    } else {
        XHR = new ActiveXObject("Microsoft.XMLHTTP"); 
    }
    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 || XHR.readyState == "complete") {
            if (XHR.status == 200) {
                callback(XHR); 
            } else {
                alert("fel på servern");
            }
            
        }
    }
    XHR.open("GET", url, true);
    XHR.send(null);
}


function JSONPRequest(url) {
    var s = document.createElement('script');
    s.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(s);
}


window.onload=function(){
	JSONPRequest('https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&access_token=1187734400.d5300a7.a5bebfac36a747d2b4f4b3faa8a285d1&callback=parse');
}
function parse(response){
	var placeholder=document.getElementById('placeholder');
	for(var i=0;i<response.data.length;i++){
		var image=document.createElement('div');
		image.className="bilder";
		var img=document.createElement('img');
		img.setAttribute('src', response.data[i].images.low_resolution.url);
		image.appendChild(img);
		placeholder.appendChild(image);

		var t="Ingen bildtext";
		if(response.data[i].caption)
		{
			t=response.data[i].caption.text;
		}
		img.addEventListener('mouseover', (function(txt){
			
				return function(evnt){
					var tt=document.getElementById('tooltip');
					tt.style.left=evnt.clientX+'px';
					tt.style.top=evnt.clientY+'px';
					tt.innerHTML=txt;
					tt.style.display='block';
				}

		})(t), false);		


	}
}
function Show(){

}


