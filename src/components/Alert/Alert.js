import React, { Component } from 'react';
import './Alert.scss';

export default class Alert extends Component {
    render() {
        return(
            <div className="col-xs-4 alert-container" >
                <div className="row">
                    <div className="col-xs-12" style={this.props.headerStyle}>
                        <h4>{this.props.title}</h4>
                    </div>
                    <div className="col-xs-12 alert-record-container" style={this.props.bodyStyle}>
                        {
                            this.props.records.map((record, index) => {
                                return(
                                    <div key={index}>
                                        {record.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
