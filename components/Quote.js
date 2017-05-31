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

    if (this.props.web) multiplier *= 1.25;

    if (this.props.android) multiplier *= 1.25;

    if (this.props.ios) multiplier *= 1.25;

    if (this.props.responsive) multiplier *= 1.15;

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

    return Math.round((this.props.basePrice * multiplier) + summer);
  }

  getServicePrice() {
    const service = Math.round(this.getFullPrice() * this.props.basePercentage);

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
            <Value value={this.getServicePrice()} icon={<Cloud size="small" />} label="As a Service" units="CLP/month" size="small" />
            <Value value={this.getFullPrice()} icon={<Bundle size="small" />} label="Standard" units="CLP" size="small" />
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
  };
}

export default connect(mapStateToProps, null)(Quote);
