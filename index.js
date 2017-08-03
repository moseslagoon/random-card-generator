
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
var nStage = new Container();
var renderer = autoDetectRenderer(canvasWidth, canvasHeight);
document.body.appendChild(renderer.view);

var backgrounds;

function init(){

    backgrounds = [];

    backgrounds.push(new Sprite.fromImage("Backgrounds/bg_1.jpg"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/Scroll4.bmp"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/Wood.bmp"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/Blizzard.bmp"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/BurntWater.bmp"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/Clouds.bmp"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/Desert.bmp"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/Ice.bmp"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/Steel.bmp"));

    randomizeCard();

    requestAnimationFrame(update);
}

function load(){
    loader
        .add("Backgrounds/bg_1.jpg")
        .add("Backgrounds/Scroll4.bmp")
        .add("Backgrounds/Wood.bmp")
        .add("Backgrounds/Blizzard.bmp")
        .add("Backgrounds/BurntWater.bmp")
        .add("Backgrounds/Clouds.bmp")
        .add("Backgrounds/Desert.bmp")
        .add("Backgrounds/Ice.bmp")
        .add("Backgrounds/Steel.bmp")
        .load(init);
}

function update(){

    renderer.render(stage);
    requestAnimationFrame(update);
}

function randomizeCard(){
    nStage.removeChildren();

    randomizeBackground();


    stage = nStage;
}

function randomizeBackground(){
    // Background Selection
    var randomBG = Math.floor(Math.random() * backgrounds.length);
    nStage.addChild(backgrounds[randomBG]);
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