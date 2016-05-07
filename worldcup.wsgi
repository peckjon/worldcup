activate_this = '/home/phi/Desktop/node/worldcup/venv/bin/activate_this.py'
execfile(activate_this, dict(__file__=activate_this))

import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/home/phi/Desktop/node/worldcup/")

from website import app as application
