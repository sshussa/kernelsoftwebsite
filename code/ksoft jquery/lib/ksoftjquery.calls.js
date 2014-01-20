/* General demo helpers */
$(function() {
    // ksoft jquery  creation calls
    $('.ksoftjquery').ksoftjquery();

    $('.ksoftjqueryOrange').ksoftjquery({
        theme: 'orange'
    });
    $('.ksoftjqueryBlack').ksoftjquery({
        theme: 'black'
    });
    $('.ksoftjqueryHideBlack').ksoftjquery({
        theme: 'black',
        hideTrigger: true
    });

    $('.ksoftjqueryBlue').ksoftjquery({
        theme: 'blue',
        invertAnimation: true
    });

    $('.ksoftjqueryBlueFatShadow').ksoftjquery({
        theme: 'blue fatShadow',
        invertAnimation: true
    });

    $('.ksoftjqueryHideBlue').ksoftjquery({
        theme: 'blue',
        hideTrigger: true,
        popupYOffset: 40,
        invertAnimation: true
    });

    $('.ksoftjqueryWhite').ksoftjquery({
        theme: 'white'
    });

    $('.ksoftjqueryHide').ksoftjquery({
        hideTrigger: true,
        theme: 'white',
        popupYOffset: 5
    });

    $('.ksoftjqueryHideTrans').ksoftjquery({
        hideTrigger: true,
        theme: 'white whiteTransparent',
        popupYOffset: 20
    });

    $('.ksoftjqueryStatic').ksoftjquery({
        theme: 'black',
        popupDistance: 0,
        popupYOffset: -14,
        popupAnimationSpeed: 100
    });

    $('.ksoftjqueryBottom').ksoftjquery({
        theme: 'black',
        preferredPosition: 'bottom'
    });

    $('.ksoftjqueryHorizontal').ksoftjquery({
        preferredPosition: 'right',
        theme: 'black',
        popupOffset: 10,
        invertAnimation: true
    });

    $('.ksoftjqueryFormElement').ksoftjquery({
        preferredPosition: 'right',
        theme: 'black',
        popupOffset: 0,
        triggerOnClick: true
    });

    $('#tipcustomhint').ksoftjquery({}, "I'm the real hint!");

    $(document).delegate('#tipkiller', 'click', function(e) {
        e.preventDefault();
        $('#ajaxContainer').html('<div>Some new content</div>');
    });

    $(document).delegate('#tipkiller2', 'click', function(e) {
        e.preventDefault();
        $('#ajaxContainer2').html("<div>Some new content</div>");
    });

    $('#tipChangeContent').ksoftjquery({
        onAfterShow: function(trigger) {
            $.ksoftjquery.setContent(trigger, "I'm the new content and I have replaced the old boring content!");
        },
        onBeforeHide: function(trigger) {
            $.ksoftjquery.setContent(trigger, "Bye bye");
        }
    });

    $('#tipCSSAnimated').ksoftjquery({
        cssAnimations: {
            enabled: true,
            show: 'animated bounceInDown',
            hide: 'animated hinge'
        }
    });

    $('#tipCSSAnimated2').ksoftjquery({
        cssAnimations: {
            enabled: true,
            show: 'animated flipInX',
            hide: 'animated flipOutX'
        }
    });

    $('#tipCSSAnimated3').ksoftjquery({
        cssAnimations: {
            enabled: true,
            show: 'animated fadeInLeft',
            hide: 'animated fadeOutRight'
        }
    });

    $('#tipCSSAnimated4').ksoftjquery({
        cssAnimations: {
            enabled: true,
            show: 'animated rotateInDownLeft',
            hide: 'animated rotateOutUpRight'
        }
    });

    $('#tipDontHideOnTriggerClick').ksoftjquery({
        hideOnTriggerClick: false
    });
    $('#tipDontHideOnContentClick').ksoftjquery({
        hideOnPopupClick: false
    });

    $('.smallipopTour').ksoftjquery({
        theme: 'black',
        cssAnimations: {
            enabled: true,
            show: 'animated flipInX',
            hide: 'animated flipOutX'
        }
    });

    $('#runTour').click(function() {
        $('.smallipopTour').ksoftjquery('tour');
    });

    // Animate smallipops when scrolling
    if ($('.wobbler').length) {
        $(document).scroll(function() {
            var wobblers = $('.wobbler:not(.wobble)'),
                win = $(window);
            wobblers.each(function() {
                var self = $(this);
                offset = self.offset();
                if (offset.top > win.scrollTop() + 50 && offset.top < win.scrollTop() - 50 + win.height())
                    self.addClass('wobble');
            })
        }).trigger('scroll');
    }
});
