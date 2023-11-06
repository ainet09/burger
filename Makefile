up:
	docker compose up --build
down:
	docker compose down

createsuperuser:
	docker compose run --rm app python manage.py createsuperuser

run:
	./manage.py runserver

mk:
	./manage.py makemigtrations
m:
	./manage.py  migrate

