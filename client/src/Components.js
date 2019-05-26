import React, { useState, useEffect } from 'react';

export function Title(props) {
	function handleClick(e) {
		console.log('title clicked')
	}
	return <h1 onClick={handleClick}>{props.name}</h1>
}
export function About(props) {
	return <div>{props.children}</div>
}
export function Menu(props) {
	const [items, setItems] = useState([])

	function updatePages(pages) {
		var items = []
		for (var p of pages) {
			items.push(<li>{p}</li>)
		}
		setItems(items)
	}
	useEffect(() => {
		fetch('http://192.81.214.140:3002/pages')
		  .then(res => res.json())
		  .then(pages => {
			  console.log(pages)
			  updatePages(pages)
		  })
	})

	//var items = [] 
	//for (var it of props.items) {
	//	items.push(<li class={props.itemClass}>{it}</li>)
	//}
	return <ul class={props.class}>{items}</ul>
}
export function Page(props) {
	return <div class="Page">{props.children}</div>
}
export function MainContent(props) {
	return <p>{props.children}</p>
}
export function Clock(props) {
	const [time, setTime] = useState(new Date())

	function tick() {
		setTime(new Date())
	}
	useEffect(() => {
		setInterval(tick, 1000)
	})
	return <h2>{time.toLocaleTimeString()}</h2>
}

