import React, {Component} from 'react';
import "./FindPage.css"
import Select from "../../components/UI/Select/Select";

class FindPage extends Component {

    state = {
        rightAnswerId: 13,
    }

    selectChangeHandler = event => {
        this.setState({
            rightAnswerId: +event.target.value
        })
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
                            // onChange={this.selectChangeHandler}
                            options={[
                                {selected, text: 'all', value: 1},
                                {text: 'art', value: 2},
                                {text: 'biography', value: 3},
                                {text: 'computers', value: 4},
                                {text: 'history', value: 5},
                                {text: 'medical', value: 6},
                                {text: 'poetry', value: 7},
                            ]}
                        />
                        </div>
                        <div>
                            <span className={'SpanNameInput'} >Sort by</span>
                            const select2 = <Select
                            label="Выберите правильный ответ"
                            value={this.state.rightAnswerId}
                            // onChange={this.selectChangeHandler}
                            options={["relevance", "newest"]}
                        />
                            <input/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default FindPage;