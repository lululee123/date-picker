# Trend Micro Date Picker Homework

## 簡介

一個使用 Webpack 和 Babel 開發、打包的 React 專案 (無使用 cra 等模板工具)

## 資源介紹

根據 PDF 提供指示，使用以下技術、資源進行實作

##### JS
* [React](https://reactjs.org/)
* [React Redux](https://react-redux.js.org/)
* [Redux Saga](https://redux-saga.js.org/)
* [React Actions](https://redux-actions.js.org/)
* [Day.js](https://day.js.org/en/)  

##### CSS
* SCSS

##### Testing 
* [Jest](https://jestjs.io/)

## 成果 DEMO
使用以下指令，便可在 <http://localhost:8080> 看到本地伺服器～

```
npm install & npm run start
```

or

資料夾 `dist` 內的  `index.html` 可直接執行打包過後的程式

## script

- **npm run start**: 啟動開發 server
- **npm run test**: jest 測試
- **npm run lint**: lint 檢查
- **npm run build**: 打包程式碼

## 專案架構

以下是這個專案的內容說明和各資料夾定義
- src
	+ components ([Atom design](http://bradfrost.com/blog/post/atomic-web-design/))
		- atoms: 不可再分割的最小元件
                  - **Day**
                  - **Icon**

		- molecules: 分子 component，由原子組成的基本 component
                  - **CalendarDay**: 由元件 Day 組成，Calendar 元件的日期視窗
                  - **CalendarHeader**: Calendar 元件的表頭
                  - **CalendarMonth**: 由元件 Day 組成，Calendar 元件的月份視窗
                  - **CalendarWeek**: 由元件 Day 組成，Calendar 元件的週
                  - **CalendarYear**: 由元件 Day 組成，Calendar 元件的年份視窗
                  - **DatePickerInput**: DatePicker 的 input 元件

		- organisms: 組織 component，由原子、分子組成的多功能 component
                  - **Calendar**: 作業需求的 task 1 Calendar元件，支援 date 和 onSelect 兩個 props
                  - **DatePicker**: 作業需求的 **Bonus** task 2 DatePicker 元件 

	+ layouts: 放置版型的地方

        - Home: demo DatePicker

	- model: 存放 reducer 和 action 的地方，使用 Redux Actions 做管理

	+ sagas:

        - calendar: 當日曆元件觸發日期或是視窗更新 action，saga middleware 會整理好需要更新欄位的資料後 dispatch(put) 一個 action 去更新 Store

    - util:
        - calendarCore: 處理日曆日期呈現，使用 dayjs 輔助進行

- test: 存放測試的地方，使用 jest 測試 `action`, `reducer`, `saga`，除此之外另外搭   `react-test-renderer` 做 components snapshot test （放在各元件資料夾）
