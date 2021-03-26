import './FrontPage.scss';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import TextSections from './components/TextSections';
import BotSection from './components/BotSection';

function FrontPage() {
    return (
        <div className="frontPage">
            <NavBar />
            <MainContent />
            <TextSections />
            <BotSection />
        </div>
    )
}

export default FrontPage;