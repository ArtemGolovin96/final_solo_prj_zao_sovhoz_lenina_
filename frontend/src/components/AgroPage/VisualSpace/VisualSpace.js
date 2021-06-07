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
        {
          // this.props.volumeRowsOnSquare?
          this.props.volumeRowsOnSquare.map((el, inR) => {
            console.log(el);
            return (
              <Row className="row" id={inR + 1} key={inR + 1}>
                {this.props.volumeColumnsOnSquare.map((item, inC) => {
                  return (
                    <Col className="col" id={inC + 1} key={inC + 1}>
                      {this.props.sortsOnSquare.map((it) => {
                        console.log(it)
                        if (it.sector === inR + 1 + "." + (inC + 1)) {
                          return (
                            it.name +
                            "," +
                            " " +
                            it.gektars +
                            " " +
                            "гектаров" +
                            "," +
                            " " +
                            "Сектор " +
                            it.sector
                          );
                        }
                      })}
                    </Col>
                  );
                })}
              </Row>
            );
          })

          // : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    options: state.globalArrOfSorts,
    volumeRowsOnSquare: state.volumeRowsOnSquare,
    volumeColumnsOnSquare: state.volumeColumnsOnSquare,
    sortEl: state.sortEl,
    sortsOnSquare: state.sortsOnSquare,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // loginInputFromAdminPageAddActionProps: (e) => { dispatch(loginInputFromAdminPageAddAction(e.target.value)) },
    // passwInputFromAdminPageAddActionProps: (e) => { dispatch(passwInputFromAdminPageAddAction(e.target.value)) },
    // loginInputFromAdminPageDeleteActionProps: (e) => { dispatch(loginInputFromAdminPageDeleteAction(e.target.value)) },
    // passwInputFromAdminPageDeleteActionrops: (e) => { dispatch(passwInputFromAdminPageDeleteAction(e.target.value)) },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisualSpace);

// this.props.sortEl.sector == inR + 1 + "." + (inC + 1)
//                         ? this.props.sortEl.name +
//                           "," + " " +
//                           this.props.sortEl.gektars + " " + "гектаров" +  "," + " " + "Сектор " +  this.props.sortEl.sector
//                         : "Сектор"
