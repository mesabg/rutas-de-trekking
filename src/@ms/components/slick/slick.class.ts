/**
 * Global imports
 */
import { EventEmitter } from '@angular/core';
import 'slick-carousel/slick/slick';

/**
 * Local imports
 */
import { SlickJSObject } from './slick.interface';

/**
 * This class will manage the slick JS Plugin usage
 */
/**
 * private $slickContainer:any,
        private rows:number = 1, 
		private slidesToShow:number = 1, 
		private slidesToScroll:number = 1,
		private autoplay:boolean = false,
		private autoplaySpeed:number = 0,
		private centerMode:boolean = false,
		private dots:boolean = true,
		private infinite:boolean = false,
		private arrows:boolean = true



			centerMode: this.centerMode,
			dots: this.dots,
			infinite: this.infinite,
			arrows: this.arrows,
			speed: 300,
			slidesToShow: this.slidesToShow,
			slidesToScroll: this.slidesToScroll,
			rows: this.rows,
			autoplay: this.autoplay,
  			autoplaySpeed: this.autoplaySpeed,
			responsive: [{
				breakpoint: 321,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					rows: this.rows
				}
			},{
				breakpoint: 376,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					rows: this.rows
				}
			},{
				breakpoint: 426,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					rows: this.rows
				}
			},{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					rows: this.rows
				}
			}]
		});
 */

export class SlickJS{
    private elementsLenght:number = 0;
	
	//-- Events
	public eventAfterChange:EventEmitter<any> = new EventEmitter<any>();	//-- Fires after slide change
	public eventBeforeChange:EventEmitter<any> = new EventEmitter<any>();	//-- Fires before slide change
	public eventBreakpoint:EventEmitter<any> = new EventEmitter<any>();		//-- Fires after a breakpoint is hit.
	public eventDestroy:EventEmitter<any> = new EventEmitter<any>();		//-- When slider is destroyed, or unslicked.
	public eventEdge:EventEmitter<any> = new EventEmitter<any>();			//-- Fires when an edge is overscrolled in non-infinite mode.
	public eventInit:EventEmitter<any> = new EventEmitter<any>();			//-- Fires after first initialization.
	public eventReInit:EventEmitter<any> = new EventEmitter<any>();			//-- Fires after every re-initialization
	public eventSetPosition:EventEmitter<any> = new EventEmitter<any>();	//-- Fires after position/size changes
	public eventSwipe:EventEmitter<any> = new EventEmitter<any>();			//-- Fires after swipe/drag
	public eventLazyLoaded:EventEmitter<any> = new EventEmitter<any>();		//-- Fires after image loads lazily
	public eventLazyLoadError:EventEmitter<any> = new EventEmitter<any>();	//-- Fires after image fails to load

	/**
	 * @param $slickContainer JQuery Object of the container
	 * @param settings Global configuration
	 */
    constructor(private $slickContainer:any, private settings:SlickJSObject){
        this.initialize();
		this.eventsManagement();
    }

    /**
     * Initialization
     */
    private initialize():void{
		this.$slickContainer.slick(this.settings);
	}

	/**
	 * Events Management
	 * - This function suscribes and emit an event when a SlickJS Event is triggered
	 */
	private eventsManagement():void{
		//-- Clear events
		/*this.eventAfterChange.unsubscribe();
		this.eventBeforeChange.unsubscribe();
		this.eventBreakpoint.unsubscribe();
		this.eventDestroy.unsubscribe();
		this.eventEdge.unsubscribe();
		this.eventInit.unsubscribe();
		this.eventReInit.unsubscribe();
		this.eventSetPosition.unsubscribe();
		this.eventSwipe.unsubscribe();
		this.eventLazyLoaded.unsubscribe();
		this.eventLazyLoadError.unsubscribe();*/

		let self:SlickJS = this;

		this.$slickContainer
			.on('afterChange', 
				function(slick, currentSlide){ 
					self.eventAfterChange.emit({
						slick: slick, 
						currentSlide: currentSlide
					}); 
			}).on('beforeChange', 
				function(slick, currentSlide, nextSlide){ 
					self.eventBeforeChange.emit({
						slick: slick, 
						currentSlide: currentSlide,
						nextSlide: nextSlide
					}); 
			}).on('breakpoint', 
				function(event, slick, breakpoint){ 
					self.eventBreakpoint.emit({
						event: event,
						slick: slick,
						breakpoint: breakpoint
					}); 
			}).on('destroy', 
				function(event, slick){ 
					self.eventDestroy.emit({
						event: event,
						slick: slick
					}); 
			}).on('edge', 
				function(slick, direction){ 
					self.eventEdge.emit({
						slick: slick,
						direction: direction
					}); 
			}).on('init', 
				function(slick){ 
					self.eventInit.emit({
						slick: slick
					}); 
			}).on('reInit', 
				function(slick){ 
					self.eventReInit.emit({
						slick: slick
					}); 
			}).on('setPosition', 
				function(slick){ 
					self.eventSetPosition.emit({
						slick: slick
					}); 
			}).on('swipe', 
				function(slick, direction){ 
					self.eventSwipe.emit({
						slick: slick,
						direction: direction
					}); 
			}).on('lazyLoaded', 
				function(event, slick, image, imageSource){ 
					self.eventLazyLoaded.emit({
						event: event,
						slick: slick,
						image: image,
						imageSource: imageSource
					}); 
			}).on('lazyLoadError', 
				function(event, slick, image, imageSource){ 
					self.eventLazyLoadError.emit({
						event: event,
						slick: slick,
						image: image,
						imageSource: imageSource
					}); 
			});
	}

	/**
	 * SlickJS Methods
	 */

	public length():number {
		return this.elementsLenght;
	}

	/**
	 * Returns the current slide index
	 */
	public currentSlide():number{
		return this.$slickContainer.slick('slickCurrentSlide');
	}

	/**
	 * Navigates to a slide by index
	 * @param index 
	 * @param dontAnimate
	 */
	public slideTo(index:number, dontAnimate:boolean = false):void{
        this.$slickContainer.slick('slickGoTo', index, dontAnimate);
	}

	/**
	 * Navigates to the next slide
	 */
	public slideNext():void{
		this.$slickContainer.slick('slickNext');
	}

	/**
	 * Navigates to the previous slide
	 */
	public slidePrev():void{
		this.$slickContainer.slick('slickPrev');
	}

	/**
	 * Pauses autoplay
	 */
	public pause():void{
		this.$slickContainer.slick('slickPause');
	}

	/**
	 * Starts autoplay
	 */
	public play():void{
		this.$slickContainer.slick('slickPlay');
	}

	/**
     * Push single JQuery element into Slick JS
	 * Add a slide. If an index is provided, will add at that index, or before if addBefore is set. If no index is provided, add to the end or to the beginning if addBefore is set. Accepts HTML String || Object
     * @param $element Simgle JQuery Element
	 * @param index 
	 * @param addBefore
     */
    public push($element:any, index?:number, addBefore?:boolean):void{
		if (index != undefined && addBefore != undefined)
        	this.$slickContainer.slick('slickAdd', $element, index, addBefore);
		else if (index != undefined)
			this.$slickContainer.slick('slickAdd', $element, index);
		else this.$slickContainer.slick('slickAdd', $element);
		this.elementsLenght += 1;
		this.eventsManagement();
    }

	/**
     * Push an array into Slick JS
     * @param elements JQuery Array of elements
     */
	public pushAll($elements:any[]):void{
		//-- Push new data
		for (var i=0; i<$elements.length; i++)
			this.$slickContainer.slick('slickAdd', $elements[i]);
        this.elementsLenght += $elements.length; 
	}

	/**
     * Remove an element by index
	 * Remove slide by index. If removeBefore is set true, remove slide preceding index, or the first slide if no index is specified. If removeBefore is set to false, remove the slide following index, or the last slide if no index is set.
     * @param index 
     * @param removeBefore
     */
    public remove(index:number, removeBefore?:boolean):void{
        if (this.elementsLenght === 0) return;
		if (removeBefore != undefined)
        	this.$slickContainer.slick('slickRemove', index, removeBefore);
		else this.$slickContainer.slick('slickRemove', index);
    }

	/**
     * Remove all the items in slick
     */
    public removeAll():void{
        if (this.elementsLenght === 0) return;
        for (var i=0; i<this.elementsLenght; i++){
            this.$slickContainer.slick('slickRemove', i);
		}
        this.elementsLenght = 0;
    }

	/**
	 * Filters slides using jQuery .filter()
	 * @param call function or selector
	 */
	public filter(call:any):void{
		this.$slickContainer.slick('slickFilter', call);
	}

	/**
	 * Removes applied filtering
	 */
	public unfilter():void{
		this.$slickContainer.slick('slickUnfilter');
	}

	/**
	 * Gets an individual option value.
	 * @param option 
	 */
	public getOption(option:string):any{
		return this.$slickContainer.slick('slickGetOption', option);
	}

	/**
	 * Sets an individual value live. Set refresh to true if it's a UI update.
	 * @param option 
	 * @param value 
	 * @param refresh 
	 */
	public setOption(option:string, value:any, refresh:boolean):void{
		this.$slickContainer.slick('slickSetOption', option, value, refresh);
	}

	/**
	 * UnSlick - Turns down SlickJS
	 */
	public unSlick():void{
		this.$slickContainer.slick('unslick');
	}

	public get():any{
		return this.$slickContainer.slick('getSlick');
	}

    /**
     * Resize
     */
	public resize():void{
		this.$slickContainer.slick('resize');
	}

    /**
     * Reinit
     */
    public reinit():void{
		this.$slickContainer.slick('reinit');
	}
}