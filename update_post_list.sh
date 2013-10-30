#! /bin/sh

(cd posts && ls -1 | grep -v "^post_list$" > post_list)
