/* Begin Google Analytics, with async loading */
function ga_async_load(fun){
    if (window.attachEvent){
        window.attachEvent('onload', fun);
    }else{
        window.addEventListener('load', fun, false);
    }
}

ga_async_load( function(){
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){ \
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), \
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) \
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); \
        ga('create', 'UA-107257509-1', 'auto'); ga('send', 'pageview');";
    document.body.appendChild(s);
});
/* Begin Google Analytics */

/*
 google tag way
 <!-- Global Site Tag (gtag.js) - Google Analytics -->
 <script async src="https://www.googletagmanager.com/gtag/js?id=UA-107257509-1"></script>
 <script>
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments)};
 gtag('js', new Date());

 gtag('config', 'UA-107257509-1');
 </script>
 */

/* Begin Baidu Analytics */
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?1fe93573ed47926eff79d7efd10be509";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
    })();
/* End Baidu Analytics */
