# Lab 03: Flexbox and Templating

## Configuration

_Your repository must include the following config files:_
- `README.md` - with an overview of the project for a new visitor to your repo
- `.gitignore` - with standard NodeJS configurations (see the provided `.gitignore` file)
- `.eslintrc.json` - with Code 301 course standards for the linter (see the provided file in the *configs* folder of the class repo)

- Organize your files into folders as you see fit. Here is an example file tree:

```sh
lab-02-repository
├── css
│   ├── base.css
│   ├── layouts.css
│   ├── modules.css
│   └── reset.css
├── data
│   └── page-1.json
    └── page-2.json
├── index.html
├── js
│    └── app.js
├── .eslintrc.json
├── .gitignore
└── README.md
```

## User Acceptance Tests

### Overview

In labs 2 and 3, you and your partner(s) will be using the provided JSON files to create a photo gallery. You will style it using floats.

You have the option of using the provided `index.html` file, but it is not a requirement.

## Resources

- [page-1.json](./starter-code/page-1.json)
- [page-2.json](./starter-code/page-2.json)

### Time Estimate

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```
Number and name of feature: (AJ) Convert elements loading onto DOM to use handlebars

Estimate of time needed to complete: 3

Start time: 1000

Finish time: 1300

Actual time needed to complete: 3
```
Number and name of feature: (AJ) Ability to sort elements by Name, Horns or Keywords

Estimate of time needed to complete: 6

Start time: 1300

Finish time: 1900

Actual time needed to complete: 6
```
Number and name of feature: (PT) Sort the images by one of the properties on page load. This should also apply to the second page of images.

Estimate of time needed to complete: 3

Start time: 1200

Finish time: 1600

Actual time needed to complete: 4
....
Number and name of feature: (PT) Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM

Estimate of time needed to complete: 5

Start time: 1400

Finish time: 1900

Actual time needed to complete: 4

Add this information to your README.
....
Number and name of feature: Fixing the options not clearing data when changin page

Estimate of time needed to complete: 1 hour

Start time: 2200

Finish time: 2300

Actual time needed to complete: 1 hour

Add this information to your README.

....
Number and name of feature: Convert to flexbox

Estimate of time needed to complete: 30 min

Start time: 2300

Finish time: 2330

Actual time needed to complete: 30 min

Add this information to your README.

....


### Feature #1: Display images

#### Why are we implementing this feature?

- As a user, I want to view the images on the page so that I can browse the photo collection.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the photo gallery should display all of the images in the gallery  

#### How are we implementing it?

- Use AJAX, specifically `$.get()`, to read the provided JSON file.
- Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
- Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.

### Feature #2: Filter images

#### Why are we implementing this feature?

- As a user, I want to be able to filter the images so that I can view only images that match a keyword.

#### What are we going to implement?

Given that a user clicks on the dropdown menu  
When the user selects one of the options  
Then only the images whose keyword matches the option should be displayed  

#### How are we implementing it?

- Create a `<select>` element which contains unique `<option>` elements extracted dynamically from the JSON file, one for each keyword.
- Use an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.

### Feature #3: Style the application

#### Why are we implementing this feature?

- As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images in a grid like pattern.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user navigates to the home page  
Then the images should be displayed in rows across the screen  

#### How are we implementing it?

- Style your application using floats.
- Utilize at least one Google font.

### Stretch Goal: Sort the images

#### Why are we implementing this feature?

- As a user, I want to be able to sort the images so there is an order to how they render.

#### What are we going to implement?

Given that a user is presented with sort options  
When the user clicks on one option  
Then the images should be sorted accordingly  

#### How are we implementing it?

- Add the ability for the user to sort the images by either title or by number of horns.
- Sort the images by one of the properties on page load. This should also apply to the second page of images. 

## Submission Instructions

- Complete your Feature Tasks for the day
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on GitHub pages. Add a comment in your Canvas assignment which includes the following:
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment
