import React from 'react';
import App from './../app/App';
import Header from './../app/Header';
import Content from './../app/Content';
import SectionListRace from './../app/SectionListRace';
import SectionSeason from './../app/SectionSeason';
import Loading from './../app/Loading';
import Footer from './../app/Footer';

 const race = require('./../api/Race');


// check the creaction of component  Header,Content,SectionListRace,SectionSeason,loading and footer

describe('creaction of component Header,Content,SectionListRace,SectionSeason,loading and footer', () => {

	it('component App created', () => {
	        const renderedComponent = shallow(<App />);
	        expect(renderedComponent).toMatchSnapshot();
	});


	it('component Header created', () => {
	        const renderedComponent = shallow(<Header />);
	        expect(renderedComponent).toMatchSnapshot();
	});

	it('component Footer created', () => {
	        const renderedComponent = shallow(<Footer />);
	        expect(renderedComponent).toMatchSnapshot();
	});

	it('component Content created', () => {
	        const renderedComponent = shallow(<Content />);
	        expect(renderedComponent).toMatchSnapshot();
	});

	it('component SectionListRace created', () => {
	        const renderedComponent = shallow(<SectionListRace />);
	        expect(renderedComponent).toMatchSnapshot();
	});

	it('component SectionSeason created', () => {
	        const renderedComponent = shallow(<SectionSeason />);
	        expect(renderedComponent).toMatchSnapshot();
	});

	it('component Loading created', () => {
	        const renderedComponent = shallow(<Loading />);
	        expect(renderedComponent).toMatchSnapshot();
	});

})


// check if app contains Header,Content,SectionListRace and footer

describe('App contains Header,Content,SectionListRace and footer', () => {

	it('App contains Header', function() {
	        expect(shallow(<App />).contains(<Header/>)).toMatchSnapshot();
	});

	it('App contains Content', function() {
	        expect(shallow(<App />).contains(<Content/>)).toMatchSnapshot();
	});

	it('App contains SectionListRace', function() {
	        expect(shallow(<App />).contains(<SectionListRace/>)).toMatchSnapshot();
	});

	it('App contains Footer', function() {
	        expect(shallow(<App />).contains(<Footer/>)).toMatchSnapshot();
	});
})


// Test Api race it givens a string and the connection work perfectly with the application 

describe('#getRace() using Promises', () => {
  it('should load race data', () => {
    return race.getRace('2005')
  	.then(data => {
      expect(data).toBeDefined()
      expect(data.data.MRData.RaceTable.Races[0].raceName).toEqual('Australian Grand Prix')
    })
    
  })
})

// Test Api driver it givens a string and the connection work perfectly with the application 

describe('#getDriver() using Promises', () => {
  it('should load driver data', () => {
    return race.getDriver('2005')
  	.then(data => {
      expect(data).toBeDefined()
      expect(data.data.MRData.RaceTable.Races[0].Results[0].Driver.givenName).toEqual('Giancarlo')
    })
    
  })
})

it('Has Title created', () => {

	const component = mount(<SectionSeason  />)
    expect(component.find("h3").text()).toEqual("Select the season :")

})

it('Check if select has from year 2005 until 2015', () => {
    const component = mount(<SectionSeason  />)
    expect(component.find('select').first().text()).toEqual('20052006200720082009201020112012201320142015');
});

it('datarace state must be a empty array', () => {
        const cmp = shallow(<SectionListRace />);
        expect(cmp.state().datarace).toEqual([]);
});

it('dataraceresults state must be a empty array', () => {
        const cmp = shallow(<SectionListRace />);
        expect(cmp.state().dataraceresults).toEqual([]);
 });