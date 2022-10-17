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



(lib.pentagonbtn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEoHmIpxgTIiwpXIIElhIHvF+g");
	this.shape.setTransform(0,-48.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("AlJHTIiwpXIIElhIHvF+IjTJNg");
	this.shape_1.setTransform(0,-48.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCC33").s().p("AlJHTIiwpXIIElhIHvF+IjTJNg");
	this.shape_2.setTransform(0,-48.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AlJHTIiwpXIIElhIHvF+IjTJNg");
	this.shape_3.setTransform(0,-48.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-98.1,103.2,99.1);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,99];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.button_1.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.play();
		}
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99).call(this.frame_99).wait(1));

	// button
	this.button_1 = new lib.pentagonbtn();
	this.button_1.name = "button_1";
	this.button_1.setTransform(640,550);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.pentagonbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(100));

	// bar_blue
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkriVIJXAAIAAErIpXAAg");
	this.shape.setTransform(200,555);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330099").s().p("AkrCWIAAkrIJXAAIAAErg");
	this.shape_1.setTransform(200,555);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AkrijIJXAAIAAFIIpXAAg");
	this.shape_2.setTransform(199.85,553.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330099").s().p("AkrCkIAAlHIJXAAIAAFHg");
	this.shape_3.setTransform(199.85,553.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AkriyIJXAAIAAFlIpXAAg");
	this.shape_4.setTransform(199.75,552.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330099").s().p("AkrCzIAAllIJXAAIAAFlg");
	this.shape_5.setTransform(199.75,552.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AkrjAIJXAAIAAGBIpXAAg");
	this.shape_6.setTransform(199.6,550.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#330099").s().p("AkrDBIAAmBIJXAAIAAGBg");
	this.shape_7.setTransform(199.6,550.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AkrjPIJXAAIAAGfIpXAAg");
	this.shape_8.setTransform(199.5,549.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#330099").s().p("AkrDPIAAmeIJXAAIAAGeg");
	this.shape_9.setTransform(199.5,549.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AkrjdIJXAAIAAG7IpXAAg");
	this.shape_10.setTransform(199.35,547.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#330099").s().p("AkrDeIAAm7IJXAAIAAG7g");
	this.shape_11.setTransform(199.35,547.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AkrjrIJXAAIAAHXIpXAAg");
	this.shape_12.setTransform(199.25,546.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#330099").s().p("AkrDsIAAnXIJXAAIAAHXg");
	this.shape_13.setTransform(199.25,546.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("Akrj6IJXAAIAAH1IpXAAg");
	this.shape_14.setTransform(199.1,544.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#330099").s().p("AkrD7IAAn1IJXAAIAAH1g");
	this.shape_15.setTransform(199.1,544.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AkrkIIJXAAIAAIRIpXAAg");
	this.shape_16.setTransform(199,543.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#330099").s().p("AkrEJIAAoRIJXAAIAAIRg");
	this.shape_17.setTransform(199,543.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AkrkWIJXAAIAAIuIpXAAg");
	this.shape_18.setTransform(198.85,542.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#330099").s().p("AkrEXIAAouIJXAAIAAIug");
	this.shape_19.setTransform(198.85,542.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AkrklIJXAAIAAJLIpXAAg");
	this.shape_20.setTransform(198.75,540.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#330099").s().p("AkrEmIAApLIJXAAIAAJLg");
	this.shape_21.setTransform(198.75,540.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AkrkzIJXAAIAAJnIpXAAg");
	this.shape_22.setTransform(198.6,539.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#330099").s().p("AkrE0IAApnIJXAAIAAJng");
	this.shape_23.setTransform(198.6,539.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AkrlCIJXAAIAAKFIpXAAg");
	this.shape_24.setTransform(198.5,537.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#330099").s().p("AkrFCIAAqDIJXAAIAAKDg");
	this.shape_25.setTransform(198.5,537.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AkrlQIJXAAIAAKhIpXAAg");
	this.shape_26.setTransform(198.35,536.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#330099").s().p("AkrFRIAAqhIJXAAIAAKhg");
	this.shape_27.setTransform(198.35,536.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AkrleIJXAAIAAK9IpXAAg");
	this.shape_28.setTransform(198.25,534.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#330099").s().p("AkrFfIAAq9IJXAAIAAK9g");
	this.shape_29.setTransform(198.25,534.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AkrltIJXAAIAALbIpXAAg");
	this.shape_30.setTransform(198.1,533.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#330099").s().p("AkrFuIAArbIJXAAIAALbg");
	this.shape_31.setTransform(198.1,533.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("Akrl7IJXAAIAAL3IpXAAg");
	this.shape_32.setTransform(198,532);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#330099").s().p("AkrF8IAAr3IJXAAIAAL3g");
	this.shape_33.setTransform(198,532);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AkrmJIJXAAIAAMUIpXAAg");
	this.shape_34.setTransform(197.85,530.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#330099").s().p("AkrGKIAAsTIJXAAIAAMTg");
	this.shape_35.setTransform(197.85,530.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AkrmYIJXAAIAAMxIpXAAg");
	this.shape_36.setTransform(197.75,529.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#330099").s().p("AkrGZIAAsxIJXAAIAAMxg");
	this.shape_37.setTransform(197.75,529.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AkrmmIJXAAIAANNIpXAAg");
	this.shape_38.setTransform(197.6,527.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#330099").s().p("AkrGnIAAtNIJXAAIAANNg");
	this.shape_39.setTransform(197.6,527.675);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("Akrm1IJXAAIAANrIpXAAg");
	this.shape_40.setTransform(197.45,526.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#330099").s().p("AkrG1IAAtqIJXAAIAANqg");
	this.shape_41.setTransform(197.45,526.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AkrnDIJXAAIAAOHIpXAAg");
	this.shape_42.setTransform(197.35,524.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#330099").s().p("AkrHEIAAuHIJXAAIAAOHg");
	this.shape_43.setTransform(197.35,524.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("AkrnRIJXAAIAAOjIpXAAg");
	this.shape_44.setTransform(197.2,523.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#330099").s().p("AkrHSIAAujIJXAAIAAOjg");
	this.shape_45.setTransform(197.2,523.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AkrngIJXAAIAAPBIpXAAg");
	this.shape_46.setTransform(197.1,521.925);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#330099").s().p("AkrHhIAAvBIJXAAIAAPBg");
	this.shape_47.setTransform(197.1,521.925);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AkrnuIJXAAIAAPdIpXAAg");
	this.shape_48.setTransform(196.95,520.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#330099").s().p("AkrHvIAAvdIJXAAIAAPdg");
	this.shape_49.setTransform(196.95,520.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("Akrn8IJXAAIAAP6IpXAAg");
	this.shape_50.setTransform(196.85,519.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#330099").s().p("AkrH9IAAv6IJXAAIAAP6g");
	this.shape_51.setTransform(196.85,519.05);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("AkroLIJXAAIAAQXIpXAAg");
	this.shape_52.setTransform(196.7,517.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#330099").s().p("AkrIMIAAwXIJXAAIAAQXg");
	this.shape_53.setTransform(196.7,517.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("AkroZIJXAAIAAQzIpXAAg");
	this.shape_54.setTransform(196.6,516.175);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#330099").s().p("AkrIaIAAwzIJXAAIAAQzg");
	this.shape_55.setTransform(196.6,516.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("AkrooIJXAAIAARRIpXAAg");
	this.shape_56.setTransform(196.45,514.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#330099").s().p("AkrIoIAAxPIJXAAIAARPg");
	this.shape_57.setTransform(196.45,514.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("Akro2IJXAAIAARtIpXAAg");
	this.shape_58.setTransform(196.35,513.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#330099").s().p("AkrI3IAAxtIJXAAIAARtg");
	this.shape_59.setTransform(196.35,513.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("AkrpEIJXAAIAASJIpXAAg");
	this.shape_60.setTransform(196.2,511.875);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#330099").s().p("AkrJFIAAyJIJXAAIAASJg");
	this.shape_61.setTransform(196.2,511.875);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1).p("AkrpTIJXAAIAASnIpXAAg");
	this.shape_62.setTransform(196.1,510.425);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#330099").s().p("AkrJUIAAynIJXAAIAASng");
	this.shape_63.setTransform(196.1,510.425);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("AkrphIJXAAIAATDIpXAAg");
	this.shape_64.setTransform(195.95,509);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#330099").s().p("AkrJiIAAzDIJXAAIAATDg");
	this.shape_65.setTransform(195.95,509);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AkrpvIJXAAIAATfIpXAAg");
	this.shape_66.setTransform(195.85,507.55);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#330099").s().p("AkrJwIAAzfIJXAAIAATfg");
	this.shape_67.setTransform(195.85,507.55);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("Akrp+IJXAAIAAT9IpXAAg");
	this.shape_68.setTransform(195.7,506.125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#330099").s().p("AkrJ/IAAz9IJXAAIAAT9g");
	this.shape_69.setTransform(195.7,506.125);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("AkrqMIJXAAIAAUZIpXAAg");
	this.shape_70.setTransform(195.6,504.675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#330099").s().p("AkrKNIAA0ZIJXAAIAAUZg");
	this.shape_71.setTransform(195.6,504.675);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("AkrqbIJXAAIAAU3IpXAAg");
	this.shape_72.setTransform(195.45,503.225);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#330099").s().p("AkrKcIAA03IJXAAIAAU3g");
	this.shape_73.setTransform(195.45,503.225);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("AkrqpIJXAAIAAVTIpXAAg");
	this.shape_74.setTransform(195.35,501.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#330099").s().p("AkrKqIAA1TIJXAAIAAVTg");
	this.shape_75.setTransform(195.35,501.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("Akrq4IJXAAIAAVwIpXAAg");
	this.shape_76.setTransform(195.2,500.35);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#330099").s().p("AkrK4IAA1vIJXAAIAAVvg");
	this.shape_77.setTransform(195.2,500.35);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,1,1).p("AkrrGIJXAAIAAWNIpXAAg");
	this.shape_78.setTransform(195.1,498.925);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#330099").s().p("AkrLHIAA2NIJXAAIAAWNg");
	this.shape_79.setTransform(195.1,498.925);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(1,1,1).p("AkrrUIJXAAIAAWpIpXAAg");
	this.shape_80.setTransform(194.95,497.475);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#330099").s().p("AkrLVIAA2pIJXAAIAAWpg");
	this.shape_81.setTransform(194.95,497.475);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(1,1,1).p("AkrriIJXAAIAAXFIpXAAg");
	this.shape_82.setTransform(194.8,496.05);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#330099").s().p("AkrLjIAA3FIJXAAIAAXFg");
	this.shape_83.setTransform(194.8,496.05);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(1,1,1).p("AkrrxIJXAAIAAXjIpXAAg");
	this.shape_84.setTransform(194.7,494.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#330099").s().p("AkrLyIAA3jIJXAAIAAXjg");
	this.shape_85.setTransform(194.7,494.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(1,1,1).p("Akrr/IJXAAIAAX/IpXAAg");
	this.shape_86.setTransform(194.55,493.175);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#330099").s().p("AkrMAIAA3/IJXAAIAAX/g");
	this.shape_87.setTransform(194.55,493.175);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(1,1,1).p("AkrsOIJXAAIAAYdIpXAAg");
	this.shape_88.setTransform(194.45,491.725);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#330099").s().p("AkrMPIAA4dIJXAAIAAYdg");
	this.shape_89.setTransform(194.45,491.725);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1,1,1).p("AkrscIJXAAIAAY5IpXAAg");
	this.shape_90.setTransform(194.3,490.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#330099").s().p("AkrMdIAA45IJXAAIAAY5g");
	this.shape_91.setTransform(194.3,490.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1,1,1).p("AkrsrIJXAAIAAZWIpXAAg");
	this.shape_92.setTransform(194.2,488.85);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#330099").s().p("AkrMrIAA5WIJXAAIAAZWg");
	this.shape_93.setTransform(194.2,488.85);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(1,1,1).p("Akrs5IJXAAIAAZzIpXAAg");
	this.shape_94.setTransform(194.05,487.425);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#330099").s().p("AkrM6IAA5zIJXAAIAAZzg");
	this.shape_95.setTransform(194.05,487.425);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1,1,1).p("AkrtHIJXAAIAAaPIpXAAg");
	this.shape_96.setTransform(193.95,485.975);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#330099").s().p("AkrNIIAA6PIJXAAIAAaPg");
	this.shape_97.setTransform(193.95,485.975);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(1,1,1).p("AkrtVIJXAAIAAarIpXAAg");
	this.shape_98.setTransform(193.8,484.55);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#330099").s().p("AkrNWIAA6sIJXAAIAAasg");
	this.shape_99.setTransform(193.8,484.55);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(1,1,1).p("AkrtkIJXAAIAAbJIpXAAg");
	this.shape_100.setTransform(193.7,483.125);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#330099").s().p("AkrNlIAA7JIJXAAIAAbJg");
	this.shape_101.setTransform(193.7,483.125);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(1,1,1).p("AkrtyIJXAAIAAblIpXAAg");
	this.shape_102.setTransform(193.55,481.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#330099").s().p("AkrN0IAA7mIJXAAIAAbmg");
	this.shape_103.setTransform(193.55,481.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(1,1,1).p("AkruBIJXAAIAAcDIpXAAg");
	this.shape_104.setTransform(193.45,480.25);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#330099").s().p("AkrOCIAA8DIJXAAIAAcDg");
	this.shape_105.setTransform(193.45,480.25);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(1,1,1).p("AkruPIJXAAIAAcfIpXAAg");
	this.shape_106.setTransform(193.3,478.825);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#330099").s().p("AkrOQIAA8fIJXAAIAAcfg");
	this.shape_107.setTransform(193.3,478.825);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(1,1,1).p("AkrueIJXAAIAAc9IpXAAg");
	this.shape_108.setTransform(193.2,477.375);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#330099").s().p("AkrOfIAA89IJXAAIAAc9g");
	this.shape_109.setTransform(193.2,477.375);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(1,1,1).p("AkrusIJXAAIAAdZIpXAAg");
	this.shape_110.setTransform(193.05,475.95);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#330099").s().p("AkrOtIAA9ZIJXAAIAAdZg");
	this.shape_111.setTransform(193.05,475.95);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(1,1,1).p("Akru7IJXAAIAAd2IpXAAg");
	this.shape_112.setTransform(192.95,474.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#330099").s().p("AkrO8IAA92IJXAAIAAd2g");
	this.shape_113.setTransform(192.95,474.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(1,1,1).p("AkrvJIJXAAIAAeTIpXAAg");
	this.shape_114.setTransform(192.8,473.075);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#330099").s().p("AkrPKIAA+TIJXAAIAAeTg");
	this.shape_115.setTransform(192.8,473.075);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1,1,1).p("AkrvXIJXAAIAAevIpXAAg");
	this.shape_116.setTransform(192.7,471.625);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#330099").s().p("AkrPYIAA+vIJXAAIAAevg");
	this.shape_117.setTransform(192.7,471.625);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(1,1,1).p("AkrvlIJXAAIAAfLIpXAAg");
	this.shape_118.setTransform(192.55,470.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#330099").s().p("AkrPnIAA/MIJXAAIAAfMg");
	this.shape_119.setTransform(192.55,470.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1,1,1).p("Akrv0IJXAAIAAfpIpXAAg");
	this.shape_120.setTransform(192.4,468.75);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#330099").s().p("AkrP1IAA/pIJXAAIAAfpg");
	this.shape_121.setTransform(192.4,468.75);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(1,1,1).p("AkrwCIJXAAMAAAAgFIpXAAg");
	this.shape_122.setTransform(192.3,467.325);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#330099").s().p("AkrQDMAAAggFIJXAAMAAAAgFg");
	this.shape_123.setTransform(192.3,467.325);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1,1,1).p("AkrwRIJXAAMAAAAgjIpXAAg");
	this.shape_124.setTransform(192.15,465.875);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#330099").s().p("AkrQSMAAAggjIJXAAMAAAAgjg");
	this.shape_125.setTransform(192.15,465.875);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(1,1,1).p("AkrwfIJXAAMAAAAg/IpXAAg");
	this.shape_126.setTransform(192.05,464.45);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#330099").s().p("AkrQgMAAAgg/IJXAAMAAAAg/g");
	this.shape_127.setTransform(192.05,464.45);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(1,1,1).p("AkrwuIJXAAMAAAAhcIpXAAg");
	this.shape_128.setTransform(191.9,463);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#330099").s().p("AkrQvMAAAghdIJXAAMAAAAhdg");
	this.shape_129.setTransform(191.9,463);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(1,1,1).p("Akrw8IJXAAMAAAAh5IpXAAg");
	this.shape_130.setTransform(191.8,461.55);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#330099").s().p("AkrQ9MAAAgh5IJXAAMAAAAh5g");
	this.shape_131.setTransform(191.8,461.55);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(1,1,1).p("AkrxKIJXAAMAAAAiVIpXAAg");
	this.shape_132.setTransform(191.65,460.125);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#330099").s().p("AkrRLMAAAgiVIJXAAMAAAAiVg");
	this.shape_133.setTransform(191.65,460.125);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(1,1,1).p("AkrxZIJXAAMAAAAizIpXAAg");
	this.shape_134.setTransform(191.55,458.675);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#330099").s().p("AkrRaMAAAgizIJXAAMAAAAizg");
	this.shape_135.setTransform(191.55,458.675);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(1,1,1).p("AkrxnIJXAAMAAAAjPIpXAAg");
	this.shape_136.setTransform(191.4,457.25);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#330099").s().p("AkrRoMAAAgjPIJXAAMAAAAjPg");
	this.shape_137.setTransform(191.4,457.25);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(1,1,1).p("Akrx1IJXAAMAAAAjsIpXAAg");
	this.shape_138.setTransform(191.3,455.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#330099").s().p("AkrR3MAAAgjtIJXAAMAAAAjtg");
	this.shape_139.setTransform(191.3,455.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(1,1,1).p("AkryEIJXAAMAAAAkJIpXAAg");
	this.shape_140.setTransform(191.15,454.375);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#330099").s().p("AkrSFMAAAgkJIJXAAMAAAAkJg");
	this.shape_141.setTransform(191.15,454.375);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(1,1,1).p("AkrySIJXAAMAAAAklIpXAAg");
	this.shape_142.setTransform(191.05,452.925);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#330099").s().p("AkrSTMAAAgklIJXAAMAAAAklg");
	this.shape_143.setTransform(191.05,452.925);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(1,1,1).p("AkryhIJXAAMAAAAlCIpXAAg");
	this.shape_144.setTransform(190.9,451.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#330099").s().p("AkrSiMAAAglDIJXAAMAAAAlDg");
	this.shape_145.setTransform(190.9,451.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(1,1,1).p("AkryvIJXAAMAAAAlfIpXAAg");
	this.shape_146.setTransform(190.8,450.05);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#330099").s().p("AkrSwMAAAglfIJXAAMAAAAlfg");
	this.shape_147.setTransform(190.8,450.05);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(1,1,1).p("Akry9IJXAAMAAAAl7IpXAAg");
	this.shape_148.setTransform(190.65,448.625);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#330099").s().p("AkrS+MAAAgl7IJXAAMAAAAl7g");
	this.shape_149.setTransform(190.65,448.625);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(1,1,1).p("AkrzMIJXAAMAAAAmZIpXAAg");
	this.shape_150.setTransform(190.55,447.175);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#330099").s().p("AkrTNMAAAgmZIJXAAMAAAAmZg");
	this.shape_151.setTransform(190.55,447.175);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(1,1,1).p("AkrzaIJXAAMAAAAm1IpXAAg");
	this.shape_152.setTransform(190.4,445.75);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#330099").s().p("AkrTbMAAAgm1IJXAAMAAAAm1g");
	this.shape_153.setTransform(190.4,445.75);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(1,1,1).p("AkrzoIJXAAMAAAAnSIpXAAg");
	this.shape_154.setTransform(190.3,444.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#330099").s().p("AkrTqMAAAgnTIJXAAMAAAAnTg");
	this.shape_155.setTransform(190.3,444.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(1,1,1).p("Akrz3IJXAAMAAAAnvIpXAAg");
	this.shape_156.setTransform(190.15,442.875);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#330099").s().p("AkrT4MAAAgnvIJXAAMAAAAnvg");
	this.shape_157.setTransform(190.15,442.875);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(1,1,1).p("Akr0FIJXAAMAAAAoLIpXAAg");
	this.shape_158.setTransform(190.05,441.425);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#330099").s().p("AkrUGMAAAgoLIJXAAMAAAAoLg");
	this.shape_159.setTransform(190.05,441.425);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(1,1,1).p("Akr0UIJXAAMAAAAooIpXAAg");
	this.shape_160.setTransform(189.9,440);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#330099").s().p("AkrUVMAAAgooIJXAAMAAAAoog");
	this.shape_161.setTransform(189.9,440);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(1,1,1).p("Akr0iIJXAAMAAAApFIpXAAg");
	this.shape_162.setTransform(189.75,438.55);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#330099").s().p("AkrUjMAAAgpFIJXAAMAAAApFg");
	this.shape_163.setTransform(189.75,438.55);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(1,1,1).p("Akr0wIJXAAMAAAAphIpXAAg");
	this.shape_164.setTransform(189.65,437.125);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#330099").s().p("AkrUxMAAAgphIJXAAMAAAAphg");
	this.shape_165.setTransform(189.65,437.125);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(1,1,1).p("Akr0/IJXAAMAAAAp/IpXAAg");
	this.shape_166.setTransform(189.5,435.675);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#330099").s().p("AkrVAMAAAgp/IJXAAMAAAAp/g");
	this.shape_167.setTransform(189.5,435.675);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(1,1,1).p("Akr1NIJXAAMAAAAqbIpXAAg");
	this.shape_168.setTransform(189.4,434.25);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#330099").s().p("AkrVOMAAAgqbIJXAAMAAAAqbg");
	this.shape_169.setTransform(189.4,434.25);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(1,1,1).p("Akr1bIJXAAMAAAAq4IpXAAg");
	this.shape_170.setTransform(189.25,432.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#330099").s().p("AkrVdMAAAgq4IJXAAMAAAAq4g");
	this.shape_171.setTransform(189.25,432.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(1,1,1).p("Akr1qIJXAAMAAAArVIpXAAg");
	this.shape_172.setTransform(189.15,431.375);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#330099").s().p("AkrVrMAAAgrVIJXAAMAAAArVg");
	this.shape_173.setTransform(189.15,431.375);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(1,1,1).p("Akr14IJXAAMAAAArxIpXAAg");
	this.shape_174.setTransform(189,429.925);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#330099").s().p("AkrV5MAAAgrxIJXAAMAAAArxg");
	this.shape_175.setTransform(189,429.925);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(1,1,1).p("Akr2HIJXAAMAAAAsOIpXAAg");
	this.shape_176.setTransform(188.9,428.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#330099").s().p("AkrWIMAAAgsPIJXAAMAAAAsPg");
	this.shape_177.setTransform(188.9,428.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(1,1,1).p("Akr2VIJXAAMAAAAsrIpXAAg");
	this.shape_178.setTransform(188.75,427.05);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#330099").s().p("AkrWWMAAAgsrIJXAAMAAAAsrg");
	this.shape_179.setTransform(188.75,427.05);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(1,1,1).p("Akr2jIJXAAMAAAAtHIpXAAg");
	this.shape_180.setTransform(188.65,425.625);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#330099").s().p("AkrWkMAAAgtHIJXAAMAAAAtHg");
	this.shape_181.setTransform(188.65,425.625);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(1,1,1).p("Akr2yIJXAAMAAAAtlIpXAAg");
	this.shape_182.setTransform(188.5,424.175);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#330099").s().p("AkrWzMAAAgtlIJXAAMAAAAtlg");
	this.shape_183.setTransform(188.5,424.175);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(1,1,1).p("Akr3AIJXAAMAAAAuBIpXAAg");
	this.shape_184.setTransform(188.4,422.75);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#330099").s().p("AkrXBMAAAguBIJXAAMAAAAuBg");
	this.shape_185.setTransform(188.4,422.75);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(1,1,1).p("Akr3OIJXAAMAAAAueIpXAAg");
	this.shape_186.setTransform(188.25,421.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#330099").s().p("AkrXQMAAAgufIJXAAMAAAAufg");
	this.shape_187.setTransform(188.25,421.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(1,1,1).p("Akr3dIJXAAMAAAAu7IpXAAg");
	this.shape_188.setTransform(188.15,419.875);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#330099").s().p("AkrXeMAAAgu7IJXAAMAAAAu7g");
	this.shape_189.setTransform(188.15,419.875);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(1,1,1).p("Akr3rIJXAAMAAAAvXIpXAAg");
	this.shape_190.setTransform(188,418.425);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#330099").s().p("AkrXsMAAAgvXIJXAAMAAAAvXg");
	this.shape_191.setTransform(188,418.425);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(1,1,1).p("Akr36IJXAAMAAAAv0IpXAAg");
	this.shape_192.setTransform(187.9,417);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#330099").s().p("AkrX7MAAAgv0IJXAAMAAAAv0g");
	this.shape_193.setTransform(187.9,417);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(1,1,1).p("Akr4IIJXAAMAAAAwRIpXAAg");
	this.shape_194.setTransform(187.75,415.55);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#330099").s().p("AkrYJMAAAgwRIJXAAMAAAAwRg");
	this.shape_195.setTransform(187.75,415.55);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(1,1,1).p("Akr4WIJXAAMAAAAwtIpXAAg");
	this.shape_196.setTransform(187.65,414.125);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#330099").s().p("AkrYXMAAAgwtIJXAAMAAAAwtg");
	this.shape_197.setTransform(187.65,414.125);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(1,1,1).p("Akr4lIJXAAMAAAAxLIpXAAg");
	this.shape_198.setTransform(187.5,412.675);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#330099").s().p("AkrYmMAAAgxLIJXAAMAAAAxLg");
	this.shape_199.setTransform(187.5,412.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).wait(1));

	// bar_green
	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(1,1,1).p("AnziVIPnAAIAAErIvnAAg");
	this.shape_200.setTransform(90,555);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#33A59B").s().p("AnzCWIAAkrIPnAAIAAErg");
	this.shape_201.setTransform(90,555);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(1,1,1).p("AnzisIPnAAIAAFZIvnAAg");
	this.shape_202.setTransform(90,552.725);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#33A59B").s().p("AnzCtIAAlZIPnAAIAAFZg");
	this.shape_203.setTransform(90,552.725);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(1,1,1).p("AnzjDIPnAAIAAGHIvnAAg");
	this.shape_204.setTransform(90,550.425);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#33A59B").s().p("AnzDEIAAmHIPnAAIAAGHg");
	this.shape_205.setTransform(90,550.425);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(1,1,1).p("AnzjaIPnAAIAAG1IvnAAg");
	this.shape_206.setTransform(90,548.15);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#33A59B").s().p("AnzDaIAAmzIPnAAIAAGzg");
	this.shape_207.setTransform(90,548.15);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(1,1,1).p("AnzjwIPnAAIAAHhIvnAAg");
	this.shape_208.setTransform(90,545.875);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#33A59B").s().p("AnzDxIAAnhIPnAAIAAHhg");
	this.shape_209.setTransform(90,545.875);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(1,1,1).p("AnzkHIPnAAIAAIPIvnAAg");
	this.shape_210.setTransform(90,543.575);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#33A59B").s().p("AnzEIIAAoPIPnAAIAAIPg");
	this.shape_211.setTransform(90,543.575);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(1,1,1).p("AnzkeIPnAAIAAI9IvnAAg");
	this.shape_212.setTransform(90,541.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#33A59B").s().p("AnzEfIAAo9IPnAAIAAI9g");
	this.shape_213.setTransform(90,541.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(1,1,1).p("Anzk1IPnAAIAAJrIvnAAg");
	this.shape_214.setTransform(90,539.025);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#33A59B").s().p("AnzE2IAAprIPnAAIAAJrg");
	this.shape_215.setTransform(90,539.025);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(1,1,1).p("AnzlMIPnAAIAAKZIvnAAg");
	this.shape_216.setTransform(90,536.75);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#33A59B").s().p("AnzFMIAAqYIPnAAIAAKYg");
	this.shape_217.setTransform(90,536.75);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(1,1,1).p("AnzljIPnAAIAALGIvnAAg");
	this.shape_218.setTransform(90,534.45);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#33A59B").s().p("AnzFjIAArGIPnAAIAALGg");
	this.shape_219.setTransform(90,534.45);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(1,1,1).p("Anzl5IPnAAIAALzIvnAAg");
	this.shape_220.setTransform(90,532.175);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#33A59B").s().p("AnzF6IAArzIPnAAIAALzg");
	this.shape_221.setTransform(90,532.175);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(1,1,1).p("AnzmQIPnAAIAAMhIvnAAg");
	this.shape_222.setTransform(90,529.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#33A59B").s().p("AnzGRIAAshIPnAAIAAMhg");
	this.shape_223.setTransform(90,529.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(1,1,1).p("AnzmnIPnAAIAANPIvnAAg");
	this.shape_224.setTransform(90,527.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#33A59B").s().p("AnzGoIAAtPIPnAAIAANPg");
	this.shape_225.setTransform(90,527.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(1,1,1).p("Anzm+IPnAAIAAN9IvnAAg");
	this.shape_226.setTransform(90,525.325);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#33A59B").s().p("AnzG/IAAt9IPnAAIAAN9g");
	this.shape_227.setTransform(90,525.325);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(1,1,1).p("AnznUIPnAAIAAOqIvnAAg");
	this.shape_228.setTransform(90,523.05);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#33A59B").s().p("AnzHVIAAupIPnAAIAAOpg");
	this.shape_229.setTransform(90,523.05);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(1,1,1).p("AnznsIPnAAIAAPZIvnAAg");
	this.shape_230.setTransform(90,520.75);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#33A59B").s().p("AnzHsIAAvXIPnAAIAAPXg");
	this.shape_231.setTransform(90,520.75);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(1,1,1).p("AnzoCIPnAAIAAQFIvnAAg");
	this.shape_232.setTransform(90,518.475);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#33A59B").s().p("AnzIDIAAwFIPnAAIAAQFg");
	this.shape_233.setTransform(90,518.475);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(1,1,1).p("AnzoZIPnAAIAAQzIvnAAg");
	this.shape_234.setTransform(90,516.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#33A59B").s().p("AnzIaIAAwzIPnAAIAAQzg");
	this.shape_235.setTransform(90,516.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(1,1,1).p("AnzowIPnAAIAARhIvnAAg");
	this.shape_236.setTransform(90,513.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#33A59B").s().p("AnzIxIAAxhIPnAAIAARhg");
	this.shape_237.setTransform(90,513.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(1,1,1).p("AnzpHIPnAAIAASPIvnAAg");
	this.shape_238.setTransform(90,511.625);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#33A59B").s().p("AnzJIIAAyPIPnAAIAASPg");
	this.shape_239.setTransform(90,511.625);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(1,1,1).p("AnzpeIPnAAIAAS8IvnAAg");
	this.shape_240.setTransform(90,509.35);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#33A59B").s().p("AnzJeIAAy7IPnAAIAAS7g");
	this.shape_241.setTransform(90,509.35);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(1,1,1).p("Anzp0IPnAAIAATpIvnAAg");
	this.shape_242.setTransform(90,507.075);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#33A59B").s().p("AnzJ1IAAzpIPnAAIAATpg");
	this.shape_243.setTransform(90,507.075);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(1,1,1).p("AnzqLIPnAAIAAUXIvnAAg");
	this.shape_244.setTransform(90,504.775);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#33A59B").s().p("AnzKMIAA0XIPnAAIAAUXg");
	this.shape_245.setTransform(90,504.775);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(1,1,1).p("AnzqiIPnAAIAAVFIvnAAg");
	this.shape_246.setTransform(90,502.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#33A59B").s().p("AnzKjIAA1FIPnAAIAAVFg");
	this.shape_247.setTransform(90,502.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(1,1,1).p("Anzq5IPnAAIAAVzIvnAAg");
	this.shape_248.setTransform(90,500.225);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#33A59B").s().p("AnzK6IAA1zIPnAAIAAVzg");
	this.shape_249.setTransform(90,500.225);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(1,1,1).p("AnzrQIPnAAIAAWhIvnAAg");
	this.shape_250.setTransform(90,497.925);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#33A59B").s().p("AnzLRIAA2hIPnAAIAAWhg");
	this.shape_251.setTransform(90,497.925);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(1,1,1).p("AnzrmIPnAAIAAXOIvnAAg");
	this.shape_252.setTransform(90,495.65);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#33A59B").s().p("AnzLnIAA3OIPnAAIAAXOg");
	this.shape_253.setTransform(90,495.65);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(1,1,1).p("Anzr9IPnAAIAAX7IvnAAg");
	this.shape_254.setTransform(90,493.375);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#33A59B").s().p("AnzL+IAA37IPnAAIAAX7g");
	this.shape_255.setTransform(90,493.375);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(1,1,1).p("AnzsUIPnAAIAAYpIvnAAg");
	this.shape_256.setTransform(90,491.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#33A59B").s().p("AnzMVIAA4pIPnAAIAAYpg");
	this.shape_257.setTransform(90,491.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(1,1,1).p("AnzsrIPnAAIAAZXIvnAAg");
	this.shape_258.setTransform(90,488.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#33A59B").s().p("AnzMsIAA5XIPnAAIAAZXg");
	this.shape_259.setTransform(90,488.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(1,1,1).p("AnztCIPnAAIAAaFIvnAAg");
	this.shape_260.setTransform(90,486.525);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#33A59B").s().p("AnzNDIAA6FIPnAAIAAaFg");
	this.shape_261.setTransform(90,486.525);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(1,1,1).p("AnztZIPnAAIAAazIvnAAg");
	this.shape_262.setTransform(90,484.25);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#33A59B").s().p("AnzNZIAA6xIPnAAIAAaxg");
	this.shape_263.setTransform(90,484.25);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(1,1,1).p("AnztwIPnAAIAAbhIvnAAg");
	this.shape_264.setTransform(90,481.95);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#33A59B").s().p("AnzNwIAA7fIPnAAIAAbfg");
	this.shape_265.setTransform(90,481.95);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(1,1,1).p("AnzuGIPnAAIAAcNIvnAAg");
	this.shape_266.setTransform(90,479.675);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#33A59B").s().p("AnzOHIAA8NIPnAAIAAcNg");
	this.shape_267.setTransform(90,479.675);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(1,1,1).p("AnzudIPnAAIAAc7IvnAAg");
	this.shape_268.setTransform(90,477.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#33A59B").s().p("AnzOeIAA87IPnAAIAAc7g");
	this.shape_269.setTransform(90,477.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(1,1,1).p("Anzu0IPnAAIAAdpIvnAAg");
	this.shape_270.setTransform(90,475.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#33A59B").s().p("AnzO1IAA9pIPnAAIAAdpg");
	this.shape_271.setTransform(90,475.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(1,1,1).p("AnzvLIPnAAIAAeXIvnAAg");
	this.shape_272.setTransform(90,472.825);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#33A59B").s().p("AnzPMIAA+XIPnAAIAAeXg");
	this.shape_273.setTransform(90,472.825);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(1,1,1).p("AnzvhIPnAAIAAfDIvnAAg");
	this.shape_274.setTransform(90,470.55);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#33A59B").s().p("AnzPiIAA/EIPnAAIAAfEg");
	this.shape_275.setTransform(90,470.55);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(1,1,1).p("Anzv4IPnAAIAAfxIvnAAg");
	this.shape_276.setTransform(90,468.275);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#33A59B").s().p("AnzP5IAA/xIPnAAIAAfxg");
	this.shape_277.setTransform(90,468.275);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(1,1,1).p("AnzwPIPnAAMAAAAgfIvnAAg");
	this.shape_278.setTransform(90,465.975);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#33A59B").s().p("AnzQQMAAAggfIPnAAMAAAAgfg");
	this.shape_279.setTransform(90,465.975);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(1,1,1).p("AnzwmIPnAAMAAAAhNIvnAAg");
	this.shape_280.setTransform(90,463.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#33A59B").s().p("AnzQnMAAAghNIPnAAMAAAAhNg");
	this.shape_281.setTransform(90,463.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(1,1,1).p("Anzw9IPnAAMAAAAh7IvnAAg");
	this.shape_282.setTransform(90,461.425);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#33A59B").s().p("AnzQ+MAAAgh7IPnAAMAAAAh7g");
	this.shape_283.setTransform(90,461.425);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(1,1,1).p("AnzxUIPnAAMAAAAipIvnAAg");
	this.shape_284.setTransform(90,459.125);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#33A59B").s().p("AnzRVMAAAgipIPnAAMAAAAipg");
	this.shape_285.setTransform(90,459.125);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(1,1,1).p("AnzxrIPnAAMAAAAjWIvnAAg");
	this.shape_286.setTransform(90,456.85);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#33A59B").s().p("AnzRrMAAAgjVIPnAAMAAAAjVg");
	this.shape_287.setTransform(90,456.85);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(1,1,1).p("AnzyBIPnAAMAAAAkDIvnAAg");
	this.shape_288.setTransform(90,454.575);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#33A59B").s().p("AnzSCMAAAgkDIPnAAMAAAAkDg");
	this.shape_289.setTransform(90,454.575);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(1,1,1).p("AnzyYIPnAAMAAAAkxIvnAAg");
	this.shape_290.setTransform(90,452.275);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#33A59B").s().p("AnzSZMAAAgkxIPnAAMAAAAkxg");
	this.shape_291.setTransform(90,452.275);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(1,1,1).p("AnzyvIPnAAMAAAAlfIvnAAg");
	this.shape_292.setTransform(90,450);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#33A59B").s().p("AnzSwMAAAglfIPnAAMAAAAlfg");
	this.shape_293.setTransform(90,450);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(1,1,1).p("AnzzGIPnAAMAAAAmNIvnAAg");
	this.shape_294.setTransform(90,447.725);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#33A59B").s().p("AnzTHMAAAgmNIPnAAMAAAAmNg");
	this.shape_295.setTransform(90,447.725);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(1,1,1).p("AnzzdIPnAAMAAAAm7IvnAAg");
	this.shape_296.setTransform(90,445.425);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#33A59B").s().p("AnzTeMAAAgm7IPnAAMAAAAm7g");
	this.shape_297.setTransform(90,445.425);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").ss(1,1,1).p("AnzzzIPnAAMAAAAnoIvnAAg");
	this.shape_298.setTransform(90,443.15);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#33A59B").s().p("AnzT0MAAAgnoIPnAAMAAAAnog");
	this.shape_299.setTransform(90,443.15);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").ss(1,1,1).p("Anz0KIPnAAMAAAAoVIvnAAg");
	this.shape_300.setTransform(90,440.875);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#33A59B").s().p("AnzULMAAAgoVIPnAAMAAAAoVg");
	this.shape_301.setTransform(90,440.875);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").ss(1,1,1).p("Anz0hIPnAAMAAAApDIvnAAg");
	this.shape_302.setTransform(90,438.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#33A59B").s().p("AnzUiMAAAgpDIPnAAMAAAApDg");
	this.shape_303.setTransform(90,438.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#000000").ss(1,1,1).p("Anz04IPnAAMAAAApxIvnAAg");
	this.shape_304.setTransform(90,436.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#33A59B").s().p("AnzU5MAAAgpxIPnAAMAAAApxg");
	this.shape_305.setTransform(90,436.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").ss(1,1,1).p("Anz1PIPnAAMAAAAqfIvnAAg");
	this.shape_306.setTransform(90,434.025);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#33A59B").s().p("AnzVQMAAAgqfIPnAAMAAAAqfg");
	this.shape_307.setTransform(90,434.025);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").ss(1,1,1).p("Anz1mIPnAAMAAAArNIvnAAg");
	this.shape_308.setTransform(90,431.75);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#33A59B").s().p("AnzVmMAAAgrMIPnAAMAAAArMg");
	this.shape_309.setTransform(90,431.75);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").ss(1,1,1).p("Anz19IPnAAMAAAAr7IvnAAg");
	this.shape_310.setTransform(90,429.45);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#33A59B").s().p("AnzV9MAAAgr6IPnAAMAAAAr6g");
	this.shape_311.setTransform(90,429.45);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#000000").ss(1,1,1).p("Anz2TIPnAAMAAAAsnIvnAAg");
	this.shape_312.setTransform(90,427.175);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#33A59B").s().p("AnzWUMAAAgsnIPnAAMAAAAsng");
	this.shape_313.setTransform(90,427.175);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#000000").ss(1,1,1).p("Anz2qIPnAAMAAAAtVIvnAAg");
	this.shape_314.setTransform(90,424.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#33A59B").s().p("AnzWrMAAAgtVIPnAAMAAAAtVg");
	this.shape_315.setTransform(90,424.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").ss(1,1,1).p("Anz3BIPnAAMAAAAuDIvnAAg");
	this.shape_316.setTransform(90,422.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#33A59B").s().p("AnzXCMAAAguDIPnAAMAAAAuDg");
	this.shape_317.setTransform(90,422.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(1,1,1).p("Anz3YIPnAAMAAAAuxIvnAAg");
	this.shape_318.setTransform(90,420.325);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#33A59B").s().p("AnzXZMAAAguxIPnAAMAAAAuxg");
	this.shape_319.setTransform(90,420.325);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(1,1,1).p("Anz3vIPnAAMAAAAvfIvnAAg");
	this.shape_320.setTransform(90,418.05);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#33A59B").s().p("AnzXvMAAAgvdIPnAAMAAAAvdg");
	this.shape_321.setTransform(90,418.05);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").ss(1,1,1).p("Anz4GIPnAAMAAAAwNIvnAAg");
	this.shape_322.setTransform(90,415.75);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#33A59B").s().p("AnzYGMAAAgwLIPnAAMAAAAwLg");
	this.shape_323.setTransform(90,415.75);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").ss(1,1,1).p("Anz4cIPnAAMAAAAw5IvnAAg");
	this.shape_324.setTransform(90,413.475);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#33A59B").s().p("AnzYdMAAAgw5IPnAAMAAAAw5g");
	this.shape_325.setTransform(90,413.475);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").ss(1,1,1).p("Anz4zIPnAAMAAAAxnIvnAAg");
	this.shape_326.setTransform(90,411.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#33A59B").s().p("AnzY0MAAAgxnIPnAAMAAAAxng");
	this.shape_327.setTransform(90,411.2);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").ss(1,1,1).p("Anz5KIPnAAMAAAAyVIvnAAg");
	this.shape_328.setTransform(90,408.925);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#33A59B").s().p("AnzZLMAAAgyVIPnAAMAAAAyVg");
	this.shape_329.setTransform(90,408.925);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(1,1,1).p("Anz5hIPnAAMAAAAzDIvnAAg");
	this.shape_330.setTransform(90,406.625);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#33A59B").s().p("AnzZiMAAAgzDIPnAAMAAAAzDg");
	this.shape_331.setTransform(90,406.625);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(1,1,1).p("Anz54IPnAAMAAAAzwIvnAAg");
	this.shape_332.setTransform(90,404.35);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#33A59B").s().p("AnzZ4MAAAgzwIPnAAMAAAAzwg");
	this.shape_333.setTransform(90,404.35);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(1,1,1).p("Anz6OIPnAAMAAAA0dIvnAAg");
	this.shape_334.setTransform(90,402.075);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#33A59B").s().p("AnzaPMAAAg0dIPnAAMAAAA0dg");
	this.shape_335.setTransform(90,402.075);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(1,1,1).p("Anz6lIPnAAMAAAA1LIvnAAg");
	this.shape_336.setTransform(90,399.775);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#33A59B").s().p("AnzamMAAAg1LIPnAAMAAAA1Lg");
	this.shape_337.setTransform(90,399.775);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(1,1,1).p("Anz68IPnAAMAAAA15IvnAAg");
	this.shape_338.setTransform(90,397.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#33A59B").s().p("Anza9MAAAg15IPnAAMAAAA15g");
	this.shape_339.setTransform(90,397.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(1,1,1).p("Anz7TIPnAAMAAAA2nIvnAAg");
	this.shape_340.setTransform(90,395.225);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#33A59B").s().p("AnzbUMAAAg2nIPnAAMAAAA2ng");
	this.shape_341.setTransform(90,395.225);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(1,1,1).p("Anz7qIPnAAMAAAA3VIvnAAg");
	this.shape_342.setTransform(90,392.925);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#33A59B").s().p("AnzbrMAAAg3VIPnAAMAAAA3Vg");
	this.shape_343.setTransform(90,392.925);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(1,1,1).p("Anz8AIPnAAMAAAA4CIvnAAg");
	this.shape_344.setTransform(90,390.65);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#33A59B").s().p("AnzcBMAAAg4BIPnAAMAAAA4Bg");
	this.shape_345.setTransform(90,390.65);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(1,1,1).p("Anz8XIPnAAMAAAA4vIvnAAg");
	this.shape_346.setTransform(90,388.375);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#33A59B").s().p("AnzcYMAAAg4vIPnAAMAAAA4vg");
	this.shape_347.setTransform(90,388.375);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(1,1,1).p("Anz8uIPnAAMAAAA5dIvnAAg");
	this.shape_348.setTransform(90,386.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#33A59B").s().p("AnzcvMAAAg5dIPnAAMAAAA5dg");
	this.shape_349.setTransform(90,386.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(1,1,1).p("Anz9FIPnAAMAAAA6LIvnAAg");
	this.shape_350.setTransform(90,383.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#33A59B").s().p("AnzdGMAAAg6LIPnAAMAAAA6Lg");
	this.shape_351.setTransform(90,383.8);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(1,1,1).p("Anz9cIPnAAMAAAA65IvnAAg");
	this.shape_352.setTransform(90,381.525);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#33A59B").s().p("AnzddMAAAg65IPnAAMAAAA65g");
	this.shape_353.setTransform(90,381.525);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(1,1,1).p("Anz9zIPnAAMAAAA7nIvnAAg");
	this.shape_354.setTransform(90,379.25);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#33A59B").s().p("AnzdzMAAAg7mIPnAAMAAAA7mg");
	this.shape_355.setTransform(90,379.25);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(1,1,1).p("Anz+JIPnAAMAAAA8UIvnAAg");
	this.shape_356.setTransform(90,376.95);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#33A59B").s().p("AnzeKMAAAg8UIPnAAMAAAA8Ug");
	this.shape_357.setTransform(90,376.95);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(1,1,1).p("Anz+gIPnAAMAAAA9BIvnAAg");
	this.shape_358.setTransform(90,374.675);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#33A59B").s().p("AnzehMAAAg9BIPnAAMAAAA9Bg");
	this.shape_359.setTransform(90,374.675);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(1,1,1).p("Anz+3IPnAAMAAAA9vIvnAAg");
	this.shape_360.setTransform(90,372.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#33A59B").s().p("Anze4MAAAg9vIPnAAMAAAA9vg");
	this.shape_361.setTransform(90,372.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").ss(1,1,1).p("Anz/OIPnAAMAAAA+dIvnAAg");
	this.shape_362.setTransform(90,370.125);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#33A59B").s().p("AnzfPMAAAg+dIPnAAMAAAA+dg");
	this.shape_363.setTransform(90,370.125);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").ss(1,1,1).p("Anz/lIPnAAMAAAA/LIvnAAg");
	this.shape_364.setTransform(90,367.825);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#33A59B").s().p("AnzfmMAAAg/LIPnAAMAAAA/Lg");
	this.shape_365.setTransform(90,367.825);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").ss(1,1,1).p("Anz/8IPnAAMAAAA/5IvnAAg");
	this.shape_366.setTransform(90,365.55);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#33A59B").s().p("Anzf8MAAAg/4IPnAAMAAAA/4g");
	this.shape_367.setTransform(90,365.55);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").ss(1,1,1).p("EgHzggSIPnAAMAAABAlIvnAAg");
	this.shape_368.setTransform(90,363.275);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#33A59B").s().p("EgHzAgTMAAAhAlIPnAAMAAABAlg");
	this.shape_369.setTransform(90,363.275);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").ss(1,1,1).p("EgHzggpIPnAAMAAABBTIvnAAg");
	this.shape_370.setTransform(90,360.975);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#33A59B").s().p("EgHzAgqMAAAhBTIPnAAMAAABBTg");
	this.shape_371.setTransform(90,360.975);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").ss(1,1,1).p("EgHzghAIPnAAMAAABCBIvnAAg");
	this.shape_372.setTransform(90,358.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#33A59B").s().p("EgHzAhBMAAAhCBIPnAAMAAABCBg");
	this.shape_373.setTransform(90,358.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(1,1,1).p("EgHzghXIPnAAMAAABCvIvnAAg");
	this.shape_374.setTransform(90,356.425);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#33A59B").s().p("EgHzAhYMAAAhCvIPnAAMAAABCvg");
	this.shape_375.setTransform(90,356.425);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(1,1,1).p("EgHzghuIPnAAMAAABDdIvnAAg");
	this.shape_376.setTransform(90,354.125);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#33A59B").s().p("EgHzAhvMAAAhDdIPnAAMAAABDdg");
	this.shape_377.setTransform(90,354.125);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(1,1,1).p("EgHzgiFIPnAAMAAABELIvnAAg");
	this.shape_378.setTransform(90,351.85);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#33A59B").s().p("EgHzAiFMAAAhEJIPnAAMAAABEJg");
	this.shape_379.setTransform(90,351.85);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(1,1,1).p("EgHzgibIPnAAMAAABE3IvnAAg");
	this.shape_380.setTransform(90,349.575);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#33A59B").s().p("EgHzAicMAAAhE3IPnAAMAAABE3g");
	this.shape_381.setTransform(90,349.575);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(1,1,1).p("EgHzgiyIPnAAMAAABFlIvnAAg");
	this.shape_382.setTransform(90,347.275);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#33A59B").s().p("EgHzAizMAAAhFlIPnAAMAAABFlg");
	this.shape_383.setTransform(90,347.275);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(1,1,1).p("EgHzgjJIPnAAMAAABGTIvnAAg");
	this.shape_384.setTransform(90,345);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#33A59B").s().p("EgHzAjKMAAAhGTIPnAAMAAABGTg");
	this.shape_385.setTransform(90,345);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(1,1,1).p("EgHzgjgIPnAAMAAABHBIvnAAg");
	this.shape_386.setTransform(90,342.725);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#33A59B").s().p("EgHzAjhMAAAhHBIPnAAMAAABHBg");
	this.shape_387.setTransform(90,342.725);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(1,1,1).p("EgHzgj3IPnAAMAAABHvIvnAAg");
	this.shape_388.setTransform(90,340.45);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#33A59B").s().p("EgHzAj3MAAAhHuIPnAAMAAABHug");
	this.shape_389.setTransform(90,340.45);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(1,1,1).p("EgHzgkNIPnAAMAAABIcIvnAAg");
	this.shape_390.setTransform(90,338.15);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#33A59B").s().p("EgHzAkOMAAAhIcIPnAAMAAABIcg");
	this.shape_391.setTransform(90,338.15);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(1,1,1).p("EgHzgkkIPnAAMAAABJJIvnAAg");
	this.shape_392.setTransform(90,335.875);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#33A59B").s().p("EgHzAklMAAAhJJIPnAAMAAABJJg");
	this.shape_393.setTransform(90,335.875);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").ss(1,1,1).p("EgHzgk7IPnAAMAAABJ3IvnAAg");
	this.shape_394.setTransform(90,333.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#33A59B").s().p("EgHzAk8MAAAhJ3IPnAAMAAABJ3g");
	this.shape_395.setTransform(90,333.6);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").ss(1,1,1).p("EgHzglSIPnAAMAAABKlIvnAAg");
	this.shape_396.setTransform(90,331.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#33A59B").s().p("EgHzAlTMAAAhKlIPnAAMAAABKlg");
	this.shape_397.setTransform(90,331.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(1,1,1).p("EgHzglpIPnAAMAAABLTIvnAAg");
	this.shape_398.setTransform(90,329.025);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#33A59B").s().p("EgHzAlqMAAAhLTIPnAAMAAABLTg");
	this.shape_399.setTransform(90,329.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_201},{t:this.shape_200}]}).to({state:[{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_207},{t:this.shape_206}]},1).to({state:[{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_211},{t:this.shape_210}]},1).to({state:[{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_219},{t:this.shape_218}]},1).to({state:[{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_223},{t:this.shape_222}]},1).to({state:[{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_227},{t:this.shape_226}]},1).to({state:[{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_231},{t:this.shape_230}]},1).to({state:[{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_235},{t:this.shape_234}]},1).to({state:[{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_239},{t:this.shape_238}]},1).to({state:[{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_243},{t:this.shape_242}]},1).to({state:[{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_247},{t:this.shape_246}]},1).to({state:[{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_251},{t:this.shape_250}]},1).to({state:[{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_255},{t:this.shape_254}]},1).to({state:[{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_259},{t:this.shape_258}]},1).to({state:[{t:this.shape_261},{t:this.shape_260}]},1).to({state:[{t:this.shape_263},{t:this.shape_262}]},1).to({state:[{t:this.shape_265},{t:this.shape_264}]},1).to({state:[{t:this.shape_267},{t:this.shape_266}]},1).to({state:[{t:this.shape_269},{t:this.shape_268}]},1).to({state:[{t:this.shape_271},{t:this.shape_270}]},1).to({state:[{t:this.shape_273},{t:this.shape_272}]},1).to({state:[{t:this.shape_275},{t:this.shape_274}]},1).to({state:[{t:this.shape_277},{t:this.shape_276}]},1).to({state:[{t:this.shape_279},{t:this.shape_278}]},1).to({state:[{t:this.shape_281},{t:this.shape_280}]},1).to({state:[{t:this.shape_283},{t:this.shape_282}]},1).to({state:[{t:this.shape_285},{t:this.shape_284}]},1).to({state:[{t:this.shape_287},{t:this.shape_286}]},1).to({state:[{t:this.shape_289},{t:this.shape_288}]},1).to({state:[{t:this.shape_291},{t:this.shape_290}]},1).to({state:[{t:this.shape_293},{t:this.shape_292}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_297},{t:this.shape_296}]},1).to({state:[{t:this.shape_299},{t:this.shape_298}]},1).to({state:[{t:this.shape_301},{t:this.shape_300}]},1).to({state:[{t:this.shape_303},{t:this.shape_302}]},1).to({state:[{t:this.shape_305},{t:this.shape_304}]},1).to({state:[{t:this.shape_307},{t:this.shape_306}]},1).to({state:[{t:this.shape_309},{t:this.shape_308}]},1).to({state:[{t:this.shape_311},{t:this.shape_310}]},1).to({state:[{t:this.shape_313},{t:this.shape_312}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_317},{t:this.shape_316}]},1).to({state:[{t:this.shape_319},{t:this.shape_318}]},1).to({state:[{t:this.shape_321},{t:this.shape_320}]},1).to({state:[{t:this.shape_323},{t:this.shape_322}]},1).to({state:[{t:this.shape_325},{t:this.shape_324}]},1).to({state:[{t:this.shape_327},{t:this.shape_326}]},1).to({state:[{t:this.shape_329},{t:this.shape_328}]},1).to({state:[{t:this.shape_331},{t:this.shape_330}]},1).to({state:[{t:this.shape_333},{t:this.shape_332}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_337},{t:this.shape_336}]},1).to({state:[{t:this.shape_339},{t:this.shape_338}]},1).to({state:[{t:this.shape_341},{t:this.shape_340}]},1).to({state:[{t:this.shape_343},{t:this.shape_342}]},1).to({state:[{t:this.shape_345},{t:this.shape_344}]},1).to({state:[{t:this.shape_347},{t:this.shape_346}]},1).to({state:[{t:this.shape_349},{t:this.shape_348}]},1).to({state:[{t:this.shape_351},{t:this.shape_350}]},1).to({state:[{t:this.shape_353},{t:this.shape_352}]},1).to({state:[{t:this.shape_355},{t:this.shape_354}]},1).to({state:[{t:this.shape_357},{t:this.shape_356}]},1).to({state:[{t:this.shape_359},{t:this.shape_358}]},1).to({state:[{t:this.shape_361},{t:this.shape_360}]},1).to({state:[{t:this.shape_363},{t:this.shape_362}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_369},{t:this.shape_368}]},1).to({state:[{t:this.shape_371},{t:this.shape_370}]},1).to({state:[{t:this.shape_373},{t:this.shape_372}]},1).to({state:[{t:this.shape_375},{t:this.shape_374}]},1).to({state:[{t:this.shape_377},{t:this.shape_376}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_381},{t:this.shape_380}]},1).to({state:[{t:this.shape_383},{t:this.shape_382}]},1).to({state:[{t:this.shape_385},{t:this.shape_384}]},1).to({state:[{t:this.shape_387},{t:this.shape_386}]},1).to({state:[{t:this.shape_389},{t:this.shape_388}]},1).to({state:[{t:this.shape_391},{t:this.shape_390}]},1).to({state:[{t:this.shape_393},{t:this.shape_392}]},1).to({state:[{t:this.shape_395},{t:this.shape_394}]},1).to({state:[{t:this.shape_397},{t:this.shape_396}]},1).to({state:[{t:this.shape_399},{t:this.shape_398}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(439,387.1,252.60000000000002,184);
// library properties:
lib.properties = {
	id: '5A77B662C7494C25BE6FB09BB96679A8',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
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
an.compositions['5A77B662C7494C25BE6FB09BB96679A8'] = {
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