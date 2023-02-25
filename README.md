This is a proof of concept of an AI Therapist using GPT3. While an not a human, the AI responds like a real therapist, and gives useful recommendations based on what you are dealing with.

Uses GPT3 to power all the recommendations. In order to clone and use the repo, you'll need to get access to the GPT3 API and plug in your own secret key. 

Uses Shane Lynn's asynch flask code as a starter. 

To use - please clone the repository and then set up your virtual environment using the requirements.txt file with pip and virtualenv. You can achieve this with:


    git clone https://github.com/teremterem/AI-Therapist.git  # a fork of https://github.com/jsoslow2/AI-Therapist
    cd AI-Therapist
    virtualenv AI-Therapist
    ./AI-Therapist/Scripts/activate
    pip install -r requirements.txt  #(or in Windows - sometimes python -m pip install -r requirements.txt )


After that make sure to create `.env` file in the root directory of the project with content like this:


    OPENAI_API_KEY={your openai api key}
    FLASK_SECRET_KEY={flask secret key that you generated using whatever secret key generator you like}


Start the application with:


    python application.py


And visit http://127.0.0.1:5000/

**ATTENTION!** If you see "Access denied" message in Chrome, go to [chrome://net-internals/#sockets](chrome://net-internals/#sockets) and click "Flush socket pools"
