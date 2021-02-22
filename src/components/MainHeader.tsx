import "./MainHeader.css";
function MainHeader() {
  return (
    <>
      <div className="main-header">
        <div className="main-header-title">
          <div>어디로떠나세요?</div>
          <button>전체도시</button>
        </div>
        <div className="main-header-cities">
          <ul className="main-header-cities-title">
            <li>제주도</li>
            <button>둘러보기</button>
          </ul>
          <button>next</button>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
