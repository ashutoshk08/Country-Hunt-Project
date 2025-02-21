export default function Search() {
  return (
    <div className="search-bar">
      <i className="ri-search-line"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        spellcheck="false"
      />
    </div>
  );
}
