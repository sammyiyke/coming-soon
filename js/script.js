'use strict';
$(document).ready(function() {

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);

    $("#fullpage").fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage'],
        navigationTooltips: ['First page', 'Second page', 'Third and last page', '444', '55'],
        navigation: true,
        navigationPosition: 'left',
        scrollingSpeed: 1000,
        responsiveWidth: 992,
        keyboardScrolling: true,
        scrollOverflow: true
    });

    $('.play_video, video').on('click', function () {
        $('.play_video').toggleClass('hide');
        $('.video').attr('controls',true);
        $('video').get(0).paused ? $('video').get(0).play() : $('video').get(0).pause();
    });

});