from flask import Flask
from flask_cors import CORS
from config.config import DevelopmentConfig
from routes.gastos_router import gastos_bp

app = Flask(__name__)
app.config.from_object(DevelopmentConfig)  

CORS(app)  

app.register_blueprint(gastos_bp)

if __name__ == '__main__':
    app.run(debug=app.config['DEBUG'], host='0.0.0.0', port=5001)
