#!/usr/bin/env bash

sed -e '/<!-- LIVERELOAD_MARKER -->/r scripts/livereload_snippet' -e '/<!-- LIVERELOAD_MARKER -->/d' src/index.html > build/index.html
