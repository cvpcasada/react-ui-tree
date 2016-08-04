all:
	babel lib --out-dir dist
	less lib/react-ui-tree.less > dist/react-ui-tree.css
	webpack -p
clean:
	rm dist/*
	rm example/bundle*
