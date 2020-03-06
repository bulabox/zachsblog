#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST https://api.stackbit.com/project/5e62b2a56d9129001447d9d6/webhook/build/pull > /dev/null
npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5e62b2a56d9129001447d9d6
curl -s -X POST https://api.stackbit.com/project/5e62b2a56d9129001447d9d6/webhook/build/ssgbuild > /dev/null
gatsby build
curl -s -X POST https://api.stackbit.com/project/5e62b2a56d9129001447d9d6/webhook/build/publish > /dev/null
