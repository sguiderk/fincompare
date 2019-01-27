import React from 'react';

class Header extends React.Component {
   render() {
      return (
         <div>
            <header className="header">
            <a href=""className="logo"><img src={process.env.PUBLIC_URL + '/fincompare_blu.svg' } alt="logo" /></a>
            <div className="content"><span>{this.props.headerProp}</span></div>
            </header>
         </div>
      );
   }
}

export default Header;