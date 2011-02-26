<?
error_reporting(E_ALL);
ini_set('display_errors','On');

if (!isset($_GET["service"]) || (!isset($_GET["user"]) && (!isset($_GET["msg"]))))
	die("Error");

$service = $_GET["service"];
if (isset($_GET["user"])) {
	$action = "u";
	$uid = $_GET["user"];
} else {
	$action = "m";
	$id = $_GET["msg"];
}


$json = file_get_contents("blacklist.json");

$blacklist = json_decode($json);

if($action == "u") {
	$blacklist->$service->blockedUsers[] = $uid;
} else {
	$blacklist->$service->blockedMsgs[] = $id;
}

$json = json_encode($blacklist);

file_put_contents("blacklist.json", $json);

header("Location: http://sinfo.ist.utl.pt/tv2/?JNHNEOTSHMUSCTUFPDDPMSFAALIDKJI=ZZZZZJVSMMIKLXGQHFVPMWIRXQGQFWGJJNHNEOTSHMUSCTUFPDDPMSFAALIDKJIUJLODIAGCFAPUDWIAXSLWUNXNPOMPGWCFEEVWAZZZZYYYYY");

/*

$_GET["JNHNEOTSHMUSCTUFPDDPMSFAALIDKJI"]="ZZZZZJVSMMIKLXGQHFVPMWIRXQGQFWGJJNHNEOTSHMUSCTUFPDDPMSFAALIDKJIUJLODIAGCFAPUDWIAXSLWUNXNPOMPGWCFEEVWAZZZZYYYYY";



include("index.php");*/