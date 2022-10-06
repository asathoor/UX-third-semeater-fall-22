(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"button_test_atlas_1", frames: [[0,0,1280,1231]]}
];


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



(lib.cow41498_1280 = function() {
	this.initialize(ss["button_test_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dark_btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADhAAQAABdhCBCQhCBChdAAQhcAAhChCQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcg");
	this.shape.setTransform(0,-22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AieCfQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCg");
	this.shape_1.setTransform(0,-22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CC66").s().p("AieCfQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCg");
	this.shape_2.setTransform(0,-22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3333CC").s().p("AieCfQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCg");
	this.shape_3.setTransform(0.5,-22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:0}}]}).to({state:[{t:this.shape_2,p:{x:0}},{t:this.shape,p:{x:0}}]},1).to({state:[{t:this.shape_3},{t:this.shape,p:{x:0.5}}]},1).to({state:[{t:this.shape_2,p:{x:0.5}},{t:this.shape,p:{x:0.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-46,47.5,47);


(lib.cow_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cow41498_1280();
	this.instance.setTransform(-120,-219.8,0.1875,0.1785);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-219.8,240,219.8);


// stage content:
(lib.buttontest = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,9];
	// timeline functions:
	this.frame_0 = function() {
		_this = this;
		
		_this.stop();
		
		_this.btn_01.on('click', function(){
		
				//alert("I'm so clicked!'")
				_this.play();
			
			})
	}
	this.frame_9 = function() {
		_this = this;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// panel
	this.btn_01 = new lib.dark_btn();
	this.btn_01.name = "btn_01";
	this.btn_01.setTransform(82.5,123.5,1,1,0,0,0,0,-22.5);
	new cjs.ButtonHelper(this.btn_01, 0, 1, 2, false, new lib.dark_btn(), 3);

	this.text = new cjs.Text("https://helpx.adobe.com/animate/kb/create-buttons.html", "18px 'Monaco'", "#CC0000");
	this.text.lineHeight = 25;
	this.text.lineWidth = 684;
	this.text.parent = this;
	this.text.setTransform(29.05,375);

	this.cow_btn = new lib.cow_btn();
	this.cow_btn.name = "cow_btn";
	this.cow_btn.setTransform(590,120.7,1,1,0,0,0,0,-109.9);
	new cjs.ButtonHelper(this.cow_btn, 0, 1, 1);

	this.text_1 = new cjs.Text("Image: well - convert it to a button. Add actions ...", "18px 'Monaco'", "#CC0000");
	this.text_1.lineHeight = 25;
	this.text_1.lineWidth = 198;
	this.text_1.parent = this;
	this.text_1.setTransform(532,242);

	this.text_2 = new cjs.Text("Click the green button", "18px 'Monaco'", "#CC0000");
	this.text_2.lineHeight = 25;
	this.text_2.lineWidth = 266;
	this.text_2.parent = this;
	this.text_2.setTransform(127.05,106.05);

	this.text_3 = new cjs.Text("Events", "48px 'Monaco'");
	this.text_3.lineHeight = 62;
	this.text_3.lineWidth = 291;
	this.text_3.parent = this;
	this.text_3.setTransform(62,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.text_1,p:{x:532,y:242,text:"Image: well - convert it to a button. Add actions ...",color:"#CC0000",lineWidth:198}},{t:this.cow_btn},{t:this.text,p:{x:29.05,y:375,text:"https://helpx.adobe.com/animate/kb/create-buttons.html",lineWidth:684}},{t:this.btn_01}]}).to({state:[{t:this.text_1,p:{x:51.05,y:49.05,text:"Events",color:"#000000",lineWidth:100}},{t:this.text,p:{x:303,y:172.05,text:"Frame 11",lineWidth:148}}]},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(427.1,310.8,304.9,113.19999999999999);
// library properties:
lib.properties = {
	id: 'CA18E1FEBB264CCDBA249914FE615D68',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFCC",
	opacity: 1.00,
	manifest: [
		{src:"images/button_test_atlas_1.png?1665076546355", id:"button_test_atlas_1"}
	],
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
an.compositions['CA18E1FEBB264CCDBA249914FE615D68'] = {
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