class Config:

    DEBUG = True
    CORS_ORIGINS = '*'

class DevelopmentConfig(Config):
    DEBUG = True

class ProductionConfig(Config):
    DEBUG = False
