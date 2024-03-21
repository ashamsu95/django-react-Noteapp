Note App: Django React Application

This repository contains a Django-React application named "Note App" where users can add, delete, and edit notes. The backend is developed using Django Rest Framework (DRF) to provide API endpoints for managing notes, while the frontend is built with React to provide a seamless user experience.
Features:

    Add Note: Users can create new notes with a title and content.
    Delete Note: Users can delete existing notes.
    Edit Note: Users can edit the content of existing notes.
    API Endpoints: Utilizes DRF for backend API endpoints to handle CRUD operations for notes.

Technologies Used:

    Django: A high-level Python web framework that encourages rapid development and clean, pragmatic design.
    Django Rest Framework (DRF): A powerful and flexible toolkit for building Web APIs in Django.
    React: A JavaScript library for building user interfaces.

Installation:

    Clone the repository:

    git clone https://github.com/your_username/note-app.git

Navigate to the project directory:

bash  cd note-app

Set up the backend:

    Install Python dependencies:

    pip install -r requirements.txt

Run migrations:

    python manage.py migrate

Run the Django development server:

    python manage.py runserver

Set up the frontend:

Navigate to the frontend directory:

    cd frontend

Install Node.js dependencies:

    npm install

Run the React development server:

    npm start

Access the application:

    Open your web browser and go to http://localhost:3000/ to view the Note App.
