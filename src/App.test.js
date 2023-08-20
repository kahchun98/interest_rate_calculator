import renderer from 'react-test-renderer';
import App from './App';

test('App snapshot', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});