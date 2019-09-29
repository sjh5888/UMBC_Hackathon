const axios = require('axios');
const path = require('path');
const fs = require('fs');

console.log(path.join(path.dirname(fs.realpathSync(__filename))));

const contents = fs.readFileSync('./src/data/data.json');

const obj = JSON.parse(contents);

// console.log(obj);

const url = 'http://localhost:8080'

const rest = (vals, urlPath) => {
  vals.map(val =>
    axios.post(urlPath, val)
  )
}

Object.keys(obj).map((key, index) => {
  // console.log(key);
  // console.log(obj[key]);
  const vals = obj[key];

  switch(key) {
    case 'user':
      rest(vals, url + "/api/User");
      break;
    case 'project':
      rest(vals, url + "/api/Projects");
      break;
    case 'hackathon':
      rest(vals, url + "/api/Hackathon");
      break;
    case 'group':
      rest(vals, url + "/api/Group");
      break;
    default:
      console.log("ERROR IN JSON");
  }
});

  // axios.post('https://postb.in/1569730092272-7975388262420', )
