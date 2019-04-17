import * as renderer from "react-test-renderer";
import React from "react";
import Icon from "../icon";

describe("icon", () => {
    it("icon render successfully", function () {
        const json = renderer.create(<Icon name="wechat"/>).toJSON();
        expect(json).toMatchSnapshot()
    });
});
