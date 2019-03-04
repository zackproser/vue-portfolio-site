#!/usr/bin/env bash
set -e

################
# Deply script
################

VERSION_FILE="VERSION"
CURRENT_VERSION=$(cat $VERSION_FILE)
NEXT_VERSION="$(($CURRENT_VERSION + 1))"
RELEASE_SLUG="Release #$NEXT_VERSION"

echo "Commencing portfolio production deploy..."

npm run build && \

echo "Updating project version..."

echo "$NEXT_VERSION" > $VERSION_FILE && \

git add --all && \

git commit -m "$RELEASE_SLUG" && \

git push github github && \

echo "$RELEASE_SLUG successfully deployed! "

# TODO: purge cloudflare cache