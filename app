from flask import Flask, render_template, request, send_file
from PIL import Image
import io
import pdfkit
import imgkit

app = Flask(__name__)

# PDFKit 설정
pdfkit_config = pdfkit.configuration(wkhtmltopdf='/usr/local/bin/wkhtmltopdf')  # wkhtmltopdf 경로를 수정

# IMGKit 설정
imgkit_config = imgkit.config(wkhtmltoimage='/usr/local/bin/wkhtmltoimage')  # wkhtmltoimage 경로를 수정

# 전역 변수로 결과 데이터를 저장
global_result_data = {}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    global global_result_data
    global_result_data = {
        '기숙사': request.form['dormitory'],
        '성별': request.form['gender'],
        '생년': request.form['birth_year'],
        '학번': request.form['student_id'],
        'MBTI': ' '.join([request.form['mbti_1'], request.form['mbti_2'], request.form['mbti_3'], request.form['mbti_4']]),
        '단과대': request.form['college'],
        '취침시간': request.form['bedtime'],
        '불 끄는 시간': request.form['lights_off'],
        '기상시간': request.form['wakeup_time'],
        '방청소': request.form['cleaning_habits'],
        '바닥': request.form['floor_preference'],
        '잠버릇': request.form['sleep_habits'],
        '잠귀': request.form['sleep_sensitivity'],
        '아침 알람': request.form['morning_alarm'],
        '흡연여부': request.form['smoking'],
        '음주빈도': request.form['drinking_frequency'],
        '술 주사': request.form['drinking_habits'],
        '벌레': request.form['bug_handling'],
        '원하는 룸메와의 관계': request.form['roommate_relationship'],
        '전화통화': request.form['phone_calls'],
        '핸드폰 소리': request.form['phone_sound'],
        '물건공유': request.form['item_sharing'],
        '실내취식': request.form['indoor_dining'],
        '야식': request.form['late_night_snack'],
        '귀가 주기': request.form['return_frequency'],
        '기타 참고 사항': request.form['additional_notes']
    }
    return render_template('result.html', data=global_result_data)

@app.route('/download_image')
def download_image():
    rendered_html = render_template('result.html', data=global_result_data)
    
    # HTML을 PDF로 변환
    pdf = pdfkit.from_string(rendered_html, False, configuration=pdfkit_config)
    
    # PDF를 이미지로 변환
    img = imgkit.from_string(rendered_html, False, config=imgkit_config)

    img_io = io.BytesIO(img)
    img_io.seek(0)

    return send_file(img_io, mimetype='image/png', download_name='survey_result.png', as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
