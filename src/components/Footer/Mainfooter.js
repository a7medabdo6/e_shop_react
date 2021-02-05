import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function Mainfooter() {
  return (
    <div className="mt-5 main-footer">
      <Row>
        <div className="col-lg-3 col-md-6 col-sm-6 d-none d-lg-block ">
          <h5 className="title-footer pl-4">Popular Categories</h5>
          <div className="categories link pl-2">
            <h6>
              <Link to="/shop/jewelery" className="">
                Makeup
              </Link>
            </h6>
            <h6>
              <a href="/en/perfume/" className="">
                Perfume
              </a>
            </h6>
            <h6>
              <a href="/en/care/" className="">
                Care
              </a>
            </h6>
            <h6>
              <a href="/en/nails/" className="">
                Nails
              </a>
            </h6>
            <h6>
              <a href="/en/accessories/" className="">
                Accessories
              </a>
            </h6>
            <h6>
              <a href="/en/lenses/" className="">
                Lenses
              </a>
            </h6>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 d-none d-lg-block">
          <h5 className="title-footer">Niceone</h5>
          <ul className="link">
            <li>
              <h6>
                <Link to="/terms" className="">
                  Terms and conditions
                </Link>
              </h6>
            </li>
            <li>
              <h6>
                <Link to="/policy" className="">
                  Return and refund policy
                </Link>
              </h6>
            </li>
            <li>
              <h6>
                <Link to="/privacy" className="">
                  Privacy
                </Link>
              </h6>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 d-none d-lg-block">
          <h5 className="title-footer">Profile</h5>
          <ul className="link">
            <li>
              <h6>
                <a href="/en/profile/" rel="nofollow" className="">
                  Profile
                </a>
              </h6>
            </li>
            <li>
              <h6>
                <a href="/en/orders/" rel="nofollow" className="">
                  My Orders
                </a>
              </h6>
            </li>
            <li>
              <h6>
                <a href="/en/favourite/" rel="nofollow" className="">
                  My Favourite
                </a>
              </h6>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 text-center col-sm-6">
          <h5 className="title-footer">Stay connected</h5>
          <ul className="link social-media">
            <li>
              <a
                href="https://www.facebook.com/pg/niceonesa/about/"
                target="_blank"
                rel="nofollow noopener"
              >
                <img
                  src="https://niceonesa.com/_nuxt/img/878f731.png"
                  height="40px"
                  width="40px"
                  alt="niceone-linkedin-page"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCu8c7LeOLpt1pPICrkHBKiw"
                target="_blank"
                rel="nofollow noopener"
              >
                <img
                  src="https://niceonesa.com/_nuxt/img/ec12c7e.png"
                  height="40px"
                  width="40px"
                  alt="niceone-linkedin-page"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/niceonesa/?hl=en"
                target="_blank"
                rel="nofollow noopener"
              >
                <img
                  src="https://niceonesa.com/_nuxt/img/48b6e54.png"
                  height="40px"
                  width="40px"
                  alt="niceone-linkedin-page"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.snapchat.com/add/niceonesa"
                target="_blank"
                rel="nofollow noopener"
              >
                <img
                  src="https://niceonesa.com/_nuxt/img/e1a2658.png"
                  height="40px"
                  width="40px"
                  alt="niceone-linkedin-page"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/NICEONESA"
                target="_blank"
                rel="nofollow noopener"
              >
                <img
                  src="https://niceonesa.com/_nuxt/img/768bb7f.png"
                  height="40px"
                  width="40px"
                  alt="niceone-linkedin-page"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/niceonesa/"
                target="_blank"
                rel="nofollow noopener"
              >
                <img
                  src="https://niceonesa.com/_nuxt/img/d9eddd6.png"
                  height="40px"
                  width="40px"
                  alt="niceone-linkedin-page"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 text-center col-sm-6">
          <h5 className="title-footer">Download our apps</h5>
          <ul className="link">
            <li>
              <a
                href="https://play.google.com/store/apps/details?id=com.NiceOne.App"
                target="_blank"
                rel="nofollow noopener"
              >
                <img
                  src="https://niceonesa.com/_nuxt/img/c589728.png"
                  height="43px"
                  width="145px"
                  alt="nicone-android-app"
                />
              </a>
            </li>
            <li>
              <a
                href="https://itunes.apple.com/sa/app/nice-one-%D9%86%D8%A7%D9%8A%D8%B3-%D9%88%D9%86/id1271754138?mt=8"
                target="_blank"
                rel="nofollow noopener"
              >
                <img
                  src="https://niceonesa.com/_nuxt/img/4b90bad.png"
                  height="43px"
                  width="145px"
                  alt="niceone-ios-app"
                />
              </a>
            </li>
          </ul>
        </div>
      </Row>
    </div>
  );
}

export default Mainfooter;
