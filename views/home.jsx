const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/ella-olsson-2IxTgsgFi-s-unsplash.jpg" width="500" height="500" alt="assorted bread toasts" />
                <div>
                Photo by <a href="https://unsplash.com/@ellaolsson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ella Olsson</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
              <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
          </main>
      </Def>
    )
  }

module.exports = home