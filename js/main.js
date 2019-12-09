
$(document).ready(function() {
    var button =$('.navbar_wrap_button');
    var span = $('.span_button');
    $(button).on('click', function(e) {
        $('.span_button_foot').toggleClass('span_button_foot_active');
        $('.span_button_head').toggleClass('span_button_head_active');
        $('.span_button_middle').toggleClass('span_button_middle_active');
    });
    var link = $('.offer_menu_wrap_links');
    var button = '.navbar_wrap_button';
    $(button).on('click', function (e) {
        e.preventDefault(); 
        $('.menu_navbar_wrap').toggleClass('menu_navbar_wrap_active');
        $('.navbar_wrap_button').toggleClass('navbar_wrap_button_double_active');
        $('.body').toggleClass('body_active');
        $('.of').toggleClass('offer_menu_active');
    });
    $('.li_2').on('click', function(delta) {
        $('.offer_slider_third_wrap_footer_features').removeClass('offer_slider_third_wrap_footer_features_active');
        $('.of_wrap').removeClass('offer_slider_third_wrap_active');
        $('.offer_slider_third_wrap_footer_skills').removeClass('offer_slider_third_wrap_footer_skills_active');
        $('.offer_slider_third_wrap_footer_summary').removeClass('offer_slider_third_wrap_footer_summary_active ');
        $('.offer_slider_third_wrap_footer_experience').removeClass('offer_slider_third_wrap_footer_experience_active ');
        delta.preventDefault();
        $('.li_2').addClass('li_active_2');
        $('.li_1').removeClass('li_active_1');
        $('.li_3').removeClass('li_active_3');
        $('.li_4').removeClass('li_active_4');
        $('.li_5').removeClass('li_active_5');
        //
        $('.l_2').addClass('offer_menu_wrap_li_1');
        $('.l_1').removeClass('offer_menu_wrap_li_1');
        $('.l_3').removeClass('offer_menu_wrap_li_1');
        $('.l_4').removeClass('offer_menu_wrap_li_1');
        $('.l_5').removeClass('offer_menu_wrap_li_1');
        //
        $('.of_1').addClass('offer_ballast');
        $('.of_2').addClass('offer_slider_second');
        $('.of_3').removeClass('offer_slider_third');
        $('.of_4').removeClass('offer_slider_fourth');
        $('.of_5').removeClass('offer_slider_firth');
        //
        $('.b_1').addClass('button_cv');
        
    });
    $('.li_1').on('click', function(delta) {
        $('.offer_slider_third_wrap_footer_features').removeClass('offer_slider_third_wrap_footer_features_active');
        $('.of_wrap').removeClass('offer_slider_third_wrap_active');
        $('.offer_slider_third_wrap_footer_skills').removeClass('offer_slider_third_wrap_footer_skills_active');
        $('.offer_slider_third_wrap_footer_summary').removeClass('offer_slider_third_wrap_footer_summary_active ');
        $('.offer_slider_third_wrap_footer_experience').removeClass('offer_slider_third_wrap_footer_experience_active ');
        delta.preventDefault();
        $('.li_1').addClass('li_active_1');
        $('.li_2').removeClass('li_active_2');
        $('.li_3').removeClass('li_active_3');
        $('.li_4').removeClass('li_active_4');
        $('.li_5').removeClass('li_active_5');
        //
        $('.l_1').addClass('offer_menu_wrap_li_1');
        $('.l_2').removeClass('offer_menu_wrap_li_1');
        $('.l_3').removeClass('offer_menu_wrap_li_1');
        $('.l_4').removeClass('offer_menu_wrap_li_1');
        $('.l_5').removeClass('offer_menu_wrap_li_1');
        //
        $('.of_1').removeClass('offer_ballast');
        $('.of_2').removeClass('offer_slider_second');
        $('.of_3').removeClass('offer_slider_third');
        $('.of_4').removeClass('offer_slider_fourth');
        $('.of_5').removeClass('offer_slider_firth');
        //
        $('.b_1').removeClass('button_cv');
    });
    $('.li_3').on('click', function(delta) {
        $('.offer_slider_third_wrap_footer_features').removeClass('offer_slider_third_wrap_footer_features_active');
        $('.of_wrap').removeClass('offer_slider_third_wrap_active');
        $('.offer_slider_third_wrap_footer_skills').removeClass('offer_slider_third_wrap_footer_skills_active');
        $('.offer_slider_third_wrap_footer_summary').removeClass('offer_slider_third_wrap_footer_summary_active ');
        $('.offer_slider_third_wrap_footer_experience').removeClass('offer_slider_third_wrap_footer_experience_active ');
        delta.preventDefault();
        $('.li_3').addClass('li_active_3');
        $('.li_2').removeClass('li_active_2');
        $('.li_1').removeClass('li_active_1');
        $('.li_4').removeClass('li_active_4');
        $('.li_5').removeClass('li_active_5');
        //
        $('.b_1').addClass('button_cv');
        $('.l_3').addClass('offer_menu_wrap_li_1');
        $('.l_1').removeClass('offer_menu_wrap_li_1');
        $('.l_2').removeClass('offer_menu_wrap_li_1');
        $('.l_4').removeClass('offer_menu_wrap_li_1');
        $('.l_5').removeClass('offer_menu_wrap_li_1');
        //
        $('.of_2').removeClass('offer_slider_second');
        $('.of_1').addClass('offer_ballast');
        $('.of_4').removeClass('offer_slider_fourth');
        $('.of_5').removeClass('offer_slider_firth');
        //
        $('.of_3').addClass('offer_slider_third');
    });
    $('.li_4').on('click', function(delta) {
        $('.offer_slider_third_wrap_footer_features').removeClass('offer_slider_third_wrap_footer_features_active');
        $('.of_wrap').removeClass('offer_slider_third_wrap_active');
        $('.offer_slider_third_wrap_footer_skills').removeClass('offer_slider_third_wrap_footer_skills_active');
        $('.offer_slider_third_wrap_footer_summary').removeClass('offer_slider_third_wrap_footer_summary_active ');
        $('.offer_slider_third_wrap_footer_experience').removeClass('offer_slider_third_wrap_footer_experience_active ');
        delta.preventDefault();
        $('.b_1').addClass('button_cv');
        $('.li_4').addClass('li_active_4');
        $('.li_1').removeClass('li_active_1');
        $('.li_3').removeClass('li_active_3');
        $('.li_2').removeClass('li_active_2');
        $('.li_5').removeClass('li_active_5');
        //
        $('.l_4').addClass('offer_menu_wrap_li_1');
        $('.l_1').removeClass('offer_menu_wrap_li_1');
        $('.l_2').removeClass('offer_menu_wrap_li_1');
        $('.l_3').removeClass('offer_menu_wrap_li_1');
        $('.l_5').removeClass('offer_menu_wrap_li_1');
        //
        $('.of_4').addClass('offer_slider_fourth');
        $('.of_1').addClass('offer_ballast');
        $('.of_3').removeClass('offer_slider_third');
        $('.of_2').removeClass('offer_slider_second');
        $('.of_5').removeClass('offer_slider_firth');
    });
    $('.li_5').on('click', function(delta) {
        $('.offer_slider_third_wrap_footer_features').removeClass('offer_slider_third_wrap_footer_features_active');
        $('.of_wrap').removeClass('offer_slider_third_wrap_active');
        $('.offer_slider_third_wrap_footer_skills').removeClass('offer_slider_third_wrap_footer_skills_active');
        $('.offer_slider_third_wrap_footer_summary').removeClass('offer_slider_third_wrap_footer_summary_active ');
        $('.offer_slider_third_wrap_footer_experience').removeClass('offer_slider_third_wrap_footer_experience_active ');
        delta.preventDefault();
        $('.b_1').addClass('button_cv');
        $('.li_5').addClass('li_active_5');
        $('.li_1').removeClass('li_active_1');
        $('.li_2').removeClass('li_active_2');
        $('.li_3').removeClass('li_active_3');
        $('.li_4').removeClass('li_active_4');
        //
        $('.l_5').addClass('offer_menu_wrap_li_1');
        $('.l_1').removeClass('offer_menu_wrap_li_1');
        $('.l_2').removeClass('offer_menu_wrap_li_1');
        $('.l_3').removeClass('offer_menu_wrap_li_1');
        $('.l_4').removeClass('offer_menu_wrap_li_1');
        //
        $('.of_5').addClass('offer_slider_firth');
        $('.of_1').addClass('offer_ballast');
        $('.of_3').removeClass('offer_slider_third');
        $('.of_4').removeClass('offer_slider_fourth');
        $('.of_2').removeClass('offer_slider_second');
    });
    $('.bt_1').on('click', function(e) {
        $(this).addClass('offer_slider_firth_wrap_block_buttons_active'); 
        $('.bt_2, .bt_3, .bt_4, .bt_5, .bt_6').removeClass('offer_slider_firth_wrap_block_buttons_active');
    });
    $('.bt_2').on('click', function(e) {
        $(this).addClass('offer_slider_firth_wrap_block_buttons_active'); 
        $('.bt_1, .bt_3, .bt_4, .bt_5, .bt_6').removeClass('offer_slider_firth_wrap_block_buttons_active');
    });
    $('.bt_3').on('click', function(e) {
        $(this).addClass('offer_slider_firth_wrap_block_buttons_active'); 
        $('.bt_1, .bt_2, .bt_4, .bt_5, .bt_6').removeClass('offer_slider_firth_wrap_block_buttons_active');
    });
    $('.bt_4').on('click', function(e) {
        $(this).addClass('offer_slider_firth_wrap_block_buttons_active'); 
        $('.bt_1, .bt_2, .bt_3, .bt_5, .bt_6').removeClass('offer_slider_firth_wrap_block_buttons_active');
    });
    $('.bt_5').on('click', function(e) {
        $(this).addClass('offer_slider_firth_wrap_block_buttons_active'); 
        $('.bt_1, .bt_2, .bt_3, .bt_4, .bt_6').removeClass('offer_slider_firth_wrap_block_buttons_active');
    });
    $('.bt_6').on('click', function(e) {
        $(this).addClass('offer_slider_firth_wrap_block_buttons_active'); 
        $('.bt_1, .bt_2, .bt_3, .bt_4, .bt_5').removeClass('offer_slider_firth_wrap_block_buttons_active');
    });
    $('.lm_2').on('click', function (e) {
        $('.offer_slider_third_wrap_footer_features').removeClass('offer_slider_third_wrap_footer_features_active');
        $('.of_wrap').removeClass('offer_slider_third_wrap_active');
        $('.offer_slider_third_wrap_footer_skills').removeClass('offer_slider_third_wrap_footer_skills_active');
        $('.offer_slider_third_wrap_footer_summary').removeClass('offer_slider_third_wrap_footer_summary_active ');
        $('.offer_slider_third_wrap_footer_experience').removeClass('offer_slider_third_wrap_footer_experience_active ');
        $('.of').removeClass('offer_menu_active');
        $('.li_2').addClass('li_active_2');
        $('.li_1').removeClass('li_active_1');
        $('.li_3').removeClass('li_active_3');
        $('.li_4').removeClass('li_active_4');
        $('.li_5').removeClass('li_active_5');
        //
        $('.l_2').addClass('offer_menu_wrap_li_1');
        $('.l_1').removeClass('offer_menu_wrap_li_1');
        $('.l_3').removeClass('offer_menu_wrap_li_1');
        $('.l_4').removeClass('offer_menu_wrap_li_1');
        $('.l_5').removeClass('offer_menu_wrap_li_1');
        //
        $('.body').removeClass('body_active');
        $('.menu_navbar_wrap').removeClass('menu_navbar_wrap_active');
        $('.navbar_wrap_button').removeClass('navbar_wrap_button_double_active');
        $('.b_1').addClass('button_cv');
        $('.of_1').addClass('offer_ballast');
        $('.of_2').addClass('offer_slider_second');
        $('.of_3').removeClass('offer_slider_third');
        $('.of_4').removeClass('offer_slider_fourth');
        $('.of_5').removeClass('offer_slider_firth');
        $('.span_button_head').removeClass('span_button_head_active');
        $('.span_button_middle').removeClass('span_button_middle_active');
        $('.span_button_foot').removeClass('span_button_foot_active');
    });
    $('.lm_1').on('click', function (e) {
        $('.offer_slider_third_wrap_footer_features').removeClass('offer_slider_third_wrap_footer_features_active');
        $('.of_wrap').removeClass('offer_slider_third_wrap_active');
        $('.offer_slider_third_wrap_footer_skills').removeClass('offer_slider_third_wrap_footer_skills_active');
        $('.offer_slider_third_wrap_footer_summary').removeClass('offer_slider_third_wrap_footer_summary_active ');
        $('.offer_slider_third_wrap_footer_experience').removeClass('offer_slider_third_wrap_footer_experience_active ');
        $('.li_1').addClass('li_active_1');
        $('.li_2').removeClass('li_active_2');
        $('.li_3').removeClass('li_active_3');
        $('.li_4').removeClass('li_active_4');
        $('.li_5').removeClass('li_active_5');
        //
        $('.l_1').addClass('offer_menu_wrap_li_1');
        $('.l_2').removeClass('offer_menu_wrap_li_1');
        $('.l_3').removeClass('offer_menu_wrap_li_1');
        $('.l_4').removeClass('offer_menu_wrap_li_1');
        $('.l_5').removeClass('offer_menu_wrap_li_1');
        //
        $('.body').removeClass('body_active');
        $('.menu_navbar_wrap').removeClass('menu_navbar_wrap_active');
        $('.navbar_wrap_button').removeClass('navbar_wrap_button_double_active');
        $('.span_button_head').removeClass('span_button_head_active');
        $('.span_button_middle').removeClass('span_button_middle_active');
        $('.span_button_foot').removeClass('span_button_foot_active');
        $('.b_1').removeClass('button_cv');
        $('.of_1').removeClass('offer_ballast');
        $('.of_2').removeClass('offer_slider_second');
        $('.of_3').removeClass('offer_slider_third');
        $('.of_4').removeClass('offer_slider_fourth');
        $('.of_5').removeClass('offer_slider_firth');
        $('.of').removeClass('offer_menu_active');
    });
    $('.lm_3').on('click', function (e) {
        $('.offer_slider_third_wrap_footer_features').removeClass('offer_slider_third_wrap_footer_features_active');
        $('.of_wrap').removeClass('offer_slider_third_wrap_active');
        $('.offer_slider_third_wrap_footer_skills').removeClass('offer_slider_third_wrap_footer_skills_active');
        $('.offer_slider_third_wrap_footer_summary').removeClass('offer_slider_third_wrap_footer_summary_active ');
        $('.offer_slider_third_wrap_footer_experience').removeClass('offer_slider_third_wrap_footer_experience_active ');
        $('.of').removeClass('offer_menu_active');
        $('.li_3').addClass('li_active_3');
        $('.li_2').removeClass('li_active_2');
        $('.li_1').removeClass('li_active_1');
        $('.li_4').removeClass('li_active_4');
        $('.li_5').removeClass('li_active_5');
        //
        $('.b_1').addClass('button_cv');
        $('.l_3').addClass('offer_menu_wrap_li_1');
        $('.l_1').removeClass('offer_menu_wrap_li_1');
        $('.l_2').removeClass('offer_menu_wrap_li_1');
        $('.l_4').removeClass('offer_menu_wrap_li_1');
        $('.l_5').removeClass('offer_menu_wrap_li_1');
        //
        $('.body').removeClass('body_active');
        $('.menu_navbar_wrap').removeClass('menu_navbar_wrap_active');
        $('.navbar_wrap_button').removeClass('navbar_wrap_button_double_active');
        $('.b_1').addClass('button_cv');
        $('.of_2').removeClass('offer_slider_second');
        $('.of_1').addClass('offer_ballast');
        $('.of_4').removeClass('offer_slider_fourth');
        $('.of_5').removeClass('offer_slider_firth');
        $('.of_3').addClass('offer_slider_third');
        $('.span_button_head').removeClass('span_button_head_active');
        $('.span_button_middle').removeClass('span_button_middle_active');
        $('.span_button_foot').removeClass('span_button_foot_active');
    });
    $('.lm_4').on('click', function (e) {
        $('.offer_slider_third_wrap_footer_features').removeClass('offer_slider_third_wrap_footer_features_active');
        $('.of_wrap').removeClass('offer_slider_third_wrap_active');
        $('.offer_slider_third_wrap_footer_skills').removeClass('offer_slider_third_wrap_footer_skills_active');
        $('.offer_slider_third_wrap_footer_summary').removeClass('offer_slider_third_wrap_footer_summary_active ');
        $('.offer_slider_third_wrap_footer_experience').removeClass('offer_slider_third_wrap_footer_experience_active ');
        $('.of').removeClass('offer_menu_active');
        $('.b_1').addClass('button_cv');
        $('.li_4').addClass('li_active_4');
        $('.li_1').removeClass('li_active_1');
        $('.li_3').removeClass('li_active_3');
        $('.li_2').removeClass('li_active_2');
        $('.li_5').removeClass('li_active_5');
        //
        $('.l_4').addClass('offer_menu_wrap_li_1');
        $('.l_1').removeClass('offer_menu_wrap_li_1');
        $('.l_2').removeClass('offer_menu_wrap_li_1');
        $('.l_3').removeClass('offer_menu_wrap_li_1');
        $('.l_5').removeClass('offer_menu_wrap_li_1');
        $('.body').removeClass('body_active');
        $('.menu_navbar_wrap').removeClass('menu_navbar_wrap_active');
        $('.navbar_wrap_button').removeClass('navbar_wrap_button_double_active');
        $('.b_1').addClass('button_cv');
        $('.of_4').addClass('offer_slider_fourth');
        $('.of_1').addClass('offer_ballast');
        $('.of_3').removeClass('offer_slider_third');
        $('.of_2').removeClass('offer_slider_second');
        $('.of_5').removeClass('offer_slider_firth');
        $('.span_button_head').removeClass('span_button_head_active');
        $('.span_button_middle').removeClass('span_button_middle_active');
        $('.span_button_foot').removeClass('span_button_foot_active');
    });
    $('.lm_5').on('click', function (e) {
        $('.offer_slider_third_wrap_footer_features').removeClass('offer_slider_third_wrap_footer_features_active');
        $('.of_wrap').removeClass('offer_slider_third_wrap_active');
        $('.offer_slider_third_wrap_footer_skills').removeClass('offer_slider_third_wrap_footer_skills_active');
        $('.offer_slider_third_wrap_footer_summary').removeClass('offer_slider_third_wrap_footer_summary_active ');
        $('.offer_slider_third_wrap_footer_experience').removeClass('offer_slider_third_wrap_footer_experience_active ');
        $('.of').removeClass('offer_menu_active');
        $('.b_1').addClass('button_cv');
        $('.li_5').addClass('li_active_5');
        $('.li_1').removeClass('li_active_1');
        $('.li_2').removeClass('li_active_2');
        $('.li_3').removeClass('li_active_3');
        $('.li_4').removeClass('li_active_4');
        //
        $('.l_5').addClass('offer_menu_wrap_li_1');
        $('.l_1').removeClass('offer_menu_wrap_li_1');
        $('.l_2').removeClass('offer_menu_wrap_li_1');
        $('.l_3').removeClass('offer_menu_wrap_li_1');
        $('.l_4').removeClass('offer_menu_wrap_li_1');
        //
        $('.body').removeClass('body_active');
        $('.menu_navbar_wrap').removeClass('menu_navbar_wrap_active');
        $('.navbar_wrap_button').removeClass('navbar_wrap_button_double_active');
        $('.b_1').addClass('button_cv');
        $('.of_5').addClass('offer_slider_firth');
        $('.of_1').addClass('offer_ballast');
        $('.of_3').removeClass('offer_slider_third');
        $('.of_4').removeClass('offer_slider_fourth');
        $('.of_2').removeClass('offer_slider_second');
        $('.span_button_head').removeClass('span_button_head_active');
        $('.span_button_middle').removeClass('span_button_middle_active');
        $('.span_button_foot').removeClass('span_button_foot_active');
    });
    const card = document.querySelector('.card');
    card.addEventListener('mousemove', StartRotate);
    card.addEventListener('mouseout', StopRotate);
    function StartRotate(event) {
        const cardItem = this.querySelector('#card-item');
        const halfHeight = cardItem.offsetHeight / 2;
        cardItem.style.transform = 'rotateX(' +  (event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfHeight) / 5 + 'deg)';
    }
    function StopRotate(event) {
        const cardItem = this.querySelector('#card-item');
        const halfHeight = cardItem.offsetHeight / 2;
        cardItem.style.transform = 'rotateX(0) rotateY(0)';
    }
    $('#img_first_button').on('click', function(e) {
        $('.offer_slider_third_wrap_footer_summary').addClass('offer_slider_third_wrap_footer_summary_active');
        $('.of_wrap').addClass('offer_slider_third_wrap_active');
    });
    $('#img_second_button').on('click', function(e) {
        $('.offer_slider_third_wrap_footer_skills').addClass('offer_slider_third_wrap_footer_skills_active');
        $('.of_wrap').addClass('offer_slider_third_wrap_active');
    });
    $('#img_third_button').on('click', function(e) {
        $('.offer_slider_third_wrap_footer_experience').addClass('offer_slider_third_wrap_footer_experience_active');
        $('.of_wrap').addClass('offer_slider_third_wrap_active');
    });

    $('.offer_slider_third_wrap_main').on('click', function (e) {
        $('.offer_slider_third_wrap_footer_features').addClass('offer_slider_third_wrap_footer_features_active');
        $('.of_wrap').addClass('offer_slider_third_wrap_active');
    });

    $('.return_of_3').on('click', function (e) {
        $('.of_wrap').removeClass('offer_slider_third_wrap_active');
        $('.offer_slider_third_wrap_footer_skills').removeClass('offer_slider_third_wrap_footer_skills_active');
        $('.offer_slider_third_wrap_footer_summary').removeClass('offer_slider_third_wrap_footer_summary_active ');
        $('.offer_slider_third_wrap_footer_experience').removeClass('offer_slider_third_wrap_footer_experience_active');
        $('.offer_slider_third_wrap_footer_features').removeClass('offer_slider_third_wrap_footer_features_active');
    });
});

