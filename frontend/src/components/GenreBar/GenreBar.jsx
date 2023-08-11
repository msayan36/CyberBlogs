import "./style.css";

const GenreBar = () => {
  return (
    <ul className="genreBar">
      <li className="genre-item genre-active">All</li>
      <li className="genre-item">Anime</li>
      <li className="genre-item">Manga</li>
      <li className="genre-item">Fantasy</li>
      <li className="genre-item">Shonen</li>
      <li className="genre-item">Seinen</li>
    </ul>
  );
};

export default GenreBar;
