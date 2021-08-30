#!/bin/bash

deploy_hook_url=$(<.deploy_hook)
curl -X GET $deploy_hook_url