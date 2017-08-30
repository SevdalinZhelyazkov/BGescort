import $ from 'jquery';
import { utils } from 'utils';

$(document).ready(function () {

    // SCROLL TO TOP BUTTON
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            $('.scrollTop').fadeIn(400);
        } else {
            $('.scrollTop').fadeOut(400);
        }
    });

    $('.scrollTop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('.test-toggle').on('click', function () {
        $('.test-open').slideToggle();
        console.log('test');
    });

    function showFilters() {
        var y = $(this).scrollTop();
        if (y > 400) {
            $('.filters').fadeIn();
        } else {
            $('.filters').fadeOut();
        }
    }

    showFilters();

    $(document).scroll(showFilters);

    // TOGGLE MOBILE NAV MENU
    $('.header__trigger--menu').on('click', function () {
        $('.header__menuLinks').slideToggle();
    });

    // TOGGLE MOBILE ACCOUNT MENU
    $('.header__trigger--userAccount').on('click', function () {
        $('.header__trigger--userAccount').toggleClass('hidden');
        $('.header__userAccountOverlay').fadeIn();
        $('.header__userAccount').toggleClass('hidden');
    });

    // CLOSE MOBILE ACCOUNT MENU
    $('body').on('click', function (ev) {
        var $header = $('.header');
        if (!$header.is(ev.target) && $header.has(ev.target).length === 0) {
            $('.header__userAccountOverlay').fadeOut();
            $('.header__userAccount').addClass('hidden');
            $('.header__trigger').removeClass('hidden');
        }
    });

    // MODAL FORM LOSTPASSWORD TOGGLE
    $('#lostPassword').on('click', function () {
        $('.loginFields').hide();
        $('.lostPasswordFields').fadeIn();
    });

    $('#loginBtn').on('click', function () {
        $('.lostPasswordFields').hide();
        $('.loginFields').fadeIn();
    });

    // TOGGLE CATEGORIES
    $('.categories__trigger').on('click', function () {
        var categories = $('.categories'),
            categoriesHeight = categories.get(0).scrollHeight,
            categoriesLineHeight = categories.height();

        if (categoriesLineHeight == 24) {
            categories.animate({
                height: categoriesHeight
            });
        } else {
            categories.animate({ height: '30px' });
        }
    });

    // TOGGLE MOBILE SEARCHBOX
    $('.searchBox__trigger').on('click', function () {
        $('.searchBox__triggerShow').toggle();
        $('.fullSearchBox').slideToggle();
        $('.searchBox__triggerHide').toggle();
    });

    // RESTRICT SEARCH PRICE INPUTS
    var $searchPriceInputs = $('.searchPrice');
    $searchPriceInputs.on('keypress', function (ev) {
        var keyCode = ev.keyCode;
        if ((keyCode < 48 || keyCode > 57) && keyCode != 8) {
            return false;
        }
    });


    // GALLERY
    var $mainPhoto = $('#mainPhotoPreview');
    $('.galleryBox__listPhoto').on('click', 'a', function(ev) {
        var $this = $(this);
        $mainPhoto.attr('style', $this.attr('style'));
    });

    $('.galleryBox__listPhotoCTA').on('click', function() {
        var $this = $(this);

        if ($this.text() === 'СКРИЙ СНИМКИТЕ') {
            $('.galleryBox__listPhoto').slideUp();
            $this.text('ПОВЕЧЕ СНИМКИ');    
        } else {
            $('.galleryBox__listPhoto').slideDown();
            $this.text('СКРИЙ СНИМКИТЕ');    
        }
    });

    // AD DETAILS TABS
    $('.adDetailsTabsNavigation').on('click', 'button', function (ev) {
        var $this = $(this);
        if ($this.hasClass('btn--greyActive')) return;

        var attribute = $this.attr('data-tab');
        $('.adDetailsTabsNavigation button').removeClass('btn--greyActive');
        $this.addClass('btn--greyActive');

        $('.descriptionTabs > div').hide().each(function (index, element) {
            var $element = $(element);
            if ($element.attr('data-tab') === attribute) {
                $element.fadeIn(500);
            }
        });
    });

    // CUT LONG AD TITLES
    utils.cutLongText($('.adBox__text a'), 46);
    utils.convertToLowerCaseWithoutFirstLetter($('.adBox__text a'));
    utils.cutLongText($('.smallAd__text'), 140);
});