var hp = 0
var hud
var desctxt
var enemy = []
var selbutton1
var selbutton2
var selbutton3
var attbtn1
var attbtn2
var attbtn3
var door1
var door2
var door3
var selectimg
var battleimg
var bok
var gmover
var gmovertxt
var thecuerrentbicho
var scenestate = 0

var hints = []

class acrpg extends Phaser.Scene
{
    constructor()
    {
        super('acrpg')
    }


    create()
    {
        this.sound.stopAll()
        scenestate = 0
        stackingpngs = []
        enemy = []
        pedidosrnd = []
        forh = []
        hints = []
        cuerrentpedido = []
        this.camera = this.cameras.add(0,0,1024,768)
        this.camera.fadeIn(1000, 1.0, 1.0, 1.0, false);
        selectimg = this.add.image(512,384, 'doorslc')
        firsttime = false

        //values 1 = carne, 2 = queso, 3 = cebolla, 4 = choclo, 5 = jamón, 6 = aceitunas, 7 = huevo
        hints.push(this.physics.add.sprite(290,240, 'labels'))
        hints.push(this.physics.add.sprite(650,230, 'labels'))
        hints.push(this.physics.add.sprite(950,320, 'labels'))


        battleimg = this.add.image(512,384, 'doorfig').setVisible(false)
        enemy.push(this.physics.add.image(512,384, 'e1'))
        enemy.push(this.physics.add.image(512,384, 'e2'))
        enemy.push(this.physics.add.image(512,384, 'e3'))
        enemy.push(this.physics.add.image(512,384, 'e4'))
        enemy.push(this.physics.add.image(512,384, 'e5'))
        enemy.push(this.physics.add.image(512,384, 'e6'))
        enemy.push(this.physics.add.image(512,384, 'e7'))
        var i = 0
        enemy.forEach(function (ene)
        {

            ene.setDataEnabled()
            ene.data.set('type', i)
            ene.setVisible(false)
            i++
        }
        )

        bok = this.physics.add.sprite(512,389, 'bonk').setVisible(false)

        selbutton1 = this.physics.add.sprite(200,630, 'b1').anims.play('b1s')
        selbutton2 = this.physics.add.sprite(500,630, 'b2').anims.play('b2s')
        selbutton3 = this.physics.add.sprite(800,630, 'b3').anims.play('b3s')
        selbutton1.setInteractive()
        selbutton2.setInteractive()
        selbutton3.setInteractive()
        selbutton1.setDataEnabled()
        selbutton2.setDataEnabled()
        selbutton3.setDataEnabled()
        selbutton1.on('pointerdown', () => this.spawnbicho(selbutton1, 'papel'))
        selbutton2.on('pointerdown', () => this.spawnbicho(selbutton2, 'piedra'))
        selbutton3.on('pointerdown', () => this.spawnbicho(selbutton3, 'tijera'))


        desctxt = this.add.text(10, 30, '', { fontSize: '18px', fill: '#FFF' });
        button = this.physics.add.image(950,700, 'cursor')
        button.setInteractive()
        button.on('pointerdown', () => this.scene.start('Lvl'))

        gmover = this.add.image(512,389, 'gver').setVisible(false)
        gmover.setInteractive()
        gmover.on('pointerdown', () => this.scene.start('menu'))

        gmovertxt = this.add.text(512, 545, '', { fontSize: '28px', fill: '#000' });

        desctxt.setText('Que lugar tan raro...')
        dmus.play()
        this.shuffledoors()
    }
    update()
    {
        if (scenestate == 0)
        {
            battleimg.setVisible(false)
            selectimg.setVisible(true)
            selbutton1.anims.play('b1s')
            selbutton2.anims.play('b2s')
            selbutton3.anims.play('b3s')
        }
        else
        {

            battleimg.setVisible(true)
            selectimg.setVisible(false)
            selbutton1.anims.play('b1f')
            selbutton2.anims.play('b2f')
            selbutton3.anims.play('b3f')
            
        }

        time += -17
        if (time < 0)
        {
            this.physics.pause()
            gmover.setVisible(true)
            gmovertxt.setText(score)
            this.sound.stopAll()
        }
    }


    shuffledoors()
    {
        var s1 = Math.floor(Math.random()*7)
        var s2 = Math.floor(Math.random()*7)
        var s3 = Math.floor(Math.random()*7)
        hints[0].anims.play(s1.toString())
        hints[1].anims.play(s2.toString())
        hints[2].anims.play(s3.toString())
        selbutton1.data.set('type', s1)
        selbutton2.data.set('type', s2)
        selbutton3.data.set('type', s3)
    }

    spawnbicho(s, atk)
    {
        if (scenestate == 0)
        {
            enemy.forEach(function (e)
            {
                if (e.data.values.type == s.data.values.type)
                {
                    e.setVisible(true)
                    scenestate = 1
                    thecuerrentbicho = e
                    ms[e.data.values.type].play()
                    desctxt.setText('Salió un bicho!')
                }
            }
            )
        }
        else if(scenestate == 1)
        {
            var eatk
            var options = ['piedra','papel','tijera']
            eatk = options[Math.floor(Math.random() * 3)]
            this.pptdraw(eatk,atk)
        }
        else
        {
            bok.setVisible(false)
            this.shuffledoors()
            scenestate = 0
        }
    }

    pptdraw(eatk, atk)
    {
        if (eatk == 'tijera')
        {
            if (atk == 'piedra')
            {
                //console.log('win')
                this.loot()
                scenestate = 2
            }
            else
            {
                //console.log('ohno')
                score += -5
            }
        }
        else if (eatk == 'papel' )
        {
            if (atk == 'tijera')
            {
                //console.log('win')
                this.loot()
                scenestate = 2
            }
            else
            {
                //console.log('ohno')
                score += -5
            }
        }
        else
        {
            if (atk == 'papel')
            {
                //console.log('win')
                this.loot()
                scenestate = 2
            }
            else
            {
                //console.log('ohno')
                score += -5
            }
        }
    }
    loot()        //values 1 = carne, 2 = queso, 3 = cebolla, 4 = choclo, 5 = jamón, 6 = aceitunas, 7 = huevo
    {
        bok.setVisible(true)
        bok.anims.play('bonke')
        hit.play()
        switch (thecuerrentbicho.data.values.type) {
            case 0:
                carne+= 2
                break;
            case 1:
                queso+= 2
                break;
            case 2:
                cebolla+= 2
                break;
            case 3:
                choclo+= 2
                break;
            case 4:
                jamon+= 2
                break;
            case 5:
                aceituna+=2
                break;
            case 6:
                huevo+=2
                break;
            default:
                break;
        }

        enemy.forEach(function (d)
        {
            d.setVisible(false)
        }
        )
        desctxt.setText('Pulsa cualquier boton para continuar')
    }

}