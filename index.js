const core = require('@actions/core');


// most @actions toolkit packages have async methods
async function run() {
  try { 
    console.log('start')

    console.log('finish')
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
