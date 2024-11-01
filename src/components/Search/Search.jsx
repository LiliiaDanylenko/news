import s from './Search.module.css';

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={s.search}>
      <input
        type="text"
        className={s.input}
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
