(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ball_atlas_1", frames: [[0,0,508,812]]}
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



(lib.CachedBmp_1 = function() {
	this.initialize(ss["ball_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
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


(lib.my_Btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.text = new cjs.Text("Action", "17px 'Chalkduster'");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(82,19.25);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// bgr
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AuDkrIcHAAIAAJXI8HAAg");
	this.shape.setTransform(82,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AuDEsIAApXIcHAAIAAJXg");
	this.shape_1.setTransform(82,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF66FF").s().p("AuDEsIAApXIcHAAIAAJXg");
	this.shape_2.setTransform(90,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AuDEsIAApXIcHAAIAAJXg");
	this.shape_3.setTransform(90,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:82}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{x:90}}]},1).to({state:[{t:this.shape_3},{t:this.shape,p:{x:90}}]},1).to({state:[{t:this.shape_3},{t:this.shape,p:{x:90}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-2,192,64);


(lib.leg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Al7FqQgogFgTgZQgLgOgKgjQgmh/g/hTQgogvgQgaQgVghgNgxQgMgrAIgYQAGgTAagZQBqhoCUgqQCVgqCQAhQAhAIBAAVQBAAVAiAHQBXAVChABQCvABBLANQAWAEAIAJQAIAJABAZIABBEQAAAggBASQgDAcgJAUQgOAegqAlQgrAngdAWQhBA0g0AeQgsAZhpAqQiAAzhFASQg+AQiCARIipAXQgbAEgVAAQgNAAgLgCg");
	this.shape.setTransform(-21.095,134.1368);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AmgG0QiRgGgxhKQgNgUgKghQgKgmgHgSQgTg5hEhgQhFhggUg2QgZhGAXguQAKgUAagYQBPhMBmg0QBjgyBvgWQDUgrDkA3IBnAcQA/ARAoAHQAtAIA6AEQAeACBJACIDlAGQAoABAWAFQAhAGAVASQAbAWAKAsQAHAdAAAzQAAAogCAXQgEAjgMAZQgPAdgpAoQhqBphUA0QgsAbg8AbQglARhHAbQiEA0hFATQg3AQhHAMQgtAIhSALQhrAOg3AFQhGAGg6AAIgkAAgAlwlSQiVAqhqBoQgZAagGATQgJAYAMArQAOAwAUAhQAQAaAoAwQBABTAlB+QALAkAKAOQAUAZAnAFQAbAEAtgGICqgXQCCgRA+gRQBFgSCAgyQBogrAsgYQA1geBAg0QAdgXAsgnQAqglANgdQAJgVADgbQACgSgBghIAAhDQgBgZgIgKQgIgJgXgEQhKgMivgCQiigBhXgUQghgIhAgVQhBgVgggHQhAgPhBAAQhSAAhSAXg");
	this.shape_1.setTransform(-21.0219,133.9912);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AhGLVQgjgDgNgOQgJgKgCgSQgCgLACgUQAPjCADjLQACiYgKhfQgIg/gVhpQgojMgLheQgTinARiEQBRCaAXCrQAFAnAIASQAGAOANAQIAYAcQAnAtAYBBQAeBQAJBeIAFA8QACAmADAYQAHA2ASBJQAVBWAdBbQAgBeAGAXQASBDgBA0QAAAXgCAvQAAAnALAag");
	this.shape_2.setTransform(23.7111,29.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ADIPTQgYgMgvgkQgtgigcgMQgsgUhhgEQhhgEgsgUQg4gZgSgvQgGgSgCgYQgBgOABgdIANk7QAEhlAAgtQAAhRgIhAQgHg0gQhKIgbh/QggikgHjRQgEiCAGj2QAAgeAIgPQAOgXAigDQAagDAjAKQAvAOA1ATQATAGAJAFQAQAIAIALQAKAMAEAUQADAMACAYQAHArAcA2QAQAfAjA9QA6BvATByIAIAzQAFAeAIAUQAKAaAZAiIAoA5QA0BSAVCNQAMBPATCgQAMA/AkBzQAkB5AMA5QAPBGAHBaQAEA1ADBsQABAVgCALQgCARgIAMQgQAXgrAGIgZABQgyAAgtgWgAjJmQQALBeAoDMQAVBoAIBAQAKBfgCCYQgDDLgPDCQgCAUACALQACASAJAKQANANAjAEIEYAkQgLgaAAgoQACguAAgXQABg1gShDQgGgWggheQgdhbgVhWQgShJgHg3QgDgXgCgmIgFg9QgJhdgehQQgYhBgnguIgYgbQgNgQgGgOQgIgSgFgnQgXirhRiaQgRCEATCng");
	this.shape_3.setTransform(23.9098,23.045);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-77,168,254.6);


(lib.bodyplayer = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254,406);


(lib.ball_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AJYAAQAAD5iwCvQivCwj5AAQj4AAiwiwQivivAAj5QAAj4CviwQCwivD4AAQD5AACvCvQCwCwAAD4g");
	this.shape.setTransform(2,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AmnGoQiwiwAAj4QAAj4CwiwQCwivD3AAQD5AACvCvQCwCwAAD4QAAD4iwCwQivCwj5AAQj3AAiwiwg");
	this.shape_1.setTransform(2,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ball_1, new cjs.Rectangle(-60,-63,124,124), null);


(lib.armright = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFF99").s().p("ACZB4QgVgGgmgNIkyhrQAdgqAjgpQAagdAVgHQARgGAiADIDsASQgZAdAPA1IANAoQAIAZACARQACANAAAbQACAXAKANQgbgBghgJg");
	this.shape.setTransform(466.7938,241.8807,1,1,-135.0006);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABUDFQgwgIhaghIh5grQh2gqg9gOIgrgLQgYgIgPgMQgQgLgBgOQAAgKAIgKQAEgFAOgLQAUgPA8hEQAvg1AogRQAWgJAegDQAUgCAhAAQBBAAByAHQB/AIA1ACQAdABALABQAWADAQAGQATAJANAQQAOARgBATQAAAKgIAWQgIAVABAMQABAMASAhQAOAagHAQQAygEAvARQATAGAAAMQAAAIgKAKQhHBDhgAeQg+ASg9AAQgjAAgjgGgAiOh+QgUAHgaAdQgkApgcApIEyBsQAlANAVAGQAhAIAbABQgKgMgCgYQAAgbgCgNQgBgRgJgYIgNgpQgOg1AZgdIjtgRIgVgBQgSAAgMAEg");
	this.shape_1.setTransform(464.0262,238.8857,1,1,-135.0006);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("Aj0DGQhXgDhEgPQhngWijhQQi7hahMgYQghgMAFgRQACgJAPgHQCKhDCYgdQCYgdCYAMQBfAIB0AZQBHAQCHAkIFOBaQC1AwBcASQCaAeB9gDQhCAohrAOQh8AJg9AIQgjAEhAALQhFANgfAEQgxAGg+AEIhwADIkKAHQg9ABgsAAIgzAAg");
	this.shape_2.setTransform(379.7998,130.8249,1,1,-135.0006);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AmkEEQiLgTjLhaQhugyg4gYQhhgrhIgYQghgKgSgLQgZgRgDgYQgHgvBSgjQCOg8BKgXQEnhYGCA/QCSAYC9AyIFLBeQCgAtBgAQQCPAWB0gQIBSgMQAwgFAiAHQAfAGAFATQAEATgaAXQhYBMhvAmQgyAQhBAMQgnAHhPAKQj8AgiMAJQhTAFiFADIjYAGIigAFIgJAAQhVAAhBgJgAqwiyQiYAciJBDQgQAHgCAJQgFASAhALQBNAZC6BaQCkBQBmAWQBEAOBXADQA3ACBmgDIEKgGIBvgEQA/gDAxgHQAegEBFgMQBAgLAkgFQA9gHB8gKQBqgOBCgnQh9ACiZgeQhdgSi1gvIlNhaQiIglhHgPQhzgahfgHQgtgEgsAAQhsAAhsAVg");
	this.shape_3.setTransform(377.1731,128.0187,1,1,-135.0006);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(294.2,42.8,202.7,229.2);


(lib.armleft = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFF99").s().p("ACZB4QgVgGgmgNIkyhrQAdgqAjgpQAagdAVgHQARgGAiADIDsASQgZAdAPA1IANAoQAIAZACARQACANAAAbQACAXAKANQgbgBghgJg");
	this.shape.setTransform(41.325,20.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABUDFQgwgIhaghIh5grQh2gqg9gOIgrgLQgYgIgPgMQgQgLgBgOQAAgKAIgKQAEgFAOgLQAUgPA8hEQAvg1AogRQAWgJAegDQAUgCAhAAQBBAAByAHQB/AIA1ACQAdABALABQAWADAQAGQATAJANAQQAOARgBATQAAAKgIAWQgIAVABAMQABAMASAhQAOAagHAQQAygEAvARQATAGAAAMQAAAIgKAKQhHBDhgAeQg+ASg9AAQgjAAgjgGgAiOh+QgUAHgaAdQgkApgcApIEyBsQAlANAVAGQAhAIAbABQgKgMgCgYQAAgbgCgNQgBgRgJgYIgNgpQgOg1AZgdIjtgRIgVgBQgSAAgMAEg");
	this.shape_1.setTransform(45.3997,20.3358);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("Aj0DGQhXgDhEgPQhngWijhQQi7hahMgYQghgMAFgRQACgJAPgHQCKhDCYgdQCYgdCYAMQBfAIB0AZQBHAQCHAkIFOBaQC1AwBcASQCaAeB9gDQhCAohrAOQh8AJg9AIQgjAEhAALQhFANgfAEQgxAGg+AEIhwADIkKAHQg9ABgsAAIgzAAg");
	this.shape_2.setTransform(181.3671,37.1894);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AmkEEQiLgTjLhaQhugyg4gYQhhgrhIgYQghgKgSgLQgZgRgDgYQgHgvBSgjQCOg8BKgXQEnhYGCA/QCSAYC9AyIFLBeQCgAtBgAQQCPAWB0gQIBSgMQAwgFAiAHQAfAGAFATQAEATgaAXQhYBMhvAmQgyAQhBAMQgnAHhPAKQj8AgiMAJQhTAFiFADIjYAGIigAFIgJAAQhVAAhBgJgAqwiyQiYAciJBDQgQAHgCAJQgFASAhALQBNAZC6BaQCkBQBmAWQBEAOBXADQA3ACBmgDIEKgGIBvgEQA/gDAxgHQAegEBFgMQBAgLAkgFQA9gHB8gKQBqgOBCgnQh9ACiZgeQhdgSi1gvIlNhaQiIglhHgPQhzgahfgHQgtgEgsAAQhsAAhsAVg");
	this.shape_3.setTransform(185.2087,37.3163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303,64.3);


// stage content:
(lib.ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {boink:10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,10];
	// timeline functions:
	this.frame_0 = function() {
		this.stop(); // stop at the first frame
		
		this.andAction.addEventListener("click", theClick.bind(this));
		
		function theClick() {
			//this.hiScore.text = 'Click detected';	
			counter += 10
			this.hiScore.text = counter
			this.play()
		}
	}
	this.frame_10 = function() {
		playSound("boingsoundeffect");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(19));

	// actions
	this.text = new cjs.Text("Hiscore:", "17px 'Chalkduster'");
	this.text.lineHeight = 23;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(22,12);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(29));

	// knap
	this.andAction = new lib.my_Btn();
	this.andAction.name = "andAction";
	this.andAction.setTransform(48,540);
	new cjs.ButtonHelper(this.andAction, 0, 1, 2, false, new lib.my_Btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.andAction).wait(29));

	// figur
	this.instance = new lib.leg("synched",0);
	this.instance.setTransform(610.5,460,1,1,0,0,0,-23.8,49.6);

	this.instance_1 = new lib.leg("synched",0);
	this.instance_1.setTransform(691.65,566.35,1,1,5.202,0,0,153.2,100.1);

	this.instance_2 = new lib.armright("synched",0);
	this.instance_2.setTransform(602.8,189.95,1,1,-48.4882,0,0,303.1,46.4);

	this.instance_3 = new lib.armleft("synched",0);
	this.instance_3.setTransform(565,189.65,1,1,-2.0017,0,0,303.1,32.2);

	this.player = new lib.bodyplayer("synched",0);
	this.player.name = "player";
	this.player.setTransform(570.35,222.65,1,1,0,0,0,126.9,203);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.player},{t:this.instance_3,p:{regY:32.2,scaleX:1,scaleY:1,rotation:-2.0017,x:565,y:189.65}},{t:this.instance_2,p:{regY:46.4,rotation:-48.4882,x:602.8,y:189.95}},{t:this.instance_1,p:{regX:153.2,regY:100.1,rotation:5.202,x:691.65,y:566.35}},{t:this.instance,p:{regY:49.6,rotation:0,x:610.5,y:460}}]}).to({state:[{t:this.player},{t:this.instance_3,p:{regY:32.3,scaleX:0.9999,scaleY:0.9999,rotation:-32.0007,x:565.05,y:189.7}},{t:this.instance_2,p:{regY:46.5,rotation:-13.5653,x:602.85,y:190}},{t:this.instance_1,p:{regX:153.3,regY:100.2,rotation:-16.0256,x:753.5,y:505.85}},{t:this.instance,p:{regY:49.8,rotation:-65.9906,x:702.1,y:439.1}}]},4).to({state:[{t:this.player},{t:this.instance_3,p:{regY:32.3,scaleX:1,scaleY:1,rotation:2.2038,x:565.05,y:189.65}},{t:this.instance_2,p:{regY:46.5,rotation:-61.1783,x:602.85,y:190}},{t:this.instance_1,p:{regX:153.2,regY:100.1,rotation:5.202,x:691.65,y:566.35}},{t:this.instance,p:{regY:49.6,rotation:0,x:610.5,y:460}}]},12).to({state:[{t:this.player},{t:this.instance_3,p:{regY:32.4,scaleX:1,scaleY:1,rotation:-2.0008,x:565.05,y:189.8}},{t:this.instance_2,p:{regY:46.4,rotation:-48.4882,x:602.8,y:189.95}},{t:this.instance_1,p:{regX:153.2,regY:100.1,rotation:5.202,x:691.65,y:566.35}},{t:this.instance,p:{regY:49.6,rotation:0,x:610.5,y:460}}]},6).wait(7));

	// hiscore
	this.hiScore = new cjs.Text("", "17px 'Chalkduster'");
	this.hiScore.name = "hiScore";
	this.hiScore.lineHeight = 23;
	this.hiScore.lineWidth = 363;
	this.hiScore.parent = this;
	this.hiScore.setTransform(131,12);

	this.timeline.addTween(cjs.Tween.get(this.hiScore).wait(29));

	// ball
	this.instance_4 = new lib.ball_1();
	this.instance_4.setTransform(280,260,1,1,0,0,0,2,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:2.1,regY:59.1,scaleX:1.3293,scaleY:0.8335,x:390.45,y:650.15},8).to({regX:2,scaleX:1.3333,scaleY:0.6669,x:350.05,y:640.05},2).to({scaleX:0.7202,scaleY:0.6668,x:326.8,y:513.35},3).to({regY:-1,scaleX:1,scaleY:1,x:280,y:260},6).wait(10));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(500,330,398.9,324.79999999999995);
// library properties:
lib.properties = {
	id: '379A8907FDCB40118FADAFB4CA255DAA',
	width: 960,
	height: 640,
	fps: 24,
	color: "#66CCFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ball_atlas_1.png?1664531484818", id:"ball_atlas_1"},
		{src:"sounds/boingsoundeffect.mp3?1664531484870", id:"boingsoundeffect"}
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
an.compositions['379A8907FDCB40118FADAFB4CA255DAA'] = {
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