import renderer from 'react-test-renderer';
import Calculator from './calculator';

test('Calculator snapshot', () => {
  const component = renderer.create(<Calculator />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
