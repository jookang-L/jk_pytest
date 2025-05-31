from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# 문제 코드와 정답 출력 준비
problem_code = '''print("Hello, World!")\nprint(2 + 3)'''
correct_output = '''Hello, World!\n5'''

@app.route('/')
def index():
    return render_template('index.html', code=problem_code)

@app.route('/check_answer', methods=['POST'])
def check_answer():
    user_output = request.form['student_output'].strip()
    if user_output == correct_output:
        result = "정답입니다! 잘했어요!"
        color = "green"
    else:
        result = "틀렸습니다. 다시 시도해보세요!"
        color = "red"
    return jsonify({'message': result, 'color': color})

if __name__ == '__main__':
    app.run(debug=True)
