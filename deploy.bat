@echo off

@echo off

REM Use the shared npm script (build + gh-pages publish)
call npm run deploy

echo Deployment complete!
pause
