#!/bin/bash

deploy_hook_url=$(<.deploy_hook_dev)
curl -X GET $deploy_hook_url