import React from "react";
import Logo from "../assets/Images/sahyadriLogo.png";

const Footer = () => {
  return (
    <div className="footer  py-3" id="foot">
      <div className="footer-overlay"></div>
      <div className="footer-content">
        <div className="d-flex flex-column justify-column-center align-items-center pt-3">
          <h3 className="text-white fst-italic mt-2">Keep Visiting :)</h3>
          <div class="input-group mb-3 mt-4 w-50"></div>
        </div>

        <div class="container">
          <footer class="py-5">
            <div class="row row-cols-2 row-cols-md-4 text-white">
              <div className="d-flex align-items-center">
                <img src={Logo} alt="" className="w-50 " />
              </div>
              <div class="">
                <h4>About</h4>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-white">
                      About Us
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-white">
                      Certificate
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-white">
                      Market
                    </a>
                  </li>
                </ul>
              </div>

              <div class="">
                <h4>Contact</h4>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-white">
                      <i className="bi bi-geo-alt-fill me-2"></i>
                      <span>
                        <a
                          href="https://maps.app.goo.gl/Ua6XCr1Yb2wSGGVt6"
                          class="links"
                        >
                          Directions
                        </a>
                      </span>
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-white">
                      <i className="bi bi-envelope-at me-2"></i>
                      <span>
                        <a
                          href="mailto:digitalcanteen@sahyadri.com"
                          class="links"
                        >
                          digitalcanteen@sahyadri.com
                        </a>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="d-flex justify-content-between pt-4 mt-4 border-top">
              <p className="text-white">
                &copy; 2023 Company, Inc. All rights reserved.
              </p>
              <ul class="list-unstyled d-flex">
                <li class="ms-3">
                  <a class="link-dark" href="#">
                    <i className="bi bi-facebook text-white"></i>
                  </a>
                </li>
                <li class="ms-3">
                  <a class="link-dark" href="#">
                    <i className="bi bi-instagram text-white"></i>
                  </a>
                </li>
                <li class="ms-3">
                  <a class="link-dark" href="#">
                    <i className="bi bi-twitter text-white"></i>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
