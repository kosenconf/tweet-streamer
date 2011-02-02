$(document).ready(function() {
  WebSocket.__swfLocation = "WebSocketMain.swf";

  var capacity  = 20;
  var icon_size = 48;

  function format(text) {
    return text;
  }

  function cutoff() {
    if ($("#stream div").size() >= capacity) {
      $("#stream div:last").slideDown(100, function() {
        $(this).remove();
      });
    }
  }

  function prepend(element) {
    element.hide().prependTo($("#stream")).slideDown("fast");
    cutoff();
  }

  var stream = new Pusher("9c2031a0d79e8518cf9e", "stream");

  stream.bind("twitter", function(message) {
    var data = message.data;
    var user = data.user;

    if (user) {
      var id                = data.id;
      var text              = data.text;
      var screen_name       = user.screen_name;
      var profile_image_url = user.profile_image_url;

      var div = $("<div/>")
                .addClass("tweet")
                .append($("<p/>")
                        .append($("<img/>")
                                .addClass("icon")
                                .attr({ src: profile_image_url, alt: screen_name, width: icon_size, height: icon_size }))
                        .append($("<span/>")
                                .addClass("screen_name")
                                .append($("<a/>")
                                        .attr({ href: "http://twitter.com/" + screen_name + "/status/" + id, target: "_blank" })
                                        .text(screen_name)))
                        .append(format(text)));

      prepend(div);
    }
  });
});
