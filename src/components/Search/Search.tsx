import { useTheme } from '../../context/ThemeContext';
import s from './Search.module.css';

interface Props {
  keywords: string;
  setKeywords: (keyword: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  const { isDark } = useTheme();

  return (
    <div className={`${s.search} ${isDark ? s.dark : s.light}`}>
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
