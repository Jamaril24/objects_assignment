'script'

console.log("hola");

document.write("<h1>Objects assignment</h1>")

const car = {
    model: "G-Wagon",
    color: "black",
    power: "premium gas",
    driving: function(){
      return("Thee vroom vroom is powered by " + car.power + " so it gets you where you need to go")
    }
  }
  
  console.log("my", car.model, "is running on", car.power, "because my non-existant car deserves the best ");
  console.log(car.driving());
  
  function house( stories, year, garage){
    this.stories = stories;
    this.year = year;
    this.garage = garage;
  }
  house.prototype.color= "green"

  const MomsHouse = new house("One", "1992", "none" );
 const DadsHouse = new house("One", "2002", "two" );

 console.log(MomsHouse)
 console.log(DadsHouse)