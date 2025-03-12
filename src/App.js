import './App.css';
import './reset.css'
import "./components/ui/ui.css"
import {NavigationPanel, SocialPanel} from "./components/ui/fixed";
import {WelcomeSection} from "./components/section_1/welcome";
import {AirdropSection} from "./components/section_2/airdrop";
import {RoadmapSection} from "./components/section_3/roadmap";
import StageWanders from "./fonts/StageWanders.ttf";
import {MediaSection} from "./components/section_4/media";
import {FormSection} from "./components/section_6/form";

function App() {
  return (
    <div className="App">
        <video autoPlay loop muted playsInline className="video-bg">
            <source src="/assets/video/sadsad.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео-тег.
        </video>
        
        <div className="fixed">
            <NavigationPanel/>
            <SocialPanel/>
        </div>

        <div className="slides">
            <WelcomeSection/>
            <AirdropSection/>
            <RoadmapSection/>
            <MediaSection/>
            <MediaSection/>
            <FormSection/>
        </div>
    </div>
  );
}

export default App;
