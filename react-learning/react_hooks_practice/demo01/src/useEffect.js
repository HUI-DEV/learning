import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
    return <h2>one</h2>
}
function List() {
    return <h2>List Page</h2>
}
function Example() {
    const [count, setCount] = useState(0)  //数组解构
     useEffect(() => {
       console.log(`useEffect=>You clicked ${count} times`)
     })
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>click me</button>
            <Router>
                <ul>
                    <li><Link to="/">One Home</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/list"  component={List}></Route>
                <Route path="/" exact component={Index}></Route>
    
            </Router>
        </div>
    )
}
export default Example