import React, { Component } from 'react';
import '../styles/App.css';
// import Cart from './cart';
import Header from './header';
// import FeaturesList from './featuresList';
// import Total from './total';
import Summary from './summary'
import MainForm from './main-form'

// This object will allow us to
// easily convert numbers into US dollar values
// const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// });

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    } 
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };
 
  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  render() {
    return (
      <div className="App">
        <Header/>
        <main>
        <MainForm
          updateFeature={this.updateFeature}
          USCurrencyFormat={this.USCurrencyFormat}
          state= {this.state}
          />
        <Summary
          USCurrencyFormat={this.USCurrencyFormat}
          state= {this.state}
          />
        {/* The block below was broken up into MainForm and Summary per 
            revision requests:
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <FeaturesList 
              updateFeature={this.updateFeature}
              USCurrencyFormat={this.USCurrencyFormat}
              state= {this.state}
            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Cart 
              USCurrencyFormat={this.USCurrencyFormat}
              state= {this.state}
            />
            <Total 
              USCurrencyFormat={this.USCurrencyFormat}
              state= {this.state}
            />
          </section> */}
        </main>
      </div>
    );
  }
}

export default App;
