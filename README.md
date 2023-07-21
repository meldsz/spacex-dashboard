# :rocket: SpaceX Launch Dashboard :rocket:
This application displays SpaceX launch data using the data consumed from [SpaceX-API](https://github.com/r-spacex/SpaceX-API). You can filter data to see past, upcoming, and unsuccessful launches. You can also search launches by giving in a date range and also sort the launches by Ascending or Descending order of flight number. Additionally the results are paginated for better navigation.

The application is bootstrapped using Vite and built using React and Material UI and is unit-tested with Jest and React Testing library.


# 💻  Developer Environment Setup Guide

## 📔 Pre-Requirements:

You need to have Node.js version 14.18+ installed on your computer

## ⚙️ Initial Setup


In order to setup the application locally, Clone this repository and follow the below steps

### Running Application Locally

1. Install project dependencies:

    ```bash
    $ npm install
    ```
2. Build the application
   
    ```bash
    $ npm run build
    ```

3. Start the application
   
    ```bash
    $ npm run preview
    ```


By default, Vite runs the application on [http://localhost:4173](http://localhost:4173). It will automatically pick the port if the default port is in use. To view the application in the browser, use the port shown by the output of the above command.


### 🏃 Running Tests

run the below command to run unit tests for react application   
    
    
    $ npm run test
    



### ✅ Features:
- A list of past and upcoming launches with an image of the launch, title, details, and flight number
- Launch date in UTC formatted for (DD/MM/YYYY HH:MM:SS)
- Launch List has pagination with max 12 launches per page, Page numbers and Next/Previous buttons
- A filter functionality allowing data to be filtered by:
  - Unsuccessful launches
  - Past launches
  - Upcoming launches
- A Search functionality allowing:
  - Searching date ranges
  - Changes order by ascending or descending
- A loading state when fetching from an API
- A ‘no results’ state if no results are displayed
- A basic responsive design (at least 1 breakpoint)
- A persisted state in session storage (stores filter and search query)
