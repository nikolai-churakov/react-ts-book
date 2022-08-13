import React, {Component} from 'react';
import "./FindPage.css"

class FindPage extends Component {

    state = {
        rightAnswerId: 13,
    }
    render() {
        return (
            <div className={'FindPage'}>
                <div className={'SearchDiv'}>

                    <h1>Find you books</h1>
                    <input className={'inputFind'}/>

                    <div className={'SortDiv'}>
                        <div>
                            <span className={'SpanNameInput'} >Categories</span>
                            const select = <Select
                            label="Выберите правильный ответ"
                            value={this.state.rightAnswerId}
                            onChange={this.selectChangeHandler}
                            options={[
                                {text:string ART, value: ART},
                                {text: DOCUMENTAL, value: DOCUMENTAL},
                                {text: FANTASTIC, value: FANTASTIC},
                                {text: HISTORY, value: HISTORY},
                            ]}
                        />
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