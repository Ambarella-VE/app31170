import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar>
        <ItemListContainer greeting="Este es mi Item List Container" />
        <div>
          <p>
            A tener en cuenta:
          </p>
            <ul>
              <li>
                Yo escribo mi app dentro de NavBar para que funcione bien el SideDrawer (es responsive).
              </li>
              <li>
                Caso común escriben:
              </li>
              <div  style={{
                backgroundColor: "#232323",
                color: "#ffffff"
              }}>

                <code>
                  <pre style={{
                    whiteSpace: "pre-wrap"
                  }}>
{`
  import NavBar from "./components/navBar/NavBar";
  \n
  import ItemListContainer from "./components/itemListContainer/ItemListContainer";
  
  function App() {
    return (
      <>
        <NavBar>
        <ItemListContainer greeting="Este es mi Item List Container" />
      </>
    );
  }
  
  export default App;
  `}
                  </pre>
                </code>
              </div>
          </ul>
        </div>
      </NavBar>
    </>
  );
}

export default App;
