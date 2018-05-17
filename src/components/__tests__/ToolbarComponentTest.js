import React from 'react'
import { shallow } from 'enzyme'
import ToolbarComponent from '../ToolbarComponent' 



describe('Toolbar Component', () => {

  it('The onOpenComposeForm callback is triggered when the plus button is clicked', () => {  
    const openComposeForm = jest.fn() 
    
    // We will call the props `onOpenComposeForm` because that is how it is destructured in 
    // the ToolbarComponent.js like 43 or somewhere close to line 43
    const wrapper = shallow(<ToolbarComponent onOpenComposeForm={openComposeForm} messages={[]}/>) 
    
    /* target plus icon by using `i.fa-plus` selector */
    wrapper.find('i.fa-plus').simulate('click', {target: true }) 

    expect(openComposeForm).toHaveBeenCalled()

  })

  it('The onDeleteSelectedMessages callback is triggered when the trash button is clicked', () => {  
     const onDelete = jest.fn() 

     const wrapper = shallow(<ToolbarComponent messages={[]} onDeleteSelectedMessages={onDelete}/>)
  
    //  wrapper.find('button:last-of-type').simulate('click', { target: true })
     wrapper.find('button').last().simulate('click', { target: true })
     expect(onDelete).toHaveBeenCalled()
  
  })  


})