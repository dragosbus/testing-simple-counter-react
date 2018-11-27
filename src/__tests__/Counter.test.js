import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Counter} from '../components/Counter';

Enzyme.configure({ adapter: new Adapter() });

const props ={counter:0};

describe('<Counter/>', () => {
  let wrapper;
  
  it('should have the initial counter 0', () => {
    wrapper = shallow(<Counter {...props} />)
    expect(wrapper.find('p').text()).toEqual('0');
  });

  it('should increment the count on increment button', () => {
    wrapper = shallow(<Counter {...props} />);
    beforeEach(() => {
      wrapper.find('button').at(0).simulate('click');
    });
    it('the counter should be 1', () => {
      expect(wrapper.find('p').text()).toEqual('1');
    });
  });
});