
# WHAPLY 와플리

<div align="center">
<img width="329" alt="image" src="https://github.com/wooseok123/sinchonthon_readme/assets/59460718/bfa67065-c11b-4961-a1b5-3b27cb7e873d">
</div>

# 2023th Sinchonthon
> **신촌톤 와플리팀** <br/>

## 배포 주소

> 웹페이지 주소 어쩌구 저쩌구 <br>

## 팀 소개

|      김지형 <br/> **(기획/디자인)**   이화여대

|          박소연 <br/> **(개발/프론트엔드)**   

|       변지혜 <br/> **(개발/프론트엔드)**        

|       원윤서  <br/> **(개발/프론트엔드)**       

|          성우제 <br/> **(개발/백엔드)**       

|          이지웅 <br/> **(개발/백엔드)**       

|          임정연 <br/> **(개발/백엔드)**          





## 프로젝트 소개


**와플리**는 친구와 자연스럽게 친해지기 어려워하는 대학생들을 위해 만든 소셜네트워킹 서비스입니다.
별로 친하지 않은 동기와 대화주제가 끊겨 곤란했던 기억이 있지 않으신가요? 
동기가 좋아하는 취향을 몰라 무슨 말을 해야할 지 감이 안잡혔던 경험이 있으시지 않으신가요?
친구의 플레이리스트를 통해 취향을 공유해봐요~ 
공감대 형성이 훨씬 쉬워질거에요.

 <br> 와플리, 듣는 음악이 아닌 공유하는 음악
**와플리와 함께 플레이리스트를 공유해봐요.**
다른 사람의 취향을 엿보는 건 물론, 내 취향을 남들에게 공유하는 것도 좋은 경험이 될거에요.<br/>



 <br>**와플리와 취향이 맞는 친구를 찾아 소통해봐요.**
나와 비슷한 취향의 대학 친구와 대화를 이어나가고 싶지 않나요? 댓글을 통해 같은 취향의 친구와 대화해봐요.<br/>





 <br> 와플리, 비밀번호 설정 없이 대학 이메일만으로 이용할 수 있어요

1. 자신의 대학 이메일로 본인인증을 완료해주세요.
2. 인증 후 대학 이메일만으로도 서비스를 이용할 수 있어요.
3. 끝!!.<br/>

## 시작 가이드
### 필수사항
해당 어플리케이션을 동작하기 위해선 다음 버전 이상이 필요해요.

- [Node.js 14.19.3](https://nodejs.org/ca/blog/release/v14.19.3/)
- [Npm 9.2.0](https://www.npmjs.com/package/npm/v/9.2.0)
- [Python 3.11.4](https://www.python.org/downloads/release/python-3114/)

### Installation
``` bash
$ git clone git@github.com:wooseok123/sinchonthon_readme.git
$ cd 프로젝트명
```






(모노레포인 경우)
#### Backend
```
$ cd server
$ mkdir .venv
$ pipenv install
$ source .venv/Scripts/activate
$ python3 manage.py migrate --run-syncdb
$ python3 manage.py makemigrations
$ python3 manage.py migrate
$ python3 manage.py runserver
```

#### Frontend
```
$ cd front
$ npm install 
$ npm run dev
```

---

## Stacks 🐈

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        

### Development
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white)

### Communication
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)

---
## 화면 구성 📺
| **메인 페이지**  |  **서비스 페이지 1**   |
| :-------------------------------------------: | :------------: |
|  <img width="329" src="https://github.com/wooseok123/sinchonthon_readme/assets/59460718/a40b9b11-3833-4b81-8dea-9e34b10f81a7"/> |  <img width="329" src="https://github.com/wooseok123/sinchonthon_readme/assets/59460718/a40b9b11-3833-4b81-8dea-9e34b10f81a7"/>|  
| **서비스 페이지 2**   |  **서비스 페이지 3**   |  
| <img width="329" src="https://github.com/wooseok123/sinchonthon_readme/assets/59460718/a40b9b11-3833-4b81-8dea-9e34b10f81a7"/>   |  <img width="329" src="https://github.com/wooseok123/sinchonthon_readme/assets/59460718/a40b9b11-3833-4b81-8dea-9e34b10f81a7"/>     |

---
## 주요 기능 📦

### ⭐️ 내 플레이리스트 올리기
- 내 취향대로 플레이리스트 구성하고, 제목짓고, 대표사진 설정하기
- 내 플리에 글 남긴 유저들과 소통하기

### ⭐️ 다른 사람의 플레이리스트 피드 보기
- 내가 팔로우한 사람만 걸러서 볼 수 있어요
- 장르 해시태그별로 플레이리스트를 필터링할 수 있어요
- 나와 취향이 맞는 유저에게 댓글로 말을 걸어봐요


---
## 아키텍쳐

### 디렉토리 구조
```bash
├── README.md
├── package-lock.json
├── package.json
├── server : 백엔드
│   ├── README.md
│   ├── requirements.txt
│   ├── manage.py
│   ├── api1 : api1에 대한 정보
│   │   ├── urls.py
│   │   ├── views.py
│   │   ├── etc..
│   ├── api2 : api2에 대한 정보
│   │   ├── urls.py
│   │   ├── views.py
│   │   ├── etc..
│   ├── api3 : api3에 대한 정보
│   │   ├── urls.py
│   │   ├── views.py
│   │   ├── etc..
│   ├── extensions
│   │   └── users-permissions : 권한 정보
└── front : 프론트엔드
    ├── README.md
    ├── public
    │   ├── favicon.ico
    │   └── logo_about.png
    ├── components
    │   ├── a.js : 필요시 설명~
    │   ├── b.js
    │   ├── c.js
    │   ├── d.js
    │   ├── e.js
    │   ├── f.js
    │   ├── g.js
    │   ├── h.js
    │   └── i.js
    ├── package-lock.json
    ├── package.json
    ├── pages
    │   ├── page1.js
    │   ├── page2.js
    │   ├── page3.js
    │   ├── page4.js
    │   ├── newcourse
    ├── app.js
    ├── index.js
    ├── router.js
    └── styles
        └── GlobalStyle.js

```
