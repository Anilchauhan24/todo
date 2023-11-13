import "./styles.css";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false }
];
export default function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return (
    <div>
      <h1>🏝️ Far Away 🧳</h1>
    </div>
  );
}

const Form = () => {
  return (
    <div className="add-form">
      <h3> What do you need for your 😂trip? </h3>
    </div>
  );
};

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
};
const Item = ({ item }) => {
  return (
    <li key={item.id}>
      <span>
        {item.quantity}-{item.idescriptiond}
      </span>
      <button>+</button>
    </li>
  );
};
const Stats = () => {
  return (
    <div>
      <footer className="stats">
        <em>😋 You have X items on your list, and you already packed X (X%)</em>
      </footer>
    </div>
  );
};
