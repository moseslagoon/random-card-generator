
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
var c = document.getElementById("myCanvas").appendChild(renderer.view);

var backgrounds, borders;
var phrase, noun, caption;


function init(){

    backgrounds = [];
    borders = [];
    

    backgrounds.push(new Sprite.fromImage("Backgrounds/bg_1.jpg"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/Scroll4.bmp"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/Wood.bmp"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/Blizzard.bmp"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/BurntWater.bmp"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/Clouds.bmp"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/Desert.bmp"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/Ice.bmp"));
    backgrounds.push(new Sprite.fromImage("Backgrounds/Steel.bmp"));

    borders.push(new Sprite.fromImage("Borders/Rose.png"));
    borders.push(new Sprite.fromImage("Borders/Party.png"));
    borders.push(new Sprite.fromImage("Borders/Hearts.png"));
    borders.push(new Sprite.fromImage("Borders/Circuit.png"));
    borders.push(new Sprite.fromImage("Borders/Emoji.png"));

    for(var i =0; i < backgrounds.length; i++){
        backgrounds[i].width = canvasWidth;
        backgrounds[i].height = canvasHeight;
    }

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
        .add("Borders/Rose.png")
        .add("Borders/Party.png")
        .add("Borders/Hearts.png")
        .add("Borders/Circuit.png")
        .add("Borders/Emoji.png")
        .load(init);
}

function update(){

    renderer.render(stage);
    requestAnimationFrame(update);
}

function randomizeCard(){
    nStage.removeChildren();

    randomizeBackground();

    // Gives background a nice faded out effect
    var w = new Graphics();
    w.beginFill(0xF0F0F0);
    w.drawRect(0,0,canvasWidth, canvasHeight);
    w.endFill();
    w.alpha = 0.4;
    nStage.addChild(w);

    randomizeBorder();
    randomizeCaption();
    randomizePhrase();
    randomizeNouns();
    phrase = phrase.replace("<noun>", "noun.text");
    stage = nStage;
}

function randomizeBackground(){
    // Background Selection
    var randomBG = Math.floor(Math.random() * backgrounds.length);
    nStage.addChild(backgrounds[randomBG]);
}

function randomizeBorder(){
    var random = Math.floor(Math.random() * borders.length);
    nStage.addChild(borders[random]);
}

function randomizePhrase(){
    var random = Math.floor(Math.random() * Phrases.length);
    phrase = new Text(
        Phrases[random],
        {fontFamily: "Georgia",
         fontSize: 32,
         fill: "black",
         wordWrap: true,
         wordWrapWidth:350,
         align: "center"}
    );
    phrase.anchor.set(0.5,0.5);
    phrase.position.set(canvasWidth / 2, 375);
    nStage.addChild(phrase);
}

function randomizeNouns(){
    var random = Math.floor(Math.random() * Nouns.length);
    noun = new Text(
        Nouns[random],
        {fontFamily: "Georgia",
         fontSize: 32,
         fill: "black",
         wordWrap: true,
         wordWrapWidth:350,
         align: "center"}
    );
    noun.anchor.set(0.5,0);
    noun.position.set(canvasWidth / 2, phrase.position.y + phrase.height - (phrase.height / 2) + 2);
    nStage.addChild(noun);
}

function randomizeCaption(){
    var random = Math.floor(Math.random() * Captions.length);
    caption = new Text(
        Captions[random],
        {
            fontFamily: "Palatino Linotype",
            fontSize: 40,
            fill: "black",
            wordWrap: true,
            wordWrapWidth: 350,
            align: "center"
        }
    );
    caption.anchor.set(0.5,0.5);
    caption.position.set(canvasWidth / 2, 175);
    nStage.addChild(caption);
}

function setCaption(){
    
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