FROM openjdk:8

ENV SDK_URL="https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip" \
    ANDROID_HOME="/usr/local/android-sdk" \
    ANDROID_VERSION=26 \
    ANDROID_BUILD_TOOLS_VERSION=26.0.2

RUN mkdir "$ANDROID_HOME" .android \
    && cd "$ANDROID_HOME" \
    && curl -o sdk.zip $SDK_URL \
    && unzip sdk.zip \
    && rm sdk.zip \
    && yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses

RUN $ANDROID_HOME/tools/bin/sdkmanager --update
RUN $ANDROID_HOME/tools/bin/sdkmanager "build-tools;${ANDROID_BUILD_TOOLS_VERSION}" \
    "platforms;android-${ANDROID_VERSION}" \
    "platform-tools"

WORKDIR /mobile

RUN apt-get update && apt-get install build-essential -y && apt-get install file -y && apt-get install apt-utils -y && apt-get install npm -y && npm install -g npx && npm install yarn -g

COPY package*.json /mobile/
COPY yarn.lock /mobile/

RUN yarn install

COPY . /mobile/

RUN cd android && ./gradlew assembleRelease
RUN ls android
RUN ls android/app
COPY android/app/build/outputs/apk/release/app-release.apk .
