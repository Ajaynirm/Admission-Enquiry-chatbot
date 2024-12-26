import json
from fuzzywuzzy import process
from flask import Flask, request, jsonify

# Load responses from JSON file
with open('responses.json', 'r') as file:
    responses = json.load(file)

app = Flask(__name__)

@app.route('/query', methods=['POST'])
def get_response():
    data = request.json
    query = data.get('query', '').lower()

    # Fuzzy match query to the keys in responses
    closest_match, confidence = process.extractOne(query, responses.keys())

    if confidence > 60:  # Threshold for matching
        response = responses[closest_match]
    else:
        response = "Sorry, I don't understand that. Can you rephrase?"

       
    print(response)
    return jsonify({"message":response})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
