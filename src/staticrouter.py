from bottle import Bottle, static_file, run, response, template

app = Bottle()

@app.route('/directives/<pagename>')
def get_directive(pagename):
    if ".html" not in pagename:
        pagename += ".html"
    return static_file(pagename, root='static/directives/')

@app.route('/pages/<pagename>')
def get_page(pagename):
    if ".html" not in pagename:
        pagename += ".html"
    return static_file(pagename, root='static/pages/')


@app.route('/')
def get_home():
    return static_file("index.html", root='static/')

@app.route('/<pagename>')
def get_file(pagename):
    return static_file("index.html", root='static/')
