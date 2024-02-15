import http.client
import json
import requests

json_data = {}

def getToken():
    global json_data
    
    conn = http.client.HTTPSConnection("dev-q024wp4wou22f5r0.us.auth0.com")

    c_id = input("(client id) ? ")
    c_s = input("(client secret) ? ")

    payload = {
        "client_id": c_id,
        "client_secret": c_s,
        "audience": "https://dev-q024wp4wou22f5r0.us.auth0.com/api/v2/",
        "grant_type": "client_credentials"
    }

    headers = { 'content-type': "application/json" }

    conn.request("POST", "/oauth/token", json.dumps(payload), headers)

    res = conn.getresponse()
    data = res.read()

    json_data = json.loads(data.decode("utf-8"))

    try:
        print(json_data["access_token"])
    except:
        print("Invalid client id or client secret")
        json_data = {}

while True:
    print("> ", end="")
    command = input()
    if command == "public":
        response = requests.get("http://localhost:3001/api/public")
        print(response.text)
    elif command == "private":
        if json_data == {}:
            response = requests.get("http://localhost:3001/api/private")
        else:
            response = requests.get("http://localhost:3001/api/private", headers={"Authorization": "Bearer " + json_data["access_token"]})
        print(response.text)
    elif command == "get":
        if json_data == {}:
            getToken()
        else:
            print(json_data["access_token"])
    elif command == "?":
        print("public: get public data\nprivate: get private data\nget: get access token")
    else:
        exit()
