# Campaign React App

This project is a POC which uses following tech stack.
- React 16.8.6 with React Hooks.
- Redux 4.04 with Redux Hooks.
- React Router DOM 5.0.1
- React Bootstrap 1.0.0-beta.10

And for Unit Tests
- Jest
- Enzyme

### App Requirements
Following requirements has been implemented. 
- A list of Campaign which shows
    
    * The Name
    * The startDate
    * The endDate
    * A flag to state if the Campaign is active (a campaign is running when the current date is inside the start-end date range)
    * The Budget (in USD dollar)
- A Search Form before the list in order to filter the list by Campaign Name
- A DateRange component that filters the list of campaigns based on a Start and End Date.
        * If the campaign has a startDate that is contained in the range, it should show
        * If the campaign has an endDate that is contained in the range, it should show.
        * You should not be able to select an end-date that is before the start-date.

- If the endDate is before the start Date, the campaign should not show.

## Installation Instructions

- Clone the Project
- Run `npm install` to install all dependency.
- Run `npm start` to run the application.

## Test Case

This project includes Unit Tests & Integration Testing (Only written for App & Header Component). To run the Test cases use `npn test` command.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
