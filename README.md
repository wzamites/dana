
# Dana

A web app that dynamically displays charting.
Deployed here: https://focused-hodgkin-6ad726.netlify.app/

## Run it locally

This is a React application which runs locally on 3000. I made the design decision not to make a server, but to call APIs directly from the client. This is for the sake of simplicity, and the fact that there are no API keys or other private information that a server needs to hide.

    $ git clone https://github.com/wzamites/dana/
    $ cd dana
    $ npm install
    $ npm start

## Single-Page and Async Architecture

The only component is App.js. I didn't want to use a state management tool like Redux, so I had to use local state to pass the form submission to the API call.

### function handleTextChange()

handleTextChange changes the state to whatever is typed into the input bar.

### pressChartButton()

This is triggered on the button press. It any previous chart by setting the state to an empty array. Then it separates the input values into an array. Then I interate over all of the input genes and call the API for each one, with the gene as a parameter.

### callApi()

This makes a single API call and has the gene name as a parameter. It also contains the business logic for transforming the gene name into the number, and iterating over the elements and dividing it by the total number of patients. The result adds a percentage to the "percentages" attribute in the state.

### render()

Here I use Bootstrap for handling the input form and cadll presschartbutton() on click. I also get the data from the state and render a harizontal bar series using the React-Vis package by Uber.

## What I didn't do

- I would like to render the charts as soon as the user types one, or at least when the user hits "Enter". Now it only works on a mouse click.
- APIs are called every time the user hits the button. I could build this such that if an API has already been called, the result can be stored in state
- The order of elements on the chart does not match the order of the input due to the asyncrhonous nature of the application. The loop does not wait for an API call to finish in order to go on. So the chart is in order of which API gives the fastest response. This can be solved using async / await
- I manually manipulated the .csv file into a JavaScript object. This object lives in src/gene_results.js. I could use a library to convert the .csv into an object so the user doesn't have to do it manually.
