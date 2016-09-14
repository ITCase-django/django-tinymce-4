install-tinymce:
	rm -rf tinymce_4/static/tinymce_4/tinymce
	bower install

init-example:
	cd ./example/ && python manage.py migrate
	@echo "\nCreated db.sqlite3 file"
	cd ./example/ && python manage.py createsuperuser

pypi:
	python setup.py sdist upload
