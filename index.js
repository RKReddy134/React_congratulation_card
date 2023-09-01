const element = (
  <div className="container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="img-size"
        />
      </div>
      <h1 class="heading-name">Kiran V</h1>
      <p className="paragraph">
        Vishnu institute of Computer Education and technologies,Bhimavaram
      </p>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="img-size"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
