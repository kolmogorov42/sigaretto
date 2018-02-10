<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

<head>

	<?php $actual_link = "http://$_SERVER[HTTP_HOST]/"; ?>

	<?php if($_GET['p'] == 'gen') { $page = "gen"; }
	elseif($_GET['p'] == 'stats') { $page = "stats"; }
	else { $page = "siga"; } ?>

	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="icon" href="img/favicon.ico" sizes="16x16">
	<link href="img/apple-touch-icon.png" sizes="120x120" rel="apple-touch-icon-precomposed">
	<link href='http://fonts.googleapis.com/css?family=Slabo+27px' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Krona+One' rel='stylesheet' type='text/css'>
	<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black">

	<title>SIGARETTO</title>

	<script src="//cdn.jsdelivr.net/emojione/2.1.4/lib/js/emojione.min.js"></script>
	<link rel="stylesheet" href="//cdn.jsdelivr.net/emojione/2.1.4/assets/css/emojione.min.css"/>

	<script src="js/jquery-2.1.3.min.js"></script>
	<script src="js/jquery-ui.min.js"></script>
	<script src="js/underscore-min.js"></script>
	<script src="js/ZeroClipboard.js"></script>
	<script src="js/tabletop.js"></script>
	<script src="https://d3js.org/d3.v3.min.js"></script>
	<!--<script src="<?php echo $actual_link;?>/js/inobounce.js"></script>-->


	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" type="text/css" href="stats-style.css">
	
	</head>

<body id = "<?php echo $page;?>">

	<script>
		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

     window.fbAsyncInit = function(){  // this gets triggered when FB object gets initialized
     	console.log("FB Object initiated");
            FB.XFBML.parse(); // now we can safely call parse method
        };
    </script>

	<div id="hotkeysButton"></div>
	<div id="hotkeysOverlay" class="hidden">
		<div id="darkOverlay"></div>
		<div id="keyboard"></div>
		<div id="fakeButtonBar"></div>
	</div>

    <div id="header">
        <div id="menubar">
            <span class="option fb"><a href="http://www.facebook.com/pages/SIGARETTO/278955915599794">FACEBOOK</a></span>
            <span class="option arch"><a href="http://sigaretto.org">CANONE</a></span>
            <span class="option gen"><a href="http://sigaretto.org/gen">GENERATOR</a></span>
        </div>

        <h1 class="title">SIGARETTO</h1>
    </div>

<div id="wrapper">
	<div id="searchBar">
		<input type="text" id="searchField" name="q" placeholder="Cerca..." />
	</div>
	<div id="buttonBar"></div>
	<div id="content"></div>
</div>

	<div class="dog left">
		<div class="dognose"></div>
	</div>
	<div class="dog right">
		<div class="dognose"></div>
	</div>

    <div class="footer">

    	<span class="copyright">SIGARETTO &copy; 2016 Cani in Alto</span>

    </div>

<script type="text/javascript" src="js/<?php echo $page;?>.js"></script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-77108837-1', 'auto');
  ga('send', 'pageview');

</script>

</body>
</html>