var car, wall;
var speed, wieght;

function setup() {
  createCanvas(800, 400);
  car = createSprite(200, 200, 50, 50);
  wall = createSprite(700, 200, 60, 100);

  speed = random(55, 90);
  weight = random(400, 1500);

  car.velocityX = speed;


}

function draw() {
  background("black");

  if (wall.x - car.x < (car.width + wall.width) / 2) {
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) / 22509;
    console.log(deformation);
    if (deformation > 180) {
      car.shapeColor = color("yellow");
      wall.shapeColor = color("white")
    }

    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color("green");
      wall.shapeColor = color("white")
    }

    if (deformation < 100) {
      car.shapeColor = color("red");
      wall.shapeColor = color("white")
    }

  }

  drawSprites();
}