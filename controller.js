var looptime = 30; //Segundos

// Facebook -> Twitter -> Sorting + Dup removal -> Printing -> loop.

var timer;
var msgList = Array();
var data;

var blacklist;

function go() {
	msgList = Array();
	getBlackList();
}

function getBlackList() {
	$.getJSON('blacklist.json', function (res) { blacklist = res; 	getFB(); });
}


function getFB() {
	$.getJSON('https://graph.facebook.com/sinfoist/feed?callback=?', function (res) {
		data = res["data"];
		
		$.each(data, function() {
			if (this["message"] !== undefined) {
				var msg = {service:"Facebook"};
				msg["id"] = this["id"];
				msg["date"] = Date.parse(this["updated_time"]);
				msg["fdate"] = this["updated_time"];
				msg["from"] = this["from"]["name"];
				msg["photo"] = "https://graph.facebook.com/"+this["from"]["id"]+"/picture?type=large";
				msg["txt"] = this["message"];
				msg["uid"] = this["from"]["id"];
				if (notBlacklisted(msg)) {
					msgList.push(msg);
				}
			}

		});
	getTW();
	});
}


function getTW() {
/*	var twitterbl = blacklist.Twitter.blockedUsers;
	var blacklistedusers = "";
	$.each(twitterbl, function(){
		blacklistedusers += "+-"+this;
	});
*/	url = 'http://search.twitter.com/search.json?q=sinfo+OR+sinfoist+OR+sinfo_ist+-symphony_sinfo+-acapulco&rpp=30&callback=?';
	console.log(url);
	$.getJSON(url, function (res) {
		data = res["results"];
		
		$.each(data, function() {
			var msg = {service:"Twitter"};
			msg["id"] = this["id_str"];
			msg["date"] = Date.parse(this["created_at"]);
			msg["fdate"] = this["created_at"];
			msg["from"] = this["from_user"];
			msg["uid"] = this["from_user"];
			msg["photo"]= this["profile_image_url"];
			msg["txt"] = this["text"];
			if (notBlacklisted(msg)) {
				msgList.push(msg);
			}
		});
		processObtainedData();
	});
}

function contains(a, obj){
	for(var i = 0; i < a.length; i++) {
		if(a[i] === obj){
			return true;
		}
	}
	return false;
}


function notBlacklisted(msg) {
	service = blacklist[msg.service];
	if (contains(service.blockedUsers, msg.uid)) {
		return false;
	}
	ids = service.blockedMsgs;
	if (ids === undefined) {
		return true;
	}
	return !contains(ids, msg.id);
} 

function processObtainedData() {
	sortMsgs();
	printMsgs();
	timer = setTimeout("go()", looptime*1000);
}


function sortMsgs() {
	msgList.sort(function(a,b){return b.date - a.date});
	
	var repeated = new Array();
	
	$.each(msgList, function(i) {
		if (i+1 < msgList.length) {
			var that = msgList[i+1];
			if (this.txt == that.txt) {
				console.log("encontrei repetidos ["+i+" + "+(i+1)+"]");
				if (this.service != that.service) {
					if (this.service == "Facebook") {
						repeated.push(i+1);
						this.service = "Twitter-Facebook";
					} else {
						repeated.push(i);
						that.service = "Twitter-Facebook";
					}
				}
			}
		}
	});
	console.log(repeated);
	$.each(repeated, function(k,v) {
		msgList.splice(v-k,1);
	});
	printMsgs();
}


function printMsgs() {
	var c = $("#tmp").html("<table></table>").children()[0];
	$.each(msgList, function() {
		if (typeof(generateIds) != "undefined") {
			var ids = generateIds(this);
		} else {
			var ids = "";
		}
		var msg = "<tr class='service-"+this.service+"'>\
				<td class='avatar'><img class='shadow' src='"+this.photo+"'></td>\
				<td class='text'>\
					<div class='service'></div><p class='user shadow round-border'>"+this.from+"</p>"+ids+"<br>\
					<p class='msg shadow round-border'>"+this.txt+"</p>\
				</td>\
			</tr>";
		$(c).append(msg);
	});
	$("#container").html($("#tmp").html());
}
