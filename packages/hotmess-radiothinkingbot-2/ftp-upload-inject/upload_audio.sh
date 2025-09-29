#!/bin/bash
# Replace these with your actual FTP credentials
HOST='ftp.radioking.com'
USER='your_username'
PASS='your_password'
FILE='track_to_upload.mp3'
TARGETDIR='/uploads/incoming_audio'

ftp -inv $HOST <<EOF
user $USER $PASS
cd $TARGETDIR
put $FILE
bye
EOF