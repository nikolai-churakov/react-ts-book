import React, {Component} from "react";
import "./Layout.css"
import FindPage from "../containers/FindPage/FindPage";

class Layout extends Component {
    render() {
        return (
            <div className={'Layout'}>
                <FindPage/>
            </div>
        )
    }
}

export default Layout