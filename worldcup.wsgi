import os
activate_this = os.path.dirname(__file__) + '/venv/bin/activate_this.py'
execfile(activate_this, dict(__file__=activate_this))

import sys
import logging
logging.basicConfig(stream=sys.stderr)

sys.path.insert(0, os.path.dirname(__file__))

from website import app as application