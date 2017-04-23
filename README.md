Website for the Vienna Schmusechor
based on:  [Grayscale](http://startbootstrap.com/template-overviews/grayscale/) by [Start Bootstrap](http://startbootstrap.com/).

Getting started
===============
- `git clone git@github.com:schmusechor/schmusechor.github.io.git`
- `cd schmusechor.github.io`
- `npm install`
- `npm install --global gulp`
- `gulp dev`

Deploy
======
- `pip install awscli`
- create a awscli profile called `schmusepage` with the required credentials at `~/.aws/credentials`:
```
[schmusepage]
aws_access_key_id = <aws_access_key_id>
aws_secret_access_key = <aws_secret_access_key>
```

- `git co master` to deploy from master
- `./deploy.sh`

