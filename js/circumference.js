$('#click_button').on('click', function (e) {
var percents = [80, 90, 40];
const transitionDuration = 8000;
const displays = document.querySelectorAll('.offer_slider_third_wrap_footer_features_wrap_li');

    displays.forEach(document => {
    const circle = document.querySelector('#fill');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.setProperty('--transitionDuration', `${transitionDuration}ms`);
    circle.style.setProperty('--initialStroke', circumference);
    var percents = parseFloat(document.dataset.note);
    var delta_circle = circumference * (1 - percents/ 100);
    setTimeout(() => circle.style.strokeDashoffset = delta_circle, 1000);
});

var span = '.offer_slider_third_wrap_footer_features_wrap_span_first';
    $(document).ready(function(e) {$(span).each(function(e) {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 10000, 
        step:function(now){
          $(this).text(Math.ceil(now));
        }
      });
    });
    });
})
 

    

    