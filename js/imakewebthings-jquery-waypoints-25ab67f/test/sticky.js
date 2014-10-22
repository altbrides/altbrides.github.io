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
  <body class='js js_imakewebthings-jquery-waypoints-25ab67f js_imakewebthings-jquery-waypoints-25ab67f_test js_imakewebthings-jquery-waypoints-25ab67f_test_sticky'>
    (function() {
      var standardWait;
    
      $.waypoints.settings.scrollThrottle = 10;
    
      $.waypoints.settings.resizeThrottle = 20;
    
      standardWait = 50;
    
      describe('Waypoints Sticky Elements Shortcut', function() {
        var $return, $sticky, $win, handlerSpy;
        $sticky = $return = handlerSpy = null;
        $win = $(window);
        beforeEach(function() {
          loadFixtures('sticky.html');
          $sticky = $('.sticky');
          handlerSpy = jasmine.createSpy('on handler');
          return $return = $sticky.waypoint('sticky', {
            handler: handlerSpy
          });
        });
        it('returns the same jQuery object for chaining', function() {
          return expect($return.get()).toEqual($sticky.get());
        });
        it('wraps the sticky element', function() {
          return expect($sticky.parent()).toHaveClass('sticky-wrapper');
        });
        it('gives the wrapper the same height as the sticky element', function() {
          return expect($sticky.parent().height()).toEqual($sticky.outerHeight());
        });
        it('adds stuck class when you reach the element', function() {
          runs(function() {
            return $win.scrollTop($sticky.offset().top);
          });
          waits(standardWait);
          runs(function() {
            expect($sticky).toHaveClass('stuck');
            return $win.scrollTop($win.scrollTop() - 1);
          });
          waits(standardWait);
          return runs(function() {
            return expect($sticky).not.toHaveClass('stuck');
          });
        });
        it('executes handler option after stuck class applied', function() {
          runs(function() {
            return $win.scrollTop($sticky.offset().top);
          });
          waits(standardWait);
          return runs(function() {
            return expect(handlerSpy).toHaveBeenCalled();
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
