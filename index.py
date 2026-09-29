from flask import Flask, request, render_template_string

app = Flask(__name__)

LOGIN_PAGE = """
<!doctype html>
<title>Security Awareness Demo</title>
<h1>Security Awareness Demo</h1>
<form method="post">
  <label>User ID <input name="user_id" required></label><br>
  <label>Password <input name="password" type="password" required></label><br>
  <button type="submit">Log in</button>
</form>
"""

RESULT_PAGE = """
<!doctype html>
<title>Security Training</title>
<h1>You’ve been hacked — simulation</h1>
<p>This was an authorized awareness demo. Never enter your real password on an unexpected page.</p>
"""

@app.get("/")
def login():
    return render_template_string(LOGIN_PAGE)

@app.post("/")
def submit():
    # Deliberately do not read, log, store, or transmit submitted credentials.
    return render_template_string(RESULT_PAGE)

if __name__ == "__main__":
    # For local testing only. Use an authorized hosting setup for a public demo.
    app.run(host="127.0.0.1", port=5000, debug=False)
