$(document).ready(function(){


    // this is our scroll event handler, will be run every
    // time the scroll event is fired.
    var handleScroll = function(){

        // get the current scrollTop
        var scrollTop = $(document).scrollTop()

        // store a jQuery object with all the sections in a variable
        var sections = $('section')

        // loop through each section. The 'i' parameter here is a
        // counter of which of the sections we are on. Starts at 0.
        sections.each(function(i){

            // get the distance from the top of the page for this
            // section. Uses the offset() function which returns an
            // object like {top: 10, left: 20} so using .top gets us
            // the top value.
            var thisTop = $(this).offset().top

            // we want to now get the top value of the *next* section
            // but if we are currently on the last section we want to instead
            // get the height of the whole page which represents the highest
            // possible value. So we check if i (counter of current section) is
            // less than sections.size()-1. sections.size() returns the number
            // of sections stored in the sections variable, and we subtract one
            // to account for the fact that i starts counting at 0.
            if( i < sections.size()-1 ){
                // store the top offset of the next item
                var nextTop = $(this).next().offset().top
            }else{
                // we are at the last item, so store the document height instead
                var nextTop = $(document).height()
            }

            // now we have everything we need, simply check to see if the
            // current scrollTop is between thisTop and nextTop, if we are
            // then we should highlight the nav item corresponding to the
            // current section, represented by $(this)
            if( (scrollTop > thisTop) && (scrollTop < nextTop) ){

                // this line just prints out the text of the H1
                // inside of this section to confirm that this all
                // works properly. I'll leave the rest to you. You'll
                // need to find a way to highlight the corresponding nav
                // link in your header. Hint: a good way to do this would
                // be to use jQuery's .data() method which we looked at one
                // or two classes ago.
                console.log( $(this).find('h1').text() )
            }
        })

    }

    $(document).scroll(handleScroll)

})
