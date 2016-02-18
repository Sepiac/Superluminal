'use strict';

var engine = require('./engine');
engine.init(process.argv[2] || 'DEFAULT_CAMPAIGN');
engine.loop();