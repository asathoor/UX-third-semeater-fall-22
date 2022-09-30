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


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCC00").s().p("AkgS6IAA9/ItdAAIAAn0MAj7AAAIAAH0IurAAIAAd/g");
	this.shape.setTransform(27.7282,27.1131,0.3219,0.2263,114.2755);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,67.9,72.1), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCC00").s().p("AkgS6IAA9/ItdAAIAAn0MAj7AAAIAAH0IurAAIAAd/g");
	this.shape.setTransform(27.7282,27.1131,0.3219,0.2263,114.2755);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,67.9,72.1), null);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [43];
	// timeline functions:
	this.frame_43 = function() {
		/*
		* Control over the timeline
		**/
		
		var _this = this;
		
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(43).call(this.frame_43).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCC00").s().p("AkgS6IAA9/ItdAAIAAn0MAj7AAAIAAH0IurAAIAAd/g");
	this.shape.setTransform(112.6282,136.6131,0.3219,0.2263,114.2755);

	this.instance = new lib.Symbol5();
	this.instance.setTransform(274.4,246.7,1,1,0,0,0,34,36.1);
	this.instance._off = true;

	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(60.05,74.1,1,1,0,0,0,34,36.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:147.7282,y:145.0631},0).wait(1).to({x:231.1282,y:199.7131},0).wait(1).to({x:253.1282,y:216.7131},0).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({regX:27.7,regY:27.1,x:345.9,y:234.35},0).wait(1).to({x:423.75,y:231.05},0).wait(2).to({_off:true},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(1).to({regX:27.7,regY:27.1,x:64.35,y:35.55},0).wait(1).to({x:154.4,y:62.35},0).wait(1).to({x:257.85,y:126.3},0).wait(1).to({x:308.75,y:208.5},0).wait(1).to({x:237.45,y:223.65},0).wait(1).to({x:178.7,y:247.9},0).wait(1).to({x:132.75,y:278},0).wait(1).to({x:99.95,y:310.65},0).wait(1).to({x:80.65,y:342.6},0).wait(1).to({x:75.15,y:370.45},0).wait(1).to({x:83.75,y:391.05},0).wait(1).to({x:107.25,y:397.6},0).wait(1).to({x:145.4,y:391.55},0).wait(1).to({x:197.4,y:381.85},0).wait(1).to({x:262.25,y:377.6},0).wait(1).to({x:339.1,y:387.8},0).wait(1).to({x:379.35,y:429.2},0).wait(1).to({x:416.5,y:458.3},0).wait(1).to({x:450.5,y:475.1},0).wait(1).to({x:481.4,y:479.65},0).wait(1).to({x:509.15,y:471.85},0).wait(1).to({x:533.8,y:451.8},0).wait(1).to({x:555.35,y:419.45},0).wait(1).to({x:573.75,y:374.8},0).wait(1).to({x:589.1,y:317.8},0).wait(1).to({x:321.6,y:201.7},0).wait(1).to({x:197.45,y:165.05},0).wait(1).to({x:216.3,y:207.65},0).wait(1).to({x:378.25,y:329.55},0).wait(1).to({x:683.75,y:531.05},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(426.1,308.5,297.9,267.6);
// library properties:
lib.properties = {
	id: '82AE0C2F57D64CD28170A3BE958E660D',
	width: 800,
	height: 600,
	fps: 24,
	color: "#3399FF",
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
an.compositions['82AE0C2F57D64CD28170A3BE958E660D'] = {
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