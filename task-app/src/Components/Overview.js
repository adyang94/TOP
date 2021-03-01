// Overview will render our tasks.

import React from "react";
import uniqid from "uniqid";

const removeItem = (tasks) => {
  const {callback} = this.props.callback;
  callback('hi');
}

const Overview = (props) => {
  const {tasks} = props;

  return (
    <div>
      <ul>
        {tasks.map((task) => {
          return (
            <div>
              <li class = {uniqid()} key = {uniqid()}>{task}</li>
              <button onClick = {this.removeItem}>Delete</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Overview;