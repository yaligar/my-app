import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

import { shallow, mount } from "enzyme";
import React from "react";

import OrdersPage from "./ordersPage";

describe("Unit testing for displatTable.tsx", () => {
  test("If table is rendered.", () => {
    const wrapper = mount(<OrdersPage />);
    expect(wrapper.find("table")).toHaveLength(1);
  });
  test("If input rendered.", () => {
    const wrapper = mount(<OrdersPage />);
    expect(wrapper.find("input")).toHaveLength(1);
  });
  test("If table header rendered.", () => {
    const wrapper = mount(<OrdersPage />);
    expect(wrapper.find("thead")).toHaveLength(1);
  });

  test("If table body rendered.", () => {
    const wrapper = mount(<OrdersPage />);
    expect(wrapper.find("tbody")).toHaveLength(1);
  });
  test("If tr rendered.", () => {
    const wrapper = mount(<OrdersPage />);
    expect(wrapper.find("tr")).toHaveLength(10);
  });
  test("If table td rendered.", () => {
    const wrapper = mount(<OrdersPage />);
    expect(wrapper.find("td")).toHaveLength(40);
  });
  test("If div rendered.", () => {
    const wrapper = mount(<OrdersPage />);
    expect(wrapper.find("div")).toHaveLength(2);
  });
  test("If label rendered.", () => {
    const wrapper = mount(<OrdersPage />);
    expect(wrapper.find("label")).toHaveLength(1);
  });
  test("If select rendered.", () => {
    const wrapper = mount(<OrdersPage />);
    expect(wrapper.find("select")).toHaveLength(1);
  });
  test("If option rendered.", () => {
    const wrapper = mount(<OrdersPage />);
    expect(wrapper.find("option")).toHaveLength(3);
  });
  test("If select being clicked.", () => {
    const wrapper = mount(<OrdersPage />);

    expect(wrapper.find("select"));

    const event = { handleChangeSelect: (e) => {} };
    jest.spyOn(event, "handleChangeSelect");
    wrapper.find("select").simulate("change", event);
  });
  test("If search being clicked.", () => {
    const wrapper = mount(<OrdersPage />);

    expect(wrapper.find("input"));

    const event = { myFunction: (e) => {} };
    jest.spyOn(event, "myFunction");
    wrapper.find("input").simulate("change", event);
  });
});
