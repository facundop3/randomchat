import React from 'react'
import {shallow, configure} from 'enzyme'
import SweetInput from '../SweetInput'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


/**
 * It takes a snapshot of the component and compares with new versions of it
 * in order to avoid unexpected UI changes
 */
describe('SweetInput', ()=>{
  it('renders correctly', ()=>{
    const wrapper = shallow(<SweetInput />)
    expect(wrapper).toMatchSnapshot()
  })
})