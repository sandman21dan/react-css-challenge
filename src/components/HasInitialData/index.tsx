import * as React from 'react';
import { IStoreState } from '../../types';
import { connect } from 'react-redux';

interface IProps {
  hasInitialData?: boolean;
}

export const HasInitialData: React.StatelessComponent<IProps> = ({
  hasInitialData,
}) => (
  <p>{hasInitialData ? 'Got initial data' : 'Loading...'}</p>
);

const mapStateToProps = ({ hasInitialData }: IStoreState) => ({
  hasInitialData,
});

export default connect(mapStateToProps)(HasInitialData);
