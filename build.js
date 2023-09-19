const path = require('path');
const { promises: fs } = require('fs');
const dwf = require.resolve('@vscode/dwarf-debugging');

(async () => {
  await fs.rm('dwarf-debugging', { force: true, recursive: true });
  await fs.cp(path.dirname(dwf), 'dwarf-debugging', { recursive: true });

  require('./index').activate(); // sanity
})();
