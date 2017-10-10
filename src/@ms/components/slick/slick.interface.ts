/**
 * Slick Class Object
 */

export interface SlickJSObject{
    accessibility?:boolean;     //-- Enables tabbing and arrow key navigation. | default :: true
    adaptiveHeight?:boolean;    //-- Enables adaptive height for single slide horizontal carousels. | default :: false
    autoplay?:boolean;          //-- Enables Autoplay | default :: false
    autoplaySpeed?:number;      //-- Autoplay Speed in milliseconds | default :: 3000ms
    arrows?:boolean;            //-- Prev/Next Arrows | default :: true
    asNavFor?:string;           //-- Set the slider to be the navigation of other slider (Class or ID Name) | default :: null
    appendArrows?:string;       //-- Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object) | default :: $(element)
    appendDots?:string;         //-- Change where the navigation dots are attached (Selector, htmlString, Array, Element, jQuery object) | default :: $(element)
    prevArrow?:any;             //-- Allows you to select a node or customize the HTML for the "Previous" arrow. | default :: <button type="button" class="slick-prev">Previous</button>
    nextArrow?:any;             //-- Allows you to select a node or customize the HTML for the "Next" arrow. | default :: <button type="button" class="slick-next">Next</button>
    centerMode?:boolean;        //-- Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts. | default :: false
    centerPadding?:string;      //-- Side padding when in center mode (px or %) | default :: '50px'
    cssEase?:string;            //-- CSS3 Animation Easing | default :: 'ease'
    customPaging?:any;          //-- Custom paging templates. | default :: n/a | function(slider, i):string {}
    dots?:boolean;              //-- Show dot indicators. | default :: false
    dotsClass?:string;          //-- Class for slide indicator dots container | default :: string
    draggable?:boolean;         //-- Enable mouse dragging | default :: true
    fade?:boolean;              //-- Enable fade | default :: false
    focusOnSelect?:boolean;     //-- Enable focus on selected element (click) | default :: false
    easing?:string;             //-- Add easing for jQuery animate. Use with easing libraries or default easing methods | default :: 'linear'
    edgeFriction?:number;       //-- Resistance when swiping edges of non-infinite carousels | default :: 0.15
    infinite?:boolean;          //-- Infinite loop sliding | default :: true
    initialSlide?:number;       //-- Slide to start on | default :: 0
    lazyLoad?:string;           //-- Set lazy loading technique. Accepts 'ondemand' or 'progressive' | default :: 'ondemand'
    mobileFirst?:boolean;       //-- Responsive settings use mobile first calculation | default :: false
    pauseOnFocus?:boolean;      //-- Pause Autoplay On Focus | default :: true
    pauseOnHover?:boolean;      //-- Pause Autoplay On Hover | default :. true
    pauseOnDotsHover?:boolean;  //-- Pause Autoplay when a dot is hovered | default :: false
    respondTo?:string;          //-- Width that responsive object responds to. Can be 'window', 'slider' or 'min' (the smaller of the two) | default :: 'window'
    rows?:number;               //-- Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row. | default :: 1
    slide?:any;                 //-- Element query to use as slide | default :: ''
    slidesPerRow?:number;       //-- With grid mode intialized via the rows option, this sets how many slides are in each grid row. | default :: 1
    slidesToShow?:number;       //-- # of slides to show | default :: 1
    slidesToScroll?:number;     //-- # of slides to scroll | default :: 1
    speed?:number;              //-- Slide/Fade animation speed | default :: 300(ms)
    swipe?:boolean;             //-- Enable swiping | default :: true
    swipeToSlide?:boolean;      //-- Allow users to drag or swipe directly to a slide irrespective of slidesToScroll | default :: false
    touchMove?:boolean;         //-- Enable slide motion with touch | default :: true
    touchThreshold?:number;     //-- To advance slides, the user must swipe a length of (1/touchThreshold) * the width of the slider | default :: 5
    useCSS?:boolean;            //-- Enable/Disable CSS Transitions | default :: true
    useTransform?:boolean;      //-- Enable/Disable CSS Transforms | default :: true
    variableWidth?:boolean;     //-- Variable width slides | default :: false
    vertical?:boolean;          //-- Vertical slide mode | default :: false
    verticalSwiping?:boolean;   //-- Vertical swipe mode | default :: false
    rtl?:boolean;               //-- Change the slider's direction to become right-to-left | default :: false
    waitForAnimate?:boolean;    //-- Ignores requests to advance the slide while animating | default :: true
    zIndex?:number;              //-- Set the zIndex values for slides, useful for IE9 and lower | default :: 1000

    responsive?:{breakpoint:number, settings:SlickJSObject}[]; //-- Object containing breakpoints and settings objects (see demo). Enables settings sets at given screen width. Set settings to "unslick" instead of an object to disable slick at a given breakpoint. | default :: none
}