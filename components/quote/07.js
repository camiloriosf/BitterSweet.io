import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Animate from 'grommet/components/Animate';
import FormField from 'grommet/components/FormField';
import CheckBox from 'grommet/components/CheckBox';
import { connect } from 'react-redux';
import * as actions from '../../lib/actions/index';

class Seventh extends Component {

  handleOptionChange = (changeEvent) => {
    if (changeEvent.target.name === 'opt1' || changeEvent.target.name === 'opt2') {
      if (changeEvent.target.checked) {
        this.props.updateQuote(
          { values: { commerce: [changeEvent.target.name, this.props.commerce[1]] } },
        );
      } else {
        this.props.updateQuote(
          { values: { commerce: ['', this.props.commerce[1]] } },
        );
      }
    }

    if (changeEvent.target.name === 'opt3' || changeEvent.target.name === 'opt4') {
      if (changeEvent.target.checked) {
        this.props.updateQuote(
          { values: { commerce: [this.props.commerce[0], changeEvent.target.name] } },
        );
      } else {
        this.props.updateQuote(
          { values: { commerce: [this.props.commerce[0], ''] } },
        );
      }
    }
  }

  render() {
    const { commerce } = this.props;
    return (
      <Box pad="small" align="center" justify="center">
        <Animate enter={{ animation: 'slide-left', duration: 300, delay: 0 }} keep>
          <Box>
            <Heading uppercase tag="h2" align="center" >
              e-commerce
            </Heading>
            <FormField>
              <CheckBox name="opt1" checked={commerce[0] === 'opt1'} label="1-Time Purchase" onChange={this.handleOptionChange} />
              <CheckBox name="opt2" checked={commerce[0] === 'opt2'} label="Advanced Transactions" onChange={this.handleOptionChange} />
              <CheckBox name="opt3" checked={commerce[1] === 'opt3'} label="Support Basic Subscriptions" onChange={this.handleOptionChange} />
              <CheckBox name="opt4" checked={commerce[1] === 'opt4'} label="Support Advanced Subscriptions" onChange={this.handleOptionChange} />
            </FormField>
          </Box>
        </Animate>
      </Box>
    );
  }
}

function mapStateToProps(state) {
  return {
    commerce: state.quote.commerce,
  };
}

export default connect(mapStateToProps, actions)(Seventh);
