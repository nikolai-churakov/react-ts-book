import React from 'react';
import Layout from "./hoc/Layout";
import FindPage from "./containers/FindPage/FindPage";


function App() {
  return (

    <div className="App">
        <Layout>
            <FindPage/>
        </Layout>
    </div>
  );
}

export default App;
