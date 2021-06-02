import React, { Component } from "react";
import "./VisualSpace.css";
import store from "../../../redux/store";
import { connect } from "react-redux";
import { Layout } from "antd";
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import { Row, Col, Divider } from "antd";

class VisualSpace extends Component {
  render() {
    return (
      <div className="gen-space">
        <Divider></Divider>
        <Row className="row">
          <Col span={6} order={4} className="col"></Col>
          <Col span={6} order={3} className="col"></Col>
          <Col span={6} order={2} className="col"></Col>
          <Col span={6} order={1} className="col"></Col>
        </Row>
        <Row className="row">
          <Col span={6} order={4} className="col"></Col>
          <Col span={6} order={3} className="col"></Col>
          <Col span={6} order={2} className="col"></Col>
          <Col span={6} order={1} className="col"></Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // loginInputFromAdminPageAddActionProps: (e) => { dispatch(loginInputFromAdminPageAddAction(e.target.value)) },
    // passwInputFromAdminPageAddActionProps: (e) => { dispatch(passwInputFromAdminPageAddAction(e.target.value)) },
    // loginInputFromAdminPageDeleteActionProps: (e) => { dispatch(loginInputFromAdminPageDeleteAction(e.target.value)) },
    // passwInputFromAdminPageDeleteActionrops: (e) => { dispatch(passwInputFromAdminPageDeleteAction(e.target.value)) },
  };
};

export default connect(() => {}, mapDispatchToProps)(VisualSpace);
