import React from "react";

export default function Goods(props) {
  return (
    <div className="mt-2 d-flex flex-wrap">
      {props.goods.map((e) => (
        <div
          key={e.name}
          onClick={() => {
            props.selectGoodHandler(e);
          }}
          role="button"
          className="good"
        >
          <div>
            <p className="m-0">{e.name}</p>
            <p className="small text-secondary m-0">
              {e.set > 1 ? e.set + " x " : ""}${e.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
