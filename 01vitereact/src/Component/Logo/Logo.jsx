import './Logo.css';
const Logo = () => {
    const url = 'https://intellsys-optimizer.b-cdn.net/interviews/978ea909-91ec-49c2-bd69-d494c097d38d/header.jpg';
    return ( 
        <div className="main-logo"  >
          <img src={url} alt="" srcset="" />
        </div>
     );
}
 
export default Logo;