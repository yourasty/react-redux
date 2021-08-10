import React from 'react'
import {useSelector} from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EpInfo from './components/EpInfo'
import Show from './components/Show'
import Season from './components/Season'
import './App.scss';
import EpList from './components/EpList'




function App() {
  const loaded = useSelector(state => state.show.loaded)
  const err = useSelector(state => state.show.err)
  if (loaded)
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Show}></Route>
          <Route path='/episode' component={EpInfo}></Route>
        </Switch>
        <Season />
        <EpList />
      </Router>
    );
  else{
    return(
      <div className="App">
        {err ? 'error, try refreshing' : 'loading...'}
      </div>
    )
  }
}

export default App;
