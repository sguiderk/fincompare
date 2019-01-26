import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import SectionListRace from './SectionListRace';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         header: "Challenge React FinCompare Campany",
         content: "This single page application that presents a list that shows the F1 world champions starting from 2005 until 2015. Clicking on an item shows the list of the winners for every race for the selected year.",
         footer: "Content Footer",
      }
   }
   render() {
     const {  error } = this.state;

      if (error) {
          return <p>{error.message}</p>;
      }
      return (
         <div>

            <Header headerProp = {this.state.header}/>
            <Content contentProp = {this.state.content}/>
            <SectionListRace />
            <Footer footerProp = {this.state.footer}/>

         </div>
      );
   }
}

export default App;