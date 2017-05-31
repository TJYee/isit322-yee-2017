import React, {Component} from "react";
import "../css/App.css";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to Git Explorer</h2>
                <p>This project was made for Bellevue College's Spring 2017 ISIT 322 Course.</p>
                <p>Please note that an environment variable of "GHTOKEN" needs to be defined as a GitHub Token with Gist
                    permissions.</p>
            </div>
        )
    }
}

export default Home;