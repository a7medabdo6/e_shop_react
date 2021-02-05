import React from "react";
import { Row, Col } from "reactstrap";
export default function TopFooter() {
  return (
    <div
      className="pt-5"
      style={{
        backgroundColor: "#997adb",
        color: "#fff",
      }}
    >
      <Row>
        <Col className="col-12 col-md-6 col-lg-3">
          <div style={{ paddingleft: "15px" }}>
            <h3>Do you need help ?</h3>
            <h6 style={{ fontSize: "1.2rem" }}>
              You can get help by choosing from any of these options
            </h6>
          </div>
        </Col>
        <Col className="col-12 col-md-6 col-lg-3">
          <div>
            <div className="d-flex">
              <div className="rounded-circle icon d-flex align-items-center justify-content-center mr-3">
                <i className="fa fa-exclamation-circle font-size-1/5"></i>
              </div>
              <div>
                <h6 className="mb-1">Helping Center</h6>
                <a
                  href="https://help.niceonesa.com"
                  target="_blank"
                  rel="noopener"
                  className="pink"
                >
                  help.niceonesa.com
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col className="col-12 col-md-6 col-lg-3">
          <div>
            <div className="d-flex">
              <div className="rounded-circle icon d-flex align-items-center justify-content-center mr-3">
                <i class="fa fa-envelope font-size-1/5"></i>
              </div>
              <div>
                <h6 className="mb-1">Email</h6>
                <a href="" target="_blank" rel="noopener" className="pink">
                  cs@niceonesa.com
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col className="col-12 col-md-6 col-lg-3">
          <div>
            {" "}
            <div>
              <div className="d-flex">
                <div className="rounded-circle icon d-flex align-items-center justify-content-center mr-3">
                  <i class="fa fa-phone font-size-1/5"></i>
                </div>
                <div>
                  <h6 className="mb-1">Direct Call</h6>
                  <a href="" target="_blank" rel="noopener" className="pink">
                    01004550064
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
