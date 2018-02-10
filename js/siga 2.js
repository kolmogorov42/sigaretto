$(document).ready(function() {

    var baseURL = 'http://pumo.mp/cani/';

    var JSONURL = 'https://spreadsheets.google.com/feeds/list/18AvCFeugCVyMr6ZovIOn9McFEmbVBapB1jBuUYwDbcM/1/public/basic?alt=json';

    var searchTerm;
    var currentId;
    var previousId;
    var currentText;
    var currentURL;
    var authorid;
    var resultsPage = false;
    var resultsNumber;

    $('body').attr('id', 'home');
    $('title').html('SIGARETTO');
    $('#genBar').css('display', 'none');
    $('#fakeButtonBar').html('<div id="fakePreviousButton" class="fake button arrow left"></div><div id="fakeRandomButton" class="fake button">R</div><div id="fakeNextButton" class="fake button arrow right"></div>');
    $('#buttonBar').html('<div id="firstButton" class="button"><span>PRIMO</span></div><div id="previousButton" class="button arrow left"><span></span></div><div id="randomButton" class="button"><span>CASUALE</span></div><div id="nextButton" class="button arrow right"><span></span> </div><div id="latestButton" class="button"><span>ULTIMO</span></div>');

    function getUrlVars() {
        var vars = [],
            hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

function split(str, separator, limit) {
    str = str.split(separator);

    if(str.length > limit) {
        var ret = str.splice(0, limit);
        ret.push(str.join(separator));

        return ret;
    }

    return str;
}

function callback(data){

    var sigaretto = [];
    var cells = data.feed.entry;
    var video = [];
    var sound = [];
    video[308] = "dpqDwb2vAI8";
    video[673] = "Co2OtXGVSNQ";
    sound[581] = "164026635"

        // TRIMMING //

        for (var i = 0; i < cells.length; i++){

            var rowObj = {};
            rowObj.id = cells[i].title.$t;
            var rowCols = split(cells[i].content.$t, ",", 2);

            for (var j = 0; j < rowCols.length; j++){
                var keyVal = split(rowCols[j], ":", 1);
                rowObj[keyVal[0].trim()] = keyVal[1].trim();
            }

            sigaretto.push(rowObj);

        }
    
        // CARD FUNCTIONS //

        function cardMedia(id) {
            if (sigaretto[id - 1].hasmedia == '1' && video[id] == null && sound[id] == null) {

                return '<div class="cardMedia"><img src="cardimg/' + id + '.jpg"/></div>';

            } else if (sigaretto[id - 1].hasmedia == '1' && video[id] != null) {
                 return '<iframe class = "cardMedia" width="640" height="480" src="https://www.youtube.com/embed/' + video[id] + '" frameborder="0" allowfullscreen></iframe>';

            } else if (sigaretto[id - 1].hasmedia == '1' && sound[id] != null) {

                return '<iframe class = "cardMedia" width="100%" height="200" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + sound[id] + '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'

            } else {
                return '';
            }
        }

        function authorBadge(id) {

            authorid = sigaretto[id - 1].authorid;
            return '<div class="authorBadge hidden badge' + authorid + '"></div>';

        }

        function results() {

            if (resultsNumber == 1) {

                $("#content").append('<div id="resultsBar">un sigaretto contiene il termine "' + searchTerm + '".</div>');
            } else {
                $("#content").append('<div id="resultsBar">' + resultsNumber + ' sigaretti contengono il termine "' + searchTerm + '".</div>');

            }

            resultsPage = true;

            $(".button.arrow").addClass("dead");

        }

        function notResults() {

            resultsPage = false;
            $(".button.arrow").removeClass("dead");
        }

        function fbShare(id) {

            return '<div id="fb-root"></div><div class="fb-share-button" data-href="<?php echo $actual_link;?>?s=' + id + '" data-layout="icon"></div>';

        }

        function cardId(id) {

            return '<div class="cardId"><a href="?s=' + id + '">#' + id + '</a></div>';

        }

        function cardCopy(id) {


            return '<div class="copy hidden copy' + id + '"><span class="copyText copyText' + id + '" data-clipboard-text="' + sigaretto[id - 1].name + '">copia testo</span> • <span class="copyUrl copyUrl' + id + '" data-clipboard-text="' + baseURL + '?s=' + id + '">copia indirizzo</span></div>';

        }

        function buildCard(id) {

            currentId = id;
            currentText = emojione.toImage(sigaretto[id - 1].name);
            currentURL = baseURL + '?s=' + id;

            $("#content").append('<div class="card card' + id + '">' + currentText + cardMedia(id) + authorBadge(id) + '<div class="infoBox">' + cardId(id) + cardCopy(id) + '</div></div>');

            console.log(currentText);

            $( '.card' + id ).hover(
                  function() {
                    $( '.copy' + id ).removeClass( 'hidden' );
                  }, function() {
                    $( '.copy' + id ).addClass( 'hidden' );
                  }
                );

            $('.copy' + id + ' span').click(function() {                
            $(this).addClass("highlight")
                    .delay(700)
                    .queue(function() {
                        $(this).removeClass("highlight");
                        $(this).dequeue();
                    });
                });

            var client01 = new ZeroClipboard($(".copyText" + id));
            var client02 = new ZeroClipboard($(".copyUrl" + id));

            if (resultsPage == false) {

               history.pushState(null, null, "?s=" + currentId);

                if (currentId == sigaretto.length) {
                    $('.arrow.right').addClass('dead');
                } else {
                    $('.arrow.right').removeClass('dead');
                }

                if (currentId == 1) {
                    $('.arrow.left').addClass('dead');
                } else {
                    $('.arrow.left').removeClass('dead');
                }
            } else if (resultsPage == true) {

                history.pushState(null, null, "?q=" + searchTerm);

            }

        }

        function clearCard() {
            $("#content").html('');
        }

        // SEARCH //

        function searchCards(searchTerm) {

                if (searchTerm != '') {

                    var searchResults = _.filter(sigaretto, function(singleSigaretto) {
                        var regexp = new RegExp(searchTerm, 'i');
                        return regexp.test(singleSigaretto.name);
                    });

                    clearCard();

                    if (searchResults.length > 0) {

                        resultsNumber = searchResults.length;
                        results();

                        $.each(searchResults, function(id) {
                            var result = this;
                            buildCard(result.id);
                        });



                    } else {
                        resultsNumber = searchResults.length;
                        results();
                        var notFound = [
                            'SIGARETTO e il "' + searchTerm + '"... una storia strabiliante che non è stata ancora scritta...!',
                            'SIGARETTO non conosce "' + searchTerm + '"...',
                            'Nessun SIGARETTO contiene "' + searchTerm + '"... m disp :((',
                            'Ma certo! SIGARETTO e il "' + searchTerm + '"!!! Che storia.....(ma chi cazzo è questo)',
                            'basta... basta...'
                        ];

                        var randomNumber = Math.floor(Math.random() * notFound.length);

                        $("#content").append('<div class="card notFound">' + notFound[randomNumber] + '</div>');
                        resultsPage = true;

                    }

                }

        }

        $('#searchField').keypress(function(event) {
            if (event.keyCode == 13) {

                searchTerm = $('#searchField').val();
                searchCards(searchTerm);

            }
        });



        // STARTUP //

        var sigaParam = getUrlVars()["s"];
        var sigaQuery = getUrlVars()["q"];
        var randomSigaretto = sigaretto[Math.floor(Math.random() * sigaretto.length)];

        clearCard();

        if (sigaParam != null && sigaParam > 0 && sigaParam <= sigaretto.length) {

            // EXACT //

            buildCard(sigaretto[sigaParam - 1].id);
            resultsPage = false;

        } else if (sigaQuery != null) {

            searchTerm = sigaQuery;
            searchCards(searchTerm);

        } else {

            // LATEST //

            buildCard(sigaretto[sigaretto.length - 1].id);
            resultsPage = false;

        }

        // PUSH BUTTON //

        function pushButton(){

            history.pushState(null, null, "?s=" + currentId);
            $('#searchField').val('');

        // RANDOM //

        }

        function randomSiga() {

            var randomSigaNumber = Math.floor(Math.random() * sigaretto.length);
            var randomSigaretto = sigaretto[randomSigaNumber];
            clearCard();
            pushButton();
            buildCard(randomSigaretto.id);
            notResults();

        }

        $("#randomButton").click(function() {

            randomSiga();

        });

        $(document).keydown(function(event) {
            var tag = event.target.tagName.toLowerCase();
            if (event.which === 82 && tag != 'input' && tag != 'textarea') {

        if(event.metaKey || event.ctrlKey){
            
        } else {
            randomSiga();
                $('#randomButton').addClass("jqhover")
                    .delay(100)
                    .queue(function() {
                        $(this).removeClass("jqhover");
                        $(this).dequeue();
                    });
        } } });



        // FIRST BUTTON //

        $("#firstButton").click(function() {
            clearCard();
            pushButton();
            buildCard(sigaretto[0].id);
            notResults();
            $('.arrow.left').addClass('dead');

        });

        // LATEST BUTTON //

        $("#latestButton").click(function() {
            clearCard();
            pushButton();
            buildCard(sigaretto[sigaretto.length - 1].id);
            notResults();
            $('.arrow.right').addClass('dead');

        });

        // PREVIOUS BUTTON //

        function prevSiga() {

            previousId = currentId - 2;

            if (currentId > 1 && resultsPage == false) {
                clearCard();
                pushButton();
                buildCard(sigaretto[previousId].id);
            }

        }

        $("#previousButton").click(function() {
            prevSiga();
        });

        $(document).keydown(function(event) {
            var tag = event.target.tagName.toLowerCase();
            if (event.which === 37 && tag != 'input' && tag != 'textarea') {
                prevSiga();
                $('#previousButton').addClass("jqhover")
                    .delay(100)
                    .queue(function() {
                        $(this).removeClass("jqhover");
                        $(this).dequeue();
                    });
            }
        });

        // NEXT BUTTON //

        function nextSiga() {

            if (currentId < sigaretto.length && resultsPage == false) {
                clearCard();
                pushButton();
                buildCard(sigaretto[currentId].id);
            }

        }

        $("#nextButton").click(function() {
            nextSiga();
        });

        $(document).keydown(function(event) {
            var tag = event.target.tagName.toLowerCase();
            if (event.which === 39 && tag != 'input' && tag != 'textarea') {

                nextSiga();
                $('#nextButton').addClass("jqhover")
                    .delay(100)
                    .queue(function() {
                        $(this).removeClass("jqhover");
                        $(this).dequeue();
                    });
            }
        });

        // DOG TRICKS //

        $(".dog.right .dognose").mouseenter(function() {

            $(".dog.right").effect('pulsate');

        });

        $(".dog.left .dognose").mouseenter(function() {

            $(".dog.left").effect('pulsate');

        });


        $.fn.toggleText = function(t1, t2) {
            if (this.text() == t1) this.text(t2);
            else this.text(t1);
            return this;
        };

        $(".dog.right .dognose").click(function() {

            $('h1.title').toggleText('Baccellone', 'SIGARETTO');
            $('body').toggleClass('baccellone');

        });

        $(".dog.left .dognose").click(function() {

            var rand = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            var randomTripletSigaretto = sigaretto[rand * 111 - 1];

            clearCard();
            buildCard(randomTripletSigaretto.id);

        });

    };

    // AUTHOR BADGE REVEAL //

    $(document).keydown(function(event) {
        var tag = event.target.tagName.toLowerCase();
        if (event.which === 65 && tag != 'input' && tag != 'textarea') {

            $('.authorBadge').toggleClass("hidden");
        }
    });

    // HOTKEYS OVERLAY //

    $('#hotkeysButton').click(function() {
        $('#hotkeysOverlay').toggleClass('hidden');
    });

    $('#hotkeysOverlay').click(function() {
        $('#hotkeysOverlay').addClass('hidden');
    });

    $(document).keydown(function(event) {
        var tag = event.target.tagName.toLowerCase();
        if (event.which === 27 && tag != 'input' && tag != 'textarea') {

            $('#hotkeysOverlay').addClass('hidden');

        }
    });

    // WEBAPP LINK FIX //

    var a = document.getElementsByTagName("a");
    for (var i = 0; i < a.length; i++) {
        a[i].onclick = function() {
            window.location = this.getAttribute("href");
            return false;
        };
    }

    // FETCH JSON URL //

    $.ajax({
        url:JSONURL,
        success: function(data){
            callback(data);
        }
    });



// By Chris Coyier & tweaked by Mathias Bynens

$(function() {

    // Find all YouTube videos
    var $allVideos = $("iframe[src^='http://www.youtube.com']"),

        // The element that is fluid width
        $fluidEl = $(".card");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {

        $(this)
            .data('aspectRatio', this.height / this.width)
            
            // and remove the hard coded width/height
            .removeAttr('height')
            .removeAttr('width');

    });

    // When the window is resized
    // (You'll probably want to debounce this)
    $(window).resize(function() {

        var newWidth = $fluidEl.width();
        
        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {

            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.data('aspectRatio'));

        });

    // Kick off one resize to fix all videos on page load
    }).resize();

});


});


