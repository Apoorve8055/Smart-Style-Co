import "./Footer.scss";
import { Fade } from "react-awesome-reveal";
const Footer = () => {
  return (
    <Fade>
      <footer className="footer">
        <div className="footer-important-links">
          <div className="footer-subscribe">
            <input
              type="text"
              className="input"
              placeholder="Enter your email"
            />
            <div className="btn">Subscribe</div>
          </div>
          <div className="footer-list">
            <div className="info">
              <ul>
                <li>Need Help?</li>
                <li>Campaigns</li>
                <li>Guarantee</li>
                <li>Support</li>
                <li>Warranty</li>
              </ul>
            </div>
            <div className="social">
              <ul>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>YouTube</li>
                <li>Telegram</li>
              </ul>
            </div>
            <div className="useful">
              <ul>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>YouTube</li>
                <li>Telegram</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          ©2023, Smart Style Co. | Terms & Conditions and Privacy Policy |
          Sitemap
        </div>
      </footer>
    </Fade>
  );
};
export default Footer;
