jQuery Thumbnail Resizer
========================

JQuery Thumbnail Resizer keeps an image contained, scaled, proportional and centred within a parent element

## Usage

	new ThumbnailResizer(parent,childSelector,verticalPadding,horizontalPadding,perImageCallback)

* `parent` is the jQuery object referencing the container element
* `childSelector` is a string selector that finds the elements within the container element. It is applied using `container.find(childSelector)` so don't include the container in the selector
* `verticalPadding` and `horizontalPadding`  allow for an offset between the image and the boundaries of the container. If the padding is '20px' either side, this should be '40'.
* `perImageCallback` I like to keep my images as 'opacity:0' in the css until the resizing is complete, so I use this callback to animate the image in to opacity=1. Function takes one parameter which is the jquery object referencing the img.

### Example

Let's say we have a single container and want to keep the image resized within this and allow for a 20px padding all round:

#### HTML
	<div class="tr-container">
		<img class="tr-img" src="…" style="opacity:0" />
	</div>

#### JS
	new ThumbnailResizer($(".tr-container"),".tr-img",40,40,function(img){
		img.animate("opacity",1);
	})


# Development

This is a very simple script, and I'm mainly putting it up because I've needed to solve this problem a time or two previously and I want to keep a reference to it.

I will consider simple modifications and definitely pull requests, and encourage you to fork and modify this code to meet your needs.