import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const HeroStandalone = () => {
  return <section className="page-title cursor-light">
      <div className="bg-overlay bg-black opacity-5" />
      <Container>
        <h2 className="hide-cursor">STANDALONE</h2>
        <ul className="page-breadcrumb link">
          <li><Link to="/surfing"><span className="icon fas fa-home" />Home</Link></li>
          <li>StandAlone</li>
        </ul>
      </Container>
    </section>;
};
export default HeroStandalone;