import React, {Component} from 'react';
import { Widget, Alert, Feedlist } from '../components/index';
import {connect} from 'react-redux';

import styles from '../Styles/styles';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import '../../public/stylesheets/font-awesome/css/font-awesome.min.css';

export default class App extends Component {
    render(){

        const icon1 = <i className="fa fa-users" aria-hidden="true"></i>;
        const icon2 = <i className="fa fa-user-circle-o" aria-hidden="true"></i>;
        let records = [], feeds = [];
        for(let i=0; i<20; i++) {
            records.push({
                name: 'List '+i
            });

            if( i % 2 == 0 ) {
                feeds.push({
                    title: 'title ' + i,
                    content: 'i iiii ',
                    img: 'http://via.placeholder.com/350x150'
                })
            } else {
                feeds.push({
                    title: 'title ' + i,
                    content: 'i iiii ',
                    img: ''
                })
            }

        }

        return(
            <div className="container-fluid">
                <div className="row">
                    <Widget styles={styles.bg1} title={"CareTeam Conversations"} icon={icon1} number={1}/>
                    <Widget styles={styles.bg2} title={"CareTeam Conversations"} icon={icon2} number={2}/>
                </div>
                <div className="row">
                    <Alert headerStyle={styles.critical_header} bodyStyle={styles.critical_body}
                     title={'Critical Alerts'} records={records}/>
                     <Feedlist feedlist={feeds} title={'Feed Title'}/>
                </div>
            </div>
        )
    }
}
