# Props, Children, Functions, Fun

This project will provide practice in scaffolding, passing props, passing functions as props, and rendering child components.

---

### View the finished project: http://props-children-functions.surge.sh/

---

In order to get familiar with props, state, passing props to children, and rendering children components, let's fix our application. 

* Use `create-react-app` to generate a new React application.

* Directly within your new app directory, make a new `src` directory.

* Within `src`, make two new directories: `components` and `styles`.

* Move `App.js` into `src/components`.

* Move `App.css` into `src/styles`.

* Download the provided `App.js` file.

Download Starter Files
App copy.js (2 KB)

* Copy the starter file `App.js` into `src/components/App.js`

* Import the `App` component into `index.js`

Use `npm run start` to get your project going and check for errors.

You will need to execute a few major changes to the `App.js` file to get everything working properly.

The `BaseLayout` component should house the `Header` and `Footer` components as well as make room for any child components that would be rendered in between.

The `ParentComponent` has a lot of the functionality worked out for you, but you will need to make it run properly. Namely in the `constructor` method and the `render` method where we pass props down.

After everything is working properly, you will need to move each of the components (except for the `App` component) into their own separate file within `src/components` and import and export them properly to make the application still run.

* Copy each of the components other than `App` into their own file within `src/components`

* Export each component from their individual files.

* Import all of the other components into the files where they are referenced.

The `App` component should only render a `BaseLayout` and `ParentComponent`.

## Results  

The application should run without errors and you should be able to input text and display it in another component after clicking submit. After all functionality is complete you should stylize your application in a theme that you see fit.

## Solution

## Mockup

![propsChildrenFunctionsMockup.png](propsChildrenFunctionsMockup.png)
