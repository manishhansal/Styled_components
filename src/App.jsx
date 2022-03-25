import Button from "./Components/Buttons.jsx"
function App() {
  return (
    <div>
      Styled Components.
      <div>
        <Button color={"white"} backgroundColor={"#1890FF"} border={"1px dashed #1890FF"}>Primary Button</Button>
        <Button backgroundColor={"white"} border={"1px solid black"}>Default Button</Button>
        <Button border={"1px dashed #cecece"} backgroundColor={"white"}>Dashed Button</Button>
      </div>
      <Button border={"none"} backgroundColor={"white"}>Text Button</Button>
      <Button color={"#1890FF"} border={"none"} backgroundColor={"white"}>Link Button</Button>
    </div>
  );
}

export default App;
