#!/bin/sh
export AWS_DEFAULT_PROFILE=schmusepage

aws s3 sync img/tiles s3://schmusechor.at/img/tiles
aws s3 cp index.html s3://schmusechor.at
aws s3 cp css/grayscale.min.css s3://schmusechor.at/css/grayscale.min.css
aws s3 cp js/grayscale.min.js s3://schmusechor.at/js/grayscale.min.js
