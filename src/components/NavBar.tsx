import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar-left">
          <div>myrealtrip(image)</div>
          <input type="search " placeholder="도시나 상품을 검색해보세요" />
        </div>
        <div className="nav-bar-right">
          <button>파트너 등록하기</button>
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
