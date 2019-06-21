import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import HomePage from "./HomePage";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("", () => {
  test("renders", () => {
    const wrapper = shallow(<HomePage />);

    expect(wrapper.exists()).toBe(true);
  })

  
});
