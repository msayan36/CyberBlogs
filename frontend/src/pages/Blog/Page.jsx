import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "./style.css";

const Page = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = params.blog;
  }, []);

  return (
    <>
      <button className="backBtn" onClick={() => navigate(-1)}>
        <IoIosArrowBack />
      </button>
      <div className="blog-cover">
        <h1 className="blog-title">CyberPunk EdgeRunner: Best Anime of 2022</h1>
        <div className="coverTag">Anime</div>
        <div className="blog-cover-author">
          <div className="blog-cover-author_profile_pic"></div>
          <div className="blog-cover-author_details">
            <p className="blog-cover-author_details_name">Sayan Munshi</p>
            <p className="blog-cover-author_details_date">11th August, 2023</p>
          </div>
        </div>
      </div>
      <div className="blog-content">
        <p className="blog-content-content">
          lorem Ipsum Sub Heading Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className="blog-content-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className="blog-content-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </>
  );
};

export default Page;
