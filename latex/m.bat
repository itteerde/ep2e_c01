@echo off
Setlocal

set start=%time%

:: Define foreground and background ANSI colors:
Set _fBlack=[30m
Set _bBlack=[40m
Set _fRed=[31m
Set _bRed=[41m
Set _fGreen=[32m
Set _bGreen=[42m
Set _fYellow=[33m
Set _bYellow=[43m
Set _fBlue=[34m
Set _bBlue=[44m
Set _fMag=[35m
Set _bMag=[45m
Set _fCyan=[36m
Set _bCyan=[46m
Set _fLGray=[37m
Set _bLGray=[47m
Set _fDGray=[90m
Set _bDGray=[100m
Set _fBRed=[91m
Set _bBRed=[101m
Set _fBGreen=[92m
Set _bBGreen=[102m
Set _fBYellow=[93m
Set _bBYellow=[103m
Set _fBBlue=[94m
Set _bBBlue=[104m
Set _fBMag=[95m
Set _bBMag=[105m
Set _fBCyan=[96m
Set _bBCyan=[106m
Set _fBWhite=[97m
Set _bBWhite=[107m
Set _RESET=[0m

echo.
echo %_fDGray% ========================================================================
echo %_fDGray%   1st pass
echo %_fDGray% ========================================================================
Echo %_RESET%
xelatex --interaction=batchmode --halt-on-error epCamp01.tex 

SET /A status = 0

if %ERRORLEVEL% NEQ 0 SET /A status = 1
if NOT %status% == 0 echo.
if NOT %status% == 0 echo %_fRed% failure, check log-file for errors.
if NOT %status% == 0 echo %_RESET%
if NOT %status% == 0 echo.
if NOT %status% == 0 EXIT /b 1

echo.
echo %_fDGray% ========================================================================
echo %_fDGray%   Glossaries
echo %_fDGray% ========================================================================
Echo %_RESET%
makeglossaries epCamp01
if %ERRORLEVEL% NEQ 0 SET /A status = 1
if NOT %status% == 0 echo.
if NOT %status% == 0 echo %_fRed% failure, check log-file for errors.
if NOT %status% == 0 echo %_RESET%
if NOT %status% == 0 echo.
if NOT %status% == 0 EXIT /b 1

echo.
echo %_fDGray% ========================================================================
echo %_fDGray%   2nd pass
echo %_fDGray% ========================================================================
Echo %_RESET%
xelatex --interaction=batchmode --halt-on-error epCamp01.tex 
if %ERRORLEVEL% NEQ 0 SET /A status = 1
if NOT %status% == 0 echo.
if NOT %status% == 0 echo %_fRed% failure, check log-file for errors.
if NOT %status% == 0 echo %_RESET%
if NOT %status% == 0 echo.
if NOT %status% == 0 EXIT /b 1

set end=%time%

set options="tokens=1-4 delims=:.,"
for /f %options% %%a in ("%start%") do set start_h=%%a&set /a start_m=100%%b %% 100&set /a start_s=100%%c %% 100&set /a start_ms=100%%d %% 100
for /f %options% %%a in ("%end%") do set end_h=%%a&set /a end_m=100%%b %% 100&set /a end_s=100%%c %% 100&set /a end_ms=100%%d %% 100

set /a hours=%end_h%-%start_h%
set /a mins=%end_m%-%start_m%
set /a secs=%end_s%-%start_s%
set /a ms=%end_ms%-%start_ms%
if %ms% lss 0 set /a secs = %secs% - 1 & set /a ms = 100%ms%
if %secs% lss 0 set /a mins = %mins% - 1 & set /a secs = 60%secs%
if %mins% lss 0 set /a hours = %hours% - 1 & set /a mins = 60%mins%
if %hours% lss 0 set /a hours = 24%hours%
if 1%ms% lss 100 set ms=0%ms%
set /a totalsecs = %hours%*3600 + %mins%*60 + %secs%

echo.
echo %_fDGray%   %DATE% %TIME%, took %hours%:%mins%:%secs%.%ms% (%totalsecs%.%ms%s total)
echo.
echo %_fDGray% ========================================================================
echo %_fGreen%   typesetting successfully completed.
echo %_fDGray% ========================================================================
Echo %_RESET%
echo.