import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './pages/store'
import './App.css';

import Header from './pages/Header/Header.components'
import Home from './pages/Home/Home.components'

import Student from './pages/Student/Student.components'
import Lesson from './pages/Lesson/Lesson.components'
import StudentSection from './pages/StudentSection/StudentSection.components'
import StudentRecord from './pages/StudentRecord/StudentRecord.components'

import Bill from './pages/Bill/Bill.component'
import BillSearch from './pages/BillSearch/BillSearch.components'
import BillSearchSection from './pages/BillSearchSection/BillSearchSection.components'
import BillRecord from './pages/BillRecord/BillRecord.components'
import BillReport from './pages/BillReport/BillReport.components'
import BillReceipt from './pages/BillReceipt/BillReceipt.components'
import BillSection from './pages/BillSection/BillSection.components'
function App() {
  const handleOnclick = (mode) => {
    const electron = window.require('electron')
    var win = electron.remote.getCurrentWindow()
    switch(mode){
      case 'minimize':
        win.minimize();
        break
      case 'maximize':
        win.maximize()
        break
      case 'close':
        win.close()
        break
      default:
        break
    }
  }
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
          <div id='frame' style={{ display: 'grid', gridTemplateColumns: 'repeat(10,1fr)', backgroundColor: 'grey' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gridArea: '7/10' }}>
              <button onClick={()=>handleOnclick('minimize')} style={{backgroundColor:'grey'}}>-</button>
              <button onClick={()=>handleOnclick('maximize')} style={{backgroundColor:'grey'}}>口</button>
              <button onClick={()=>handleOnclick('close')} style={{backgroundColor:'grey'}}>x</button>
            </div>
          </div>
          <Header />
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/student'><Student /></Route>
            <Route exact path='/student/record'><StudentRecord /></Route>
            <Route path='/student/:mode'><StudentSection /></Route>
            <Route path='/lesson'><Lesson /></Route>
            <Route exact path='/bill'><Bill /></Route>
            <Route exact path='/bill/search'><BillSearch /></Route>
            <Route path='/bill/search/:id'><BillSearchSection /></Route>
            <Route exact path='/bill/record'><BillRecord /></Route>
            <Route path='/bill/record/:mode'><BillSection /></Route>
            <Route path='/bill/receipt'><BillReceipt /></Route>
            <Route path='/bill/report'><BillReport /></Route>
          </Switch>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
