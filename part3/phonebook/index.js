const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('dist'))


morgan.token('body', (req, res) => { 
  return req.method == 'POST'
  ? JSON.stringify({ 
    name: req.body.name, 
    number: req.body.number 
  })
  : null
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]
  

  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })

  app.get('/info', (request, response) => {
    var start = new Date()
    response.send(
      `<p>Phonebook has info for ${persons.length} people</p>`+
      `<p>${new Date()}</p>`
      )
  })
  
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
    response.json(person)
    } else {
    response.status(404).end()
    }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })
  
  const generateIdWithMax = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(p => p.id))
      : 0
    return maxId + 1
  }

  const generateId = () => {
    return Math.floor(Math.random() * 10000000000)
  }

  const nameIsNotUnique = (name) =>{
    return (persons.filter(p => p.name == name).length)
  }

  app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name) {
      return response.status(400).json({ 
        error: 'name missing' 
      })
    } else if (!body.number) {
      return response.status(400).json({ 
        error: 'number missing' 
      })
    }else if (nameIsNotUnique(body.name)) {
      return response.status(400).json({ 
        error: 'name must be unique' 
      })
    }
  
    const person = {
      id: generateId(),
      name: body.name,
      number: body.number,
    }
  
    persons = persons.concat(person)
  
    response.json(person)
  })

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })