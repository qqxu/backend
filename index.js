const express = require('express');
const app = express();
const cors = require('cors'); // 允许跨域


app.use(express.json())
app.use(cors())
let notes = [
  {
    id: 10,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    videoSrc: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true
  }
]


app.get('/', (req, resp) => {
  resp.send('<h1>hello<h1>');
});

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  console.log('id', id)
  const note = notes.find(note => note.id === id)
  console.log('note', note);
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id) // 删除资源

  response.status(204).end()
})


// 创建
app.post('/api/notes', (request, response) => {
  const newNote = request.body
  response.json(newNote)
})

// 查询
app.get('/api/notes', (req, resp) => {
  resp.send(notes);
});


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`)
})
