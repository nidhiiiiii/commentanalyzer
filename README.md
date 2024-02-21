# INSTAGRAM COMMENT SENTIMENT ANALYZER

This is a sentiment analysis application that fetches comments from public Instagram posts and performs sentiment analysis on them. The application is built using React for the frontend and FastAPI for the backend. The sentiment analysis is performed using a machine learning model.

## Features

- Fetch comments from public Instagram accounts using GraphAPI.
- Perform sentiment analysis on the fetched comments.
- Display the comments along with their sentiment (positive or negative) on a webpage.


## Installing and running ##

To start the application, run the following command:
backend: first ```pip install -r requirements.txt``` to download all the dependencies
im using Python 3.9.13 , pip 22.0.4
frontend: npm init -y , then npm i 

for starting backend : uvicorn app:app --port 8001 / uvicorn app:app --reload
For starting frontend : npm start


This will start the application on http://localhost:3000.

## Files

- `package.json`: Contains the metadata of the project and its dependencies.
- `README.md`: This file.
- `app.py`: The FastAPI application.
- `fetch_comments.py`: The script to fetch comments from Instagram and Facebook.
- `sentiment_analysis.py`: The script to perform sentiment analysis on the fetched comments.
- `index.html`: The main HTML file.
- `App.js`: The main React component.
- `App.css`: The CSS for the main React component.

## thought processing
Initially consideration: to use graphapi to directly fetch the comments , but due to too much hassle in that and requirement of buisness account which was not possible , tried with selenium .Then tried using puppeteer library for getting the comments but for the analysis of comment there was a library called sentiment.js , but that was not giving that good of a result .Why fast api? it has a gui for testing and it was a new thing to know .Drawback: instagram changes its selectors sometimes , so whenever they change we need to modify the Xpath and only public posts comments would be obtained .No datbase cuz it was not needed .

## License

[ISC](https://choosealicense.com/licenses/isc/)
