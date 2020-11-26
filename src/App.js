import React, {useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
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
    </BrowserRouter>
  );
}

export default App;
