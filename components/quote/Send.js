import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Animate from 'grommet/components/Animate';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Notification from 'grommet/components/Notification';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import { connect } from 'react-redux';
import * as actions from '../../lib/actions/index';

class Send extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', comment: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sent) {
      this.setState({ name: '', email: '', comment: '' });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.name || !this.state.email || !this.state.comment) {
      return this.props.submitQuoteError({ message: 'You must complete all fields' });
    }

    if (this.state.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      return this.props.submitQuoteError({ message: 'Bad email address' });
    }

    return this.props.submitQuoteForm(this.state);
  }

  render() {
    return (
      <Box pad="small" align="center" justify="center">
        <Animate enter={{ animation: 'slide-left', duration: 300, delay: 0 }} keep>
          <Box>
            <Heading tag="h4">
                You are 1 click away from starting your new project.
            </Heading>
            <Layer
              closer hidden={this.props.hidden} onClose={() => this.props.hideQuoteForm(true)}
            >
              <Form onSubmit={this.handleSubmit} >
                <Header>
                  <Heading>
                    Send quote
                  </Heading>
                </Header>
                <Animate visible={this.props.sent} enter={{ animation: 'slide-left', duration: 300, delay: 0 }} leave={{ animation: 'slide-left', duration: 300, delay: 0 }} ><Notification message="Message Sent" size="medium" status="ok" /></Animate>
                <Animate visible={this.props.error} enter={{ animation: 'slide-left', duration: 300, delay: 0 }} leave={{ animation: 'slide-left', duration: 300, delay: 0 }} ><Notification message={this.props.errorMessage} size="medium" status="warning" /></Animate>
                <FormFields>
                  <FormField label="Name">
                    <TextInput
                      value={this.state.name}
                      onDOMChange={(event) => { this.setState({ name: event.target.value }); }}
                    />
                  </FormField>
                  <FormField label="Email">
                    <TextInput
                      value={this.state.email}
                      onDOMChange={(event) => { this.setState({ email: event.target.value }); }}
                    />
                  </FormField>
                  <FormField label="About your company and project">
                    <textarea
                      rows="4"
                      value={this.state.comment}
                      onChange={(event) => { this.setState({ comment: event.target.value }); }}
                    />
                  </FormField>
                </FormFields>
                <Footer pad={{ vertical: 'medium' }}>
                  <Button label="SEND MESSAGE" type="submit" primary fill />
                </Footer>
              </Form>
            </Layer>
          </Box>
        </Animate>
      </Box>
    );
  }
}

function mapStateToProps(state) {
  return {
    hidden: state.quote.hidden,
    sent: state.quote.sent,
    error: state.quote.error,
    errorMessage: state.quote.errorMessage,
  };
}

export default connect(mapStateToProps, actions)(Send);
