install-tinymce:
	rm -rf tinymce_4/static/tinymce_4/tinymce
	bower install

gulpgulptasks:
	git archive --remote=git@bitbucket.org:itcase-dev/gulp-tasks.git master gulp-tasks/* gulpfile.js gulpfile.paths.js __gulpfile.local.js | tar -xv
	mv __gulpfile.local.js ./defaults/gulpfile.local.js

webpackconfig:
	git archive --remote=git@bitbucket.org:itcase-dev/gulp-tasks.git master webpack.* | tar -xv

pypi:
	python setup.py sdist upload
