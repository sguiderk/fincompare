import React from 'react';
import Loading from './Loading';
import SectionSeason from './SectionSeason';
import {CollapsibleComponent, CollapsibleHead, CollapsibleContent} from 'react-collapsible-component';

const race = require('./../api/Race');

class SectionListRace extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         datarace:[],
         dataraceresults:[],
         season:2005,
         isLoading: false,
         error: null,
      }

   }
   componentDidMount() {

   /** set loading to true  **/
   this.setState({ isLoading: true });
    /** get race by season **/

    race.getRace(this.state.season)
      .then(result => this.setState({
        datarace: result.data.MRData.RaceTable.Races,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));

    /** get result race by season **/
     race.getDriver(this.state.season)
      .then(result => this.setState({
        dataraceresults: result.data.MRData.RaceTable.Races,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));

  }
  updateStateSeason(value) {
       this.setState({season: value});
       this.componentDidMount();
  }
  sectionlistofrace(){
    return(
      <section>

           <div className="content">

           <h1>List race of season {this.state.season}</h1>

             <CollapsibleComponent>

             <div className="list-races">

              {this.state.datarace.map(race =>
                <div key={race.id}>

                   <div className="infos">

                      <div className="section-info">
                        <strong>Race :</strong><a className="race-title" target="_blank" href={race.url}>{race.raceName}</a>
                      </div>

                      <div className="section-info">
                         <strong>Circuit :</strong><a className="circuit-title" target="_blank" href={race.Circuit.url}>{race.Circuit.circuitName}</a>
                      </div>

                      <div className="section-info">
                         <strong>Date :</strong><p className="date" >{race.date}</p>
                      </div>

                    </div>

                  <CollapsibleHead className="additionalClassForHead">Check winners for this race <i className="fa fa-arrow-right"></i></CollapsibleHead>
                   <CollapsibleContent className="additionalClassForContent">
               
                    {this.state.dataraceresults.map(result =>
                      <div key={result.id}>
                        {race.raceName === result.raceName && <p> <ul className="drivers">{
                            
                          result.Results.map(winner =>
                             
                          <li key={winner.id}>

                           <i className="fa fa-trophy"></i>
                           <a className="name-driver" target="_blank" href={winner.Driver.url}> {  winner.Driver.givenName + ' ' +  winner.Driver.familyName }</a>
                           <div>Birthday : {winner.Driver.dateOfBirth}  </div> 
                           <div>Nationality : {winner.Driver.nationality}  </div> 
                          </li>
                         )
                    
                        }</ul> </p> 

                          }
                     </div>
                    )}
                 
                </CollapsibleContent>

                </div>
              )}
             </div>

             </CollapsibleComponent>

            </div>

          </section>
   )
  }
   render() {
     const {  isLoading, error } = this.state;

      if (error) {
          return <p>{error.message}</p>;
      }
      return (
         <div>
            
            <section className="wrapper">
              <div className="inner">

               <div className="highlights">

                 { isLoading ?  <Loading /> :  this.sectionlistofrace()  }

                 <SectionSeason updateSeason={ this.updateStateSeason.bind(this) } />

                </div>

               </div>
            </section>

         </div>
      );
   }
}

export default SectionListRace;