import React from 'react'

function LandingPage() {
  return (
    <div>
      <body>

<div className="hero_area">

  <div className="hero_bg_box">
    <div className="bg_img_box">
      <img src="assets/images/hero-bg.png" alt=""/>
    </div>
  </div>

  {/* <!-- header section strats --> */}
  <header className="header_section">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <a className="navbar-brand" href="index.html">
          <span>
            BudgetBuddy
          </span>
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className=""> </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> <i className="fa fa-user" aria-hidden="true"></i> Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> <i className="fa fa-user" aria-hidden="true"></i> SignUp</a>
            </li>
            <form className="form-inline">
              <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  {/* <!-- end header section -->
  <!-- slider section --> */}
  <section className="slider_section ">
    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container ">
            <div className="row">
              <div className="col-md-6 ">
                <div className="detail-box">
                  <h1>
                    Budgeting: Where Dreams Meet Reality.
                  </h1>
                  <p>
                    Start by tracking your income and expenses. Create a budget that outlines how much you can spend in various categories like rent, groceries, transportation, and entertainment.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src="assets/images/slider-img.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="container ">
            <div className="row">
              <div className="col-md-6 ">
                <div className="detail-box">
                  <h1>
                    Don't Just Spend, Budget It!
                  </h1>
                  <p>
                    Identify non-essential expenses and consider cutting back on them. This could include eating out less, canceling unused subscriptions, or finding more affordable alternatives.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src="assets/images/slider-img.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container ">
            <div className="row">
              <div className="col-md-6 ">
                <div className="detail-box">
                  <h1>
                    Secure Your Future with Budgeting Today.
                  </h1>
                  <p>
                    Saving for the future should stay in the forefront of your mind, and your finances, regardless of whatever else comes around. So start from today infact now onwards...
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src="assets/images/slider-img.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ol className="carousel-indicators">
        <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
        <li data-target="#customCarousel1" data-slide-to="1"></li>
        <li data-target="#customCarousel1" data-slide-to="2"></li>
      </ol>
    </div>

  </section>
  {/* <!-- end slider section --> */}
</div>


{/* <!-- service section --> */}

<section className="service_section layout_padding">
  <div className="service_container">
    <div className="container ">
      <div className="heading_container heading_center">
        <h2>
          Our <span>Features</span>
        </h2>
        <p>The application provides a number of features to keep track of your income, expenses, and savings goals.</p>
      </div>
      <div className="row">
        <div className="col-md-4 ">
          <div className="box ">
            <div className="img-box">
              <img src="assets/images/s1.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                User Registration and Authentication
              </h5>
              <p>
                Secure user registration and login process using JWT authentication.Password hashing and encryption to protect user credentials.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="box ">
            <div className="img-box">
              <img src="assets/images/s2.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Budget Creation and Management:
              </h5>
              <p>
                Ability for users to create and manage multiple budget categories. Set budget limits for each category to track spending               
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="box ">
            <div className="img-box">
              <img src="assets/images/s3.png" alt=""/>
            </div>
            <div className="detail-box">
              <h5>
                Data Security and Privacy:
              </h5>
              <p>
                Implement robust security measures to protect user data. Ensure compliance with data protection regulations.

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="why.html">
          View All
        </a>
      </div>
    </div>
  </div>
</section>

{/* <!-- end service section --> */}


{/* <!-- about section --> */}

<section className="about_section layout_padding">
  <div className="container  ">
    <div className="heading_container heading_center">
      <h2>
        About <span>Us</span>
      </h2>
      <p>
        A personal finance application that securely manages user budgets and transactions using JWT authentication and MongoDB.        </p>
    </div>
    <div className="row">
      <div className="col-md-6 ">
        <div className="img-box">
          <img src="assets/images/about-img.png" alt=""/>
        </div>
      </div>
      <div className="col-md-6">
        <div className="detail-box">
          <h3>
            Description
          </h3>
          <p>
            "BudgetBuddy" is a personal finance application that helps users manage their budgets and track their transactions. The application provides a secure and user-friendly interface for individuals to keep track of their income, expenses, and savings goals.Using JWT authentication, users can securely register and log in to their accounts, ensuring their financial information remains protected.
          </p>
          <p>
            Overall, "BudgetBuddy" aims to simplify personal finance management, promote responsible spending, and help users achieve their financial goals.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- end about section --> */}

<footer>
  <p>&copy; 2023 ARDHY.com</p>
</footer>



</body>
    </div>
  )
}

export default LandingPage
