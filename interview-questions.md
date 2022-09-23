# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: to modify a rails generated model we would need to migrate. The foreign key is the id associated with the primary key of the model. The foreign key would be applied to the students model because it is accosiateed with the cohort model.

Researched answer: The models cohort and students is an example of active record association which means there is a connection between the two models or an association. The phrase in the question "has_many" defines that the student model is the associated model to cohort which means that the student model will contain the foreign key. the data inside the student model will contain the primay key id of cohort. This will acossiate what the foreign key represents

2. Which RESTful routes must always be passed params? Why?

Your answer: show, create, destroy, update are the RESTful that contain params because the methods created for them require params to pass in specific data to be called through its id to be,called, updated, edited, or destroyed. Created use params to pass in the information to create an instance of a class for the database.

Researched answer: Show is the RESTful route that represents the R in the CRUD actions and is the convention used to list a item through userinput that will be passed as an argument in the show method of the control file. Create represents the C in the CRUD actions that uses params to add information into the use of params. Update represents the U in CRUD that modifies information in the database through userinput passing the updated information as an argument. Destroy is the D in the CRUD action that  requirs a parameter to select a specific data to be completely be removed from the Database. 

3. Name three rails generator commands. What is created by each?

Your answer: Three command that im familiar with are Rails generate controller <controller-name> that will generate all controller files nesesary with the controller name. The second generate command im familiar with is rails generate model <model-name> which will generate the model we want to create with the data that will represent a column in the database. the third command i know is rails generate recourse <model-name> that generates the model along with the necesary files need to create an API

Researched answer: Rails generate controller is a rails command that creates the associated files for the controller.

rails generate model is the command to create the model of the database we intend to create. The rails generate model will contain the name of our model followed by the data information that will represent the columns passed as arguments.

rails generate rescourse is a command command that not only creates the model but creates the controller, view folder, and the RESTful routes, basically everything needed to create a rails API.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students 
1. for the first get the controller method index will call the first route and would display all the student
action: "POST" location: /students
2. Post action belongs to the create method of the students controller wich will create a new instance of the studenst class
action: "GET" location: /students/new
3. this get will call for the new method that will allow users to add information by displaying a form for the user
action: "GET" location: /students/2
4. this get will call the show method to display the student with the id: key value of 2. the number will be the value that will be passed as an argument within the method
action: "GET" location: /students/2/edit
5. this get route will call for the edit method which allows to call on a specific data of the student class to updated.
action: "PATCH" location: /students/2
6. the patch route will call for the update method that will overwrite the values of a specific data passed through a param after its been edited.
action: "DELETE" location: /students/2
7. the dellete route will call for the destroy method that will delete a data passed as a param completely



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. as a user i want to create a to do list of my schedule for the day with the event:name time: location: completion:

2. as a user my schedule should contain some information about what i got planed for today.

3. as a user i want to be able to see the the entire list of my schedule.

4. as a user i want to look at specific events that would direct me to the time and location. 

5. i should be able to return back to the event names if i need to see them all again.

6. as a user something new would potentially arise in my schedule that i have to attend. i should be able to add it to my list.

7. as user i should be able to see what the new event with the time and location added to my schedule

8. as a user i just recieved a call on three additional things i have to attend to. i have add them to my list.

9. as a user i should be able to change whether i completed my one of my schedules.

10. as a user i could receive a sudden change of my list meaning it could potentially cancel, i should be able to remove it if need be.

11. as a user i should be able to display the time fo each in case i could make time for a break.
