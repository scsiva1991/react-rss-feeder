import React, { Component } from 'react';
import Search from './Search';
import Feed from './Feed';
import './Feed.scss';

export default class Feedlist extends Component {
    render() {
        return(
            <div className="col-xs-6 feed-container">
                <div className="row">
                    <div className="search-container">
                        <Search />
                    </div>
                </div>

                <h4> {this.props.title } </h4>
                <hr/>
                <div className="feed-list-container">
                    {
                        this.props.feedlist.map((feed, index) => {
                            return (
                                <Feed keyh={index} image={feed.img} title={feed.title} content={feed.content}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
