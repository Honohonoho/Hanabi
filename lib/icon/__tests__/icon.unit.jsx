import * as renderer from "react-test-renderer";
import {mount} from 'enzyme';
import React from "react";
import Icon from "../icon";

describe("icon", () => {
    it("icon render successfully", function () {
        const json = renderer.create(<Icon name="wechat"/>).toJSON();
        expect(json).toMatchSnapshot()
    });
    it('icon on click', () => {
        const fn = jest.fn();
        const component = mount(<Icon name="wechat" onClick={fn}/>);
        component.find('svg').simulate('click');
        expect(fn).toBeCalled()
    });
});
