import Home from "../index";
import { shallow } from "enzyme";
import { MY_NAME } from "../../constants";
import React from "react";

// TODO: get enzyme + jest to work together
xdescribe("home page - unit test", () => {
  xit("should render the home page", () => {
    const wrapper = shallow(<Home />);
    console.log(wrapper)
    // expect(wrapper.find('[data-test-id="my-name"]').text()).toEqual(MY_NAME);
  });
});