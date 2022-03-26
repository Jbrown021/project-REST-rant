const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
              <img src="/images/mario.jpg" width="700" height="500" alt="mario bridge lava" />
                <div>
                photo from <a href="https://www.technologyuk.net/computing/computer-gaming/gaming-landmarks-1960-1985/super-mario-bros.shtml">technologyuk.net</a>

                </div>
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404