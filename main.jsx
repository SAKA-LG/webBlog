import { useState, useEffect } from "react";


//* hanya sistem pakai jika di perlukan

const App = () => {
  return (
    <div>
      <Header title="My React App" />
      <Counter />
      <UserStatus isLoggedIn={true} />
      <ItemList />
    </div>
  );
};


const Header = ({ title }) => <h1>{title}</h1>;


const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(count - 1)}>Kurang</button>
    </div>
  );
};


const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Waktu berjalan: {seconds} detik</p>;
};


const ItemList = () => {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};


const UserStatus = ({ isLoggedIn }) => {
  return isLoggedIn ? <h2>Welcome Back!</h2> : <h2>Please Login</h2>;
};

export default App;

//! Nothing change this bro 