class Box {

constructor(x,y,width,height){


    var options = {
        restitution : 1.0,
        density : 0.8,
        friction : 0.7
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world, this.body)
    this.width = width
    this.height = height

}

display(){

    var pos = this.body.position
    var angle = this.body.angle
    rectMode(CENTER)
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    
    fill('purple')
    rect(0,0,this.width,this.height);
    pop();
}
}