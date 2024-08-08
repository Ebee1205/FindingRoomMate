from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'your_secret_key'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/start', methods=['POST'])
def start():
    session.clear()
    return redirect(url_for('survey_page1'))

@app.route('/survey/page1', methods=['GET', 'POST'])
def survey_page1():
    if request.method == 'POST':
        session['page1'] = request.form.to_dict()
        return redirect(url_for('survey_page2'))
    return render_template('survey_page1.html')

@app.route('/survey/page2', methods=['GET', 'POST'])
def survey_page2():
    if request.method == 'POST':
        session['page2'] = request.form.to_dict()
        return redirect(url_for('survey_page3'))
    return render_template('survey_page2.html')

@app.route('/survey/page3', methods=['GET', 'POST'])
def survey_page3():
    if request.method == 'POST':
        session['page3'] = request.form.to_dict()
        return redirect(url_for('survey_page4'))
    return render_template('survey_page3.html')

@app.route('/survey/page4', methods=['GET', 'POST'])
def survey_page4():
    if request.method == 'POST':
        session['page4'] = request.form.to_dict()
        return redirect(url_for('survey_page5'))
    return render_template('survey_page4.html')

@app.route('/survey/page5', methods=['GET', 'POST'])
def survey_page5():
    if request.method == 'POST':
        session['page5'] = request.form.to_dict()
        return redirect(url_for('survey_page6'))
    return render_template('survey_page5.html')

@app.route('/survey/page6', methods=['GET', 'POST'])
def survey_page6():
    if request.method == 'POST':
        session['page6'] = request.form.to_dict()
        return redirect(url_for('survey_page7'))
    return render_template('survey_page6.html')

@app.route('/survey/page7', methods=['GET', 'POST'])
def survey_page7():
    if request.method == 'POST':
        session['page7'] = request.form.to_dict()
        return redirect(url_for('survey_page8'))
    return render_template('survey_page7.html')

@app.route('/survey/page8', methods=['GET', 'POST'])
def survey_page8():
    if request.method == 'POST':
        session['page8'] = request.form.to_dict()
        return redirect(url_for('result'))
    return render_template('survey_page8.html')

@app.route('/result')
def result():
    result_data = {}
    for i in range(1, 9):
        result_data.update(session.get(f'page{i}', {}))
    return render_template('result.html', data=result_data)

if __name__ == '__main__':
    app.run(debug=True)
