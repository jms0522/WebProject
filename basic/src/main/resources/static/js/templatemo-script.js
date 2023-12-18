/**
 * Credits
 * Isotope with paging: https://codepen.io/TimRizzo/details/ervrRq
 */

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
    var itemsPerPage_news = defineItemsPerPage();
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

    $('.tm-news').magnificPopup_news({
        delegate_news: 'a',
        type_news: 'image',
        news_news: {
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
    var itemsPerPage_drunk = defineItemsPerPage();
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

    $('.tm-drunk').magnificPopup_drunk({
        delegate_drunk: 'a',
        type_drunk: 'image',
        drunk_drunk: {
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

    $('.tm-holiday').magnificPopup_holiday({
        delegate_holiday: 'a',
        type_holiday: 'image',
        holiday_holiday: {
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
});