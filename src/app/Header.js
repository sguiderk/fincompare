import React from 'react';

class Header extends React.Component {
   render() {
      return (
         <div>
            <header className="header">{this.props.headerProp}</header>
         </div>
      );
   }
}

export default Header;