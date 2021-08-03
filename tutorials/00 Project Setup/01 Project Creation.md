## Pre-requisites
* nodejs <https://nodejs.org>
* a code editor <https://code.visualstudio.com>


## Install agular cli:
	$ npm install -g @angular/cli

## Check the version of angular cli
	$ ng -v
* updated: now use `ng v` from cli 7 onwards I believe.

## Special Note
- If you have cloned this project from Github then, no need to perform any of the below steps
- Just go through for your understanding

## Create a new project (suitable for a single project)
	$ ng new practice-angular 

You can checkout the vs code extension called Angular v4 Typescript snippets.

## Start the application
	$ ng serve

note:

* default port is 4200
* in the terminal, first change directory into you_app_folder

## Create a workspace which can host multiple projects
	
	$ npm i -g @angular/cli
	$ ng new my_workspace --createApplication="false"
    $ cd my_workspace
	$ ng generate application my-first-app
	$ ng generate application my-second-app

- For me creating workspace command it took me around 8 mins.

## Run app
	$ ng serve project_name
	$ ng serve --project="my-second-app"
or open angular.json and update the default project entry.

## Build App
	$ ng build --prod --project="my-second-app"

## Reference
> https://angular.io/guide/file-structure#multiple-projects