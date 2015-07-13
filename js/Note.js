var Note = React.createClass({
    getInitialState: function() {
        return {
            text: this.props.children,
            editing: false
        };
    },
    edit: function() {
        this.setState({
            editing: true
        });
    },
    save: function() {
        var editTextArea = this.refs.editTextArea;
        console.log(editTextArea.value);
        this.setState({
            editing: false,
            text: editTextArea.getDOMNode().value
        });
    },
    remove: function() {
        alert('removed');
    },
    renderDisplay: function() {
        return (
            <div className="note">
                <p>{this.state.text}</p> 
                <span>
                    <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil" />
                    <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash" />
                </span>
            </div>
        );
    },
    renderForm: function() {
        return (
            <div className="note">
                <textarea ref="editTextArea" defaultValue={this.state.text} className="form-control"></textarea>
                <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
            </div>
        );
    },
    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderDisplay();
        };
    }
});

var Checkbox = React.createClass({
    getInitialState: function() {
        return {
            checked: false
        };
    },
    handleCheck: function() {
        this.setState({
            checked: !this.state.checked
        });
    },
    render: function() {
        var msg,
            input;

        if (this.state.checked) {
            msg = 'checked!!!';
            input = <input type="checkbox" onChange={this.handleCheck} checked="checked" />;
        } else{
            msg = 'not checked!!!';
            input = <input type="checkbox" onChange={this.handleCheck} />;
        };
        return (
            <div>
                checkbox1: {input} <br />
                checkbox2: <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} />
                <p>The checkbox is {msg}</p>
            </div>
        );
    }
});

React.render(
    (
        <div>
            <Note>Hello World</Note>
            <Checkbox />
        </div>
    ), 
    document.getElementById('react-container')
);