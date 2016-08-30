var InputDisplay = React.createClass({
  getInitialState: function() {
    return {
      value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n',
    };
  },
  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },
  render: function() {
    return (
      <div className="row">
        <div className="small-5 small-offset-1 columns">
          <textarea rows="25" value={this.state.value} onChange={this.handleChange}></textarea>
        </div>
        <div className="small-5 small-offset-1 columns">
          <MarkupDisplay display={this.state.value} />
        </div>
      </div>
    );
  }
});

var MarkupDisplay = React.createClass({
    markup: function() {
      var markup = marked(this.props.display, {sanitize: true});
      return {__html: markup};
    },
    render: function() {
      return (
        <div dangerouslySetInnerHTML={this.markup()}>
      </div>
      );
    }
});

ReactDOM.render(<InputDisplay/>, document.getElementById('mount-point'));