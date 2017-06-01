import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Notification from 'grommet/components/Notification';
import Animate from 'grommet/components/Animate';
import Box from 'grommet/components/Box';
import { connect } from 'react-redux';
import * as actions from '../lib/actions/index';

class Contact extends Component {
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
      return this.props.submitError({ message: 'You must complete all fields' });
    }

    if (this.state.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      return this.props.submitError({ message: 'Bad email address' });
    }

    return this.props.submitForm(this.state);
  }

  render() {
    return (
      <Section justify="start" full="vertical" align="center" pad="small" colorIndex="light-2" margin={{ top: 'large' }} >
        <Box margin={{ top: 'large' }} >
          <Form onSubmit={this.handleSubmit} >
            <Header>
              <Heading>
                Work with us
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
        </Box>
      </Section>
    );
  }
}

function mapStateToProps(state) {
  return {
    sent: state.contact.sent,
    error: state.contact.error,
    errorMessage: state.contact.errorMessage,
  };
}

export default connect(mapStateToProps, actions)(Contact);

