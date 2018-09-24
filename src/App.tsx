import * as React from 'react';
import './App.css';
import Hello from './components/Hello';
import HasInitialData from './components/HasInitialData';

import logo from './logo.svg';
import { fetchInitialData, IFetchInitialData } from './store/actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

interface IProps {
  onInit?: () => void;
}

export class App extends React.Component<IProps> {
  public componentDidMount() {
    if (this.props.onInit) {
      this.props.onInit();
    }
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Hello/>
        <HasInitialData/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IFetchInitialData>) => ({
  onInit: () => dispatch(fetchInitialData()),
});

export default connect(undefined, mapDispatchToProps)(App as any);
