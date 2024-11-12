app = Flask(__name__)

@app.route("/")
def renderIndex():
    return render_template("index.html")

@app.route("/geodesicDistance")
def geodesicDistance():
    query = parseQ(request.args)
    if query:
        position = geocodeAddress(query)
        if (position) and (len(position[u'results'])>0):
            lat = position[u'results'][0][u'geometry'][u'location'][u'lat']
            lng = position[u'results'][0][u'geometry'][u'location'][u'lng']
            response = createResponse(200,'Good query',lat,lng,position[u'results'][0]  [u'formatted_address'],getDistance(lat,lng))
        else:
            response = createResponse(400,'Bad formed query','','','','')
    else:
        response = createResponse(204,'No query     made',givenAddress['lat'],givenAddress['lng'],'White Bear Yard, 144a Clerkenwell Road,    London, EC1R 5DF, UK',0.0)                               
    http_response = make_response(json.dumps(response))
    http_response.headers['Content-type'] = 'application/json'
    http_response.headers['Access-Control-Allow-Origin'] = '*'
    return http_response