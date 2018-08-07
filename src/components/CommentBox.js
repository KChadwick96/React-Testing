import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

class CommentBox extends Component {
    state = { comment: '' };

    componentDidMount() {
        this.shouldNavigateAway();
    }

    componentDidUpdate() {
        this.shouldNavigateAway();
    }

    shouldNavigateAway() {
        if (!this.props.auth) {
            this.props.history.push('/');
        }
    }

    handleChange = event => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        // Call action creator
        // Save the comment
        this.props.saveComment(this.state.comment);

        this.setState({ comment: '' });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
                <button onClick={this.props.fetchComments} id="fetch-comments">Fetch Comments</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, actions)(CommentBox);