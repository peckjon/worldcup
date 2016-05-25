#!/usr/bin/python3
import subprocess
import logging
import os

try:
    subprocess.call(['git', 'pull', 'origin', 'master'], shell=True)
    subprocess.call(['/usr/bin/touch /tmp/deploy'], shell=True)
except Exception as e:
    logging.error(e)
