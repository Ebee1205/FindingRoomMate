from flask import Flask, render_template, request, send_file
from PIL import Image, ImageDraw, ImageFont
import io

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    data = {
        'Dormitory': request.form['dormitory'],
        'Gender': request.form['gender'],
        'Birth Year': request.form['birth_year'],
        'Student ID': request.form['student_id'],
        'MBTI': request.form['mbti'],
        'College': request.form['college'],
        'Bedtime': request.form['bedtime'],
        'Lights Off': request.form['lights_off'],
        'Wakeup Time': request.form['wakeup_time'],
        'Cleaning Habits': request.form['cleaning_habits'],
        'Floor Preference': request.form['floor_preference'],
        'Sleep Habits': request.form['sleep_habits'],
        'Sleep Sensitivity': request.form['sleep_sensitivity'],
        'Morning Alarm': request.form['morning_alarm'],
        'Smoking': request.form['smoking'],
        'Drinking Frequency': request.form['drinking_frequency'],
        'Drinking Habits': request.form['drinking_habits'],
        'Bug Handling': request.form['bug_handling'],
        'Roommate Relationship': request.form['roommate_relationship'],
        'Phone Calls': request.form['phone_calls'],
        'Phone Sound': request.form['phone_sound'],
        'Item Sharing': request.form['item_sharing'],
        'Indoor Dining': request.form['indoor_dining'],
        'Late Night Snack': request.form['late_night_snack'],
        'Return Frequency': request.form['return_frequency'],
        'Additional Notes': request.form['additional_notes']
    }

    image = create_image(data)
    img_io = io.BytesIO()
    image.save(img_io, 'PNG')
    img_io.seek(0)

    return send_file(img_io, mimetype='image/png', download_name='survey_result.png', as_attachment=True)

def create_image(data):
    width, height = 800, 1200
    image = Image.new('RGB', (width, height), color=(255, 255, 255))
    draw = ImageDraw.Draw(image)
    font = ImageFont.load_default()

    y_position = 10
    for key, value in data.items():
        draw.text((10, y_position), f"{key}: {value}", fill=(0, 0, 0), font=font)
        y_position += 20

    return image

if __name__ == '__main__':
    app.run(debug=True)
