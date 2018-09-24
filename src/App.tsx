import * as React from 'react';
import './App.css';

import { fetchInitialData, IFetchInitialData } from './store/actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import AppBar from './components/AppBar';
import SideBar from './components/SideBar';
import Content from './components/Content';

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
      <div className="app">
        <AppBar />
        <div className="app__layout">
          <Content />
          <SideBar />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IFetchInitialData>) => ({
  onInit: () => dispatch(fetchInitialData()),
});

export default connect(undefined, mapDispatchToProps)(App as any);
