# Main entry point
SOURCE = src/main.js
 
# The target
TARGET = lib/main.js
 
# Compilation flags
FLAGS = -t reactify
 
# Enable sourcemap with "make sourcemap=1"
ifdef sourcemap
	FLAGS += --debug
endif
 
# Binaries
WATCHIFY = ./node_modules/.bin/watchify
BROWSERIFY = ./node_modules/.bin/browserify
NPM = npm
 
 
 
.PHONY: build clean watch
 
build: $(TARGET)
 
clean:
	rm -f $(TARGET)
 
watch:
	$(WATCHIFY) --verbose $(FLAGS) -o $(TARGET) -- $(SOURCE)
 
# Note: browserify --list is so slow, just rely on node_modules
$(TARGET): $(SOURCE) node_modules
	$(BROWSERIFY) $(FLAGS) -o $@ -- $<
 
node_modules:
	$(NPM) install