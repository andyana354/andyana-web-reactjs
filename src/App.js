import React, {useState} from 'react';
import './App.css';

const PAGE_MOVIES = 'movies';
const PAGE_WISH =  'wish';

function App() {
  const [wish, setWish] = useState([]);
  const [page, setPage] = useState(PAGE_MOVIES);
  const [movies] = useState([
    {
      name: 'Shang-Chi',
      rate: 'Xu Shang-Chi (Chinese: 徐尚氣) is the son of Xu Wenwu the founder of the Ten Rings. Since his childhood, Shang-Chi underwent a brutal training that turned him into a formidable martial artist however his fathers actions made him to escape the Ten Rings.',
      image:'https://asset.kompas.com/crops/GWInQybwzDYZaOW3fMmF_5ElbeQ=/0x0:1080x720/750x500/data/photo/2021/04/19/607d916a4fa2a.jpg',
    },
    {
      name: 'Spider-Man: Far from Home',
      rate: 'Peter Parkers relaxing European vacation takes an unexpected turn when Nick Fury shows up in his hotel room to recruit him for a mission. The world is in danger as four massive elemental creatures each representing Earth, air, water and fire emerge from a hole torn in the universe. Parker soon finds himself donning the Spider-Man suit to help Fury and fellow superhero Mysterio stop the evil entities from wreaking havoc across the continent.',
      image:'https://images5.alphacoders.com/116/thumb-1920-1163351.png',
    },
    {
      name: 'Venom: Let There Be Carnage',
      rate: 'Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must put aside their differences to stop his reign of terror.',
      image:'https://wallpaperhook.com/wp-content/uploads/2020/11/venom-2-art-1920x1080-From-WallpaperHook.com-For-Free.jpg',
    },
    {
      name: 'Mortal Kombat',
      rate: 'In "Mortal Kombat," MMA fighter Cole Young, accustomed to taking a beating for money, is unaware of his heritage--or why Outworlds Emperor Shang Tsung has sent his best warrior, Sub-Zero, an otherworldly Cryomancer, to hunt Cole down. Fearing for his familys safety, Cole goes in search of Sonya Blade at the direction of Jax, a Special Forces Major who bears the same strange dragon marking Cole was born with. Soon, he finds himself at the temple of Lord Raiden, an Elder God and the protector of Earthrealm, who grants sanctuary to those who bear the mark.',
      image:'https://images.alphacoders.com/113/thumb-1920-1136691.jpeg',
    },
  ]);

  const addToWish = (movies) => {
    setWish([...wish, { ...movies}]);
  };

  const removeFromWish = (moviesToRemove) => {
    setWish(
      wish.filter((movies) => movies !== moviesToRemove)
    );
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderMovies = () => (
    <>
      <h1>Movies</h1>
      <div className= "movies">
        {movies.map((movies, idx) => (
          <div className="movie" key={idx}>
            <h3>{movies.name}</h3>
            <h4>{movies.rate}</h4>
            <img src={movies.image} alt={movies.name}/>
            <button onClick={() => addToWish(movies)}>
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </>
  );

  const renderWish = () => (
    <>
      <h1>Wishlist</h1>
      <div className= "movies">
        {wish.map((movies, idx) => (
          <div className="movie" key={idx}>
            <h3>{movies.name}</h3>
            <h4>{movies.rate}</h4>
            <img src={movies.image} alt={movies.name}/>
            <button onClick={() => removeFromWish(movies)}>
              Remove from Wishlist
            </button>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_WISH)}>
          Go to Wishlist({wish.length})
        </button>
        <button onClick={() => navigateTo(PAGE_MOVIES)}>
          View Movie List({movies.length})
        </button>
      </header>
      {page === PAGE_MOVIES && renderMovies()}
      {page === PAGE_WISH && renderWish()}
    </div>
  );
}

export default App;
