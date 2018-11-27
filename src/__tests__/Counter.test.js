import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Counter} from '../components/Counter';

Enzyme.configure({ adapter: new Adapter() });

const props ={counter:0};

describe('<Counter/>', () => {
  const wrapper = shallow(<Counter {...props}/>);
  
  it('should have the initial counter 0', () => {
    expect(wrapper.find('p').text()).toEqual('0');
    expect(wrapper.props().children).toEqual(0);
  });
});