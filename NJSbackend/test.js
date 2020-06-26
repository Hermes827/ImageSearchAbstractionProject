curl -X POST \
    -H 'content-type:application/json' \
    -d ‘{'age':'40'}’ \
    http://localhost:5000/personnel

    curl -X POST \
    -H 'content-type:application/json' \
    -d '{"age":"40"}' \
    http://localhost:5000/personnel


curl -X DELETE http://localhost:5000/personnel/1

curl -X GET http://localhost:5000/personnel
