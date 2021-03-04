interface Person{
  firstname: string
}

function showName(person: Person){
  console.log(person.firstname)
  // console.log(person.lastname)
}

export default showName