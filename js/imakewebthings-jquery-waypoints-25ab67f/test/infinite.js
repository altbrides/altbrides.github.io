<!doctype html>
<html>
  <head>
    <meta charset='utf-8'>
    <!-- Always force latest IE rendering engine or request Chrome Frame -->
    <meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>
    <!-- Use title if it's in the page YAML frontmatter -->
    <title>The Middleman</title>
    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,700,100,300' rel='stylesheet' type='text/css'>
    <link href='stylesheets/bootstrap.css' rel='stylesheet'>
    <link href='stylesheets/normalize.css' rel='stylesheet'>
    <link href='stylesheets/style.css' rel='stylesheet'>
  </head>
  <body class='js js_imakewebthings-jquery-waypoints-25ab67f js_imakewebthings-jquery-waypoints-25ab67f_test js_imakewebthings-jquery-waypoints-25ab67f_test_infinite'>
    (function() {
      var standardWait;
    
      $.waypoints.settings.scrollThrottle = 10;
    
      $.waypoints.settings.resizeThrottle = 20;
    
      standardWait = 50;
    
      describe('Waypoints Infinite Scroll Shortcut', function() {
        var $container, $items, $more, $win, afterHit, beforeHit;
        $items = $container = $more = beforeHit = afterHit = null;
        $win = $(window);
        beforeEach(function() {
          loadFixtures('infinite.html');
          $items = $('.infinite-item');
          $container = $('.infinite-container');
          $more = $('.infinite-more-link');
          return beforeHit = afterHit = false;
        });
        it('returns the same jQuery object for chaining', function() {
          return expect($items.waypoint('infinite').get()).toEqual($items.get());
        });
        describe('loading new pages', function() {
          beforeEach(function() {
            var done, options;
            options = {
              onBeforePageLoad: function() {
                return beforeHit = true;
              },
              onAfterPageLoad: function() {
                return afterHit = true;
              }
            };
            $container.waypoint('infinite', options);
            runs(function() {
              var scrollVal;
              scrollVal = $.waypoints('viewportHeight') - $container.height();
              return $win.scrollTop(scrollVal);
            });
            done = function() {
              return $('.infinite-item').length > $items.length;
            };
            return waitsFor(done, 2000, 'new items to load');
          });
          it('appends them to the infinite container', function() {
            return expect($('.infinite-container > .infinite-item').length).toEqual(10);
          });
          it('replaces the more link with the new more link', function() {
            expect($more[0]).not.toEqual($('.infinite-more-link')[0]);
            return expect($('.infinite-more-link').length).toEqual(1);
          });
          it('fires the before callback', function() {
            return expect(beforeHit).toBeTruthy();
          });
          return it('fires the after callback', function() {
            return expect(afterHit).toBeTruthy();
          });
        });
        return afterEach(function() {
          $.waypoints('destroy');
          return $win.scrollTop(0);
        });
      });
    
    }).call(this);
  </body>
  <script src='http://code.jquery.com/jquery-latest.min.js'></script>
  <script src='../js/jquery.smooth-scroll.js'></script>
  <script src='../js/jquery.cycle.all.js'></script>
  <script src='../js/bootstrap.js'></script>
  <script src='../js/packery.js'></script>
  <script src='../js/javascript.js'></script>
  <script src='../js/waypoints.min.js'></script>
</html>
