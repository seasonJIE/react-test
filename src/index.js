import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Register from './container/register/register';
import Login from './container/login/login';

import reducers from './redux/reducers'

const store = createStore(reducers)


ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/login' exact  component={Login} >
          
          </Route>
          <Route path='/register' exact  component={Register} ></Route>
          <Route path='/register/:id'  component={Register} ></Route>
          <Redirect to='/login' exact ></Redirect>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
);
// function render() {
//   ReactDOM.render(
//     (<Login store={store} add={add}></Login>),
//     document.getElementById('root')
//   );
// }
// render()

// store.subscribe(render)