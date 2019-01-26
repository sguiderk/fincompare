import React from 'react';

class SectionSeason extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         season:2005,
         error: null,
      }

   }
  handleChange = (e) => { 
      this.setState({season: e.target.value});
      this.props.updateSeason(e.target.value);
  }
  buildSeasonOptions = () => {

    var arr = [];
    for (let i = 2005; i <= 2015; i++) {
         arr.push(<option key={i} value={i}>{i}</option>)
    }
    return arr; 
  }
  sectionselectseason(){
    return(
      <section>
         <div className="content">
           <h3>Select the season :</h3>
           <select id="season" onChange={this.handleChange} value={this.state.season}>
                 {this.buildSeasonOptions()}
           </select>
         </div>
     </section>
   )
  }
   render() {
     const { error } = this.state;

      if (error) {
          return <p>{error.message}</p>;
      }
      return (
         <div>
                { this.sectionselectseason()  }
         </div>
      );
   }
}

export default SectionSeason;