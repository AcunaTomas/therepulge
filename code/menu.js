var masas = 5
var carne = 5
var huevo = 5
var choclo = 5
var aceituna = 5
var cebolla = 5
var jamon = 5
var queso = 5
var score = 0
var stackingpngs = []
var cuerrentpedido = []
var pedidosrnd = []
var time = 5000
var forh = []
class menu extends Phaser.Scene
{
    constructor()
    {
        super('menu')
    }

    create()
    {
        this.sound.stopAll()
        this.add.image(512,380, 'table')
        this.add.image(512,380, 'logo')
        var d = this.physics.add.sprite(512,700, 'start').anims.play('sta')
        d.setInteractive()
        d.on('pointerdown', () => this.scene.start('Lvl'))
        masas = 5
        carne = 5
        huevo = 5
        choclo = 5
        aceituna = 5
        cebolla = 5
        jamon = 5
        queso = 5
        score = 0
        stackingpngs = []
        cuerrentpedido = []
        pedidosrnd = []
        forh = []
        time = 700000
    }

}
