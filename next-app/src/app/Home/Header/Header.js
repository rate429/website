import './css/Header.css'
import NamePlate from "./NamePlate/NamePlate";
import ContactMe from "./ContactMe/ContactMe";
export default function Header() {
    return (<div className="Header">
        <NamePlate />
        <ContactMe />
    </div>);
}