import React from 'react';
//Components
import Cards from './pages/components/Cards/Cards';
import CountryPicker from "./pages/components/CountryPicker/CountryPicker";
import Footer from './pages/layout/Footer';
import styles from "./App.module.css";
import { fetchData } from "./api/Index";
import coronaLogo from './images/image.png'
import './App.css';

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountrySelector = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaLogo} alt="COVID-19" />
        <br />
        <text>
          <b>Johnalex's Corona Virus Tracker App</b>
        </text>
        <br />
        <text>
          <i>(Looking for a particular country, why not select the option from down below)</i>
        </text>
        <br />
        <br />
        <CountryPicker handleCountrySelector={this.handleCountrySelector} />
        <br />
        <Cards data={data} country={country} />
        <Footer/>
      </div>
    );
  }
}

export default App;