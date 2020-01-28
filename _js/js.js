function MenuSubKat(ele,subs,from) {
	if($(ele).style.display == 'none') {
		Effect.BlindDown(ele, {duration:0.3});
		Effect.ScrollTo('mainmenu',{ duration:0.3 });
		$(ele+'_ref').className='kat akt';
		var subsclassname = '.'+subs+'menu';
		var katmenu = $$(subsclassname);
		//alert(katmenu.length);
		for(k = 0; k < katmenu.length; k++) {
			if($(ele) != katmenu[k]) {
				katmenu[k].style.display = 'none';
				$(katmenu[k].id+'_ref').className='kat';
			}
		}
		return false;
	}
	else {
		//GoUrl(from.href);
		return true;
	}
}



function ZoomBild(u,p) {
	Lightview.show({
		href: u,
		title: p,
		options: {
			autosize: true,
			topclose: true
		}
	});
}

function OpenClose(x) {
	if($('openclose_ref'+x).className == 'closeit') {
		$('openclose_cont'+x).style.paddingTop='20px';
		Effect.BlindUp('openclose'+x, {duration:0.5})
		$('openclose_ref'+x).removeClassName('closeit');
		$('openclose_ref'+x).addClassName('openit');
		
	}
	else {
		$('openclose_ref'+x).removeClassName('openit');
		$('openclose_ref'+x).addClassName('closeit');
		Effect.BlindDown('openclose'+x, {duration:0.5});
		
		$('openclose_cont'+x).style.paddingTop='0px';
	}
	Effect.ScrollTo('openclose_cont'+x, {duration:0.5});
}

function GoHome() {
	document.location.replace('/');
}
function GoUrl(url) {
	document.location.href = url;
}
function Finish404() {
	//Effect.Shake('page', { duration: 0.3, distance:5 });
	Effect.Fade('page', { duration: 1.0 });
	setTimeout('GoHome()',1000);
}


function isValidEmail(email, required) {
	if (required==undefined) {	 // if not specified, assume it's required
		required=true;
	}
	if (email==null) {
		if (required) {
			return false;
		}
		return true;
	}
	if (email.length==0) {	
		if (required) {
			return false;
		}
		return true;
	}
	if (! allValidChars(email)) {	// check to make sure all characters are valid
		return false;
	}
	if (email.indexOf("@") < 1) { //	must contain @, and it must not be the first character
		return false;
	} else if (email.lastIndexOf(".") <= email.indexOf("@")) {	// last dot must be after the @
		return false;
	} else if (email.indexOf("@") == email.length) {	// @ must not be the last character
		return false;
	} else if (email.indexOf("..") >=0) { // two periods in a row is not valid
	return false;
	} else if (email.indexOf(".") == email.length) {	// . must not be the last character
	return false;
	}
	return true;
}

function allValidChars(email) {
	var parsed = true;
	var validchars = "abcdefghijklmnopqrstuvwxyz0123456789@.-_";
	for (var i=0; i < email.length; i++) {
	var letter = email.charAt(i).toLowerCase();
	if (validchars.indexOf(letter) != -1)
		continue;
	parsed = false;
	break;
	}
	return parsed;
}

function isNumber(str) {
	for(var position=0; position<str.length; position++){
		var chr = str.charAt(position)
		if ( (chr < "0") || (chr > "9") ) 
			return false;
		}
		return true;
}




var mref ='';
var mrefm ='ma';
mrefm +='ilt';
mrefm +='o:';
var mat ='@';
var mpt ='.';
var mrefx ='info@l';
mrefx +='erchb';
mrefx +='ad.d';
mrefx +='e';
mref +=mrefm+mrefx;

function MakeM(ele,kinfo) {
	var newTitle='';
	if(ele.title) {
		var newTitle = ele.title.replace('[a]',mat);
		newTitle = newTitle.replace(':',mpt);
		ele.title= newTitle;
		ele.href = mrefm+newTitle;
		if(kinfo) {
			$('kontaktinfo').innerHTML=newTitle;
		}
	}
}

var xyz =0;

function stoperror() {
	return true;
}
window.onerror=stoperror;
