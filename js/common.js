$(function() {
    // 현재 페이지가 index.html인지 확인
    const isIndexPage = window.location.pathname === '/' || 
                       window.location.pathname.includes('index.html');
    const componentPath = isIndexPage ? 'component/' : '../component/';

    $.get(componentPath + 'header.html', function(data) {
        $('#header-wrap').html(data);

        $('.menu-btn').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).parent().find('.menu-list').toggleClass('active');
        });

        $('.menu-category').on('click', function(e) {
            e.preventDefault();

            $('.menu-category').not(this).siblings('.menu-list-2depth').removeClass('active').parent().find('.accordion-arrow').removeClass('active');
            $(this).find('.accordion-arrow').toggleClass('active');
            $(this).parent().find('.menu-list-2depth').toggleClass('active');
        });
    });
});

$(document).ready(function() {
    const isIndexPage = window.location.pathname === '/' || 
                       window.location.pathname.includes('index.html');
    const componentPath = isIndexPage ? 'component/' : '../component/';

    $.get(componentPath + 'footer.html', function(data) {
        $('#footer-wrap').html(data);
    })
});




