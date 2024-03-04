// import React from 'react'
import "./Button.css";
export default function Button(props) {
  return (
    <>
      <button
        style={{
          color: props.color,
          backgroundColor: props.bgColor,
          borderRadius: props.radius,
          width: props.width,
          height: props.height,
          fontWeight: props.weight,
          fontSize: props.size,
          marginTop:props.marginTop
        }}
      >
        {props.children}
      </button>
    </>
  );
}
