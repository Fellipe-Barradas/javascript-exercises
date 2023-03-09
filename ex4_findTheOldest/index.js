const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1942,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const people2 = [
    {
      name: "Carly",
      yearOfBirth: 2008,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

function getTheOlder(object){
    let older = 0
    object.map((item)=>{ 
        let age = 0
        if(item.yearOfDeath==undefined ){
            age = 2023 - item.yearOfBirth 
            if (older<age){
                return older = age
            }return age
        }
        age = item.yearOfDeath - item.yearOfBirth
        if (older<age){
            return older = age
        }
    })
    console.log(older)
}
getTheOlder(people)