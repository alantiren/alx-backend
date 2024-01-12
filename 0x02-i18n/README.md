# Internationalization and Localization in Flask

This project demonstrates the implementation of internationalization and localization in a Flask web application using Flask-Babel. The project includes various tasks to cover aspects such as language selection, template parametrization, user login simulation, and time zone handling.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Tasks](#tasks)
    - [Task 0: Basic Flask App](#task-0-basic-flask-app)
    - [Task 1: Basic Babel Setup](#task-1-basic-babel-setup)
    - [Task 2: Get Locale from Request](#task-2-get-locale-from-request)
    - [Task 3: Parametrize Templates](#task-3-parametrize-templates)
    - [Task 4: Force Locale with URL Parameter](#task-4-force-locale-with-url-parameter)
    - [Task 5: Mock Logging In](#task-5-mock-logging-in)
    - [Task 6: Use User Locale](#task-6-use-user-locale)
    - [Task 7: Infer Appropriate Time Zone](#task-7-infer-appropriate-time-zone)
    - [Task 8: Display the Current Time](#task-8-display-the-current-time)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Internationalization (i18n) and Localization (l10n) are essential features for web applications to support users from different regions and languages. Flask-Babel is a Flask extension that provides support for these features, making it easy to handle translations, language preferences, and time zones.

This project serves as a practical guide to implementing i18n and l10n in Flask using Flask-Babel. It covers various tasks, each building upon the previous one, to showcase the step-by-step process of creating a multi-lingual and region-aware web application.

## Project Structure

- **0x02-i18n/**
    - **0-app.py**: Basic Flask app.
    - **1-app.py**: Basic Babel setup.
    - **2-app.py**: Get locale from request.
    - **3-app.py**: Parametrize templates.
    - **4-app.py**: Force locale with URL parameter.
    - **5-app.py**: Mock logging in.
    - **6-app.py**: Use user locale.
    - **7-app.py**: Infer appropriate time zone.
    - **app.py**: Display the current time (Advanced).
    - **babel.cfg**: Babel configuration file.
    - **templates/**
        - **0-index.html**: Template for Task 0.
        - **1-index.html**: Template for Task 1.
        - **2-index.html**: Template for Task 2.
        - **3-index.html**: Template for Task 3.
        - **4-index.html**: Template for Task 4.
        - **5-index.html**: Template for Task 5.
        - **6-index.html**: Template for Task 6.
        - **7-index.html**: Template for Task 7.
        - **index.html**: Template for Task 8.
    - **translations/**
        - **en/**
            - **LC_MESSAGES/**
                - **messages.po**: English translation file.
                - **messages.mo**: Compiled English translation.
        - **fr/**
            - **LC_MESSAGES/**
                - **messages.po**: French translation file.
                - **messages.mo**: Compiled French translation.

## Tasks

### Task 0: Basic Flask App

Setup a basic Flask app with a single route and template.

### Task 1: Basic Babel Setup

Install Flask-Babel, configure available languages, and set default locale and timezone.

### Task 2: Get Locale from Request

Create a `get_locale` function to determine the best-matching language from the request.

### Task 3: Parametrize Templates

Use `_` or `gettext` function to parametrize templates using message IDs.

### Task 4: Force Locale with URL Parameter

Implement the ability to force a particular locale by passing the `locale` parameter to the app’s URLs.

### Task 5: Mock Logging In

Mock user login system, create a user table, and simulate logging in using the `login_as` URL parameter.

### Task 6: Use User Locale

Change the `get_locale` function to use a user’s preferred locale if supported.

### Task 7: Infer Appropriate Time Zone

Define a `get_timezone` function and use the `babel.timezoneselector` decorator to infer the appropriate time zone.

### Task 8: Display the Current Time (Advanced)

Display the current time on the home page based on the inferred time zone.

## Installation

To run this project, ensure you have Python 3.x installed. Additionally, install the required dependencies using the following command:

```bash
pip install Flask Flask-Babel pytz
```

## Usage

Run each task's corresponding Python script to see the implementation. For example:

```bash
python 0-app.py
```

Visit the provided URLs in your browser to test different features.

## Dependencies

- Flask
- Flask-Babel
- pytz

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.
