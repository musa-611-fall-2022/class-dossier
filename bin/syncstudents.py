"""
Usage: python3 bin/syncstudents.py

This script will expect there to be a file named opt/students.csv containing
a `name` column with student names. It will create the appropriate data files
for the students. It will _not_ remove any files or replace existing files.
"""

import csv
import shutil
from pathlib import Path

ROOT = Path(__file__).parent.parent

html_template_path = ROOT / 'opt' / 'person_template.html'
json_template_path = ROOT / 'opt' / 'person_template.json'
students_csv_path = ROOT / 'opt' / 'students.csv'
students_data_dir = ROOT / 'site' / 'data'

def sync_student(input_name):
    last, first = input_name.split(',')
    name = f'{first.strip()} {last.strip()}'

    name_slug = name.lower().replace(' ', '')
    html_path = students_data_dir / f'{name_slug}.html'
    json_path = students_data_dir / f'{name_slug}.json'

    if not html_path.exists():
        shutil.copy(html_template_path, html_path)
    
    if not json_path.exists():
        shutil.copy(json_template_path, json_path)
    
    return name_slug

print('''const studentNames = [''')
with students_csv_path.open() as infile:
    reader = csv.DictReader(infile)
    for row in reader:
        name = sync_student(row['Name'])
        print(f'''  '{name}',''')
print('''];''')