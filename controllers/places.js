const router = require('express').Router()
const places = require('../models/places.js')

    // GET /places
    router.get('/', (req, res) => {
    res.render('places/index', { places })
  })

router.post('/', (req, res) => {
  
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = '/images/papaya-g894e3a140_640.jpg'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

//get / places/ new
router.get('/new', (req, res) => {
  res.render('places/new')
})

// get /places/ show
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  } else if (!places[id]) {
      res.render('error404')
  } else {
      res.render('places/show', { place: places[id], id })
  }
})

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})


router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  } else if (!places[id]) {
      res.render('error404')
  } else {
      places.splice(id, 1)
      res.redirect('/places')
  }
})

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})

router.post("/:id/rant", (req, res) => {
  res.send("Create a rant (comment) about a particular place");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("Delete a rant (comment) about a particular place");
});

module.exports = router



