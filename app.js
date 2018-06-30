const placeholder = 'This is sample text';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: placeholder
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ markdown: e.target.value });
    }

    render() {
        return(
                <div className="container">
                    <textarea id="editor" onChange={this.handleChange}>{placeholder}</textarea>
                    <Previewer text={this.state.markdown}/>
                </div>
        );
    }
}

class Previewer extends React.Component {
    render() {
        return(
            <div id="preview">{this.props.text}</div>
        );
    }
}

ReactDOM.render(<Editor/>, document.getElementById('root'));