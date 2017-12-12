import React, { Component } from 'react';
import PropTypes from 'prop-types';

// React Admin.
import {
    Admin, // Entrance
    Resource, // Resource list item.
    Delete, // ...
} from 'react-admin';

// Injections

import jsonRestDataProvider from 'ra-data-fakerest';

import authClient from './authClient';
import addUploadFeature from './addUploadFeature';

import data from './data';

// Components.
import Sidebar from 'layout/Sidebar';
import {
    PostList,
    PostCreate,
    PostEdit,
    PostShow,
    PostIcon,
} from './posts';
import {
    CommentList,
    CommentEdit,
    CommentCreate,
    CommentShow,
    CommentIcon,
} from './comments';
import {
    UserList,
    UserEdit,
    UserCreate,
    UserIcon,
    UserShow,
} from './users';

class App extends Component {
  /**
   * The component props types.
   *
   * @type {Object}
   */
  static propTypes = {
      messages: PropTypes.object.isRequired,
  }

  /**
   * The component state object.
   *
   * @type {Object}
   */
  state = {
      locale: 'cn',
      title: 'Notadd Administration',
  }

  /**
   * The component render.
   *
   * @return {Element|Node}
   * @author Seven Du <shiweidu@outlook.com>
   */
  render() {
      const { locale, title } = this.state;
      const { messages } = this.props;

      return (
          <Admin
              authClient={ authClient }
              dataProvider={ this.dataProvider }
              locale={ locale }
              menu={ Sidebar }
              messages={ messages }
              title={ title }
          >
              { permissions => [
                  <Resource
                      name='posts'
                      list={ PostList }
                      create={ PostCreate }
                      edit={ PostEdit }
                      show={ PostShow }
                      remove={ Delete }
                      icon={ PostIcon }
                  />,
                  <Resource
                      name='comments'
                      list={ CommentList }
                      create={ CommentCreate }
                      edit={ CommentEdit }
                      show={ CommentShow }
                      remove={ Delete }
                      icon={ CommentIcon }
                  />,
                  permissions ? (
                      <Resource
                          name='users'
                          list={ UserList }
                          create={ UserCreate }
                          edit={ UserEdit }
                          remove={ Delete }
                          icon={ UserIcon }
                          show={ UserShow }
                      />
                  ) : null,
                  <Resource name='tags'/>,
              ] }
          </Admin>
      );
  }

  /**
   * Data provider.
   *
   * @param {[type]} type
   * @param {[type]} resource
   * @param {[type]} params
   * @return {Promise}
   * @author Seven Du <shiweidu@outlook.com>
   */
  dataProvider(type, resource, params) {
      const timeout = 10000;
      const rest = true;
      const uploadCapableDataProvider = addUploadFeature(jsonRestDataProvider(data, rest));

      return new Promise(resolve => setTimeout(
          () => resolve(
              uploadCapableDataProvider(type, resource, params)
          ), timeout
      ));
  }
}

export default App;
