var config = {
    type: Phaser.WEBGL,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1024,
        height: 768,
    },

    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [Load,menu,Lvl,rpg,acrpg]
    
};


var txt
var time
var dmus
var cmus
var sndcoin
var snd1
var snd2
var snd3
var sl1
var oils
var asar
var ms = []
var hit

var masas = 5
var carne = 5
var huevo = 5
var choclo = 5
var aceituna = 5
var cebolla = 5
var jamon = 5
var queso = 5
var firsttime = true
var game = new Phaser.Game(config);
