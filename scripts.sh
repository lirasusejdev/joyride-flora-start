#!/bin/bash

export APP_NAME={{parameters.component}}

if [ -z "$ENV" ];
  then ENV=production;
fi

case "$1" in
  dev)
    react-scripts start
  ;;
  test)
    export DEBUG=gb:*
    export NODE_ENV=test
    CI=true react-scripts test --no-cache --maxWorkers=50% --env=jsdom --collectCoverage --detectOpenHandles
  ;;
  test:dev)
    export DEBUG=gb:*
    export NODE_ENV=test
    react-scripts test --maxWorkers=50% --forceExit --env=jsdom --collectCoverage --detectOpenHandles
  ;;
  build)
    echo 'Building...'
    react-scripts build
  ;;
  sonar)
    PACKAGE_VERSION=$(cat package.json \
      | grep version \
      | head -1 \
      | awk -F: '{ print $2 }' \
      | sed 's/[",]//g' \
      | tr -d '[[:space:]]')
    echo "Extracted version: ${PACKAGE_VERSION}"

    REPLACE='^sonar.projectVersion=.*$'
    WITH="sonar.projectVersion=${PACKAGE_VERSION}"
    sed -i.bak "s#${REPLACE}#${WITH}#g" sonar-project.properties

    git add sonar-project.properties
    git commit -am "add: bump sonar"
  ;;
  *)
    echo "Usage: {dev|test|test:dev|build|sonar}"
    exit 1
  ;;
esac
