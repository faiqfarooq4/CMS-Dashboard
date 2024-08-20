from flask import Flask, request, jsonify
import os
from comparison import process_pdfs  # Import the comparison logic from comparison.py

app = Flask(__name__)

# Directory to temporarily store uploaded files
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the upload directory exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/compare-policies', methods=['POST'])
def compare_policies():
    # Check if the files are part of the request
    if 'policy1' not in request.files or 'policy2' not in request.files:
        return jsonify({"error": "Both files are required"}), 400

    policy1 = request.files['policy1']
    policy2 = request.files['policy2']

    # Save the files temporarily
    file1_path = os.path.join(app.config['UPLOAD_FOLDER'], policy1.filename)
    file2_path = os.path.join(app.config['UPLOAD_FOLDER'], policy2.filename)
    policy1.save(file1_path)
    policy2.save(file2_path)

    try:
        # Call the comparison function and get the result
        comparison_result = process_pdfs(file1_path, file2_path)
        
        # Clean up the temporary files
        os.remove(file1_path)
        os.remove(file2_path)

        # Return the comparison result as JSON
        return jsonify(comparison_result)

    except Exception as e:
        # If any error occurs during processing, return an error response
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
