import React, {Component} from 'react';
import "./FindPage.css"

class FindPage extends Component {
    render() {
        return (
            <div className={'FindPage'}>
                <div className={'SearchDiv'}>

                    <h1>Find you books</h1>
                    <input className={'inputFind'}/>

                    <div className={'SortDiv'}>
                        <div>
                            <span className={'SpanNameInput'} >Categories</span>
                            <input/>
                        </div>
                        <div>
                            <span className={'SpanNameInput'} >Sort by</span>
                            <input/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default FindPage;