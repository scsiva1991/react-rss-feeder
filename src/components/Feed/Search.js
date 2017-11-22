import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return(
            <div>
                <form>
                    <div className="form-group">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search Here"/>
                          <div className="input-group-addon">SEARCH</div>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}
