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
        }

        feeds = [
            {
               "title":"An article",
               "link":"http://www.example.com/an-article",
               "content":"Some sample text here",
               "pubDate":"2008-10-27 11:06 EST",
               "author":"example author",
               "img": 'https://source.unsplash.com/random'
           },
           {
               "title":"Second",
               "link":"http://www.example.com/Seond",
               "content":"Some sample text here",
               "pubDate":"2008-10-25 23:20 EST",
               "img":"",
           },
           {
               "title":"third article",
               "link":"http://www.example.com/third-article",
               "content":"Some sample text here",
               "pubDate":"2008-10-25 23:18 EST",
               "author":"some other author",
               "img": 'https://source.unsplash.com/random'
           }
        ]

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
