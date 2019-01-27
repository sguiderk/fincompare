import React from 'react';

class Content extends React.Component {
   render() {
      return (
         <div>
	         <section className="wrapper">
		          <div className="inner">
			          <div className="special"> 
			           	 <i className="fa fa-flag-checkered"></i>
			         	 <p className="content">{this.props.contentProp}</p>
			          </div>
		          </div>
	         </section>  
         </div>
      );
   }
}
export default Content;