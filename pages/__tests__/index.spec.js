import React from 'react'
import { render } from '@testing-library/react'
import Home from '../index'
import { MY_NAME } from "../../constants";

xdescribe("Home page - Unit Test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<Home />)
  })
  xit("should render the home page", () => {
   // expect the [data-test-id="my-name"] to match the value from constants/index.js
    expect(wrapper.find('[data-test-id="my-name"]').text()).toBe(MY_NAME)
  })
})
