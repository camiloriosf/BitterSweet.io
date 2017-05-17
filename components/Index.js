import React from 'react';
import Article from 'grommet/components/Article';
import { connect } from 'react-redux';
import * as actions from '../lib/actions/index';
import IndexHero from './IndexHero';
import IndexQuote from './IndexQuote';
import IndexServices from './IndexServices';
import IndexAbout from './IndexAbout';
import IndexContact from './IndexContact';

function mapStateToProps(state) {
  return {
    section: state.index.section,
  };
}

export default connect(mapStateToProps, actions)(
  props => (
    <Article
      scrollStep selected={props.section} onSelect={section => props.changeSection({ section })}
    >
      <IndexHero />
      <IndexQuote />
      <IndexServices />
      <IndexAbout />
      <IndexContact />
    </Article>
  ),
);
