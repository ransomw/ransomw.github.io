window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments);};
ga.l=+new Date;

ga('create', 'UA-18120438-2', 'auto');
ga('send', 'pageview');

// todo: programatically add this to all links on page
//       .... after making it not break C-click (new-tab) functionality
var track_link = function (el) {
  var action;
  var label;
  var link_followed = false;
  var this_href = el.href;

  var get_proj = function () {
    var curr_el = el;
    while (curr_el.parentElement.id !== "projects") {
      curr_el = curr_el.parentElement;
      // if (curr_el.tagName === "BODY") {
      if (curr_el === null) {
        throw new Error("traversed out of the DOM tree");
      }
    }
    return curr_el.children[0].textContent;
    // return el.parentElement.parentElement.children[0].textContent;
  };

  var follow_link = function () {
    if (!link_followed) {
      link_followed = true;
      // '_self' means open in the current window
      // unlike window.location = href, this is apparently a standard
      window.open(this_href, '_self');
    }
  };

  if (el.text.trim() === "github") {
    action = "github";
    label = get_proj();
  } else if (el.text.trim() === "demo") {
    action = "demo";
    label = get_proj();
  } else if (el.href.match(/resume.html$/)) {
    action = "resume";
    label = 'html';
  } else if (el.href.match(/resume.pdf$/)) {
    action = "resume";
    label = 'pdf';
  } else {
    action = "info:"+el.text.trim();
    label = get_proj();
  }

  // console.log("label: "+label+", action: "+action);
  // debugger;

  // don't follow link until event recorded with analytics
  this.event.preventDefault();
  // but just in case the analytics fail...
  setTimeout(follow_link, 1000);
  // 'send', 'event', type, action, label
  ga('send', 'event', 'link', action, label, {
    hitCallback: follow_link
  });

};
