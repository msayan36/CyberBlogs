import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import SearchBar from "../../components/SearchBar/SearchBar";
import GenreBar from "../../components/GenreBar/GenreBar";
import PreviewBlogContainer from "../../components/PreviewBlogContainer/PreviewBlogContainer";
import "./style.css";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="bannerSection">
        <Banner />
        <SearchBar />
      </div>
      <GenreBar />
      <PreviewBlogContainer />
    </>
  );
};

export default Page;
