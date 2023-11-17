'use strict';

const http = require('http');
const Metro = require('metro');

// We first load the config from the file system
Metro.loadConfig().then(async (config) => {
  const metroBundlerServer = await Metro.runMetro(config);

  const httpServer = http.createServer(
    metroBundlerServer.processRequest.bind(metroBundlerServer),
  );

  httpServer.listen(8081);
});