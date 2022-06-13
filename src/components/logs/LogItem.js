import React from 'react';
import Moment from 'react-moment';
import m from 'moment';
import PropTypes from'prop-types';

const LogItem = ({log}) => {
  return (
    <li className='collection-item'>
      <div>
        <a href="#edit-log-modal" className={`modal-trigger ${log.attention? 'red-text' : 'blue-text'}`}>{log.message}</a>
        <br/>
        <span className="grey-text">
        <span className="black-text">ID: #{log.tech}</span> Last updated by{' '} 
        <span className="black-text">{log.tech}</span> on{' '}
       {m(new Date(log.date)).format('DD/MM/yyyy')}
        </span>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired
};
export default LogItem;