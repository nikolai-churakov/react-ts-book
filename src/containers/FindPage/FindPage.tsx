import React, {Component} from 'react';
import "./FindPage.css"
import Select from "../../components/UI/Select/Select";
import Auxilary from "../../hoc/Auxilary/Auxilary";

class FindPage extends Component {

    state = {
        rightAnswerId: "all",
    }

    submitHandler = (event:any) => {
        event.preventDefault()
    }

    selectChangeHandler = (event:any) => {
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
                    <button
                        // onClick={this.addQuestionHandler}
                    >
                        Find
                    </button>

                    <div className={'SortDiv'}>
                        <div>
                            <span className={'SpanNameInput'} >Categories</span>

                            const select = <Select
                            label="Выберите тему"
                            value={this.state.rightAnswerId}
                            onChange={this.selectChangeHandler}
                            options={[
                                {text: 'all', value: 1},
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
                            label="Сортировка результатов"
                            value={this.state.rightAnswerId}
                            onChange={this.selectChangeHandler}
                            options={[
                                {text: 'relevance', value: 1},
                                {text: 'newest', value: 2}
                            ]}
                        />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FindPage;