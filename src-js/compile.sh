
## Allow the ability to compile from .js to .jsx files all of them
find . -type f -name "*.js" -exec bash -c 'cp "$0" "${0%.js}.jsx"' {} \;


mv *.jsx ../src/
