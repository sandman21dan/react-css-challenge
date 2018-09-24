import { hasInitialData, initialData} from '../initialData';
import { fetchInitialDataSuccess } from '../../actions';

describe('hasInitialData', () => {
  it('sets initial data to true', () => {
    expect(
      hasInitialData(false, fetchInitialDataSuccess({mock: 'data'}))
    ).toEqual(true);
  });
});

describe('initialData', () => {
  it('adds the payload to the store', () => {
    const mockPayload = {
      mock: 'data',
    };

    expect(
      initialData({}, fetchInitialDataSuccess(mockPayload))
    ).toEqual(mockPayload);
  });
});