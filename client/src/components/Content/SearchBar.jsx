const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      Find a munro <input value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBar;
