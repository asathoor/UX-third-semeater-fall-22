(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnanaIO1AAIAAO1Iu1AAg");
	this.shape.setTransform(47.5,47.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC66").s().p("AnaHbIAAu1IO1AAIAAO1g");
	this.shape_1.setTransform(47.5,47.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,97,97), null);


(lib.greenButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEsAAQAABThYA7QhXA6h9AAQh8AAhYg6QhXg7AAhTQAAhSBXg7QBYg6B8AAQB9AABXA6QBYA7AABSg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FF33").s().p("AjTCNQhYg6AAhTQAAhSBYg6QBXg7B8AAQB8AABYA7QBYA6AABSQAABThYA6QhYA7h8AAQh8AAhXg7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-21,62,42);


(lib.myMovie = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		_this = this;
		_this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(85));

	// button
	this.button_1 = new lib.greenButton();
	this.button_1.name = "button_1";
	this.button_1.setTransform(20,140);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(85));

	// rotating_square
	this.myMovie = new lib.Symbol1();
	this.myMovie.name = "myMovie";
	this.myMovie.setTransform(47.5,47.5,1,1,0,0,0,47.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.myMovie).wait(1).to({rotation:4.2857,x:47.45,alpha:0.9881},0).wait(1).to({rotation:8.5714,y:47.55,alpha:0.9762},0).wait(1).to({rotation:12.8571,x:47.5,y:47.5,alpha:0.9643},0).wait(1).to({rotation:17.1429,y:47.55,alpha:0.9524},0).wait(1).to({rotation:21.4286,x:47.45,y:47.5,alpha:0.9405},0).wait(1).to({rotation:25.7143,x:47.5,alpha:0.9286},0).wait(1).to({rotation:30,y:47.55,alpha:0.9167},0).wait(1).to({rotation:34.2857,y:47.5,alpha:0.9048},0).wait(1).to({rotation:38.5714,alpha:0.8929},0).wait(1).to({rotation:42.8571,x:47.45,alpha:0.881},0).wait(1).to({rotation:47.1429,x:47.5,alpha:0.869},0).wait(1).to({rotation:51.4286,x:47.45,alpha:0.8571},0).wait(1).to({rotation:55.7143,alpha:0.8452},0).wait(1).to({rotation:60,y:47.55,alpha:0.8333},0).wait(1).to({rotation:64.2857,y:47.5,alpha:0.8214},0).wait(1).to({rotation:68.5714,x:47.5,alpha:0.8095},0).wait(1).to({rotation:72.8571,x:47.45,y:47.55,alpha:0.7976},0).wait(1).to({rotation:77.1429,y:47.5,alpha:0.7857},0).wait(1).to({rotation:81.4286,x:47.5,y:47.55,alpha:0.7738},0).wait(1).to({rotation:85.7143,y:47.5,alpha:0.7619},0).wait(1).to({rotation:90,alpha:0.75},0).wait(1).to({rotation:94.2857,y:47.45,alpha:0.7381},0).wait(1).to({rotation:98.5714,x:47.45,alpha:0.7262},0).wait(1).to({rotation:102.8571,x:47.5,y:47.5,alpha:0.7143},0).wait(1).to({rotation:107.1429,x:47.45,alpha:0.7024},0).wait(1).to({rotation:111.4286,x:47.5,y:47.45,alpha:0.6905},0).wait(1).to({rotation:115.7143,y:47.5,alpha:0.6786},0).wait(1).to({rotation:120,x:47.45,alpha:0.6667},0).wait(1).to({rotation:124.2857,x:47.5,alpha:0.6548},0).wait(1).to({rotation:128.5714,alpha:0.6429},0).wait(1).to({rotation:132.8571,y:47.45,alpha:0.631},0).wait(1).to({rotation:137.1429,y:47.5,alpha:0.619},0).wait(1).to({rotation:141.4286,y:47.45,alpha:0.6071},0).wait(1).to({rotation:145.7143,alpha:0.5952},0).wait(1).to({rotation:150,x:47.45,alpha:0.5833},0).wait(1).to({rotation:154.2857,x:47.5,alpha:0.5714},0).wait(1).to({rotation:158.5714,y:47.5,alpha:0.5595},0).wait(1).to({rotation:162.8571,x:47.45,y:47.45,alpha:0.5476},0).wait(1).to({rotation:167.1429,x:47.5,alpha:0.5357},0).wait(1).to({rotation:171.4286,x:47.45,y:47.5,alpha:0.5238},0).wait(1).to({rotation:175.7143,x:47.5,alpha:0.5119},0).wait(1).to({rotation:180,alpha:0.5},0).wait(1).to({rotation:184.2857,alpha:0.4881},0).wait(1).to({rotation:188.5714,y:47.45,alpha:0.4762},0).wait(1).to({rotation:192.8571,x:47.45,y:47.5,alpha:0.4643},0).wait(1).to({rotation:197.1429,y:47.45,alpha:0.4524},0).wait(1).to({rotation:201.4286,x:47.5,y:47.5,alpha:0.4405},0).wait(1).to({rotation:205.7143,x:47.45,alpha:0.4286},0).wait(1).to({rotation:210,y:47.45,alpha:0.4167},0).wait(1).to({rotation:214.2857,y:47.5,alpha:0.4048},0).wait(1).to({rotation:218.5714,alpha:0.3929},0).wait(1).to({rotation:222.8571,x:47.5,alpha:0.381},0).wait(1).to({rotation:227.1429,x:47.45,alpha:0.369},0).wait(1).to({rotation:231.4286,x:47.5,alpha:0.3571},0).wait(1).to({rotation:235.7143,alpha:0.3452},0).wait(1).to({rotation:240,y:47.45,alpha:0.3333},0).wait(1).to({rotation:244.2857,y:47.5,alpha:0.3214},0).wait(1).to({rotation:248.5714,x:47.45,alpha:0.3095},0).wait(1).to({rotation:252.8571,x:47.5,y:47.45,alpha:0.2976},0).wait(1).to({rotation:257.1429,y:47.5,alpha:0.2857},0).wait(1).to({rotation:261.4286,x:47.45,y:47.45,alpha:0.2738},0).wait(1).to({rotation:265.7143,y:47.5,alpha:0.2619},0).wait(1).to({rotation:270,x:47.5,alpha:0.25},0).wait(1).to({rotation:274.2857,alpha:0.2381},0).wait(1).to({rotation:278.5714,x:47.55,alpha:0.2262},0).wait(1).to({rotation:282.8571,x:47.5,y:47.45,alpha:0.2143},0).wait(1).to({rotation:287.1429,x:47.55,alpha:0.2024},0).wait(1).to({rotation:291.4286,x:47.5,y:47.5,alpha:0.1905},0).wait(1).to({rotation:295.7143,y:47.45,alpha:0.1786},0).wait(1).to({rotation:300,x:47.55,alpha:0.1667},0).wait(1).to({rotation:304.2857,x:47.5,alpha:0.1548},0).wait(1).to({rotation:308.5714,alpha:0.1429},0).wait(1).to({rotation:312.8571,y:47.5,alpha:0.131},0).wait(1).to({rotation:317.1429,y:47.45,alpha:0.119},0).wait(1).to({rotation:321.4286,y:47.5,alpha:0.1071},0).wait(1).to({rotation:325.7143,alpha:0.0952},0).wait(1).to({rotation:330,x:47.55,alpha:0.0833},0).wait(1).to({rotation:334.2857,x:47.5,alpha:0.0714},0).wait(1).to({rotation:338.5714,y:47.45,alpha:0.0595},0).wait(1).to({rotation:342.8571,x:47.55,y:47.5,alpha:0.0476},0).wait(1).to({rotation:347.1429,x:47.5,alpha:0.0357},0).wait(1).to({rotation:351.4286,x:47.55,y:47.45,alpha:0.0238},0).wait(1).to({rotation:355.7143,x:47.5,alpha:0.0119},0).wait(1).to({rotation:360,y:47.5,alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.6,-20.6,136.3,181.6);


// stage content:
(lib.interactivemovieclipinstance = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// symbols
	this.instance = new lib.myMovie();
	this.instance.setTransform(624.35,435.9,1,1,0,0,0,42.5,80);

	this.instance_1 = new lib.myMovie();
	this.instance_1.setTransform(501.95,279.15,1,1,0,0,0,42.5,80);

	this.animation_mov = new lib.myMovie();
	this.animation_mov.name = "animation_mov";
	this.animation_mov.setTransform(177.5,417.5,1,1,0,0,0,47.5,47.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.animation_mov},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(519.5,498.7,157.89999999999998,31.80000000000001);
// library properties:
lib.properties = {
	id: 'EE3F914819F9481DB6F01ADEDE9597DA',
	width: 800,
	height: 600,
	fps: 24,
	color: "#66CCCC",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EE3F914819F9481DB6F01ADEDE9597DA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;