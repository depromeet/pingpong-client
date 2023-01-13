# ping-pong client
- 재능 공유 플랫폼 앱 "핑퐁"의 client-side Repository입니다.
<div style="display:flex;">
<img src="https://user-images.githubusercontent.com/46391618/212315998-7cc12157-c17b-40ae-8402-700d40283317.jpg" width="250" height="auto" />
<img src="https://user-images.githubusercontent.com/46391618/212316034-b85aeffc-abcb-48f8-adaa-2a8dbaa01bca.jpg" width="250" height="auto" />
<img src="https://user-images.githubusercontent.com/46391618/212316039-e0128e40-2c7d-429b-8b62-3ed1c4b3b3e0.jpg" width="250" height="auto" />
</div>
<br />


### 재능 매칭
- 내가 가진 재능을 가지고 싶은 상대방과 내가 얻고 싶어 하는 재능이 일치하면 매칭된 상대방만을 볼 수 있습니다.

### 재능 나눔
- 내 재능을 나눌 수 있습니다. 내 재능을 얻고 싶은 다른 유저가 내 글을 보고 달려 있는 오픈채팅 링크로 연락할 수 있습니다.

### 재능 교환
- 내가 교환하고 싶은 재능(가진 재능, 받고 싶은 재능)을 등록하여 다른 유저의 관심을 끌 수 있습니다.

### 재능 탐색
- 관심 있는 재능의 카테고리를 통해 여러 유저의 재능을 탐색할 수 있습니다.

<br />

## Dev, Prod Client

- [Dev Link](https://dev-fe.ping-pong.world/)
<br />
- [Prod Link](https://fe.ping-pong.world/)

## Stack

`Typescript` `Next.js` `Recoil` `Tanstack query`
`firebase` `Storybook` 

```
├── public
├── src
│   ├── components
│   │   ├── common
│   │   └── post # directory sorted by routes
│   ├── constants
│   ├── hooks
│   │   ├── queries
│   │   └── others 
│   ├── libs
│   ├── pages
│   ├── store
│   │   └── components
│   ├── styles
│   └── typings
├── eslint # custom eslint plugin
└── README.md

```

<br />

## Installation 설치

```
yarn install
```

```
yarn dev
```


## storybook 스토리북 실행

storybook을 실행하고 싶으시면 아래 명령어를 입력해주세요.

```
yarn storybook
```


<br />

## Commit Convention 커밋 메세지 규칙

### Gitmoji

깃모지를 사용하고 있습니다.  
컨벤션 확인 후, 아래 명령어로 commit 해주세요.

```
`fix` - 버그 수정  🐛

`feat` - 기능 추가 ✨

`refactor` - 리팩토링 ♻️  

`rename` - 파일명 변경, 함수명 변경 ✏️

`design` - style만 변경, 퍼블리싱 🎨

`chore` - docs, dependency 변경 있을 때 📦

`test` - 테스트코드 작성 🧪
```


```
gitmoji -c
```
