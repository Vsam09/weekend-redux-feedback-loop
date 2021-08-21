# Project Name

Weekend-Redux-Feedback-Loop

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Create a survey that collects the inputs for feeling, understanding, support and comment. Prior to submit they should be able to review their inputs. Start a new survey upon submitting.

[x] Create database using provided data.sql
[xxxxx] Create 5 components
    [x] Feeling - How are you feeling today?
        [x] feeling dispatch type: feeling
        [x] A Next Button to route to the next page
            [x]useHistory
            [x]history.push("to next component")
        [x] Input placeholder for feedback number inputs
            [x]Limit rating a minimum of 0 and limit of 5
            [x]Alert if no entry or above limit

    [x] Understanding - How well are you understanding the content?
        [x] understanding dispatch type: understanding
        [x] A Next Button to route to the next page
            [x]useHistory
            [x]history.push("to next component")
        [x] Input placeholder for feedback number inputs
            [x]Limit rating a minimum of 0 and limit of 5
            [x]Alert if no entry or above limit

    [x] Support - How well are you being supported?
        [x] support dispatch type: support
        [x] A Next Button to route to the next page
            [x]useHistory
            [x]history.push("to next component")
        [x] Input placeholder for feedback number inputs
            [x]Limit rating a minimum of 0 and limit of 5
            [x]Alert if no entry or above limit

    [x] Comment - Any comments you want to leave?
        [x] comment dispatch type: comment
        [x] A Next Button to route to the next page
            [x]useHistory
            [x]history.push("to next component")
        [x] Input placeholder for comment feedback inputs
        
    [x] Review - Reviews all inputs 
        [x] Submit button onClick should save to the database 
           and start over with a New Survey
    [x] Complete - Thank you
        [x] button to leave new survey

dditional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
