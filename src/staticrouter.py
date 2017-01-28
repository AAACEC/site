from bottle import Bottle, static_file, run, response

app = Bottle()

@app.route('/<pagename>')
def get_page(pagename):
    pagename += ".html"
    return static_file(pagename, root='static/')
