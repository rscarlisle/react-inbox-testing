import React from 'react';
import {
  shallow
} from 'enzyme';
import MessageComponent from '../MessageComponent';

// describe what we are testing
describe('Message Component', () => {
  it('should render the subject message', () => {
    const message = {
      id: 1,
      subject: "You can't input the protocol without calculating the mobile RSS protocol!",
      read: false,
      starred: true,
      labels: ['dev', 'personal']
    }
    expect(shallow( < MessageComponent message = { message } />).find('a').text()).toEqual(message.subject)
  })

  it('The read CSS class is present when message.read is true', () => {
    const message = {
      id: 1,
      subject: "You can't input the protocol without calculating the mobile RSS protocol!",
      read: true,
      starred: true,
      labels: ['dev', 'personal']
    }
    expect(shallow(<MessageComponent message={message} />).find('.read').length).toEqual(1)
  })
  
  it('The unread CSS class is present when message.read is false', () => {
    const message = {
      id: 1,
      subject: "You can't input the protocol without calculating the mobile RSS protocol!",
      read: false,
      starred: true,
      labels: ['dev', 'personal']
    }
    expect(shallow(<MessageComponent message={message} />).find('.unread').length).toEqual(1)
  })

  describe('Event Handlers Test', () => {
    const message = {
      id: 1,
      subject: "You can't input the protocol without calculating the mobile RSS protocol!",
      read: false,
      starred: true,
      labels: ['dev', 'personal']
    }

    it('The onSelectMessage callback is triggered when the checkbox is checked', () => {
      const onSelect = jest.fn() 
      const wrapper = shallow(<MessageComponent message={message} selected={false} onSelectMessage={onSelect}/>); 
      wrapper.find('input').simulate('change', { target: { checked: true } })
      expect(onSelect).toHaveBeenCalled()
    })

    it('The onDeselectMessage callback is triggered when the checkbox is unchecked', () => {
      const onDeselect = jest.fn() 
      const wrapper = shallow(<MessageComponent message={message} selected={false} onDeselectMessage={onDeselect}/>); 
      wrapper.find('input').simulate('change', { target: { checked: false } })
      expect(onDeselect).toHaveBeenCalled()
    })
  })
})

/**
 * 
 * 60 - 70 % 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */