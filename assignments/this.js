/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* This is used to bind (hook a relationship) with other objects.
* 1. The first principle is when `this’ is in the global scope it binds the `window` object. 
* 2. The second principle is the implicit binding. When `this` is used inside an object method to represent the object itself within the object and assigning properties of this same object. 
* 3. The third principle is when we use the keyword `new` to create a new instance of a constructor function
* 4. The fourth principle is when we use the .apply or .call to explecity bind 'this' within other function constructors 
*
* write out a code example of each explanation above
*/


// Principle 1

// code example for Window Binding

function myname (name) {
    return `${this} is the windows object and ${name} is my name`;
    }
    
    console.log(myname('Ernesto'));
    
    
    
    // Principle 2
    // code example for Implicit Binding
    
    const building_dim  = {
        height : 23,
        width : 79,
        length : 180,
        area : function() {
          return `The building area is ${this.width * this.length} sf`;  
      }
    }
    
    console.log(building_dim.area());
    
    
    // Principle 3
    // code example for New Binding
    
    const building = function(height, width, length) {
         this.height = height;
         this.width = width;
         this.length = length 
    }
    
    building_dim.prototype.area = function() {
        return `The building area is ${this.width * this.length} sf`; 
    }
    
    
    const new_building = new building(200 , 300 , 400);
    console.log(new_building.area());
    
    // Principle 4
    // code example for Explicit Binding
    
    function Car_models(manufacturer, model, year , engine , color) {
            this.manufacturer = manufacturer;
            this.model = model;
            this.year = year;
            this.engine = engine;
            this.color = color;
    }
    
    Car_models.prototype.reviews = function(rev) {
      return `Car Model ${this.model} from ${this.manufacturer} has ${rev} reviews`;
    }
    
    const my_car = new Car_models('Honda' , 'Accord' , 'V6' , 'White');
    
    console.log(my_car.reviews(250));
    
    Recalls.prototype = Object.create(Car_models.prototype);
    
    function Recalls(manufacturer,model,year,engine,color, defect) {
      Car_models.call(this , manufacturer, model, year , engine , color);
      this.defect = defect;
    }
    
    Recalls.prototype.recalldate = function(recalldate) {
      return `The car model ${this.model} from ${this.manufacturer} was recalled on ${recalldate} because of ${this.defect}`;
    }
    
    my_new_recall = new Recalls('Chrvrolet' , 'Impala' , 2002 , 'V8' , 'Blue' , 'Bad Engine Rotation');
    
    console.log(my_new_recall.recalldate('02/25/2010'));