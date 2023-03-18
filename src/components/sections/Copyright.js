const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Priyam Garg</span>
        <span>
          Designed By{" "}
          <a
            target="_blank"
            href="https://themeforest.net/user/Codeefly/portfolio"
          >
            Codeefly
          </a>
        </span>
        <ul>
          <li>
            <a href="https://github.com/priyam314">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/GPriyam2015">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          {/* <li>
            <a href="#">
              <i className="fa-brands fa-dribbble" />
            </a>
          </li> */}
          <li>
            <a href="https://www.linkedin.com/in/priyam-garg-900a8116a/">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
