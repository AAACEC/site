from bottle import Bottle, static_file, run, response, template

app = Bottle()

@app.route('/<pagename>')
def get_page(pagename):
    if ".html" not in pagename:
        pagename += ".html"
    return static_file(pagename, root='static/')
