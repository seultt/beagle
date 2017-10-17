import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../images/icon_arrow_down.svg';
import like from '../images/icon_like.svg';
import travel from '../images/icon_travel.svg';
import VirtualizedSelect from 'react-virtualized-select';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: '',
      chatList: [
        {
          chatId: 1,
          userName: 'peter',
          userImage: 'https://randomuser.me/api/portraits/men/89.jpg',
          like: 2300,
          chatImage: 'http://corporate.mystays.com/k/column/images/mv_009.jpg',
          title: '교토로 3박4일 가실분!',
          cityName: 'Kyoto',
          date: '10월 14일',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.',
          currentUsers: 3,
        },
        {
          chatId: 2,
          userName: 'seult',
          userImage: 'https://randomuser.me/api/portraits/women/64.jpg',
          like: 2300,
          chatImage: 'http://tourimage.interpark.com/product/tour/00161/A10/500/A1016460_7_480.jpg',
          title: '방콕으로 3박4일 가실분!',
          cityName: 'Bangkok',
          date: '10월 18일',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ut neque impedit? Pariatur natus delectus aspernatur mollitia soluta architecto tenetur. Cumque omnis doloribus delectus? Exercitationem sed quasi nihil magni odit.',
          currentUsers: 4,
        },
        {
          chatId: 3,
          userName: 'younghea',
          userImage: 'https://randomuser.me/api/portraits/men/79.jpg',
          like: 2300,
          chatImage: 'http://www.yeeum.com/wp-content/uploads/2015/03/%EB%B3%B4%EB%9D%BC%EC%B9%B4%EC%9D%B4-%EB%A9%94%EC%9D%B8%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg',
          title: '보라카이로 3박4일 가실분!',
          cityName: 'Boracay',
          date: '12월 11일',
          description: '군사재판을 관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다. 외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다. 군사재판을 관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다. 외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다.',
          currentUsers: 4,
        },
      ]
    }
  }
  render() {
    const options = [
      { label: "교토", value: 1 },
      { label: "제주도", value: 2 },
      { label: "파리", value: 3 },
      { label: "방콕", value: 4 },
      { label: "런던", value: 5 },
      { label: "도쿄", value: 6 },
      { label: "로마", value: 7 },
      { label: "오사카", value: 8 },
      { label: "후쿠오카", value: 9 },
      { label: "프라하", value: 10 },
      { label: "바르셀로나", value: 11 },
      { label: "서울", value: 12 },
      { label: "뉴욕", value: 13 },
      { label: "홍콩", value: 14 },
      { label: "로스엔젤레스", value: 15 },
      { label: "다낭", value: 16 },
      { label: "세부", value: 17 },
      { label: "하노이", value: 18 },
      { label: "삿포로", value: 19 },
      { label: "싱가포르", value: 20 },
    ];

    return (
    <main className="main">
      {/* main__banner */}
      <section className="main__banner">
        <article>
          <div>
            <h2>Beagle</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...</p>
          </div>
        </article>
      </section>
      {/* main__banner */}

      {/* main__filter */}
      <section className="main__filter">
        <article>
          <form>
            <div className="main__filter--chat">
              <div className="main__filter--where">
                <strong>도시</strong>
                {/* <a><p>어디로 가세요?</p><img src={arrow} alt="도시 선택" /></a> */}
                <VirtualizedSelect
                  placeholder="어디로 가세요?"
                  options={options}
                  onChange={(selectValue) => this.setState({ selectValue })}
                  value={this.state.selectValue}
                />
              </div>
              <div className="main__filter--date">
                <strong>일정</strong>
                {/* <a><p>여행 날짜</p><img src={arrow} alt="출발 여행날짜 선택" /></a> */}
                <SingleDatePicker
                  date={this.state.date}
                  onDateChange={date => this.setState({ date })}
                  focused={this.state.focused}
                  onFocusChange={({ focused }) => this.setState({ focused })}
                  displayFormat="YYYY-MM-DD"
                  placeholder="여행 날짜"
                />
              </div>
              <div className="main__filter--list">
                <strong>대화방 리스트</strong>
                <a><p>인기순</p><img src={arrow} alt="대화방 리스트 선택" /></a>
              </div>
              <div className="main__filter--search">
                <button type="button">검색</button>
              </div>
            </div>
          </form>
        </article>
      </section>
      {/* main__filter */}

      {/* main__chat-list */}
      <section className="main__chat-list">
        <div className="main__chat-list__container">
          {/* main__chat-list__card */}
          {this.state.chatList.map( (list) => {
            return(
              <article className="main__chat-list__card">
                <div className="main__chat-list__card--header">
                  <div className="main__chat-list__card--header--profile">
                    <img src={list.userImage} alt="대화방 개설자 프로필 사진" />
                    <strong>{list.userName}</strong>
                  </div>
                  <div className="main__chat-list__card--header--like">
                    <img src={like} alt="좋아요" />
                    <span>{list.like}</span>
                  </div>
                </div>
                <div className="main__chat-list__card--image">
                  <img src={list.chatImage} alt="대화방 사진" />
                </div>
                <div className="main__chat-list__card--content">
                  <div className="main__chat-list__card--content--text">
                    <strong>{list.cityName}</strong>
                    <span>{list.date}</span>
                    <p>{list.description}</p>
                  </div>
                  <Link to={`/chat/${list.chatId}`}>
                    <div className="main__chat-list__card--content--btn">
                      <a><img src={travel} alt="대화버튼" />함께 여행하기</a>
                    </div>
                  </Link>
                  <p>{list.currentUsers} / 5명</p>
                </div>
              </article>
            )
          })
          }
        </div>
        {/* main__chat-list__card */}
      </section>
      {/* main__chat-list */}
    </main>
    );
  }
}
