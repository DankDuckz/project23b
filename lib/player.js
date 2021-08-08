class player{
    constructor(x,y,w,h) {
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x,y,this.w,this.h)
        this.image = loadImage("assets/player.png")
    }

    show() {
        push()
        imageMode(CENTER)
        var pos = this.body.position
        image(this.image,pos.x,pos.y,this.w,this.h)
        pop()
    }
}