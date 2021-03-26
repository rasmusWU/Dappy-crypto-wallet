import './TextSections.scss';
import TextSection1 from './TextSection1';
import TextSection2 from './TextSection2';
import TextSection3 from './TextSection3';
import TextSection4 from './TextSection4';
import TextSection5 from './TextSection5';
import TextSection6 from './TextSection6';

function TextSections() {
    return (
        <div className="textSections">
            <TextSection1 />
            <TextSection2 />
            <TextSection3 />
            <TextSection4 />
            <TextSection5 />
            <TextSection6 />
        </div>
    )
}

export default TextSections;