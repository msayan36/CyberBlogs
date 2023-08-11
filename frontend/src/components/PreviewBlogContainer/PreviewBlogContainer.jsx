import "./style.css";
import EachBlog from "../EachBlog/EachBlog";

const PreviewBlogContainer = () => {
  return (
    <div className="previewBlogSection">
      <div className="featuredBlog">
        <div className="featuredCoverImg"></div>
        <div className="featuredBlogInfo">
          <p className="tag">Anime</p>
          <h2 className="blog-head">
            CyberPunk EdgeRunner: Best Anime of 2022
          </h2>
          <p className="blog-pre-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since .....
          </p>
          <div className="author">
            <div className="author_pic"></div>
            <div className="author_info">
              <div className="author_name">Sayan Munshi</div>
              <div className="publish_date">11th August, 2023</div>
            </div>
          </div>
        </div>
      </div>
      <div className="laterBlogs">
        <EachBlog />
        <EachBlog />
        <EachBlog />
        <EachBlog />
        <EachBlog />
        <EachBlog />
      </div>
      <button className="loadMore">View More</button>
    </div>
  );
};

export default PreviewBlogContainer;
