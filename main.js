function Person(name, email){

      this.name = name
      this.email = email

}

var p1 = new Person('Ahsan', 'ahsanulhuq17@gamail.com')
var p2 = new Person('nul', 'ahsantheigomoon@gamail.com')
var p3 = new Person('shibu', 'adnanshihab@gamail.com')


// console.log(p3.name)
// console.log(p3.email)

// console.log(p2.name)
// console.log(p2.email)

// console.log(p1.name)
// console.log(p1.email)


// var people = [p1,p2,p3]

// console.log(people)

/* people.forEach(function(){

    console.log(people)
    people.p1
}) */

for (var props in p1){

    console.log("propertise = " + props)
}