import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount } from "enzyme";
import React from "react";

import LandingPge from "./landindPge";
import { BrowserRouter } from "react-router-dom";

describe("Unit testing for landingPage.tsx", () => {
  test("If Log on is being rendered.", () => {
    const wrapper = mount(
      <BrowserRouter>
        <LandingPge />
      </BrowserRouter>
    );
    expect(wrapper.find("button"));

    const event = { handleClick: () => {} };
    jest.spyOn(event, "handleClick");
    wrapper.find("button").simulate("click", event);
  });
  test("If email being rendered.", () => {
    const wrapper = mount(
      <BrowserRouter>
        <LandingPge />
      </BrowserRouter>
    );
    expect(wrapper.find("input"));

    const event = { handleChangeEmail: (e) => {} };
    jest.spyOn(event, "handleChangeEmail");
    wrapper.find("input").at(0).simulate("change", event);
  });
  test("If password being rendered.", () => {
    const wrapper = mount(
      <BrowserRouter>
        <LandingPge />
      </BrowserRouter>
    );
    expect(wrapper.find("input"));

    const event = { handleChangePassword: (e) => {} };
    jest.spyOn(event, "handleChangePassword");
    wrapper.find("input").at(1).simulate("change", event);
  });

  test("to check if label has been rendered in landingPage.", () => {
    const wrapper = mount(
      <BrowserRouter>
        <LandingPge />
      </BrowserRouter>
    );
    expect(wrapper.find("label")).toHaveLength(2);
  });
  test("to check number of the buttons rendered landingPage.", () => {
    const wrapper = mount(
      <BrowserRouter>
        <LandingPge />
      </BrowserRouter>
    );
    expect(wrapper.find("button")).toHaveLength(1);
  });

  test("to check if input has been rendered in landingPage.", () => {
    const wrapper = mount(
      <BrowserRouter>
        <LandingPge />
      </BrowserRouter>
    );

    expect(wrapper.find("input")).toHaveLength(2);
  });
});
