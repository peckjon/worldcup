#!/usr/bin/python3
import subprocess
import logging

try:
    subprocess.call('cd ..', shell=True)
    subprocess.call(['git', 'pull', 'origin', 'master'])
except Exception as e:
    logging.error(e)
