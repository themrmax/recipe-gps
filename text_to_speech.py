import json
import sys
import subprocess
import os


with open(sys.argv[1]) as f:
    recipe = json.load(f)

filename = sys.argv[1].split('/')[-1]
out_dir = 'public/data/audio/' + filename
os.mkdir(out_dir)
os.chdir(out_dir)
for i, step in enumerate(recipe['steps']):
    subprocess.call(["say", '"{}"'.format(step['steptext']), "-o",
                     "{}.aiff".format(i)])
    subprocess.call(["lame","-S", "-m", "m", "{}.aiff".format(i),"{}.mp3".format(i)])
    os.remove("{}.aiff".format(i))
