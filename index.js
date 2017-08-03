
//Aliases
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Texture = PIXI.Texture,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    Graphics = PIXI.Graphics;

var canvasWidth = 500;
var canvasHeight = 700;

var stage = new Container();
var renderer = autoDetectRenderer(canvasWidth, canvasHeight);
document.body.appendChild(renderer.view);

var backgrounds;

function init(){

    backgrounds = [];

    backgrounds.push(new Sprite.fromImage("images/bg_1.jpg"));

    randomizeCard();

    requestAnimationFrame(update);
}

function load(){
    loader
        .add("images/bg_1.jpg")
        .load(init);
}

function update(){

    renderer.render(stage);
    requestAnimationFrame(update);
}

function randomizeCard(){
    var nStage = new Container();

    nStage.addChild(backgrounds[0]);

    stage = nStage;
}

load();

// var left = new Graphics();
// left.beginFill(0xFF0000);
// left.drawRect(0,0,60,700);
// left.drawRect(440,0,60,700);
// left.drawRect(0,0,500,60);
// left.drawRect(0,640,500,60);
// left.drawRect(0,550,125,150);
// left.drawRect(375,550,125,150);
// left.endFill();
// stage.addChild(left);

// var t = new Graphics();
// t.beginFill(0x0000FF);
// t.drawRect(75,75,350,125);
// t.drawRect(75,300,350,100);
// t.drawRect(75,425,350,100);
// t.drawRect(150,550,200,75);
// t.endFill();
// stage.addChild(t);