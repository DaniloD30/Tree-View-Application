import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header>
        <div className="flex gap-2 h-[96%]">
          <div className="border basis-1/3 rounded-sm flex flex-col">
            <input placeholder="search"/>

            <div className="px-1">trhee</div>
          </div>
          <div className="border basis-2/3 rounded-sm"></div>
        </div>
      </Header>
    </div>
  );
}

export default App;
