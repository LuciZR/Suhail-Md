
FROM node:lts-buster
RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
RUN git clone https://github.com/LuciZR/ZR-Md /root/smdd
RUN rm -rf /root/smdd/.git
WORKDIR /root/smdd
RUN npm install
EXPOSE 8000
CMD ["npm","start" ] 
































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































# heroku.yml file data to run Container
# build:
#   docker:
#       web: ZR_Md
# run:
#   web: npm start
 
