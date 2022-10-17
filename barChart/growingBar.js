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



(lib.button2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AExGxIpCAQIjCogIHKlhIHdFHg");
	this.shape.setTransform(0,-44.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33CC99").s().p("AnShfIHJlhIHcFHIijIpIpBARg");
	this.shape_1.setTransform(0,-44.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AnShfIHJlhIHcFHIijIpIpBARg");
	this.shape_2.setTransform(0,-44.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF33FF").s().p("AnShfIHJlhIHcFHIijIpIpBARg");
	this.shape_3.setTransform(0,-44.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-90.7,95.5,91.7);


// stage content:
(lib.growingBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,60];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.button_1.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.play();
		}
	}
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60).call(this.frame_60).wait(1));

	// btn
	this.button_1 = new lib.button2();
	this.button_1.name = "button_1";
	this.button_1.setTransform(190,289.95,1,1,0,0,0,0,-44.9);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.button2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(61));

	// bar
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmPgxIMfAAIAABjIsfAAg");
	this.shape.setTransform(70,335);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF33FF").s().p("AmPAyIAAhjIMfAAIAABjg");
	this.shape_1.setTransform(70,335);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AmPhCIMfAAIAACFIsfAAg");
	this.shape_2.setTransform(70,333.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF33FF").s().p("AmPBDIAAiFIMfAAIAACFg");
	this.shape_3.setTransform(70,333.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AmPhTIMfAAIAACnIsfAAg");
	this.shape_4.setTransform(70,331.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF33FF").s().p("AmPBUIAAinIMfAAIAACng");
	this.shape_5.setTransform(70,331.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AmPhkIMfAAIAADJIsfAAg");
	this.shape_6.setTransform(70,330.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF33FF").s().p("AmPBlIAAjJIMfAAIAADJg");
	this.shape_7.setTransform(70,330.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AmPh1IMfAAIAADrIsfAAg");
	this.shape_8.setTransform(70,328.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF33FF").s().p("AmPB2IAAjrIMfAAIAADrg");
	this.shape_9.setTransform(70,328.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AmPiGIMfAAIAAENIsfAAg");
	this.shape_10.setTransform(70,327.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF33FF").s().p("AmPCHIAAkNIMfAAIAAENg");
	this.shape_11.setTransform(70,327.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AmPiYIMfAAIAAExIsfAAg");
	this.shape_12.setTransform(70,325.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF33FF").s().p("AmPCZIAAkwIMfAAIAAEwg");
	this.shape_13.setTransform(70,325.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AmPipIMfAAIAAFSIsfAAg");
	this.shape_14.setTransform(70,323.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF33FF").s().p("AmPCqIAAlTIMfAAIAAFTg");
	this.shape_15.setTransform(70,323.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AmPi5IMfAAIAAFzIsfAAg");
	this.shape_16.setTransform(70,322.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF33FF").s().p("AmPC7IAAl1IMfAAIAAF1g");
	this.shape_17.setTransform(70,322.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AmPjLIMfAAIAAGXIsfAAg");
	this.shape_18.setTransform(70,320.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF33FF").s().p("AmPDMIAAmXIMfAAIAAGXg");
	this.shape_19.setTransform(70,320.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AmPjcIMfAAIAAG5IsfAAg");
	this.shape_20.setTransform(70,319.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF33FF").s().p("AmPDdIAAm5IMfAAIAAG5g");
	this.shape_21.setTransform(70,319.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AmPjtIMfAAIAAHbIsfAAg");
	this.shape_22.setTransform(70,317.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF33FF").s().p("AmPDuIAAnbIMfAAIAAHbg");
	this.shape_23.setTransform(70,317.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AmPj+IMfAAIAAH9IsfAAg");
	this.shape_24.setTransform(70,315.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF33FF").s().p("AmPD/IAAn9IMfAAIAAH9g");
	this.shape_25.setTransform(70,315.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AmPkPIMfAAIAAIfIsfAAg");
	this.shape_26.setTransform(70,314.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF33FF").s().p("AmPEQIAAofIMfAAIAAIfg");
	this.shape_27.setTransform(70,314.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AmPkgIMfAAIAAJBIsfAAg");
	this.shape_28.setTransform(70,312.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF33FF").s().p("AmPEhIAApBIMfAAIAAJBg");
	this.shape_29.setTransform(70,312.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AmPkxIMfAAIAAJjIsfAAg");
	this.shape_30.setTransform(70,311.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF33FF").s().p("AmPEyIAApjIMfAAIAAJjg");
	this.shape_31.setTransform(70,311.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AmPlCIMfAAIAAKFIsfAAg");
	this.shape_32.setTransform(70,309.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF33FF").s().p("AmPFDIAAqFIMfAAIAAKFg");
	this.shape_33.setTransform(70,309.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AmPlTIMfAAIAAKnIsfAAg");
	this.shape_34.setTransform(70,307.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF33FF").s().p("AmPFUIAAqnIMfAAIAAKng");
	this.shape_35.setTransform(70,307.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AmPlkIMfAAIAALJIsfAAg");
	this.shape_36.setTransform(70,306.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF33FF").s().p("AmPFlIAArJIMfAAIAALJg");
	this.shape_37.setTransform(70,306.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AmPl1IMfAAIAALrIsfAAg");
	this.shape_38.setTransform(70,304.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF33FF").s().p("AmPF2IAArsIMfAAIAALsg");
	this.shape_39.setTransform(70,304.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AmPmGIMfAAIAAMOIsfAAg");
	this.shape_40.setTransform(70,303.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF33FF").s().p("AmPGHIAAsOIMfAAIAAMOg");
	this.shape_41.setTransform(70,303.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AmPmXIMfAAIAAMwIsfAAg");
	this.shape_42.setTransform(70,301.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF33FF").s().p("AmPGYIAAsvIMfAAIAAMvg");
	this.shape_43.setTransform(70,301.55);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("AmPmpIMfAAIAANTIsfAAg");
	this.shape_44.setTransform(70,299.975);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF33FF").s().p("AmPGqIAAtTIMfAAIAANTg");
	this.shape_45.setTransform(70,299.975);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AmPm6IMfAAIAAN1IsfAAg");
	this.shape_46.setTransform(70,298.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF33FF").s().p("AmPG7IAAt1IMfAAIAAN1g");
	this.shape_47.setTransform(70,298.375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AmPnLIMfAAIAAOXIsfAAg");
	this.shape_48.setTransform(70,296.775);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF33FF").s().p("AmPHMIAAuXIMfAAIAAOXg");
	this.shape_49.setTransform(70,296.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("AmPncIMfAAIAAO5IsfAAg");
	this.shape_50.setTransform(70,295.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF33FF").s().p("AmPHdIAAu5IMfAAIAAO5g");
	this.shape_51.setTransform(70,295.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("AmPntIMfAAIAAPbIsfAAg");
	this.shape_52.setTransform(70,293.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF33FF").s().p("AmPHuIAAvbIMfAAIAAPbg");
	this.shape_53.setTransform(70,293.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("AmPn+IMfAAIAAP9IsfAAg");
	this.shape_54.setTransform(70,292);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF33FF").s().p("AmPH/IAAv9IMfAAIAAP9g");
	this.shape_55.setTransform(70,292);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("AmPoPIMfAAIAAQfIsfAAg");
	this.shape_56.setTransform(70,290.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF33FF").s().p("AmPIQIAAwfIMfAAIAAQfg");
	this.shape_57.setTransform(70,290.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("AmPogIMfAAIAARBIsfAAg");
	this.shape_58.setTransform(70,288.825);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF33FF").s().p("AmPIhIAAxBIMfAAIAARBg");
	this.shape_59.setTransform(70,288.825);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("AmPoxIMfAAIAARjIsfAAg");
	this.shape_60.setTransform(70,287.225);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF33FF").s().p("AmPIyIAAxjIMfAAIAARjg");
	this.shape_61.setTransform(70,287.225);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1).p("AmPpDIMfAAIAASGIsfAAg");
	this.shape_62.setTransform(70,285.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF33FF").s().p("AmPJDIAAyGIMfAAIAASGg");
	this.shape_63.setTransform(70,285.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("AmPpUIMfAAIAASpIsfAAg");
	this.shape_64.setTransform(70,284.025);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF33FF").s().p("AmPJVIAAypIMfAAIAASpg");
	this.shape_65.setTransform(70,284.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AmPplIMfAAIAATLIsfAAg");
	this.shape_66.setTransform(70,282.425);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF33FF").s().p("AmPJmIAAzLIMfAAIAATLg");
	this.shape_67.setTransform(70,282.425);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AmPp2IMfAAIAATtIsfAAg");
	this.shape_68.setTransform(70,280.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF33FF").s().p("AmPJ3IAAztIMfAAIAATtg");
	this.shape_69.setTransform(70,280.825);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("AmPqHIMfAAIAAUPIsfAAg");
	this.shape_70.setTransform(70,279.225);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF33FF").s().p("AmPKIIAA0PIMfAAIAAUPg");
	this.shape_71.setTransform(70,279.225);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1,1,1).p("AmPqYIMfAAIAAUxIsfAAg");
	this.shape_72.setTransform(70,277.65);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF33FF").s().p("AmPKZIAA0xIMfAAIAAUxg");
	this.shape_73.setTransform(70,277.65);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1,1,1).p("AmPqpIMfAAIAAVTIsfAAg");
	this.shape_74.setTransform(70,276.05);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF33FF").s().p("AmPKqIAA1TIMfAAIAAVTg");
	this.shape_75.setTransform(70,276.05);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1).p("AmPq6IMfAAIAAV1IsfAAg");
	this.shape_76.setTransform(70,274.45);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF33FF").s().p("AmPK7IAA11IMfAAIAAV1g");
	this.shape_77.setTransform(70,274.45);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1,1,1).p("AmPrLIMfAAIAAWXIsfAAg");
	this.shape_78.setTransform(70,272.875);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF33FF").s().p("AmPLMIAA2XIMfAAIAAWXg");
	this.shape_79.setTransform(70,272.875);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(1,1,1).p("AmPrcIMfAAIAAW5IsfAAg");
	this.shape_80.setTransform(70,271.275);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF33FF").s().p("AmPLdIAA25IMfAAIAAW5g");
	this.shape_81.setTransform(70,271.275);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(1,1,1).p("AmPrtIMfAAIAAXbIsfAAg");
	this.shape_82.setTransform(70,269.675);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF33FF").s().p("AmPLuIAA3bIMfAAIAAXbg");
	this.shape_83.setTransform(70,269.675);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(1,1,1).p("AmPr/IMfAAIAAX/IsfAAg");
	this.shape_84.setTransform(70,268.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF33FF").s().p("AmPMAIAA3/IMfAAIAAX/g");
	this.shape_85.setTransform(70,268.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(1,1,1).p("AmPsPIMfAAIAAYfIsfAAg");
	this.shape_86.setTransform(70,266.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF33FF").s().p("AmPMRIAA4hIMfAAIAAYhg");
	this.shape_87.setTransform(70,266.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(1,1,1).p("AmPsgIMfAAIAAZCIsfAAg");
	this.shape_88.setTransform(70,264.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF33FF").s().p("AmPMiIAA5CIMfAAIAAZCg");
	this.shape_89.setTransform(70,264.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1,1,1).p("AmPsyIMfAAIAAZlIsfAAg");
	this.shape_90.setTransform(70,263.325);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF33FF").s().p("AmPMzIAA5lIMfAAIAAZlg");
	this.shape_91.setTransform(70,263.325);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1,1,1).p("AmPtDIMfAAIAAaHIsfAAg");
	this.shape_92.setTransform(70,261.725);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF33FF").s().p("AmPNEIAA6HIMfAAIAAaHg");
	this.shape_93.setTransform(70,261.725);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(1,1,1).p("AmPtUIMfAAIAAapIsfAAg");
	this.shape_94.setTransform(70,260.125);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF33FF").s().p("AmPNVIAA6pIMfAAIAAapg");
	this.shape_95.setTransform(70,260.125);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1,1,1).p("AmPtlIMfAAIAAbLIsfAAg");
	this.shape_96.setTransform(70,258.525);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF33FF").s().p("AmPNmIAA7LIMfAAIAAbLg");
	this.shape_97.setTransform(70,258.525);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(1,1,1).p("AmPt2IMfAAIAAbtIsfAAg");
	this.shape_98.setTransform(70,256.95);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF33FF").s().p("AmPN3IAA7tIMfAAIAAbtg");
	this.shape_99.setTransform(70,256.95);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(1,1,1).p("AmPuHIMfAAIAAcPIsfAAg");
	this.shape_100.setTransform(70,255.35);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF33FF").s().p("AmPOIIAA8PIMfAAIAAcPg");
	this.shape_101.setTransform(70,255.35);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(1,1,1).p("AmPuYIMfAAIAAcxIsfAAg");
	this.shape_102.setTransform(70,253.75);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF33FF").s().p("AmPOZIAA8xIMfAAIAAcxg");
	this.shape_103.setTransform(70,253.75);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(1,1,1).p("AmPupIMfAAIAAdTIsfAAg");
	this.shape_104.setTransform(70,252.175);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF33FF").s().p("AmPOqIAA9TIMfAAIAAdTg");
	this.shape_105.setTransform(70,252.175);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(1,1,1).p("AmPu6IMfAAIAAd1IsfAAg");
	this.shape_106.setTransform(70,250.575);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF33FF").s().p("AmPO7IAA91IMfAAIAAd1g");
	this.shape_107.setTransform(70,250.575);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(1,1,1).p("AmPvLIMfAAIAAeXIsfAAg");
	this.shape_108.setTransform(70,248.975);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF33FF").s().p("AmPPMIAA+XIMfAAIAAeXg");
	this.shape_109.setTransform(70,248.975);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(1,1,1).p("AmPvdIMfAAIAAe7IsfAAg");
	this.shape_110.setTransform(70,247.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF33FF").s().p("AmPPdIAA+6IMfAAIAAe6g");
	this.shape_111.setTransform(70,247.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(1,1,1).p("AmPvuIMfAAIAAfcIsfAAg");
	this.shape_112.setTransform(70,245.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF33FF").s().p("AmPPuIAA/bIMfAAIAAfbg");
	this.shape_113.setTransform(70,245.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(1,1,1).p("AmPv/IMfAAIAAf/IsfAAg");
	this.shape_114.setTransform(70,244.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF33FF").s().p("AmPQAIAA//IMfAAIAAf/g");
	this.shape_115.setTransform(70,244.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1,1,1).p("AmPwPIMfAAMAAAAgfIsfAAg");
	this.shape_116.setTransform(70,242.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF33FF").s().p("AmPQRMAAAgghIMfAAMAAAAghg");
	this.shape_117.setTransform(70,242.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(1,1,1).p("AmPwhIMfAAMAAAAhDIsfAAg");
	this.shape_118.setTransform(70,241.025);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF33FF").s().p("AmPQiMAAAghDIMfAAMAAAAhDg");
	this.shape_119.setTransform(70,241.025);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1,1,1).p("AmPwyIMfAAMAAAAhlIsfAAg");
	this.shape_120.setTransform(70,239.425);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF33FF").s().p("AmPQzMAAAghlIMfAAMAAAAhlg");
	this.shape_121.setTransform(70,239.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(429,431,-191.2,-83.10000000000002);
// library properties:
lib.properties = {
	id: 'D39E5DF50179489DA04898C884BAAE4C',
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
an.compositions['D39E5DF50179489DA04898C884BAAE4C'] = {
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