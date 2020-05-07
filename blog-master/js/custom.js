
$ (document).ready(function() {


 
  if (jQuery(".instafeed-wrapper").length) {
    // Instagram Feed
    var feed = new Instafeed({
      get: 'user',
      userId: '7666525026',
      limit: 8,
      sortBy: 'most-recent',
      resolution: "thumbnail",
      accessToken: '7666525026.1677ed0.a25fd3cdf61d4409aada701eeb74268e',
      template: '<a href="{{link}}" target="_blank"><img src="{{image}} " /></a>'
    });
    feed.run();
    }
});



//   $(window).on("load", function() {
//     $('#instafeed > a > img').each(function(){
//         var src = $(this).attr('src');
//         $(this).attr('src',src.replace( '540x540'));
//     });
// });