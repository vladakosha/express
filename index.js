import express from 'express'

const app = express()
const port = 5001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const myWizards = [
  {
    id: 1,
    name: "Harry Potter",
    ancestry: "half-blood",
    patronus: "stag",
  },
  {
    id: 2,
    name: "Hermione Granger",
    ancestry: "muggleborn",
    patronus: "otter",
  },
  {
    id: 3,
    name: "Ron Weasley",
    ancestry: "pure-blood",
    patronus: "dog",
  },
];

app.get('/', (request, response) => {
    response.send('hi')
})

app.get('/wizards', (request, response) => {
    response.json(myWizards)
})

app.get('/wizards/:wizardID', (request, response) => {
    const wizardID = request.params.wizardID
    const wizard = myWizards.find(wizard => wizard.id == wizardID)
    response.json(wizard)
})

app.post('/wizards', (request, response) => {
    const newWizard = {
      id: myWizards.length + 1,
      name: request.body.name,
      ancestry: request.body.ancestry,
      patronus: request.body.patronus,
    };
    myWizards.push(newWizard);
    response.json(myWizards);
})

app.listen(port, () => console.log('welcome'))