import React from 'react';
import logo from './logo.svg';
import './App.css';

function Title(props) {
	return <h1>{props.name}</h1>
}
function About(props) {
	return <div>{props.children}</div>
}
function Menu(props) {
	var items = [] 
	for (var it of props.items) {
		items.push(<li class={props.itemClass}>{it}</li>)
	}
	return <ul class={props.class}>{items}</ul>
}

function App() {
	var pages = [ 'Home', 'About', 'Contact' ]
	return (
		<div>
			<Title name="My Glob" />
			<About>A glob is a blog but globbier</About>
			<Menu items={pages} itemClass="menu-page" class="menu" />
		</div>
	)
	//return <h1>Hello world</h1>
/*  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
*/
}

export default App;
