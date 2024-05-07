import Background from "./components/Background.jsx";
import Page1 from "./components/Page1.jsx";
import Page2 from "./components/Page2.jsx";


function App(props) {
    return (
        <Background>
            <Page1 />
            <Page2 />
        </Background>
    );
}

export default App;