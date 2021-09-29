var hp = 0
var hud
var desctxt
var enemy
var button
class rpg extends Phaser.Scene
{
    constructor()
    {
        super('rpg')
    }


    create()
    {
        this.camera = this.cameras.add(0,0,1024,768)
        this.camera.fadeIn(1000, 1.0, 1.0, 1.0, false);
        desctxt = this.add.text(10, 30, '', { fontSize: '18px', fill: '#FFF' });
        button = this.add.text(750, 700, '', { fontSize: '18px', fill: '#FFF' });
        button.setInteractive()
        button.setText('Click aquí para Continuar')
        button.on('pointerdown', () => this.scene.start('acrpg'))
    }
    update()
    {
        queso = 5
        carne = 5
        time += -17
        desctxt.setText('Esa publicidad tenía razon, che...')   
        firsttime = false
    }
}