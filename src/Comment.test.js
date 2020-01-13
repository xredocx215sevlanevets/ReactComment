import React from 'react'
import { render } from 'enzyme'
import Comment from './Comment'

// create react app utliza o jest

// test
it('should render', () => {
    const c = {
        comment: 'test'
    }
    const wrapper = render(<Comment c={c} />)
    //console.log(wrapper.text())
    expect(wrapper.text()).toBe('Comentário: test')
})

it('should render other text', () => {
    const c = {
        comment: 'other text'
    }
    const wrapper = render(<Comment c={c} />)
    //console.log(wrapper.text())
    expect(wrapper.text()).toBe('Comentário: other text')
})