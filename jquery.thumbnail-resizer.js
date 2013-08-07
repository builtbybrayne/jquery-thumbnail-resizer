/**
 * JQuery Thumbnail Resizer keeps an image contained, scaled, proportional and centred within a parent element
 */
(function( $ ) {

    ThumbnailResizer = function(parent,childSelector,verticalPadding,horizontalPadding, perImageCallback) {

        function resize() {
            parent.each(function(){
                var ref= $(this);
                var maxHeight = ref.innerHeight() - verticalPadding;
                var maxWidth = ref.innerWidth() - horizontalPadding;

                ref.find(childSelector).each(function(){
                    var img = $(this);
                    requestAnimationFrame(function(){
                        var height = img.data("height");
                        var width = img.data("width");
                        if ( !height ) {
                            height = img.height();
                            img.data("height",height);
                        }
                        if ( !width ) {
                            width = img.width();
                            img.data("width",width);
                        }

                        var css;
                        var ratio=width / height;
                        var pratio=maxWidth / maxHeight;
                        if (ratio<pratio) {
                            css={width:'auto', height:maxHeight+"px"};
                        } else {
                            css={width:maxWidth+"px", height:'auto'};
                        }

                        img.css(css);

                        img.css({
                            "margin-top" : -(img.height()/2)+"px",
                            "margin-left" : -(img.width()/2)+"px"
                        })
                    });
                    requestAnimationFrame(function(){
                        if ( perImageCallback ) {
                            perImageCallback(img);
                        }
                    })

                })
            })
        }

        resize();
        $(window).on("resize",resize);
    }

})( jQuery );