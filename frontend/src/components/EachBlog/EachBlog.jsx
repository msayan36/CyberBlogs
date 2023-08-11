import "./style.css";

const EachBlog = () => {
  return (
    <div className="eachBlog">
      <div className="eachCoverImg"></div>
      <div className="eachBlogInfo">
        <div className="each_tag">Anime</div>
        <div className="each_head">
          Top 10 Horror Fantasy Anime of All Time.
        </div>
        <div className="each_preview">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum ....
        </div>
        <div className="each_author">
          <div className="eachAuthorPic"></div>
          <div className="eachAuthorInfo">
            <p className="eachAuthorName">Sayan Munshi</p>
            <p className="eachAuthorDate">11th August, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachBlog;
