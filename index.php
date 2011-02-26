<?
error_reporting(E_ALL);
ini_set('display_errors','On');

$GOD = false;
$key = "JNHNEOTSHMUSCTUFPDDPMSFAALIDKJI";
$val = "ZZZZZJVSMMIKLXGQHFVPMWIRXQGQFWGJJNHNEOTSHMUSCTUFPDDPMSFAALIDKJIUJLODIAGCFAPUDWIAXSLWUNXNPOMPGWCFEEVWAZZZZYYYYY";

if (isset($_GET[$key]) && $_GET[$key] == $val) {
	$GOD = true;
}
?><HTML>
<HEAD>
<meta charset="utf-8" />
<meta http-equiv="refresh" content="600" />
<title>SINFO Social Stream</title>
<script src="jquery-1.3.1.js"></script>
<script type="text/javascript" charset="utf-8" src="controller.js"></script>
<? if (false) {
	echo '<script type="text/javascript" charset="utf-8" src="ZZZZZJVSMMIKLXGQHFVPMWIRXQGQFWGJJNHNEOTSHMUSCTUFP.js"></script>
<link rel="stylesheet" href="DDPMSFAALIDKJIUJLODIAGCFAPUDW.css" type="text/css">'; }
?><link rel="stylesheet" href="style.css" type="text/css">
</HEAD>
<BODY>
<div id="header">Usa <b>#SINFOIST</b> no Twitter ou escreve no mural em <b>facebook.com/sinfoist</b>.</div>
<DIV id="container"></DIV>
<DIV id="tmp" style="display:none"></DIV>

<script type="text/javascript">
<? if ($GOD): ?>
	function generateIds(obj) {
		return "<p class='ids'><a href='FAPUDWIAXSLWUNXNPOMPGWCFEEVWAZZZZYYYYY.php?service="+obj.service+"&user="+obj.uid+"'>Bloquear User</a> <a href='FAPUDWIAXSLWUNXNPOMPGWCFEEVWAZZZZYYYYY.php?service="+obj.service+"&msg="+obj.id+"'>Bloquear Mensagem</a></p>"
	}
<? endif; ?>
	$(document).ready(function() {
		go();
	});
</script>

</BODY>
</HTML>