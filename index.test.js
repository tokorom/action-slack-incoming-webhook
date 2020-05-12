const process = require('process');
const cp = require('child_process');
const path = require('path');

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
    const ip = path.join(__dirname, 'index.js');
    console.log(cp.execSync(`node ${ip}`).toString());
})
