import './contact.css';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Contact(){

  return (
    <>
      {/* Header  */}
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            {/* Togeller */}
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navMenu"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* Brand  */}
            <a href="index.html" className="navbar-brand">
              <img src={logo} alt="Company Logo" />
            </a>
            {/* Profile  */}
            <div className="profile">
              <button className="btn position-relative">
                <i className="bi bi-person" />
                <span className="account"> Account</span>
              </button>
              <button className="btn position-relative">
                <i className="bi bi-heart" />
                <span className="favourites"> Favourites</span>
              </button>
              <button className="btn position-relative">
                <i className="bi bi-bag" />
                <span className="position-absolute start-60 translate-middle badge bg-primary bag-user">
                  2
                </span>
                <span className="bag ps-md-2"> Bag</span>
              </button>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            {/* Menu  */}
            <div className="collapse navbar-collapse" id="navMenu">
              <ul className="navbar-nav">
                {/* mx-auto text-center */}
                <li className="nav-item">
                  <a href="/" className="nav-link active">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/about.html" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/shop.html" className="nav-link">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Search Bar */}
            <div className="serch-bar d-none d-md-block">
              <input
                className="search"
                type="text"
                defaultValue="Search for products"
              />
              {/* <img id="mglass" src="search.png"> */}
            </div>
          </div>
        </nav>
      </section>
      <div className="row">
        <div className="container">
          <div className="col-md-12">
            <div className="contact-header">
              <p className="text-grey">
                {" "}
                <a href="#homepage" className="text-grey">
                  {/* {" "}
                  &lt; */}
                  <FontAwesomeIcon icon={faAngleLeft} />
                  {/* <img src={angle-left} alt="" /> */}
                  Back
                </a>
              </p>
              <h3 className="contact-txt">Contact Us</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex con-back">
        <div className="col-md-6 p-2">
          <div className="contact-info">
            <h4>We're always here for you!</h4>
            <p>Email us, we'll be delighted to help you!</p>
            <div className="phone">
              <img src={require("../images/contact_phone.png")} alt="" />
              &nbsp;&nbsp;
              <a href="tel:+91 9510441661">+91 9510441661 </a>
            </div>
            <br />
            <div className="mail">
              <img src={require("../images/contact_mail.png")} alt="" />
              &nbsp;&nbsp;
              <a href="mailto:Info@sanjolisarees.com">Info@sanjolisarees.com</a>
            </div>
            <br />
            <div className="address">
              <img src={require("../images/contact_addr.png")} alt="" />
              &nbsp;&nbsp;&nbsp;
              <span htmlFor="">
                101, first floor, Silk Heritage, Kamela Darwaja,
                <span className="mob-pad">Ring road, Surat - 395002</span>
              </span>
              <br />
              <br />
            </div>
            <div className="map">
              <br />
              <br />
              {/* <p>Get directions -</p> */}
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    className="map-"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=californi101, first floor, Silk Heritage, Kamela Darwaja,Ring road, Surat - 395002a&t=k&z=10&ie=UTF8&iwloc=&output=embed"
                    title="map"
                  />
                  <a href="https://2yu.co" />
                  <br />
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".mapouter{position:relative;text-align:right;height:100%;width:100%;}",
                    }}
                  />
                  <a href="https://embedgooglemap.2yu.co/"> </a>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-2 ">
          <div className="contact-form">
            <form id="contact-us" method="post" action="">
              {/* label */}
              <h5>Let's Talk - get in touch today!</h5>
              {/* Name */}
              <label htmlFor="">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required="required"
                className="form "
                placeholder="Full Name"
              />
              {/* Conatact */}
              <label htmlFor="">
                Contact <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                name="contact-number"
                size={10}
                id="contact-number"
                required="required"
                className="form "
                placeholder="9832xxxxxx"
                pattern="[0-9]{10}"
              />
              {/* Email */}
              <label htmlFor="">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                name="mail"
                id="mail"
                required="required"
                className="form "
                placeholder="abc@domain.com"
              />
              {/* Message */}
              <label htmlFor="">
                Message <span className="text-danger">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                className="form textarea"
                required="required"
                placeholder="Write your message here. We can't wait to here you."
                defaultValue={""}
              />
              {/* Bottom Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="send-btn text-center"
                  style={{ margin: "0rem 0r9m" }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;