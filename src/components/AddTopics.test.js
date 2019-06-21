import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import AddTopics from "./AddTopics";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Add Topic Component", () => {
  test("renders", () => {
    const wrapper = shallow(<AddTopics />);

    expect(wrapper.exists()).toBe(true);
  });

  test("Topic title is echoed", () => {
    const wrapper = shallow(<AddTopics addTopic={() => {}} />);

    wrapper.find("input#title").simulate("change", {
      target: { name: "title", value: "hello" }
    });

    expect(wrapper.find("input#title").props().value).toEqual("hello");
  });

  test("Topic body is echoed", () => {
    const wrapper = shallow(<AddTopics addTopic={() => {}} />);

    wrapper.find("textarea").simulate("change", {
      target: { name: "body", value: "this is body" }
    });

    expect(wrapper.find("textarea").props().value).toEqual("this is body");
  });

  
});
