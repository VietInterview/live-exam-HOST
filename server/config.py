import os


basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    DEBUG = False
    TESTING = False
    LOCALE = ""
    STATIC_FOLDER = '/static'


class ProductionConfig(Config):
    DB_SERVER_URL = 'http://localhost:8069'
    DB_NAME = 'live-exam'
    DB_USER = 'admin'
    DB_PASS = 'Adm1Cmv4$'


config = {
    'production': ProductionConfig,
    'default': ProductionConfig,
}
