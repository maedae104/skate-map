// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.set("json spaces", 2);

const skategroups = 
    [{ groupName : "Fro Skate",
        city : "Chicago",
        contact : "@Instagram",
        lat: "41.90537394317521",
        lng : "-87.62278911952815 "
         },
         { groupName : "Rollin With the Homos",
        city : "Oakland",
        contact : "@Instagram",
        lat: "37.787083905601605",
        lng : "-122.2569401834062",
         },
         { groupName : "Rollin With the Homos",
        city : "Philadelphia",
        contact : "@Instagram",
        lat: "39.95909553663788",
        lng : "-75.15349020710107",
         },
         { groupName : "Queer Skate PDX",
        city : "Portland",
        contact : "@Instagram",
        lat: "45.564870515218296",
        lng : "-122.76629419858408",
         },
         { groupName : "Queer Skate San Diego",
        city : "San Diego",
        contact : "@Instagram",
        lat: "32.724938701728256",
        lng : "-117.13373961226293",
         },
         { groupName : "Chicago Shred Union",
        city : "Chicago",
        contact : "@Instagram",
        lat: "41.90537394317521",
        lng : "-122.2569401834062",
         }
    ]

export default skategroups;
// app.get("/data", (_req, res) => res.send(data));

// app.get("/data/:groupName", (req, res) => {
//   res.send(
//     data.filter(sign => skategroups.groupName === req.params.groupName)
//   )
//   res.end()
// })


// app.listen(3000, () => {
//   console.log(
//     `Scheduling server listening on port 3000}...`
//   );
// });