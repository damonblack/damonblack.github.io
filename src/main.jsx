import React from 'react';

export default React.createClass({
  render: () => {
    let data = [
      "tragedy",
      "drama",
      "comedy"
    ];
    return (
      <div>
        <h1>Hello World!</h1>
        <ul>
          { data.map( (datum) => {
            return (<li>{datum}</li>);
          })}
        </ul>
      </div>
    )
  }
});
