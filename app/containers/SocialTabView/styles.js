'use strict';

/**
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {
  type ViewStyleProp,
  type TextStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';

interface Styles {
  container: ViewStyleProp,
  shadow: ViewStyleProp,
  nav: ViewStyleProp,
  navButton: ViewStyleProp,
  navButtonText: TextStyleProp,
  socialWrap: ViewStyleProp,
  notificationsWrap: ViewStyleProp,
  messagesWrap: ViewStyleProp,
  newMessageButton: ViewStyleProp,
  newMessageButtonText: TextStyleProp,
};

const styles: Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1b1b1e',
    justifyContent: 'center',
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: '#1b1b1e',
    shadowColor: '#101010',
    shadowOffset: {width: 0, height: 8},
    shadowRadius: 5,
    paddingTop: 10,
    paddingHorizontal: 15,
    zIndex: 2,
    alignSelf: 'stretch',
  },
  nav: {
    flex: 1,
    paddingTop: 25,
    flexDirection: 'row',
  },
  navButton: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  navButtonText: {
    flex: 6,
    color: '#fefefe',
    fontSize: 20,
    fontFamily: 'Muli',
    fontWeight: '800',
    lineHeight: 24,
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  socialWrap: {
    flex: 1,
    zIndex: -1,
    backgroundColor: 'transparent',
    marginTop: 65,
  },
  notificationsWrap: {
    flex: 1,
    zIndex: -1,
    paddingTop: 10,
  },
  messagesWrap: {
    flex: 1,
    zIndex: -1,
    paddingTop: 10,
  },
  newMessageButton: {
    padding: 3,
    height: 45,
    backgroundColor: '#2b6dc0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 20,
    borderRadius: 50,
    shadowColor: '#101010',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  newMessageButtonText: {
    fontFamily: 'Muli',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 23.4,
    color: '#fefefe',
    backgroundColor: 'transparent',
  },
});

export default styles;