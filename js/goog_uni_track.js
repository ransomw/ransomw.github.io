/**
 * "Universal Analytics tracking code"
 * from analytics.google.com >
 *   > admin (gear icon) >
 *   > tracking info (property column in admin ui) >
 *   > tracking code (dropdown under tracking info)
 */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

/*** deobfuscation stuffs of above
(function (
    win,
    doc,
    o,
    g,
    r,
    //
    a,
    m
) {
    win['GoogleAnalyticsObject'] = r;
    win[r] = win[r] || function () {
        (win[r].q = win[r].q || []).push(arguments)
    } , win[r].l = (
        // int timestamp (secs? ms? since epoch)
        1*new Date()
    );
    a=doc.createElement(o), m=doc.getElementsByTagName(o)[0];
    a.async=1;
    a.src=g;
    m.parentNode.insertBefore(a,m)
})(
    win,
    document,
    'script',
    'https://www.google-analytics.com/analytics.js',
    'ga'
);
*/

ga('create', 'UA-18120438-2', 'auto');
ga('send', 'pageview');
