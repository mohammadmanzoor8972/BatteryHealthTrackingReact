import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Academys from './containers/academy.container'
import * as styles from './app.scss'
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { Header } from './components/header';
import AcademyDeviceContainer from './containers/academy-device.container'

export const App = () => (
  <Provider store={store}>
     <Header/>
    <div className={styles.container}>
      <div style={{width:'300px'}}>
        <Academys/>
        </div>
        <AcademyDeviceContainer/> 
    </div>
  </Provider>
)

