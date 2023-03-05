from flask import Flask, jsonify, request, json
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"
with app.app_context():
    db = SQLAlchemy(app)

class Blog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String, unique=True, nullable=False)
    
    def __str__(self):
        return f'{self.id} {self.content}'
    
def blog_serializer(blog):
    return {'id': blog.id, 'content': blog.content}







@app.route('/api', methods=['GET'])
def index():
    return jsonify([*map(blog_serializer, Blog.query.all() )])

@app.route('/api/create', methods=['POST'])
def create():
    request_data = json.loads(request.data)
    blog = Blog(content=request_data['content'])

    db.session.add(blog)
    db.session.commit()

    return {'201' : 'blog cretaed succesfully'}


@app.route('/api/<int:id>')
def show(id):
    return jsonify([*map(blog_serializer, Blog.query.filter_by(id=id))])

@app.route('/api/<int:id>', methods=['POST'])
def delete(id):
    request_data = json.loads(request.data)
    Blog.query.filter_by(id=request_data['id']).delete()
    db.session.commit()

    return {'204': 'Deleted successfully'}





if __name__=='__main__':
    app.run(debug=True)



