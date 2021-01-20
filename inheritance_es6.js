class Animal{
    constructor(name){
        this.name = name;
        this.speed = 0;
    }
    run(speed){
        this.speed=speed;
        console.log(`${this.name} runs with speed ${this.speed}`)
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} stands still`)
    }
}
//let animal = new Animal("Tiger")
//animal.run(100)
//animal.stop()

class Rabbit extends Animal{
    constructor(name, earLength){
        super(name);
        this.earLength = earLength;
    }
    hide(){
        console.log(`${this.name} hides`)
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} stands still(Rabbit class)`)
        super.stop();
    }
}

let rabbit = new Rabbit('Tiger', '200')
rabbit.run(10)
rabbit.stop();


