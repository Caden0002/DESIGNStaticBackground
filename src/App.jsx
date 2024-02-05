import Background from "./components/Background.jsx";
import Hero from "./components/Hero.jsx";
import Hero2 from "./components/Hero2.jsx";




function App(props) {
    return (
        <Background>
            <Hero2 />
            <Hero />
        </Background>
    );
}

export default App;