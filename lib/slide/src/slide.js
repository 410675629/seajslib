define(function(require, exports){
var $ = jQuery;
var defaults = {
	box: null
	, items: null
	, btnPrev: null
	, btnNext: null
	, effect: 'scroll'
	, speed: 200
	, timeout: 4000
	, init: function(){}
	, ononce: function(){} // һ���ֻ�����
}

var Slide = function( config ) {
	var conf = this.config = $.extend ({}, defaults, config);
	var box = this.box = conf.box;
	
	this.width = box.width();
	this.height = box.height();
	this.items = conf.items || box.children();
	
	this.init( conf );
}

Slide.prototype = {
	init: function( config ) {
		
		config.init(this);
	},
	prev: function() {
		
	},
	
	next: function() {
		
	},
	
	go: function() {
		
	},
	
	play: function() {
		
	},
	
	stop: function() {
		
	}
}

var effects = {
	'default': function() {
		
	},
	
	// ����
	fade: function() {
		
	},
	
	// ����������Ĳ㻬���ߣ�����Ĳ��Զ���ʾ����
	slide: function() {
		
	},
	
	// �����ƶ���ǰ����ƶ���ȥ�󣬺���Ľ�������ʾ����
	scroll: function() {
		
	},
	
	// ���������޷����
	rolling: function() {
		
	}
}

$.fn.slide = function(){
	var self = $(this),
		config = self.data();
		
	return new Slide(config);
}
});