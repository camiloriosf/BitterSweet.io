import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Button from 'grommet/components/Button';
import Bundle from 'grommet/components/icons/base/Bundle';
import Cloud from 'grommet/components/icons/base/Cloud';
import { connect } from 'react-redux';
import First from './quote/01';
import Second from './quote/02';
import Third from './quote/03';
import Fourth from './quote/04';
import Fifth from './quote/05';
import Sixth from './quote/06';
import Seventh from './quote/07';
import Eighth from './quote/08';
import Nineth from './quote/09';
import Tenth from './quote/10';
import Send from './quote/Send';

class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = { step: 1, steps: 11 };
  }

  getFullPrice() {
    let multiplier = 1;
    let summer = 0;

    if (!this.props.web && !this.props.android && !this.props.ios) return 0;

    if (this.props.web) multiplier *= 1.25;

    if (this.props.android) multiplier *= 1.25;

    if (this.props.ios) multiplier *= 1.25;

    if (this.props.responsive && this.props.web) multiplier *= 1.15;

    if (this.props.design) multiplier *= 2;

    multiplier *= this.props.pages;

    switch (this.props.auth) {
      case 'opt1':
        summer += 0;
        break;
      case 'opt2':
        summer += 1000000;
        break;
      case 'opt3':
        summer += 1675000;
        break;
      case 'opt4':
        summer += 1000000;
        break;
      default:
        break;
    }

    switch (this.props.data) {
      case 'opt1':
        multiplier *= 1;
        break;
      case 'opt2':
        multiplier *= 2;
        break;
      case 'opt3':
        multiplier *= 2.25;
        break;
      case 'opt4':
        multiplier *= 1.75;
        break;
      default:
        break;
    }

    switch (this.props.geolocation) {
      case 'opt1':
        summer += 0;
        break;
      case 'opt2':
        summer += 700000;
        break;
      case 'opt3':
        summer += 1000000;
        break;
      default:
        break;
    }

    summer += this.props.apis * 3500000;

    if (this.props.scheduling) summer += 3500000;

    if (this.props.commerce[0] === 'opt1') summer += 2000000;

    if (this.props.commerce[0] === 'opt2') summer += 3500000;

    if (this.props.commerce[1] === 'opt3') summer += 3500000;

    if (this.props.commerce[1] === 'opt4') summer += 5000000;

    if (this.props.admin) multiplier *= 1.5;

    switch (this.props.product) {
      case 'opt1':
        multiplier *= 0.5;
        break;
      case 'opt2':
        multiplier *= 1;
        break;
      case 'opt3':
        multiplier *= 1.5;
        break;
      default:
        break;
    }

    switch (this.props.delivery) {
      case 'opt1':
        multiplier *= 1;
        break;
      case 'opt2':
        multiplier *= 1.25;
        break;
      case 'opt3':
        multiplier *= 1.5;
        break;
      default:
        break;
    }

    return Math.round((this.props.basePrice * multiplier) + summer);
  }

  getServicePrice() {
    const service = Math.round(this.getFullPrice() * this.props.basePercentage);

    if (service === 0) return 0;

    if (service < this.props.minService) {
      return this.props.minService;
    }
    return service;
  }

  renderStep() {
    switch (this.state.step) {
      case 1:
        return <First />;
      case 2:
        return <Second />;
      case 3:
        return <Third />;
      case 4:
        return <Fourth />;
      case 5:
        return <Fifth />;
      case 6:
        return <Sixth />;
      case 7:
        return <Seventh />;
      case 8:
        return <Eighth />;
      case 9:
        return <Nineth />;
      case 10:
        return <Tenth />;
      case 11:
        return <Send />;
      default:
        return null;
    }
  }

  render() {
    return (
      <Section justify="start" full="vertical" align="center" pad="small" colorIndex="light-2" margin={{ top: 'large' }} >
        <Box align="center" margin={{ top: 'medium' }}>
          <Value value={this.state.step === 1 ? 0 : Math.round(100 * ((this.state.step - 1) / (this.state.steps - 1)))} units="%" align="start" size="medium" />
          <Meter value={this.state.step === 1 ? 0 : Math.round(100 * ((this.state.step - 1) / (this.state.steps - 1)))} colorIndex="neutral-2" size="medium" />
          <Box direction="row" justify="center" align="center" responsive pad={{ between: 'large' }} >
            <Value value={this.getServicePrice()} icon={<Cloud size="small" />} label="Pay as you Go" units="CLP/month" size="small" />
            <Value value={this.getFullPrice()} icon={<Bundle size="small" />} label="1-Time Fee" units="CLP" size="small" />
          </Box>
        </Box>
        {this.renderStep()}
        <Box direction="row" justify="center" align="center" responsive>
          {this.state.step > 1
          ? <Box margin="small"><Button label="previous step" onClick={() => { this.setState({ step: this.state.step - 1 }); }} /></Box>
          : null}
          {this.state.step < this.state.steps
          ? <Box margin="small"><Button label="next step" onClick={() => { this.setState({ step: this.state.step + 1 }); }} primary /></Box>
          : null}
          {this.state.step === this.state.steps
          ? <Box margin="small"><Button label="SEND" onClick={() => true} critical /></Box>
          : null}
        </Box>
      </Section>
    );
  }
}

function mapStateToProps(state) {
  return {
    basePrice: state.quote.basePrice,
    basePercentage: state.quote.basePercentage,
    minService: state.quote.minService,
    web: state.quote.web,
    android: state.quote.android,
    ios: state.quote.ios,
    responsive: state.quote.responsive,
    pages: state.quote.pages,
    design: state.quote.design,
    auth: state.quote.auth,
    data: state.quote.data,
    geolocation: state.quote.geolocation,
    apis: state.quote.apis,
    scheduling: state.quote.scheduling,
    commerce: state.quote.commerce,
    admin: state.quote.admin,
    product: state.quote.product,
    delivery: state.quote.delivery,
  };
}

export default connect(mapStateToProps, null)(Quote);
