import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
    {
      sections.map(({id, ...otherSectionProps}) =>  (
        <MenuItem
          key={id}
          // this shorthands passing in all the props manually:
          {...otherSectionProps} 
        />
      ))
    }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
