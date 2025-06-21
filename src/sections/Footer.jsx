import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer relative z-1">
      <div className="footer-container">
        <div className="flex flex-col justify-center"></div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a href={socialImg.link} target="_blank" key={index}>
              <div className="icon">
                <img src={socialImg.imgPath} alt="social icon" />
              </div>
            </a>
          ))}
        </div>
        {/* <div className="flex flex-col justify-center">
          <a href="https://www.youtube.com/watch?v=E-fdPfRxkzQ" target="_blank">
            <p className="text-center md:text-end">
              TemplateInspired by © {new Date().getFullYear()} Adrian Hajdin. All rights
              reserved.
            </p>
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
