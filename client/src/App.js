import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Title, About, Menu, Page, MainContent, Clock} from './Components.js';
//import Model from './Model.js';

function App() {
	return (
		<div>
			<Title name="My Glob" />
			<About>A glob is a blog but globbier</About>
			<Menu id="pages-menu" items={[]} itemClass="menu-page" class="menu" />
{/*			<Page style="margin-left:200px;background-color:grey;">
				<MainContent>
					{Model.currentPage}
				</MainContent>
			</Page>
*/}
//			<Clock />
		</div>
	)
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
