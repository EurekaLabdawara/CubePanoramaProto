var APP_DATA = {
  "scenes": [
    {
      "id": "0-back",
      "name": "Back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.006145821405652896,
          "pitch": 0.08423253718290447,
          "rotation": 0,
          "target": "1-front"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.832933242604671,
          "pitch": 0.6763656475654471,
          "title": "Kartu Nama",
          "type": "pdf",
          "link":"pdf/kartunama.pdf",
          "custom":true
        }
      ]
    },
    {
      "id": "1-front",
      "name": "Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.014243699625081874,
        "pitch": 0.017870827508785325,
        "fov": 1.2463883365493036
      },
      "linkHotspots": [
        {
          "yaw": 3.118059718225023,
          "pitch": 0.10923548223538049,
          "rotation": 0,
          "target": "0-back"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9618236615777693,
          "pitch": -0.1515955212568194,
          "title": "Cube Profile",
          "type": "youtube",
          "custom":true,
          "link":"https://www.youtube.com/embed/hD-hykqs6QI"
        },
        {
          "yaw": -0.935687470405842,
          "pitch": 0.16671572687204161,
          "title": "Company Profile",
          "type": "pdf",
          "link":"pdf/companyprofile.pdf",
          "custom":true
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
