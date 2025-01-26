import s from './Search.module.css';

interface Props {
  keywords: string;
  setKeywords: (keyword: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
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
