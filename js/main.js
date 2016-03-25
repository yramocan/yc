$(document).ready(function() {
  function DetectIphone() {
     var uagent = navigator.userAgent.toLowerCase();
     if (uagent.search("iphone") > -1)
        return true;
     else
        return false;
  }

  if (!DetectIphone()) {
    $("#video-wrapper").addClass("tubular-play")
    $("#video-wrapper").click(function() {
      $("#video-wrapper").toggleClass("tubular-pause tubular-play");
    });

    function youtube_parser(url) {
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var match = url.match(regExp);
      return (match&&match[7].length==11)? match[7] : false;
    }

    var link = "https://youtu.be/SdbJNg2dsng"
    var video_id = youtube_parser(link);

    $('#mobile-video-tag').innerHTML = link;

    $('#video-wrapper').tubular({
      videoId: video_id,
      playerVars: {
        iv_load_policy: 3,
        disablekb: 1,
        modestbranding: 1,
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        wmode: 'transparent',
        branding: 0,
        rel: 0,
        autohide: 1,
        origin: window.location.origin
      }
    });
  } else {
    $('#main-content').addClass('hide-main');
    $('#mobile-backdrop').addClass('show-mobile');
  }


});
