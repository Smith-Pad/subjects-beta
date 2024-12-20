#!/bin/bash

# Remove the old index.css file
rm -f src/index.css

# Loop through all .scss files in the UI directory and append their contents to index.css
for file in UI/*.scss
do
  sassc "$file" >> src/index.css
done
