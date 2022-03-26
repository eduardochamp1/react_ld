function Main() {
  return (
    <div className="main">
      <div className="center">
        <div className="menu">
          <div className="logo">
            <h3>Landing Page</h3>
          </div>
          <div className="item-menu">
            <a href="#">Login</a>
          </div>
        </div>

        <div className="form">
          <form>
            <h2>Entre em Contato:</h2>
            <div className="items-form">
              <input placeholder="Seu nome..." type="text" />
              <input placeholder="Seu nome..." type="text" />
              <input placeholder="Seu nome..." type="text" />
              <input placeholder="Seu nome..." type="text" />
              <input placeholder="Seu nome..." type="submit" />
            </div>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Main;