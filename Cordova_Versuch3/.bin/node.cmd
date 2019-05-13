@echo off
SET PATH=%PATH%;%~dp0
    SET HTTP_PROXY=http://1:1@127.0.0.1:8888
    SET HTTPS_PROXY=http://1:1@127.0.0.1:8888
"%~dp0..\..\packages\Node.js.0.10.28\node.exe" %*