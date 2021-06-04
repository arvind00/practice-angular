## Learning Objective
- Generate component using angular cli

## Components?
* basic building block of angular app
* can be considered as any section of UI

## Create a component called user
`$ng g component user`

* run the above command from the root folder else __Invalid template...__ error might occur

## Integrate user component with app component
* Go to `user.components.ts` to find value of __selector__ property
`selector: 'app-user'`
* Now in the `app.component.html` include __<app-user>__ as `<app-user></app-user>`

## Put some data in user component

```ts
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	name:string;
	age: number;
	email: string;
	address: Address;
	constructor() { }

	ngOnInit() {
	console.log('ngOnInit running...')
	this.name = "John Doe";
	this.age = 50;
	this.email = 'jodoe@gmail.com';
	this.address = {
		street: "11th cross",
		city: "Mysore",
		state: "Karnataka"
	};
	}

}

interface Address{
	street: string;
	city: string;
	state: string;
}
```
## Display these data in user.component.html
```html
<p>
	hello {{name}}
</p>
<div id="address">
	{{address.street}} <br>
	{{address.city}} <br>
	{{address.state}}
</div>
```
Suppose you have a string array called hobbies in the userComponent, then it can be displayed like:
```html
<h2>Hobbies</h2>
<ul>
	<li *ngFor = "let hobby of hobbies">{{hobby}}</li>
</ul>
```
