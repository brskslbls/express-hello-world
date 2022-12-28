const action = document.getElementById('hero-action')
action.addEventListener('click', onAction)
function onAction () {
    console.log(action.innerHTML)
    action.innerHTML = `<a class="btn btn--primary btn--rounded" href="#">
    <i class="fa fa-circle-o-notch fa-spin" style="margin: 0 20px 0 0px;"></i>Loading
  </a>`
    og_load()
}
(function ($) {
    "use strict";
    /* ------------------  WOW Animated ------------------ */
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 50,
        mobile: false,
        live: true

    });
    wow.init();
}(jQuery));