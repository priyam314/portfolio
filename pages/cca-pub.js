import { Fragment, useEffect } from "react";

const BlogPost = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog-page");
  }, []);

  return (
    <Fragment>
      <a href="/" className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </a>
      <div className="blog-content">
        <h1>My Publication</h1>
        {/* ARTICLE STARTS */}
        <div className="main-post">
          {/* META STARTS */}
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
          {/* META ENDS */}
          {/* CONTENT STARTS */}
          <h3>Contrastive Curriculum Augmentation Framework for Self-Supervised Learning</h3>
          <img src="assets/blog/cca.jpg" alt="Blog image" />
          <div className="post-content">
            <p>
             With increase in unstructured data everyday, learning underlying 
             structure of data has become rather important compared to the 
             alternative of manually labelling data which is very costly. The 
             primary goal of self-supervised learning methods is to capture the 
             fundamental representations of data regardless of labels. In a 
             contrastive learning setting, we have created a curriculum 
             augmentation framework and trained a dual network with the help of 
             that framework. Our framework gradually updates augmentation 
             parameters within a set limit and progressively make the images 
             harder to classify for every successive iteration. We divided our 
             framework into static composure and dynamic composure sub parts and 
             found static composure works better because of comparatively less 
             catastrophic forgetting than dynamic composure. We have shown in our 
             experiments that our curriculum augmentation framework indeed works 
             better than standard augmentations. We also developed ProAug which 
             supports our novel curriculum augmentation framework in both supervised 
             and self-supervised training paradigm.
            </p>
          </div>
          {/* CONTENT ENDS */}
          <div className="meta">
            <div className="d-flex align-items-center">
              <i className="fa fa-link" />
              <span>
                <a href="http://iraj.doionline.org/dx/IJSCAI-IRAJ-DOIONLINE-18724">Link to Paper</a>
              </span>
            </div>
          </div>
          
        </div>
        {/* ARTICLE ENDS */}
      </div>
    </Fragment>
  );
};
export default BlogPost;
