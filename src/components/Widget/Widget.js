import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Widget.scss';

export default class Widget extends Component {
    render(){
        return(
             <div className="col-xs-1 widget-container">
                <div className="row">
                    <div className="col-xs-12 widget-bg"  style={this.props.styles}>
                        <div className="row widget-icon">
                            <div className="col-xs-6 text-center">
                                <span className="mg-5">
                                    {this.props.icon}
                                </span>
                            </div>
                            <div className="col-xs-6 text-center">
                                <span className="mg-5 widget-number">
                                    {this.props.number}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 text-center">
                        {this.props.title}
                    </div>
                </div>
             </div>
        )
    }
}
