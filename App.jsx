import Header from "./components/Header";
import "./App.css";
import Search from "./components/Search";
import FilterMenu from "./components/FilterMenu";

const App = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <div className="search-filter-container">
          <Search />
          <FilterMenu />
        </div>
      </main>
    </>
  );
};

export default App;
