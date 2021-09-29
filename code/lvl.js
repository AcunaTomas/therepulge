var a
var ctime = 5000
var cursor //carne
var banana //queso
var cebollas
var jamones
var choclos
var dbtn
var huevos
var tin
var aceitunas
var banados
var panadastate = 0
var gmover
var gmovertxt
var scortxt

var card1
var card2
var card3

var fh1
var fh2
var fh3

var ings

var sword1
var sword2
var sword3

var menubutton

var hgroup
var fgroup

//values 1 = carne, 2 = queso, 3 = cebolla, 4 = choclo, 5 = jamón, 6 = aceitunas, 7 = huevo
const pedidos = [[1,2],[2,1],[1,3],[2,3],[1,4],[2,4],[3,4],[1,5],[2,5],[3,5],[4,5],[1,6],[2,5],[1,4,2],[1,7,6]]
pedidosrnd = []
cuerrentpedido = []
forh = []
var cook = false
var emitter
var prompts
var fry
var horn

class Lvl extends Phaser.Scene
{
    constructor()
    {
        super('Lvl')
    }

    create()
    {
        this.sound.stopAll()
        cmus.play()
        emitter = new Phaser.Events.EventEmitter()
        this.add.image(512,380, 'table')


        dbtn = this.physics.add.sprite(103,670).anims.play('dnga')
        dbtn.setInteractive()
        dbtn.on('pointerdown', () => this.dung())
        if (firsttime == true)
        {
            dbtn.setVisible(false)
        }
        menubutton = this.physics.add.sprite(103,730).anims.play('men1')
        menubutton.setInteractive()
        menubutton.on('pointerdown', () => this.menu())

        txt = this.add.text(10, 30, '', { fontSize: '18px', fill: '#000' });
        scortxt = this.add.text(10, 600, '', { fontSize: '22px', fill: '#000' });
        //tin = this.add.text(10, 700, '', { fontSize: '18px', fill: '#FFF' });
        //tin.setText('turn in')
        //tin.setInteractive()
        //tin.on('pointerdown', () => this.turnin(cuerrentpedido))

        card1 = this.add.image(340,680, 'card')
        card2 = this.add.image(610,680, 'card')
        card3 = this.add.image(880,680, 'card')
        sword1 = this.add.image(280,680, 'sword1')
        sword2 = this.add.image(550,680, 'sword2')
        sword3 = this.add.image(820,680, 'sword3')
        sword1.setInteractive()
        sword2.setInteractive()
        sword3.setInteractive()
        sword1.on('pointerdown',() => this.turnin(cuerrentpedido, 0, sword1))
        sword2.on('pointerdown',() => this.turnin(cuerrentpedido, 1, sword2))
        sword3.on('pointerdown',() => this.turnin(cuerrentpedido, 2, sword3))

        fh1 = []
        fh2 = []
        fh3 = []
        fh1.push(this.add.image(370,640, 'hornito').setScale(0.8).setVisible(false))
        fh1.push(this.add.image(370,640, 'freidora').setScale(0.8).setVisible(false))
        fh2.push(this.add.image(640,640, 'hornito').setScale(0.8).setVisible(false))
        fh2.push(this.add.image(640,640, 'freidora').setScale(0.8).setVisible(false))
        fh3.push(this.add.image(910,640, 'hornito').setScale(0.8).setVisible(false))
        fh3.push(this.add.image(910,640, 'freidora').setScale(0.8).setVisible(false))


        ings = []
        ings.push(this.physics.add.sprite(430,640, 'labels').anims.play('7').setScale(0.7))
        ings.push(this.physics.add.sprite(430,710, 'labels').anims.play('7').setScale(0.7))
        ings.push(this.physics.add.sprite(370,710, 'labels').anims.play('7').setScale(0.7))
        ings.push(this.physics.add.sprite(700,640, 'labels').anims.play('7').setScale(0.7))
        ings.push(this.physics.add.sprite(700,710, 'labels').anims.play('7').setScale(0.7))
        ings.push(this.physics.add.sprite(640,710, 'labels').anims.play('7').setScale(0.7))
        ings.push(this.physics.add.sprite(980,640, 'labels').anims.play('7').setScale(0.7))
        ings.push(this.physics.add.sprite(980,710, 'labels').anims.play('7').setScale(0.7))
        ings.push(this.physics.add.sprite(910,710, 'labels').anims.play('7').setScale(0.7))

        fry = this.physics.add.sprite(910,400, 'fry').anims.play('f')
        horn = this.physics.add.sprite(100,400, 'horn').anims.play('h')
        cursor = this.physics.add.sprite(1280/2, 720/2, 'masa').setDataEnabled()
        cursor.data.set('state', 0)
        cursor.data.set('closed', false)
        cursor.anims.play('em')
        cursor.setScale(1.1)
        banana = this.physics.add.sprite(550, 150, 'banana').setDataEnabled()
        banana.data.set('cant', queso)
        banana.data.set('coords', 550)
        banana.data.set('type', 2)
        if (queso < 1)
        {
            banana.disableBody(true,true)
        }
        banados = this.physics.add.sprite(250, 150, 'carner').setDataEnabled()
        banados.data.set('cant', carne)
        banados.data.set('coords', 250)
        banados.data.set('type', 1)
        if (carne < 1)
        {
            banados.disableBody(true,true)
        }
        cebollas = this.physics.add.sprite(650, 150, 'cebolla').setDataEnabled()
        cebollas.data.set('cant', cebolla)
        cebollas.data.set('coords', 650)
        cebollas.data.set('type', 3)
        if (cebolla < 1)
        {
            cebollas.disableBody(true,true)
        }

        choclos = this.physics.add.sprite(450, 150, 'choclo').setDataEnabled()
        choclos.data.set('cant', choclo)
        choclos.data.set('coords', 450)
        choclos.data.set('type', 4)
        if (choclo < 1)
        {
            choclos.disableBody(true,true)
        }
        huevos = this.physics.add.sprite(760, 150, 'huevo').setDataEnabled()
        huevos.data.set('cant', huevo)
        huevos.data.set('coords', 760)
        huevos.data.set('type', 7)
        if (huevo < 1)
        {
            huevos.disableBody(true,true)
        }

        aceitunas = this.physics.add.sprite(870, 150, 'ceituna').setDataEnabled()
        aceitunas.data.set('cant', aceituna)
        aceitunas.data.set('coords', 870)
        aceitunas.data.set('type', 6)
        if (aceituna < 1)
        {
        aceitunas.disableBody(true,true)
        }

        jamones = this.physics.add.sprite(350, 150, 'jam').setDataEnabled()
        jamones.data.set('cant', jamon)
        jamones.data.set('coords', 350)
        jamones.data.set('type', 5)
        if (jamon < 1)
        {
        jamones.disableBody(true,true)
        }
        stackingpngs.push(this.add.image(1280/2,720/2, 'carner').setVisible(false))
        stackingpngs.push(this.add.image(1280/2,720/2, 'banana').setVisible(false))
        stackingpngs.push(this.add.image(1280/2,720/2, 'cebolla').setVisible(false))
        stackingpngs.push(this.add.image(1280/2,720/2, 'choclo').setVisible(false))
        stackingpngs.push(this.add.image(1280/2,720/2, 'jam').setVisible(false))
        stackingpngs.push(this.add.image(1280/2,720/2, 'ceituna').setVisible(false))
        stackingpngs.push(this.add.image(1280/2,720/2, 'huevo').setVisible(false))

        this.camera = this.cameras.add(0,0,1024,768)
        this.camera.fadeIn(1000, 1.0, 1.0, 1.0, false);


        this.input.setDraggable(banados.setInteractive())
        this.input.setDraggable(banana.setInteractive())
        this.input.setDraggable(cebollas.setInteractive())
        this.input.setDraggable(choclos.setInteractive())
        this.input.setDraggable(cursor.setInteractive())
        this.input.setDraggable(aceitunas.setInteractive())
        this.input.setDraggable(huevos.setInteractive())
        this.input.setDraggable(jamones.setInteractive())
        this.input.on('drag', function (pointer, obj, dragX, dragY)
        {
            obj.setPosition(dragX,dragY)
            obj.body.checkCollision.none = true
            obj.body.moves = false
        })
        this.input.on('dragend', function (pointer, obj)
        {
            obj.body.checkCollision.none = false
            snd2.play()

        })
        cursor.on('pointerdown', function (a)
        {
            if (cursor.data.values.state > 0)
            {
                cursor.data.values.state = 0
                cursor.data.values.closed = true
                stackingpngs.forEach(function (a)
                {
                    a.setVisible(false)
                })

                cursor.anims.play('ma')
                snd3.play()
            }


        })
        prompts = this.add.image(512,340, 'prompt')
        prompts.setVisible(false)
        prompts.on('pointerup', () => this.scene.start('acrpg'))

        this.physics.add.overlap(banados,cursor, this.dest, null, true)
        this.physics.add.overlap(banana,cursor, this.dest, null, true)
        this.physics.add.overlap(cebollas,cursor, this.dest, null, true)
        this.physics.add.overlap(choclos,cursor, this.dest, null, true)
        this.physics.add.overlap(aceitunas,cursor, this.dest, null, true)
        this.physics.add.overlap(huevos,cursor, this.dest, null, true)
        this.physics.add.overlap(jamones,cursor, this.dest, null, true)
        this.physics.add.overlap(cursor,fry, this.fr, null, true)
        this.physics.add.overlap(cursor,horn, this.hn, null, true)

        this.rngpedidos(pedidosrnd,forh)

 
        gmover = this.add.image(512,389, 'gver').setVisible(false)
        gmover.setInteractive()
        gmover.on('pointerdown', () => this.scene.start('menu'))
        gmovertxt = this.add.text(512, 545, '', { fontSize: '28px', fill: '#000' });
    }

    update(delta)
    {
        if (time > 0)
        {
            time += -17
            a = time.toString()
        }
        else{
            this.sound.stopAll()
            gmover.setVisible(true)
            gmovertxt.setText(score)
            this.physics.pause()

        }
        //txt.setText('carne: ' + banados.data.values.cant + ' queso: ' + banana.data.values.cant + ' state: ' + cursor.data.values.state  + '\n pedido: ' + cuerrentpedido + ' pedidos: '+ pedidosrnd +' cook: ' + forh + ' score: ' + score + ' time: ' + a.substr(0,3))
        scortxt.setText('Score: ' + score + '\nTime: ' + a.substr(0,3))
        if (firsttime == true)
        {
            if (banana.data.values.cant == 0)
            {
                this.trans()
            }
            if (banados.data.values.cant == 0)
            {
                this.trans()
            }
            if (cebollas.data.values.cant == 0)
            {
                this.trans()
            }
            if (choclos.data.values.cant == 0)
            {
                this.trans()
            }
            if (huevos.data.values.cant == 0)
            {
                this.trans()
            }
            if (jamones.data.values.cant == 0)
            {
                this.trans()
            }
        }
       
        this.rngpedidos(pedidosrnd, forh)

        stackingpngs.forEach(function (png)
        {
            png.x = cursor.x
            png.y = cursor.y
        })
        //console.log(cursor.data.values.closed)
    }

    dest(cursor, banados)
    {
        //emitter.emit('dragend')
        if (cursor.data.values.cant > 0 && banados.data.values.state < 3)
        {

            cursor.disableInteractive()
            cursor.x = cursor.data.values.coords
            cursor.y = 200
            cursor.disableBody(true,true)


            cursor.data.values.cant += -1
            if (cursor.data.values.type == 1)
            {
                stackingpngs[0].setVisible(true)
                cuerrentpedido.push(1)
                carne += -1
            }
            if (cursor.data.values.type == 2)
            {
                stackingpngs[1].setVisible(true)
                cuerrentpedido.push(2)
                queso += -1
            }
            if (cursor.data.values.type == 3)
            {
                stackingpngs[2].setVisible(true)
                cuerrentpedido.push(3)
                cebolla += -1
            }
            if (cursor.data.values.type == 4)
            {
                stackingpngs[3].setVisible(true)
                cuerrentpedido.push(4)
                choclo += -1
            }
            if (cursor.data.values.type == 5)
            {
                stackingpngs[4].setVisible(true)
                cuerrentpedido.push(5)
                jamon += -1
            }
            if (cursor.data.values.type == 6)
            {
                stackingpngs[5].setVisible(true)
                cuerrentpedido.push(6)
                aceitunas += -1
            }
            if (cursor.data.values.type == 7)
            {
                stackingpngs[6].setVisible(true)
                cuerrentpedido.push(7)
                aceitunas += -1
            }
            banados.data.values.state += 1
            banados.setInteractive()

            if (cursor.active == false && cursor.data.values.cant > 0)
            {
                cursor.enableBody(true,cursor.data.values.coords,150,true,true)
                cursor.setInteractive()
            }



        }
    }
    hn(cursor,horn)
    {
        if (cursor.data.values.closed)
        {
            if (ctime > 0)
            {
                if (ctime == 5000)
                {
                    asar.play()
                }
                ctime += -17
            }
            else
            {
                cook = false
                cursor.x = 1280/2
                cursor.y = 768/2
                cursor.body.checkCollision.none = true
                ctime = 5000
                cursor.anims.play('co')
            }
        }
        else
        {
            cursor.x = 1280/2
            cursor.y = 768/2
        }

    }
    fr(cursor,fry)
    {
        if (cursor.data.values.closed)
        {
            if (ctime > 0)
            {
                if (ctime == 5000)
                {
                    oils.play()
                }
                ctime += -17
            }
            else
            {
                cook = true
                cursor.x = 1280/2
                cursor.y = 768/2
                cursor.body.checkCollision.none = true
                ctime = 5000
                cursor.anims.play('co')
            }
        }
        else
        {
            cursor.x = 1280/2
            cursor.y = 768/2
        }
    }
    turnin(cuerrentpedido, a, sword)
    {
        var match
        console.log(cuerrentpedido.join(''))
        console.log(pedidosrnd[a].join(''))
        if (cuerrentpedido.join('') === pedidosrnd[a].join('') && cook == forh[a] )
        {
            match = true
        }
        

        if (match == true)
        {
            score+= 100
            sword.removeInteractive()
            pedidosrnd.splice(a,1, '')
            //pedidosrnd.unshift('')
            sndcoin.play()
        }
        else
        {
            score+= -150
        }
        for (let i = 0; i <= (cuerrentpedido.length)+1; i++)
        {
            cuerrentpedido.pop()
        }

 
        cook = false
        cursor.anims.play('em')
        cursor.x = 1280/2
        cursor.y = 768/2
        cursor.data.values.closed = false
        cursor.data.values.state = 0
        cursor.body.checkCollision.none = false
        panadastate = 0
    }
    trans()
    {
        prompts.setVisible(true)
        prompts.setInteractive()
        this.camera.fadeOut(1000, 0, 0, 0, false)

    }

    dung()
    {
        dbtn.anims.play('dngb')
        this.scene.start('acrpg')
        this.camera.fadeOut(1000, 0, 0, 0, false)
    }

    menu()
    {
        menubutton.anims.play('men2')
        this.scene.start('menu')
    }


    rngpedidos(pedidosrnd, forh)
    {
        if (pedidosrnd.length < 1 || pedidosrnd.join('') == '')
        {
            fh1[0].setVisible(false)
            fh1[1].setVisible(false)
            fh2[0].setVisible(false)
            fh2[1].setVisible(false)
            fh3[0].setVisible(false)
            fh3[1].setVisible(false)

            ings.forEach(function(s)
            {
                s.setVisible(false)
            }
            )
            if (pedidosrnd.length == 3)
            {
                pedidosrnd.pop()
                pedidosrnd.pop()
                pedidosrnd.pop()
            }
            forh.pop()
            forh.pop()
            forh.pop()
            var numb
            var d = 0
            for (let i = 0; i < 3; i++)
            {
                numb = Math.floor(Math.random() * 15)
                pedidosrnd.push(pedidos[numb])
                
                numb = Math.floor(Math.random() * 2)

                if (numb == 0)
                {
                    forh.push(false)
                }
                else
                {
                    forh.push(true)
                }

                if (i == 0)
                {
                    fh1[numb].setVisible(true)
                }
                if (i == 1)
                {
                    fh2[numb].setVisible(true)
                }
                if (i == 2)
                {
                    fh3[numb].setVisible(true)
                }
                for (let v = 0; v < 3; v++)
                {
                    if (!pedidosrnd[i][v])
                    {

                    }
                    else
                    {
                        ings[d].setVisible(true)
                        ings[d].anims.play((pedidosrnd[i][v] - 1).toString())
                    }
                    d++
                }
                
            }
            sword3.setInteractive()
            sword2.setInteractive()
            sword1.setInteractive()
            
        }
     
    }
}