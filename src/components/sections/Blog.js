import Link from "next/link";
const Blog = () => {
  return (
    <section className="blog main-section flex-column-mobile" id="blog">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Latest Publications
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {/* POST ITEM STARTS */}
        <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/cca-pub" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/cca.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">Self-Supervised Learning</span>
                <span className="title">
                  Contrastive Curriculum Augmentation Framework for Self-Supervised Learning
                </span>
                <p>
                  With increase in unstructured data everyday, learning underlying structure of data 
                  has become rather important compared to the alternative of manually labelling data 
                  which is very costly. . .
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>18 March 2023</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-tag" />
                    <span>Self-Supervised Learning, Contrastive Learning, Deep Learning, Computer Vision</span>
                  </div>
                  {/* <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>17 comments</span>
                  </div> */}
                </div>
              </div>
            </a>
          </Link>
        </div>
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        {/* <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-2.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">development</span>
                <span className="title">
                  How Efficient Site Structure Can Boost SEO
                </span>
                <p>
                  ncididunt ut labore et dolore magna aliqua. Ut enim aminim
                  veniam...
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>21 Feb 2022</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>34 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div> */}
        {/* POST ITEM ENDS */}
        {/* POST ITEM STARTS */}
        {/* <div className="animated-layer fade-in-right-animation fadeInUp wow">
          <Link href="/blog-post" legacyBehavior>
            <a>
              <span className="img-holder">
                <img src="assets/blog/blog-post-3.jpg" alt="" />
              </span>
              <div className="content">
                <span className="category">essentials</span>
                <span className="title">
                  Change Management for Customer Success
                </span>
                <p>
                  ncididunt ut labore et dolore magna aliqua. Ut enim aminim
                  veniam...
                </p>
                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-calendar" />
                    <span>1 Jan 2022</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-comments" />
                    <span>10 comments</span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div> */}
        {/* POST ITEM ENDS */}
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Blog;
