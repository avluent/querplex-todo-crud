const express = require('express')
const cors = require('cors')
const basicAuth = require('express-basic-auth');
const app = express()

function generateRandomId() {
    return Math.random().toString(16).split('.').pop()
}

const mockTodos = [{
        id: generateRandomId(),
        description: "Bring kids to school",
        isDone: false
    },
    {
        id: generateRandomId(),
        description: "Hang out with Bart",
        isDone: false
    },
    {
        id: generateRandomId(),
        description: "Buy a new Skateboard",
        isDone: false
    },
]

var corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200
}

app.use(basicAuth({
    users: {
        querplex: 'passwort'
    },
    challenge: true
}))

const PORT = 8000;

app.get('/api/todos', cors(corsOptions), function( req, res ) {  
    res.setHeader('Content-Type', 'application/json')
    res.json(mockTodos)
});

app.listen(PORT, () => {
    console.log(`Local Server is running at ${PORT}`)
})