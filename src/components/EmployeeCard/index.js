import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="col">
    <div className="media mb-3">
      <img className="m-3 imageDiv" src={this.props.image} alt="profile"/>
      <div className="media-body">
        <h5 className="mt-1">{this.props.name}</h5>
        <ul>
              <li>
                <strong>Email:</strong> {this.props.email}
              </li>
              <li>
                <strong>Role:</strong> {this.props.role}
              </li>
              <li>
                <strong>Department:</strong> {this.props.department}
              </li>
              <li>
                <strong>Office:</strong> {this.props.office}
              </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default EmployeeCard;