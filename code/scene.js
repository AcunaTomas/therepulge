class Load extends Phaser.Scene
{
    constructor()
    {
        super('Load')
    }
    preload()
    {
        this.load.spritesheet('start', 'assets/background/start.png', {frameWidth:367, frameHeight: 58})
        this.load.spritesheet('menubtn', 'assets/background/btnmen.png', {frameWidth: 189, frameHeight: 52})
        this.load.spritesheet('labels', 'assets/background/labels.png', {frameWidth: 92, frameHeight: 84})
        this.load.spritesheet('bonk', 'assets/Enemies/bonkSheet.png', {frameWidth: 227, frameHeight: 320})

        this.load.image('sword1', 'assets/Clients/sword1.png')
        this.load.image('sword2', 'assets/Clients/sword2.png')     
        this.load.image('sword3', 'assets/Clients/sword3.png')
        this.load.image('card','assets/Clients/ticketPedido.png')
        this.load.image('hornito', 'assets/Clients/iconHorno.png')
        this.load.image('freidora', 'assets/Clients/iconFreidora.png')




        this.load.image('doorslc', 'assets/Enemies/dungeonSelect.png')
        this.load.image('doorfig', 'assets/Enemies/dungeonFight.png')
        this.load.spritesheet('b1', 'assets/Enemies/buttonOne.png', {frameWidth: 221, frameHeight: 139})
        this.load.spritesheet('b2', 'assets/Enemies/buttonTwo.png',{frameWidth: 221, frameHeight: 139})
        this.load.spritesheet('b3', 'assets/Enemies/buttonThree.png',{frameWidth: 221, frameHeight: 139})
        this.load.image('bpa', 'assets/Enemies/buttonPapel.png')
        this.load.image('bpi', 'assets/Enemies/buttonPiedra.png')
        this.load.image('bt', 'assets/Enemies/buttonTijera.png')

        this.load.image('gver', 'assets/Pedidos/popupGameOver.png')

        this.load.image('cursor', 'assets/cursor.png')
        this.load.image('logo', 'assets/background/TitleScreen.png')
        this.load.image('banana', 'assets/Ingridients/ingQueso.png')
        this.load.image('panada', 'assets/Pedidos/panada.png')
        this.load.image('carner', 'assets/Ingridients/ingCarne.png')
        this.load.spritesheet('masa', 'assets/Ingridients/masa.png', {frameWidth:143,frameHeight:139})
        this.load.image('prompt', 'assets/Pedidos/popupFirstDungeon.png')
        this.load.image('cebolla', 'assets/Ingridients/ingCebolla.png')
        this.load.image('choclo', 'assets/Ingridients/ingChoclo.png')
        this.load.image('huevo', 'assets/Ingridients/ingHuevo.png')
        this.load.image('ceituna', 'assets/Ingridients/ingAceituna.png')
        this.load.image('jam', 'assets/Ingridients/ingJamon.png')



        //values 1 = carne, 2 = queso, 3 = cebolla, 4 = choclo, 5 = jamón, 6 = aceitunas, 7 = huevo
        this.load.image('e1', 'assets/Enemies/bichoSnek.png')
        this.load.image('e2', 'assets/Enemies/bichoQVNI.png')
        this.load.image('e3', 'assets/Enemies/bichoSlime.png')
        this.load.image('e4', 'assets/Enemies/bichoAbechoclo.png')
        this.load.image('e5', 'assets/Enemies/bichoMurciejamon.png')
        this.load.image('e6', 'assets/Enemies/bichoInsectuna.png')
        this.load.image('e7', 'assets/Enemies/bichoBeholder.png')

        this.load.image('table', 'assets/background/cookingscreen.png')
        this.load.spritesheet('fry', 'assets/background/fry.png', {frameWidth: 196, frameHeight:379})
        this.load.spritesheet('dbt', 'assets/background/dungeonbtn.png', {frameWidth: 189, frameHeight:56})
        this.load.spritesheet('horn', 'assets/background/horn.png', {frameWidth: 173, frameHeight:372})


        this.load.audio('dung', "assets/dungeon.wav")
        this.load.audio('coc', "assets/musicCocina.wav")
        this.load.audio('coin', "assets/sfxMonedas.mp3")
        this.load.audio('oil', "assets/sfxAceite.wav")
        this.load.audio('i1', "assets/sfxIngrediente1.wav")
        this.load.audio('i2', "assets/sfxIngrediente2.wav")
        this.load.audio('i3', "assets/sfxIngrediente3.wav")
        this.load.audio('en1', "assets/sfxSerpiente.wav")
        this.load.audio('en2', "assets/sfxRamdom2.wav")
        this.load.audio('en3', "assets/sfxSlime1.wav")
        this.load.audio('en4', "assets/sfxAbeja.wav")
        this.load.audio('en5', "assets/sfxMurcielago.wav")
        this.load.audio('en6', "assets/sfxRamdom1.wav")
        this.load.audio('en7', "assets/sfxRamdom3.wav")

        this.load.audio('bkn', 'assets/sfxSlash.wav')

        this.load.audio('hornosnd', 'assets/sfxAsador.wav')
    }

    create()
    {
        txt = this.add.text(412 - 150, 720/2 - 20, '', { fontSize: '48px', fill: '#FFF' });
        txt.setText('Click Me To Play!')
        txt.setInteractive()
        txt.on('pointerdown', () => this.scene.start('menu'))

        this.anims.create({
        key: 'f',
        frames: this.anims.generateFrameNumbers('fry', { start: 0, end: 1 }),
        frameRate: 2,
        repeat: -1
        });

        this.anims.create({
            key: 'ma',
            frames: this.anims.generateFrameNumbers('masa', { start: 1, end: 1 }),
            frameRate: 2,
            repeat: -1
            });

        this.anims.create({
            key: 'em',
            frames: this.anims.generateFrameNumbers('masa', { start: 0, end: 0 }),
            frameRate: 2,
            repeat: -1
            });

        this.anims.create({
            key: 'co',
            frames: this.anims.generateFrameNumbers('masa', { start: 2, end: 2 }),
            frameRate: 2,
            repeat: -1
            });
        
        this.anims.create({
            key: 'h',
            frames: this.anims.generateFrameNumbers('horn', { start: 0, end: 1 }),
            frameRate: 2,
            repeat: -1
            });
        
        this.anims.create({
            key: 'dnga',
            frames: this.anims.generateFrameNumbers('dbt', { start: 0, end: 0 }),
            frameRate: 2,
            repeat: -1
            });
        this.anims.create({
            key: 'dngb',
            frames: this.anims.generateFrameNumbers('dbt', { start: 1, end: 1 }),
            frameRate: 2,
            repeat: -1
            });
        this.anims.create({
            key: 'st',
            frames: this.anims.generateFrameNumbers('start', { start: 1, end: 1 }),
            frameRate: 2,
            repeat: -1
            });

        this.anims.create({
            key: 'sta',
            frames: this.anims.generateFrameNumbers('start', { start: 0, end: 0 }),
            frameRate: 2,
            repeat: -1
            });

        this.anims.create({
            key: 'men1',
            frames: this.anims.generateFrameNumbers('menubtn', { start: 0, end: 0 }),
            frameRate: 2,
            repeat: -1
            });

        this.anims.create({
            key: 'men2',
            frames: this.anims.generateFrameNumbers('menubtn', { start: 1, end: 1 }),
            frameRate: 2,
            repeat: -1
            });        

        this.anims.create(
            {
                key: 'b1s',
                frames: this.anims.generateFrameNumbers('b1', { start: 0, end: 0 }),
                frameRate: 2,
                repeat: -1
            }
        )
        this.anims.create(
            {
                key: 'b1f',
                frames: this.anims.generateFrameNumbers('b1', { start: 1, end: 1 }),
                frameRate: 2,
                repeat: -1
            }
        )
        this.anims.create(
            {
                key: 'b2s',
                frames: this.anims.generateFrameNumbers('b2', { start: 0, end: 0 }),
                frameRate: 2,
                repeat: -1
            }
        )
        this.anims.create(
            {
                key: 'b2f',
                frames: this.anims.generateFrameNumbers('b2', { start: 1, end: 1 }),
                frameRate: 2,
                repeat: -1
            }
        )
        this.anims.create(
            {
                key: 'b3s',
                frames: this.anims.generateFrameNumbers('b3', { start: 0, end: 0 }),
                frameRate: 2,
                repeat: -1
            }
        )
        this.anims.create(
            {
                key: 'b3f',
                frames: this.anims.generateFrameNumbers('b3', { start: 1, end: 1 }),
                frameRate: 2,
                repeat: -1
            }
        )



        this.anims.create(
            {
                key: '0',
                frames: this.anims.generateFrameNumbers('labels', { start: 0, end: 0 }),
                frameRate: 2,
                repeat: -1
            }
        )

        this.anims.create(
            {
                key: '1',
                frames: this.anims.generateFrameNumbers('labels', { start: 1, end: 1 }),
                frameRate: 2,
                repeat: -1
            }
        )

        this.anims.create(
            {
                key: '2',
                frames: this.anims.generateFrameNumbers('labels', { start: 2, end: 2 }),
                frameRate: 2,
                repeat: -1
            }
        )
        this.anims.create(
            {
                key: '3',
                frames: this.anims.generateFrameNumbers('labels', { start:3, end: 3 }),
                frameRate: 2,
                repeat: -1
            }
        )
        this.anims.create(
            {
                key: '4',
                frames: this.anims.generateFrameNumbers('labels', { start: 4, end: 4 }),
                frameRate: 2,
                repeat: -1
            }
        )
        this.anims.create(
            {
                key: '5',
                frames: this.anims.generateFrameNumbers('labels', { start: 5, end: 5 }),
                frameRate: 2,
                repeat: -1
            }
        )
        this.anims.create(
            {
                key: '6',
                frames: this.anims.generateFrameNumbers('labels', { start: 6, end: 6 }),
                frameRate: 2,
                repeat: -1
            }
        )
            
    

        this.anims.create(
            {
                key: 'bonke',
                frames: this.anims.generateFrameNumbers('bonk', { start: 0, end: 4 }),
                frameRate: 15,
                repeat: 0
            }
        )



        dmus = this.sound.add('dung')
        cmus = this.sound.add('coc')
        oils = this.sound.add('oil')
        sndcoin = this.sound.add('coin')
        snd1 = this.sound.add('i1')
        snd2 = this.sound.add('i2')
        snd3 = this.sound.add('i3')
        hit = this.sound.add('bkn')
        asar = this.sound.add('hornosnd')
        ms.push(this.sound.add('en1'))
        ms.push(this.sound.add('en2'))
        ms.push(this.sound.add('en3'))
        ms.push(this.sound.add('en4'))
        ms.push(this.sound.add('en5'))
        ms.push(this.sound.add('en6'))
        ms.push(this.sound.add('en7'))
        }

    update()
    {

    }
}