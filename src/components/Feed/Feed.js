import React, { Component } from 'react';

export default class Feed extends Component {
    render() {
        return(
            <div className="media">
                <div className="media-left">
                    <a href="#">
                        {
                            this.props.image ?
                            <img src={this.props.image} className="feed-img"/> : ''
                        }

                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.title}</h4>
                    <p>
                        {this.props.content}
                    </p>
                </div>
            </div>
        )
    }
}
