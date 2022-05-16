import {useState , useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {scrollActive} from './Reducer/AlertsReducer';

import LeftColumn from './Components/LeftColumn/LeftColumn';
import CenterColumn from './Components/CenterColumn/CenterColumns';
import RigthColumn from './Components/RigthColumn/RigthColumn';
import MenuProfile from './Components/MenuProfile/MenuProfile';

import linkedin from './Images/linkedinLogo.png';
import profileImg from './Images/profileImg.jpg';
import './Fontello/css/fontello.css';
import './App.css';

function App() {

  let dispatch = useDispatch();
  const [menuProfile, setMenuProfile] = useState(false);
  const showMenuProfile = () => setMenuProfile(!menuProfile);
  const scrollValue = useSelector(state => state.alertsReducer.scroll);

  const scrollNav = () => {
    const posicion = window.pageYOffset;
    dispatch(scrollActive(posicion));
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollNav);
  }, [scrollValue]);

  return (
    <div className="">
      <header id="containerMenu">
        <section className="searcher">
          <figure className="logoLinkedin">
            <a href="https://www.linkedin.com/in/santiago-guillen-ramirez-b162211a7/">
              <img src={linkedin} alt="linked logo"></img>
            </a>
          </figure>
          <span className="icon-search"><input type="text" className="" placeholder="Buscar"></input></span>
        </section>
        <nav>
          <ul>
            <li><span className="icon-home"></span><br />inicio</li>
            <li><span className="icon-group"></span><br />mi red</li>
            <li><span className="icon-briefcase"></span><br />empleos</li>
            <li><span className="icon-comment"></span><br />mensajes</li>
            <li><span className="icon-bell-alt"></span><br />notificaciones</li>

            <li className="userProfile" onClick={showMenuProfile}>
              <img className="userImgOp" src={profileImg} alt="linked logo"></img><br />
              yo<span className="icon-down-dir"></span>
            </li>

            <li className="optionProducts">
              <span className="icon-th"></span><br />
              productos<span className="icon-down-dir"></span>
            </li>

            <li><span className="icon-bullseye"></span><br />publicidad</li>
          </ul>
        </nav>
      </header>

      {menuProfile ? <MenuProfile /> : null}

      <article id="containerHome">
        <LeftColumn />
        <CenterColumn />
        <RigthColumn />
      </article>
    </div>
  );
}

export default App;
