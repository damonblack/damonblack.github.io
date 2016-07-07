import React from 'react';

export default React.createClass({
  render: () => {
    let data = [
      "Tragedy",
      "Drama",
      "Comedy"
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
