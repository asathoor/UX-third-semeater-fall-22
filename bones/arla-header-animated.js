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


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Al2l2ILtAAIAALtIrtAAg");
	this.shape.setTransform(37.5,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660066").s().p("Al2F3IAArtILtAAIAALtg");
	this.shape_1.setTransform(37.5,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,77,77), null);


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
	this.shape.graphics.f("#666666").s().p("AALOQQgrgMgdgoQgdgnAAguQABgOADgXIAGgmQABgWgDgcIgIgzQgKhKADiRQADiUgIhGQgGgygThQQgWhhgGggQgWh7AAi6IgBk3QgCg7ADgcQAHgwAZgdQAignA6AGQA5AFAaAtQAIAOAIAaIAMApQAFAOAKATIAPAgQAdBBgCBHQgBASgEAjQgEAkgBARQgBAgAGArIALBKQALBJACBjIAACsQACFGAoFkQAFAxgBAYQgBApgNAdQgUApgtAVQgdAMgbAAQgRAAgRgEg");
	this.shape.setTransform(17.9909,91.591);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,36,183.2), null);


(lib.windmill = function(mode,startPosition,loop,reversed) {
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
		var _this = this;
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		var rnd = Math.floor(Math.random()*20)
		_this.gotoAndPlay(rnd);
	}
	this.frame_54 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		myVar = setTimeout(playAgain, 3000);
		
		function playAgain(){
				_this.play();
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(54).call(this.frame_54).wait(1));

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(0,0,1,1,0,0,0,18,91.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:6.6667,x:0.05,y:0.05},0).wait(1).to({rotation:13.3333,x:0},0).wait(1).to({rotation:20,x:-0.05,y:0},0).wait(1).to({rotation:26.6667,x:0,y:0.05},0).wait(1).to({rotation:33.3333,x:-0.05},0).wait(1).to({rotation:40,y:0},0).wait(1).to({rotation:46.6667},0).wait(1).to({rotation:53.3333,x:0,y:0.05},0).wait(1).to({rotation:60,x:-0.05},0).wait(1).to({rotation:66.6667,x:0},0).wait(1).to({rotation:73.3333,x:-0.05,y:0},0).wait(1).to({rotation:80,x:0,y:0.05},0).wait(1).to({rotation:86.6667,x:-0.05},0).wait(1).to({rotation:93.3333,y:0},0).wait(1).to({rotation:100,y:0.05},0).wait(1).to({rotation:106.6667,x:0,y:0},0).wait(1).to({rotation:113.3333,x:-0.05},0).wait(1).to({rotation:120},0).wait(1).to({rotation:126.6667,x:0},0).wait(1).to({rotation:133.3333,x:-0.05},0).wait(1).to({rotation:140,y:-0.05},0).wait(1).to({rotation:146.6667},0).wait(1).to({rotation:153.3333,y:0},0).wait(1).to({rotation:160},0).wait(1).to({rotation:166.6667,x:0,y:-0.05},0).wait(1).to({rotation:173.3333,x:-0.05},0).wait(1).to({rotation:180,x:0,y:0},0).wait(1).to({rotation:186.6667,x:-0.05,y:-0.05},0).wait(1).to({rotation:193.3333,x:0},0).wait(1).to({rotation:200,x:0.05,y:0},0).wait(1).to({rotation:206.6667,x:0,y:-0.05},0).wait(1).to({rotation:213.3333,x:0.05},0).wait(1).to({rotation:220,y:0},0).wait(1).to({rotation:226.6667},0).wait(1).to({rotation:233.3333,x:0,y:-0.05},0).wait(1).to({rotation:240,x:0.05},0).wait(1).to({rotation:246.6667,x:0},0).wait(1).to({rotation:253.3333,x:0.05,y:0},0).wait(1).to({rotation:260,x:0,y:-0.05},0).wait(1).to({rotation:266.6667,x:0.05},0).wait(1).to({rotation:273.3333,y:0},0).wait(1).to({rotation:280,y:-0.05},0).wait(1).to({rotation:286.6667,x:0,y:0},0).wait(1).to({rotation:293.3333,x:0.05},0).wait(1).to({rotation:300},0).wait(1).to({rotation:306.6667,x:0},0).wait(1).to({rotation:313.3333,x:0.05},0).wait(1).to({rotation:320,y:0.05},0).wait(1).to({rotation:326.6667},0).wait(1).to({rotation:333.3333,y:0},0).wait(1).to({rotation:340},0).wait(1).to({rotation:346.6667,x:0,y:0.05},0).wait(1).to({rotation:353.3333,x:0.05},0).wait(1).to({rotation:360,x:0,y:0},0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AgYORQg7gMgkhZQgfhNAPg0QAEgPAMgWIARgkQAJgYADggQACgTAAgnIgBzdQAAgoADgUQAEgiAOgXQAbgrA5gEQA6gEAhAnQAVAaAIApQAEAbAAAxIABQ9QAAB8gCBEQgDBqgLBVQgFAogHAZQgKAkgQAZQgTAdgeAPQgXAMgVAAQgJAAgJgCg");
	this.shape.setTransform(-1.7896,81.3485);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(55));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-91.8,183.7,264.7);


(lib.playSound = function(mode,startPosition,loop,reversed) {
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
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(0,-37.5,1,1,0,0,0,37.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.8351,scaleY:1.0351},0).wait(1).to({scaleX:0.6702,scaleY:1.0702,x:0.05,y:-37.45},0).wait(1).to({scaleX:0.5053,scaleY:1.1053},0).wait(1).to({scaleX:0.3404,scaleY:1.1404,x:0,y:-37.5},0).wait(1).to({scaleX:0.1754,scaleY:1.1754,x:0.05,y:-37.45},0).wait(1).to({scaleX:0.0105,scaleY:1.2105},0).wait(1).to({scaleX:0.1544,scaleY:1.2456,skewY:180,x:-0.05,y:-37.5},0).wait(1).to({scaleX:0.3193,scaleY:1.2807,x:0,y:-37.45},0).wait(1).to({scaleX:0.4842,scaleY:1.3158},0).wait(1).to({scaleX:0.6491,scaleY:1.3509,x:-0.05,y:-37.5},0).wait(1).to({scaleX:0.814,scaleY:1.386},0).wait(1).to({scaleX:0.9789,scaleY:1.4211,x:0,y:-37.45},0).wait(1).to({scaleX:1.1439,scaleY:1.4561,x:-0.05,y:-37.5},0).wait(1).to({scaleX:1.3088,scaleY:1.4912},0).wait(1).to({scaleX:1.4737,scaleY:1.5263,x:0,y:-37.45},0).wait(1).to({scaleX:1.6386,scaleY:1.5614,x:-0.05,y:-37.5},0).wait(1).to({scaleX:1.8035,scaleY:1.5965},0).wait(1).to({scaleX:1.9684,scaleY:1.6316,x:0,y:-37.45},0).wait(1).to({scaleX:2.1333,scaleY:1.6667,x:-0.05,y:-37.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-101,162,127);


// stage content:
(lib.arlaheaderanimated = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.playSound();
	this.instance.setTransform(667.5,177.5,1,1,0,0,0,0,-37.5);

	this.instance_1 = new lib.windmill();
	this.instance_1.setTransform(496,241.05,1,1,0,0,0,0,40.6);

	this.instance_2 = new lib.windmill();
	this.instance_2.setTransform(900,260,0.5586,0.4539,0,0,0,0.1,40.6);

	this.instance_3 = new lib.windmill();
	this.instance_3.setTransform(61.4,191,12.1437,2.4281,0,0,0,0,40.6);

	this.instance_4 = new lib.windmill();
	this.instance_4.setTransform(331.05,250.7,1.2222,0.8907,0,0,0,0.1,40.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("EhK6AImUAkYgAyAmlgEiUAkdgEQAmbgHnIAARBIAAAAIAAAKg");
	this.shape.setTransform(479.5,346);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339933").s().p("EBK2AImIAAAAIAKAAgEhK/gIlUAmeAHnAkgAEQUgmlAEigkZAAyg");
	this.shape_1.setTransform(480,345);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00C4C3").s().p("EhGTAFeIAAq7UBG5ADkBFugDkIAAK7g");
	this.shape_2.setTransform(489.45,369.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(322.9,70,637.1,442.1);
// library properties:
lib.properties = {
	id: 'A47E8BC017544201995B536AB9B757E3',
	width: 960,
	height: 400,
	fps: 24,
	color: "#00CCFF",
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
an.compositions['A47E8BC017544201995B536AB9B757E3'] = {
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