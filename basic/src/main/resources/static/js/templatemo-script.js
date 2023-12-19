/**
 * Credits
 * Isotope with paging: https://codepen.io/TimRizzo/details/ervrRq
 */



let islogoutEl = document.getElementById("islogout")

function islogout(url) {
    let answer;
    //페이지를 이동하기 전에 confirm()을 사용해 다시 한번 확인한다.
    //확인을 선택하면 answer에  true, 취소를 선택하면 false 값이 들어간다.
    answer = confirm("로그아웃 하시겠습니까?");
    //확인을 선택한 경우 자바스크립트를 호출할 때 같이 넘어온 url이라는 변수에 들어있는 주소로 페이지 이동
    if (answer == true) {
        alert("로그아웃을 하였습니다.")
        location.href = "/logout"
    }
    else {
        alert("로그아웃을 취소하였습니다.")
        location.href = "/index"
    }
}

$(document).ready(function () {

    /*************** Navigation *****************/

    $("#tm-main-nav").singlePageNav({
        filter: ':not(.external)'
    });

    $(".navbar-toggler").on("click", function (e) {
        $(".tm-sidebar").toggleClass("show");
        e.stopPropagation();
    });

    $("html").click(function (e) {
        var sidebar = document.getElementById("tm-sidebar");

        if (!sidebar.contains(e.target)) {
            $(".tm-sidebar").removeClass("show");
        }
    });

    $("#tm-sidebar .nav-link").click(function (e) {
        $(".tm-sidebar").removeClass("show");
    });

    // total

    var itemSelector_total = ".tm-total-item";
    var responsiveIsotope_total = [[480, 4], [720, 6], [1920, 9]];
    var itemsPerPageDefault_total = 12;
    var itemsPerPage_total = defineItemsPerPage_total();
    var currentNumberPages_total = 1;
    var currentPage_total = 1;
    var currentFilter_total = '*';
    var filterValue_total = "";
    var pageAttribute_total = 'data-page';
    var pagerClass_total = 'tm-paging';
    var $container_total = $('.tm-total').isotope({
        itemSelector_total: itemSelector_total
    });

    $container_total.imagesLoaded().progress(function () {
        $container_total.isotope('layout');
    });

    function changeFilter_total(selector) { $container_total.isotope({ filter: selector }); }

    function goToPage_total(n) {
        currentPage_total = n;
        var selector_total = itemSelector_total;
        var exclusives_total = [];

        if (currentFilter_total != '*') {
            exclusives_total.push(selector_total + '.' + currentFilter_total);
        }

        filterValue_total = exclusives_total.length ? exclusives_total.join('') : '*';

        var wordPage_total = currentPage_total.toString();
        filterValue_total += ('.' + wordPage_total);
        changeFilter_total(filterValue_total);
    }

    function defineItemsPerPage_total() {
        var pages_total = itemsPerPageDefault_total;

        for (var i = 0; i < responsiveIsotope_total.length; i++) {
            if ($(window).width() <= responsiveIsotope_total[i][0]) {
                pages_total = responsiveIsotope_total[i][1];
                break;
            }
        }
        return pages_total;
    }

    function setPagination_total() {
        var SettingsPagesOnItems_total = function () {
            var itemsLength_total = $container_total.children(itemSelector_total).length;
            var pages_total = Math.ceil(itemsLength_total / itemsPerPage_total);
            var item_total = 1;
            var page_total = 1;
            var selector_total = itemSelector_total;
            var exclusives_total = [];

            if (currentFilter_total != '*') {
                exclusives_total.push(selector_total + '.' + currentFilter_total);
            }

            filterValue_total = exclusives_total.length ? exclusives_total.join('') : '*';

            $container_total.children(filterValue_total).each(function () {
                if (item_total > itemsPerPage_total) {
                    page_total++;
                    item_total = 1;
                }
                wordPage_total = page_total.toString();

                var classes_total = $(this).attr('class').split(' ');
                var lastClass_total = classes_total[classes_total.length - 1];

                if (lastClass_total.length < 4) {
                    $(this).removeClass();
                    classes_total.pop();
                    classes_total.push(wordPage_total);
                    classes_total = classes_total.join(' ');
                    $(this).addClass(classes_total);
                } else {
                    $(this).addClass(wordPage_total);
                }
                item_total++;
            });
            currentNumberPages_total = page_total;
        }();

        var CreatePagers_total = function () {

            var $isotopePager_total = ($('.' + pagerClass_total).length == 0) ? $('<div class="' + pagerClass_total + '"></div>') : $('.' + pagerClass_total);

            $isotopePager_total.html('');
            if (currentNumberPages_total > 1) {
                for (var i = 0; i < currentNumberPages_total; i++) {
                    var $pager_total = '';

                    if (currentPage_total == i + 1) {
                        $pager_total = $('<a href="javascript:void(0);" class="active tm-paging-link" ' + pageAttribute_total + '="' + (i + 1) + '"></a>');
                    } else {
                        $pager_total = $('<a href="javascript:void(0);" class="tm-paging-link" ' + pageAttribute_total + '="' + (i + 1) + '"></a>');
                    }

                    $pager_total.html(i + 1);

                    $pager_total.click(function () {
                        $('.tm-paging-link').removeClass('active');
                        $(this).addClass('active');
                        var page_total = $(this).eq(0).attr(pageAttribute_total);
                        goToPage_total(page_total);
                    });
                    $pager_total.appendTo($isotopePager_total);
                }
            }
            $container_total.after($isotopePager_total);
        }();
    }

    setPagination_total();
    goToPage_total(1);

    $('.tm-total-link').click(function (e) {
        var filter_total = $(this).data('filter');
        currentFilter_total = filter_total;
        setPagination_total();
        goToPage_total(1);
        $('.tm-total-link').removeClass('active');
        $(e.target).addClass('active');
    })

    /****************** Window resize ******************/

    $(window).resize(function () {
        itemsPerPage_total = defineItemsPerPage_total();
        setPagination_total();
        goToPage_total(1);
    });

    /****************** Magnific Popup ******************/

    $('.tm-total').magnificPopup({
        delegate: 'a',
        type: 'image',
        total: {
            enabled: true
        }
    });

    /****************** Smooth Scrolling *****************/

    $(".tm-btn-next").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault_total();
            var hash_total = this.hash_total;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // window.location.hash = hash;
            });
        }
    });



    /*************** Gallery ******************/

    var itemSelector = ".tm-gallery-item";
    var responsiveIsotope = [[480, 4], [720, 6], [1920, 9]];
    var itemsPerPageDefault = 12;
    var itemsPerPage = defineItemsPerPage();
    var currentNumberPages = 1;
    var currentPage = 1;
    var currentFilter = '*';
    var filterValue = "";
    var pageAttribute = 'data-page';
    var pagerClass = 'tm-paging';
    var $container = $('.tm-gallery').isotope({
        itemSelector: itemSelector
    });

    $container.imagesLoaded().progress(function () {
        $container.isotope('layout');
    });

    function changeFilter(selector) { $container.isotope({ filter: selector }); }

    function goToPage(n) {
        currentPage = n;
        var selector = itemSelector;
        var exclusives = [];

        if (currentFilter != '*') {
            exclusives.push(selector + '.' + currentFilter);
        }

        filterValue = exclusives.length ? exclusives.join('') : '*';

        var wordPage = currentPage.toString();
        filterValue += ('.' + wordPage);
        changeFilter(filterValue);
    }

    function defineItemsPerPage() {
        var pages = itemsPerPageDefault;

        for (var i = 0; i < responsiveIsotope.length; i++) {
            if ($(window).width() <= responsiveIsotope[i][0]) {
                pages = responsiveIsotope[i][1];
                break;
            }
        }
        return pages;
    }

    function setPagination() {
        var SettingsPagesOnItems = function () {
            var itemsLength = $container.children(itemSelector).length;
            var pages = Math.ceil(itemsLength / itemsPerPage);
            var item = 1;
            var page = 1;
            var selector = itemSelector;
            var exclusives = [];

            if (currentFilter != '*') {
                exclusives.push(selector + '.' + currentFilter);
            }

            filterValue = exclusives.length ? exclusives.join('') : '*';

            $container.children(filterValue).each(function () {
                if (item > itemsPerPage) {
                    page++;
                    item = 1;
                }
                wordPage = page.toString();

                var classes = $(this).attr('class').split(' ');
                var lastClass = classes[classes.length - 1];

                if (lastClass.length < 4) {
                    $(this).removeClass();
                    classes.pop();
                    classes.push(wordPage);
                    classes = classes.join(' ');
                    $(this).addClass(classes);
                } else {
                    $(this).addClass(wordPage);
                }
                item++;
            });
            currentNumberPages = page;
        }();

        var CreatePagers = function () {

            var $isotopePager = ($('.' + pagerClass).length == 0) ? $('<div class="' + pagerClass + '"></div>') : $('.' + pagerClass);

            $isotopePager.html('');
            if (currentNumberPages > 1) {
                for (var i = 0; i < currentNumberPages; i++) {
                    var $pager = '';

                    if (currentPage == i + 1) {
                        $pager = $('<a href="javascript:void(0);" class="active tm-paging-link" ' + pageAttribute + '="' + (i + 1) + '"></a>');
                    } else {
                        $pager = $('<a href="javascript:void(0);" class="tm-paging-link" ' + pageAttribute + '="' + (i + 1) + '"></a>');
                    }

                    $pager.html(i + 1);

                    $pager.click(function () {
                        $('.tm-paging-link').removeClass('active');
                        $(this).addClass('active');
                        var page = $(this).eq(0).attr(pageAttribute);
                        goToPage(page);
                    });
                    $pager.appendTo($isotopePager);
                }
            }
            $container.after($isotopePager);
        }();
    }

    setPagination();
    goToPage(1);

    $('.tm-gallery-link').click(function (e) {
        var filter = $(this).data('filter');
        currentFilter = filter;
        setPagination();
        goToPage(1);
        $('.tm-gallery-link').removeClass('active');
        $(e.target).addClass('active');
    })

    /****************** Window resize ******************/

    $(window).resize(function () {
        itemsPerPage = defineItemsPerPage();
        setPagination();
        goToPage(1);
    });

    /****************** Magnific Popup ******************/

    $('.tm-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /****************** Smooth Scrolling *****************/

    $(".tm-btn-next").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // window.location.hash = hash;
            });
        }
    });

    // news

    var itemSelector_news = ".tm-news-item";
    var responsiveIsotope_news = [[480, 4], [720, 6], [1920, 9]];
    var itemsPerPageDefault_news = 12;
    var itemsPerPage_news = defineItemsPerPage_news();
    var currentNumberPages_news = 1;
    var currentPage_news = 1;
    var currentFilter_news = '*';
    var filterValue_news = "";
    var pageAttribute_news = 'data-page';
    var pagerClass_news = 'tm-paging';
    var $container_news = $('.tm-news').isotope({
        itemSelector_news: itemSelector_news
    });

    $container_news.imagesLoaded().progress(function () {
        $container_news.isotope('layout');
    });

    function changeFilter_news(selector) { $container_news.isotope({ filter: selector }); }

    function goToPage_news(n) {
        currentPage_news = n;
        var selector_news = itemSelector_news;
        var exclusives_news = [];

        if (currentFilter_news != '*') {
            exclusives_news.push(selector_news + '.' + currentFilter_news);
        }

        filterValue_news = exclusives_news.length ? exclusives_news.join('') : '*';

        var wordPage_news = currentPage_news.toString();
        filterValue_news += ('.' + wordPage_news);
        changeFilter_news(filterValue_news);
    }

    function defineItemsPerPage_news() {
        var pages_news = itemsPerPageDefault_news;

        for (var i = 0; i < responsiveIsotope_news.length; i++) {
            if ($(window).width() <= responsiveIsotope_news[i][0]) {
                pages_news = responsiveIsotope_news[i][1];
                break;
            }
        }
        return pages_news;
    }

    function setPagination_news() {
        var SettingsPagesOnItems_news = function () {
            var itemsLength_news = $container_news.children(itemSelector_news).length;
            var pages_news = Math.ceil(itemsLength_news / itemsPerPage_news);
            var item_news = 1;
            var page_news = 1;
            var selector_news = itemSelector_news;
            var exclusives_news = [];

            if (currentFilter_news != '*') {
                exclusives_news.push(selector_news + '.' + currentFilter_news);
            }

            filterValue_news = exclusives_news.length ? exclusives_news.join('') : '*';

            $container_news.children(filterValue_news).each(function () {
                if (item_news > itemsPerPage_news) {
                    page_news++;
                    item_news = 1;
                }
                wordPage_news = page_news.toString();

                var classes_news = $(this).attr('class').split(' ');
                var lastClass_news = classes_news[classes_news.length - 1];

                if (lastClass_news.length < 4) {
                    $(this).removeClass();
                    classes_news.pop();
                    classes_news.push(wordPage_news);
                    classes_news = classes_news.join(' ');
                    $(this).addClass(classes_news);
                } else {
                    $(this).addClass(wordPage_news);
                }
                item_news++;
            });
            currentNumberPages_news = page_news;
        }();

        var CreatePagers_news = function () {

            var $isotopePager_news = ($('.' + pagerClass_news).length == 0) ? $('<div class="' + pagerClass_news + '"></div>') : $('.' + pagerClass_news);

            $isotopePager_news.html('');
            if (currentNumberPages_news > 1) {
                for (var i = 0; i < currentNumberPages_news; i++) {
                    var $pager_news = '';

                    if (currentPage_news == i + 1) {
                        $pager_news = $('<a href="javascript:void(0);" class="active tm-paging-link" ' + pageAttribute_news + '="' + (i + 1) + '"></a>');
                    } else {
                        $pager_news = $('<a href="javascript:void(0);" class="tm-paging-link" ' + pageAttribute_news + '="' + (i + 1) + '"></a>');
                    }

                    $pager_news.html(i + 1);

                    $pager_news.click(function () {
                        $('.tm-paging-link').removeClass('active');
                        $(this).addClass('active');
                        var page_news = $(this).eq(0).attr(pageAttribute_news);
                        goToPage_news(page_news);
                    });
                    $pager_news.appendTo($isotopePager_news);
                }
            }
            $container_news.after($isotopePager_news);
        }();
    }

    setPagination_news();
    goToPage_news(1);

    $('.tm-news-link').click(function (e) {
        var filter_news = $(this).data('filter');
        currentFilter_news = filter_news;
        setPagination_news();
        goToPage_news(1);
        $('.tm-news-link').removeClass('active');
        $(e.target).addClass('active');
    })

    /****************** Window resize ******************/

    $(window).resize(function () {
        itemsPerPage_news = defineItemsPerPage_news();
        setPagination_news();
        goToPage_news(1);
    });

    /****************** Magnific Popup ******************/

    $('.tm-news').magnificPopup({
        delegate: 'a',
        type: 'image',
        news: {
            enabled: true
        }
    });

    /****************** Smooth Scrolling *****************/

    $(".tm-btn-next").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault_news();
            var hash_news = this.hash_news;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // window.location.hash = hash;
            });
        }
    });


    // drunk
    var itemSelector_drunk = ".tm-drunk-item";
    var responsiveIsotope_drunk = [[480, 4], [720, 6], [1920, 9]];
    var itemsPerPageDefault_drunk = 12;
    var itemsPerPage_drunk = defineItemsPerPage_drunk();
    var currentNumberPages_drunk = 1;
    var currentPage_drunk = 1;
    var currentFilter_drunk = '*';
    var filterValue_drunk = "";
    var pageAttribute_drunk = 'data-page';
    var pagerClass_drunk = 'tm-paging';
    var $container_drunk = $('.tm-drunk').isotope({
        itemSelector_drunk: itemSelector_drunk
    });

    $container_drunk.imagesLoaded().progress(function () {
        $container_drunk.isotope('layout');
    });

    function changeFilter_drunk(selector) { $container_drunk.isotope({ filter: selector }); }

    function goToPage_drunk(n) {
        currentPage_drunk = n;
        var selector_drunk = itemSelector_drunk;
        var exclusives_drunk = [];

        if (currentFilter_drunk != '*') {
            exclusives_drunk.push(selector_drunk + '.' + currentFilter_drunk);
        }

        filterValue_drunk = exclusives_drunk.length ? exclusives_drunk.join('') : '*';

        var wordPage_drunk = currentPage_drunk.toString();
        filterValue_drunk += ('.' + wordPage_drunk);
        changeFilter_drunk(filterValue_drunk);
    }

    function defineItemsPerPage_drunk() {
        var pages_drunk = itemsPerPageDefault_drunk;

        for (var i = 0; i < responsiveIsotope_drunk.length; i++) {
            if ($(window).width() <= responsiveIsotope_drunk[i][0]) {
                pages_drunk = responsiveIsotope_drunk[i][1];
                break;
            }
        }
        return pages_drunk;
    }

    function setPagination_drunk() {
        var SettingsPagesOnItems_drunk = function () {
            var itemsLength_drunk = $container_drunk.children(itemSelector_drunk).length;
            var pages_drunk = Math.ceil(itemsLength_drunk / itemsPerPage_drunk);
            var item_drunk = 1;
            var page_drunk = 1;
            var selector_drunk = itemSelector_drunk;
            var exclusives_drunk = [];

            if (currentFilter_drunk != '*') {
                exclusives_drunk.push(selector_drunk + '.' + currentFilter_drunk);
            }

            filterValue_drunk = exclusives_drunk.length ? exclusives_drunk.join('') : '*';

            $container_drunk.children(filterValue_drunk).each(function () {
                if (item_drunk > itemsPerPage_drunk) {
                    page_drunk++;
                    item_drunk = 1;
                }
                wordPage_drunk = page_drunk.toString();

                var classes_drunk = $(this).attr('class').split(' ');
                var lastClass_drunk = classes_drunk[classes_drunk.length - 1];

                if (lastClass_drunk.length < 4) {
                    $(this).removeClass();
                    classes_drunk.pop();
                    classes_drunk.push(wordPage_drunk);
                    classes_drunk = classes_drunk.join(' ');
                    $(this).addClass(classes_drunk);
                } else {
                    $(this).addClass(wordPage_drunk);
                }
                item_drunk++;
            });
            currentNumberPages_drunk = page_drunk;
        }();

        var CreatePagers_drunk = function () {

            var $isotopePager_drunk = ($('.' + pagerClass_drunk).length == 0) ? $('<div class="' + pagerClass_drunk + '"></div>') : $('.' + pagerClass_drunk);

            $isotopePager_drunk.html('');
            if (currentNumberPages_drunk > 1) {
                for (var i = 0; i < currentNumberPages_drunk; i++) {
                    var $pager_drunk = '';

                    if (currentPage_drunk == i + 1) {
                        $pager_drunk = $('<a href="javascript:void(0);" class="active tm-paging-link" ' + pageAttribute_drunk + '="' + (i + 1) + '"></a>');
                    } else {
                        $pager_drunk = $('<a href="javascript:void(0);" class="tm-paging-link" ' + pageAttribute_drunk + '="' + (i + 1) + '"></a>');
                    }

                    $pager_drunk.html(i + 1);

                    $pager_drunk.click(function () {
                        $('.tm-paging-link').removeClass('active');
                        $(this).addClass('active');
                        var page_drunk = $(this).eq(0).attr(pageAttribute_drunk);
                        goToPage_drunk(page_drunk);
                    });
                    $pager_drunk.appendTo($isotopePager_drunk);
                }
            }
            $container_drunk.after($isotopePager_drunk);
        }();
    }

    setPagination_drunk();
    goToPage_drunk(1);

    $('.tm-drunk-link').click(function (e) {
        var filter_drunk = $(this).data('filter');
        currentFilter_drunk = filter_drunk;
        setPagination_drunk();
        goToPage_drunk(1);
        $('.tm-drunk-link').removeClass('active');
        $(e.target).addClass('active');
    })

    /****************** Window resize ******************/

    $(window).resize(function () {
        itemsPerPage_drunk = defineItemsPerPage_drunk();
        setPagination_drunk();
        goToPage_drunk(1);
    });

    /****************** Magnific Popup ******************/

    $('.tm-drunk').magnificPopup({
        delegate: 'a',
        type: 'image',
        drunk: {
            enabled: true
        }
    });

    /****************** Smooth Scrolling *****************/

    $(".tm-btn-next").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault_drunk();
            var hash_drunk = this.hash_drunk;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // window.location.hash = hash;
            });
        }
    });


    // dnews

    var itemSelector_dnews = ".tm-dnews-item";
    var responsiveIsotope_dnews = [[480, 4], [720, 6], [1920, 9]];
    var itemsPerPageDefault_dnews = 12;
    var itemsPerPage_dnews = defineItemsPerPage_dnews();
    var currentNumberPages_dnews = 1;
    var currentPage_dnews = 1;
    var currentFilter_dnews = '*';
    var filterValue_dnews = "";
    var pageAttribute_dnews = 'data-page';
    var pagerClass_dnews = 'tm-paging';
    var $container_dnews = $('.tm-dnews').isotope({
        itemSelector_dnews: itemSelector_dnews
    });

    $container_dnews.imagesLoaded().progress(function () {
        $container_dnews.isotope('layout');
    });

    function changeFilter_dnews(selector) { $container_dnews.isotope({ filter: selector }); }

    function goToPage_dnews(n) {
        currentPage_dnews = n;
        var selector_dnews = itemSelector_dnews;
        var exclusives_dnews = [];

        if (currentFilter_dnews != '*') {
            exclusives_dnews.push(selector_dnews + '.' + currentFilter_dnews);
        }

        filterValue_dnews = exclusives_dnews.length ? exclusives_dnews.join('') : '*';

        var wordPage_dnews = currentPage_dnews.toString();
        filterValue_dnews += ('.' + wordPage_dnews);
        changeFilter_dnews(filterValue_dnews);
    }

    function defineItemsPerPage_dnews() {
        var pages_dnews = itemsPerPageDefault_dnews;

        for (var i = 0; i < responsiveIsotope_dnews.length; i++) {
            if ($(window).width() <= responsiveIsotope_dnews[i][0]) {
                pages_dnews = responsiveIsotope_dnews[i][1];
                break;
            }
        }
        return pages_dnews;
    }

    function setPagination_dnews() {
        var SettingsPagesOnItems_dnews = function () {
            var itemsLength_dnews = $container_dnews.children(itemSelector_dnews).length;
            var pages_dnews = Math.ceil(itemsLength_dnews / itemsPerPage_dnews);
            var item_dnews = 1;
            var page_dnews = 1;
            var selector_dnews = itemSelector_dnews;
            var exclusives_dnews = [];

            if (currentFilter_dnews != '*') {
                exclusives_dnews.push(selector_dnews + '.' + currentFilter_dnews);
            }

            filterValue_dnews = exclusives_dnews.length ? exclusives_dnews.join('') : '*';

            $container_dnews.children(filterValue_dnews).each(function () {
                if (item_dnews > itemsPerPage_dnews) {
                    page_dnews++;
                    item_dnews = 1;
                }
                wordPage_dnews = page_dnews.toString();

                var classes_dnews = $(this).attr('class').split(' ');
                var lastClass_dnews = classes_dnews[classes_dnews.length - 1];

                if (lastClass_dnews.length < 4) {
                    $(this).removeClass();
                    classes_dnews.pop();
                    classes_dnews.push(wordPage_dnews);
                    classes_dnews = classes_dnews.join(' ');
                    $(this).addClass(classes_dnews);
                } else {
                    $(this).addClass(wordPage_dnews);
                }
                item_dnews++;
            });
            currentNumberPages_dnews = page_dnews;
        }();

        var CreatePagers_dnews = function () {

            var $isotopePager_dnews = ($('.' + pagerClass_dnews).length == 0) ? $('<div class="' + pagerClass_dnews + '"></div>') : $('.' + pagerClass_dnews);

            $isotopePager_dnews.html('');
            if (currentNumberPages_dnews > 1) {
                for (var i = 0; i < currentNumberPages_dnews; i++) {
                    var $pager_dnews = '';

                    if (currentPage_dnews == i + 1) {
                        $pager_dnews = $('<a href="javascript:void(0);" class="active tm-paging-link" ' + pageAttribute_dnews + '="' + (i + 1) + '"></a>');
                    } else {
                        $pager_dnews = $('<a href="javascript:void(0);" class="tm-paging-link" ' + pageAttribute_dnews + '="' + (i + 1) + '"></a>');
                    }

                    $pager_dnews.html(i + 1);

                    $pager_dnews.click(function () {
                        $('.tm-paging-link').removeClass('active');
                        $(this).addClass('active');
                        var page_dnews = $(this).eq(0).attr(pageAttribute_dnews);
                        goToPage_dnews(page_dnews);
                    });
                    $pager_dnews.appendTo($isotopePager_dnews);
                }
            }
            $container_dnews.after($isotopePager_dnews);
        }();
    }

    setPagination_dnews();
    goToPage_dnews(1);

    $('.tm-dnews-link').click(function (e) {
        var filter_dnews = $(this).data('filter');
        currentFilter_dnews = filter_dnews;
        setPagination_dnews();
        goToPage_dnews(1);
        $('.tm-dnews-link').removeClass('active');
        $(e.target).addClass('active');
    })

    /****************** Window resize ******************/

    $(window).resize(function () {
        itemsPerPage_dnews = defineItemsPerPage_dnews();
        setPagination_dnews();
        goToPage_dnews(1);
    });

    /****************** Magnific Popup ******************/

    $('.tm-dnews').magnificPopup({
        delegate: 'a',
        type: 'image',
        dnews: {
            enabled: true
        }
    });

    /****************** Smooth Scrolling *****************/

    $(".tm-btn-next").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault_dnews();
            var hash_dnews = this.hash_dnews;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // window.location.hash = hash;
            });
        }
    });


    // holiday
    var itemSelector_holiday = ".tm-holiday-item";
    var responsiveIsotope_holiday = [[480, 4], [720, 6], [1920, 9]];
    var itemsPerPageDefault_holiday = 12;
    var itemsPerPage_holiday = defineItemsPerPage();
    var currentNumberPages_holiday = 1;
    var currentPage_holiday = 1;
    var currentFilter_holiday = '*';
    var filterValue_holiday = "";
    var pageAttribute_holiday = 'data-page';
    var pagerClass_holiday = 'tm-paging';
    var $container_holiday = $('.tm-holiday').isotope({
        itemSelector_holiday: itemSelector_holiday
    });

    $container_holiday.imagesLoaded().progress(function () {
        $container_holiday.isotope('layout');
    });

    function changeFilter_holiday(selector) { $container_holiday.isotope({ filter: selector }); }

    function goToPage_holiday(n) {
        currentPage_holiday = n;
        var selector_holiday = itemSelector_holiday;
        var exclusives_holiday = [];

        if (currentFilter_holiday != '*') {
            exclusives_holiday.push(selector_holiday + '.' + currentFilter_holiday);
        }

        filterValue_holiday = exclusives_holiday.length ? exclusives_holiday.join('') : '*';

        var wordPage_holiday = currentPage_holiday.toString();
        filterValue_holiday += ('.' + wordPage_holiday);
        changeFilter_holiday(filterValue_holiday);
    }

    function defineItemsPerPage_holiday() {
        var pages_holiday = itemsPerPageDefault_holiday;

        for (var i = 0; i < responsiveIsotope_holiday.length; i++) {
            if ($(window).width() <= responsiveIsotope_holiday[i][0]) {
                pages_holiday = responsiveIsotope_holiday[i][1];
                break;
            }
        }
        return pages_holiday;
    }

    function setPagination_holiday() {
        var SettingsPagesOnItems_holiday = function () {
            var itemsLength_holiday = $container_holiday.children(itemSelector_holiday).length;
            var pages_holiday = Math.ceil(itemsLength_holiday / itemsPerPage_holiday);
            var item_holiday = 1;
            var page_holiday = 1;
            var selector_holiday = itemSelector_holiday;
            var exclusives_holiday = [];

            if (currentFilter_holiday != '*') {
                exclusives_holiday.push(selector_holiday + '.' + currentFilter_holiday);
            }

            filterValue_holiday = exclusives_holiday.length ? exclusives_holiday.join('') : '*';

            $container_holiday.children(filterValue_holiday).each(function () {
                if (item_holiday > itemsPerPage_holiday) {
                    page_holiday++;
                    item_holiday = 1;
                }
                wordPage_holiday = page_holiday.toString();

                var classes_holiday = $(this).attr('class').split(' ');
                var lastClass_holiday = classes_holiday[classes_holiday.length - 1];

                if (lastClass_holiday.length < 4) {
                    $(this).removeClass();
                    classes_holiday.pop();
                    classes_holiday.push(wordPage_holiday);
                    classes_holiday = classes_holiday.join(' ');
                    $(this).addClass(classes_holiday);
                } else {
                    $(this).addClass(wordPage_holiday);
                }
                item_holiday++;
            });
            currentNumberPages_holiday = page_holiday;
        }();

        var CreatePagers_holiday = function () {

            var $isotopePager_holiday = ($('.' + pagerClass_holiday).length == 0) ? $('<div class="' + pagerClass_holiday + '"></div>') : $('.' + pagerClass_holiday);

            $isotopePager_holiday.html('');
            if (currentNumberPages_holiday > 1) {
                for (var i = 0; i < currentNumberPages_holiday; i++) {
                    var $pager_holiday = '';

                    if (currentPage_holiday == i + 1) {
                        $pager_holiday = $('<a href="javascript:void(0);" class="active tm-paging-link" ' + pageAttribute_holiday + '="' + (i + 1) + '"></a>');
                    } else {
                        $pager_holiday = $('<a href="javascript:void(0);" class="tm-paging-link" ' + pageAttribute_holiday + '="' + (i + 1) + '"></a>');
                    }

                    $pager_holiday.html(i + 1);

                    $pager_holiday.click(function () {
                        $('.tm-paging-link').removeClass('active');
                        $(this).addClass('active');
                        var page_holiday = $(this).eq(0).attr(pageAttribute_holiday);
                        goToPage_holiday(page_holiday);
                    });
                    $pager_holiday.appendTo($isotopePager_holiday);
                }
            }
            $container_holiday.after($isotopePager_holiday);
        }();
    }

    setPagination_holiday();
    goToPage_holiday(1);

    $('.tm-holiday-link').click(function (e) {
        var filter_holiday = $(this).data('filter');
        currentFilter_holiday = filter_holiday;
        setPagination_holiday();
        goToPage_holiday(1);
        $('.tm-holiday-link').removeClass('active');
        $(e.target).addClass('active');
    })

    /****************** Window resize ******************/

    $(window).resize(function () {
        itemsPerPage_holiday = defineItemsPerPage_holiday();
        setPagination_holiday();
        goToPage_holiday(1);
    });

    /****************** Magnific Popup ******************/

    $('.tm-holiday').magnificPopup({
        delegate: 'a',
        type: 'text',
        holiday: {
            enabled: true
        }
    });

    /****************** Smooth Scrolling *****************/

    $(".tm-btn-next").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault_holiday();
            var hash_holiday = this.hash_holiday;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // window.location.hash = hash;
            });
        }
    });


    // hnews
    var itemSelector_hnews = ".tm-hnews-item";
    var responsiveIsotope_hnews = [[480, 4], [720, 6], [1920, 9]];
    var itemsPerPageDefault_hnews = 12;
    var itemsPerPage_hnews = defineItemsPerPage_hnews();
    var currentNumberPages_hnews = 1;
    var currentPage_hnews = 1;
    var currentFilter_hnews = '*';
    var filterValue_hnews = "";
    var pageAttribute_hnews = 'data-page';
    var pagerClass_hnews = 'tm-paging';
    var $container_hnews = $('.tm-hnews').isotope({
        itemSelector_hnews: itemSelector_hnews
    });

    $container_hnews.imagesLoaded().progress(function () {
        $container_hnews.isotope('layout');
    });

    function changeFilter_hnews(selector) { $container_hnews.isotope({ filter: selector }); }

    function goToPage_hnews(n) {
        currentPage_hnews = n;
        var selector_hnews = itemSelector_hnews;
        var exclusives_hnews = [];

        if (currentFilter_hnews != '*') {
            exclusives_hnews.push(selector_hnews + '.' + currentFilter_hnews);
        }

        filterValue_hnews = exclusives_hnews.length ? exclusives_hnews.join('') : '*';

        var wordPage_hnews = currentPage_hnews.toString();
        filterValue_hnews += ('.' + wordPage_hnews);
        changeFilter_hnews(filterValue_hnews);
    }

    function defineItemsPerPage_hnews() {
        var pages_hnews = itemsPerPageDefault_hnews;

        for (var i = 0; i < responsiveIsotope_hnews.length; i++) {
            if ($(window).width() <= responsiveIsotope_hnews[i][0]) {
                pages_hnews = responsiveIsotope_hnews[i][1];
                break;
            }
        }
        return pages_hnews;
    }

    function setPagination_hnews() {
        var SettingsPagesOnItems_hnews = function () {
            var itemsLength_hnews = $container_hnews.children(itemSelector_hnews).length;
            var pages_hnews = Math.ceil(itemsLength_hnews / itemsPerPage_hnews);
            var item_hnews = 1;
            var page_hnews = 1;
            var selector_hnews = itemSelector_hnews;
            var exclusives_hnews = [];

            if (currentFilter_hnews != '*') {
                exclusives_hnews.push(selector_hnews + '.' + currentFilter_hnews);
            }

            filterValue_hnews = exclusives_hnews.length ? exclusives_hnews.join('') : '*';

            $container_hnews.children(filterValue_hnews).each(function () {
                if (item_hnews > itemsPerPage_hnews) {
                    page_hnews++;
                    item_hnews = 1;
                }
                wordPage_hnews = page_hnews.toString();

                var classes_hnews = $(this).attr('class').split(' ');
                var lastClass_hnews = classes_hnews[classes_hnews.length - 1];

                if (lastClass_hnews.length < 4) {
                    $(this).removeClass();
                    classes_hnews.pop();
                    classes_hnews.push(wordPage_hnews);
                    classes_hnews = classes_hnews.join(' ');
                    $(this).addClass(classes_hnews);
                } else {
                    $(this).addClass(wordPage_hnews);
                }
                item_hnews++;
            });
            currentNumberPages_hnews = page_hnews;
        }();

        var CreatePagers_hnews = function () {

            var $isotopePager_hnews = ($('.' + pagerClass_hnews).length == 0) ? $('<div class="' + pagerClass_hnews + '"></div>') : $('.' + pagerClass_hnews);

            $isotopePager_hnews.html('');
            if (currentNumberPages_hnews > 1) {
                for (var i = 0; i < currentNumberPages_hnews; i++) {
                    var $pager_hnews = '';

                    if (currentPage_hnews == i + 1) {
                        $pager_hnews = $('<a href="javascript:void(0);" class="active tm-paging-link" ' + pageAttribute_hnews + '="' + (i + 1) + '"></a>');
                    } else {
                        $pager_hnews = $('<a href="javascript:void(0);" class="tm-paging-link" ' + pageAttribute_hnews + '="' + (i + 1) + '"></a>');
                    }

                    $pager_hnews.html(i + 1);

                    $pager_hnews.click(function () {
                        $('.tm-paging-link').removeClass('active');
                        $(this).addClass('active');
                        var page_hnews = $(this).eq(0).attr(pageAttribute_hnews);
                        goToPage_hnews(page_hnews);
                    });
                    $pager_hnews.appendTo($isotopePager_hnews);
                }
            }
            $container_hnews.after($isotopePager_hnews);
        }();
    }

    setPagination_hnews();
    goToPage_hnews(1);

    $('.tm-hnews-link').click(function (e) {
        var filter_hnews = $(this).data('filter');
        currentFilter_hnews = filter_hnews;
        setPagination_hnews();
        goToPage_hnews(1);
        $('.tm-hnews-link').removeClass('active');
        $(e.target).addClass('active');
    })

    /****************** Window resize ******************/

    $(window).resize(function () {
        itemsPerPage_hnews = defineItemsPerPage_hnews();
        setPagination_hnews();
        goToPage_hnews(1);
    });

    /****************** Magnific Popup ******************/

    $('.tm-hnews').magnificPopup({
        delegate: 'a',
        type: 'image',
        hnews: {
            enabled: true
        }
    });

    /****************** Smooth Scrolling *****************/

    $(".tm-btn-next").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault_hnews();
            var hash_hnews = this.hash_hnews;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // window.location.hash = hash;
            });
        }
    });
});