web: daphne blog.asgi:application --port $PORT --bind 0.0.0.0
celery: celery -A blog.celery worker -l info
celerybeat: celery -A blog beat -l info
celeryworker2: celery -A blog.celery worker & celery -A blog beat -l INFO & wait -n -c 2