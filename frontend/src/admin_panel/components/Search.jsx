import search from '../assets/icons/Search.svg';

const Search = ({ handleSearch }) => {
  return (
    <div className="search-container" onChange={handleSearch}>
      <img src={search} alt="search icon" />
      <input type="search" placeholder="Search" />
    </div>
  );
};

export default Search;
