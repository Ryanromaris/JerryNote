import photo from "../../images/self_photo.jpeg";

const Page2 = () => {
  return (
    <>
      <img src={photo} width="300" />

      <div>아름다운 모든 것을 좋아합니다.</div>
      <div>
        답이 정해지지 않은 문제에 대해 고민하고, 이야기하는 것을 좋아합니다.
      </div>

      <div>
        우리 서비스에 알맞은 기술 스택을 사용하는 것을 중요하게 생각하며, 구현
        이후 더 나은 UI / UX를 위한 다양한 리팩토링을 좋아합니다. 자유로운 코드
        리뷰가 이루어지고, 즐겁게 소통하며 함께 성장하는 팀 분위기를 좋아합니다.
      </div>
    </>
  );
};
export default Page2;
