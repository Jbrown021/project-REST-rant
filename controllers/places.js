const router = require('express').Router()
const places = require('../models/places.js')

router.post('/', (req, res) => {
  console.log(req.body)
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


    // GET /places
    router.get('/', (req, res) => {
    res.render('places/index', { places })
  })



//get / places/ new
router.get('/new', (req, res) => {
  res.render('places/new')
})

// get /places/ show
router.get('/:id', (req, res) => {
  
  let id = Number(req.params.id)
  if (isNaN(id)){
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
  res.render('places/show', { place: places[id], id })
  }
})



module.exports = router



