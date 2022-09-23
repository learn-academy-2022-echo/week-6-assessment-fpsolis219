# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)The class is an example of a controller method that is inside the controller file. The Controller is created from the command rails generate controller <controller name>. The purpose of the controller is to hold the logic of the application and manages the interactions between users, the views, and the model.
class BlogPostsController < ApplicationController
  def index
    # ---2) within the controller the first method that we currently see is the index method that is created to access the items in a database. This example uses an insance variable that is set to equal to the database called BlogPost with the accessor .all.
    @posts = BlogPost.all
  end

  # ---3) the next method seen below is the show method that is a RESTful route meaning that it will provide a mapping to HTTP verbes in the routes file in the application. The show method is created with the intent to access/find a specific post from the db:BlogPost using the id of the data which will get passed as an argument that will give the user to show the specific date.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The New method is another RESTful route that will map us to the routes files. It is built to create a new post using the DB class BlogPost.new
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The create method is another RESTful route with the purpose to create the new data for the data base. it uses the instance variable @post to equal to BlogPost.create with the parameter blog_post_params.
    # the purpose of this is to have a userinput to create the new data, HOWEVER their is also a condition set to what is valid as the passing argument. 
    #That condition can be found in the private section of this method on line 65-68 that determines what is passed as the argument. 
    #In the conditional portion it is set so that if the data is valid and passed in , it will direct you to the newly built data. if it is not valide it will remain in the inport form.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) The edit method is an HTML form for updating an item in the database. It does this by selecting a specific post data using the id
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)update will overwrite the value of an existing instance data that was selected using the edit form. The update method will update the data if it is valid according to the private method.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) The delete method will completly remove the entire instance found within the BlogPost by selecting the specific id.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) the private sections purpose is to restrict the scope of a method when called and protects the scope with the ability to conceals the methods for security purposes
  private
  def blog_post_params
    # ---10)The method found below the private section is the strong params method that is used when creating an API. The purpose of this is to build the structure of how the arguments should be passed in. Right not we are working the a database called BlogPost that contains instances in a fomr of objects formatted into a hash. Arguments that will be passed will be the keys :title and :content that will be the peices of information inside the instance for BlogPost.
    
    params.require(:blog_post).permit(:title, :content)
  end
end
