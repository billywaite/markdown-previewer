var Markedup = React.createClass({

  getInitialState: function() {
    return {
      value: "Hello"
    };
  },
  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  render: function() {
    return (
      <div className="markedup">
        <h1>{this.state.value}</h1>
        <input type="text" placeholder="Type here" onChange={this.handleChange}/>
      </div>
    );
  }
});

ReactDOM.render(<Markedup/>, document.getElementById('mount-point'));