const mapper = require("object-mapper")

const input = {
    "declaration": {
      "attributes": {
        "version": "1.0",
        "encoding": "utf-8"
      }
    },
    "root": {
      "name": "plays",
      "attributes": {
        "username": "kouphax",
        "userid": "1094472",
        "total": "573",
        "page": "1",
        "termsofuse": "https://boardgamegeek.com/xmlapi/termsofuse"
      },
      "children": [
        {
          "name": "play",
          "attributes": {
            "id": "41379916",
            "date": "2020-03-01",
            "quantity": "1",
            "length": "0",
            "incomplete": "0",
            "nowinstats": "0",
            "location": "Home"
          },
          "children": [
            {
              "name": "item",
              "attributes": {
                "name": "Beat the Parents",
                "objecttype": "thing",
                "objectid": "20422"
              },
              "children": [
                {
                  "name": "subtypes",
                  "attributes": {},
                  "children": [
                    {
                      "name": "subtype",
                      "attributes": {
                        "value": "boardgame"
                      },
                      "children": []
                    }
                  ],
                  "content": ""
                }
              ],
              "content": ""
            },
            {
              "name": "comments",
              "attributes": {},
              "children": [],
              "content": "#bgstats"
            },
            {
              "name": "players",
              "attributes": {},
              "children": [
                {
                  "name": "player",
                  "attributes": {
                    "username": "kouphax",
                    "userid": "1094472",
                    "name": "James",
                    "startposition": "",
                    "color": "Team 2",
                    "score": "0",
                    "new": "0",
                    "rating": "0",
                    "win": "0"
                  },
                  "children": []
                },
                {
                  "name": "player",
                  "attributes": {
                    "username": "",
                    "userid": "0",
                    "name": "Nate",
                    "startposition": "",
                    "color": "Team 1",
                    "score": "0",
                    "new": "0",
                    "rating": "0",
                    "win": "1"
                  },
                  "children": []
                },
                {
                  "name": "player",
                  "attributes": {
                    "username": "",
                    "userid": "0",
                    "name": "Ollie",
                    "startposition": "",
                    "color": "Team 1",
                    "score": "0",
                    "new": "0",
                    "rating": "0",
                    "win": "1"
                  },
                  "children": []
                },
                {
                  "name": "player",
                  "attributes": {
                    "username": "",
                    "userid": "0",
                    "name": "Emma",
                    "startposition": "",
                    "color": "Team 2",
                    "score": "0",
                    "new": "0",
                    "rating": "0",
                    "win": "0"
                  },
                  "children": []
                }
              ],
              "content": ""
            }
          ],
          "content": ""
        },
        {
            "name": "play",
            "attributes": {
              "id": "41379916",
              "date": "2020-03-01",
              "quantity": "1",
              "length": "0",
              "incomplete": "0",
              "nowinstats": "0",
              "location": "Home"
            },
            "children": [
              {
                "name": "item",
                "attributes": {
                  "name": "Beat the Parents 2",
                  "objecttype": "thing",
                  "objectid": "20422"
                },
                "children": [
                  {
                    "name": "subtypes",
                    "attributes": {},
                    "children": [
                      {
                        "name": "subtype",
                        "attributes": {
                          "value": "boardgame"
                        },
                        "children": []
                      }
                    ],
                    "content": ""
                  }
                ],
                "content": ""
              },
              {
                "name": "comments",
                "attributes": {},
                "children": [],
                "content": "#bgstats"
              },
              {
                "name": "players",
                "attributes": {},
                "children": [
                  {
                    "name": "player",
                    "attributes": {
                      "username": "kouphax",
                      "userid": "1094472",
                      "name": "James",
                      "startposition": "",
                      "color": "Team 2",
                      "score": "0",
                      "new": "0",
                      "rating": "0",
                      "win": "0"
                    },
                    "children": []
                  },
                  {
                    "name": "player",
                    "attributes": {
                      "username": "",
                      "userid": "0",
                      "name": "Nate",
                      "startposition": "",
                      "color": "Team 1",
                      "score": "0",
                      "new": "0",
                      "rating": "0",
                      "win": "1"
                    },
                    "children": []
                  },
                  {
                    "name": "player",
                    "attributes": {
                      "username": "",
                      "userid": "0",
                      "name": "Ollie",
                      "startposition": "",
                      "color": "Team 1",
                      "score": "0",
                      "new": "0",
                      "rating": "0",
                      "win": "1"
                    },
                    "children": []
                  },
                  {
                    "name": "player",
                    "attributes": {
                      "username": "",
                      "userid": "0",
                      "name": "Emma",
                      "startposition": "",
                      "color": "Team 2",
                      "score": "0",
                      "new": "0",
                      "rating": "0",
                      "win": "0"
                    },
                    "children": []
                  }
                ],
                "content": ""
              }
            ],
            "content": ""
          }
      ]
    }
  }
  
const output = mapper(input, {
    "root.attributes.username": "username",
    "root.attributes.userid": "userid",
    "root.attributes.total": {
        key: "total",
        transform: parseInt
    },
    "root.attributes.page": {
        key: "page",
        transform: parseInt
    },
    "root.children[].attributes.id": "plays[].id",
    "root.children[].attributes.location": "plays[].location",
    "root.children[].attributes.date": "plays[].date",
    "root.children[].children[0].attributes.name": "plays[].game.name",
    "root.children[].children[0].attributes.objectid": "plays[].game.id",
    "root.children[].children[2].children[].attributes.name": "plays[].players[].name",
    "root.children[].children[2].children[].attributes.win": "plays[].players[].win",
    "root.children[].children[2].children[].attributes.score": "plays[].players[].score",
    "root.children[].children[2].children[].attributes.new": "plays[].players[].firstPlay",
    "root.children[].children[2].children[].attributes.color": "plays[].players[].team"
})

console.log("beans")
console.dir(output, { depth: null })