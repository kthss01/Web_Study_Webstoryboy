:: 파일 저장은 텍스트에서는 utf-8로 하자
title 웹서버에서 만든 파일 git local 리포지토리로 복사 xcopy

:: utf-8로 변경
chcp 65001

:: xcopy 하위 디렉토리까지 포함, 모든 파일 복사
:: /e : 비어 있는 하위 디렉토리까지 복사
:: /h : 히든 파일과 시스템 속성의 파일까지 복사
:: /k : 파일 속성 복사. (이 옵션이 없으면, 읽기전용 등의 속성이 없어져 버림)
:: /y : 이미 있는 대상 파일을 덮어쓸지를 확인하기 위해 묻는 것을 금함 이거 안쓰면 기본이 -y
:: /-y : 이미 있는 대상 파일을 덮어쓸지를 확인하기 위해 물어봄
xcopy D:\web\html\responsive\*.* D:\git\Web_Study_Webstoryboy\WebSite\responsive /e /h /k /y

@echo off
REM 바로 실행 안끝나게 멈춤
pause
