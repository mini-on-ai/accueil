// Links made before 17 November 2026 still point at pages that have moved. They are sent on, address and all.
(function () {
  var p = location.pathname;
  var vieux = /^\/(products|blog|f1|play|images)(\/|$)|^\/(f1|ats|clauseguard|invoiceguard|jobguard|terms|build|services|style)\.(html|css)$|^\/f1\/?/;
  if (vieux.test(p)) location.replace('https://store.' + location.hostname.replace(/^www\./, '') + p + location.search + location.hash);
})();
