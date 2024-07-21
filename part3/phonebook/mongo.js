const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)

}else{

  const password = process.argv[2]
  const url =
  `mongodb+srv://jconte:${password}@cluster0.dyjmjnk.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=Cluster0`

  mongoose.set('strictQuery',false)

  mongoose.connect(url)

  if (process.argv.length==3) {
  
    Person.find({}).then(result => {
      console.log(`phonebook:`)
      result.forEach(person => {
        console.log(`${person.name} ${person.number}`)
      })
      mongoose.connection.close()
    })
  
  }else{
    
    const name = process.argv[3]
    const number = process.argv[4]
  
    const person = new Person({
      name: name,
      number: number,
    })
  
    person.save().then(result => {
      console.log(`added ${name} number ${number} to phonebook`)
      mongoose.connection.close()
    })
  }


}




