const router = require('express').Router()



    // GET /places
    router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/papaya-g894e3a140_640.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-g2fd5d7855_640.jpg'
      }]
      res.render('places/index', { places })
  })



//get / places/ new
router.get('/new', (req, res) => {
  res.render('places/new')
})


router.get('/:id', (req, res) => {
  res.render('places/show')
        })

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST/places')
})


module.exports = router



