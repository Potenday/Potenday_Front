import Button from "../components/Button";
import styled from "styled-components";
import useCopyClipBoard from "../hooks/useCopyClipBoard";
import { BASE_URL } from "../api/constant";
import { useEffect, useState } from "react";
import { kakaoShare } from "../api/kakaoShare";
import { useRouter } from "../hooks/useRouter";

function Main() {
  const {routeTo} = useRouter()
  const [isCopy, onCopy] = useCopyClipBoard();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleCopy = (url: string) => {
    onCopy(url);
  };

  useEffect(() => {
    const snackbarOnOff = setTimeout(() => {
      setSnackbarOpen(false);
    }, 2000);
    return () => {
      clearTimeout(snackbarOnOff);
    };
  }, [snackbarOpen]);

  return (
    <>
      <UpperSection>
        <H1>00님의 숲</H1>
        <Button onClick={() => {routeTo('./select-tree')}}>나무심기</Button>
        {/* 다른 사람이면 나무심기 버튼 */}
      </UpperSection>
      <Section>
        <BtnSection>
          <button onClick={() => kakaoShare()}>
            <img
              src={"./images/kakao-share-icon.svg"}
              alt={"카카오톡"}
              width={30}
            />
          </button>
          <button
            onClick={() => {
              handleCopy(`${BASE_URL}`);
              setSnackbarOpen(true);
            }}
          >
            <img
              src={"./images/copy-btn-icon.svg"}
              alt={"복사하기 버튼"}
              width={30}
            />
          </button>
        </BtnSection>
        {snackbarOpen && <Snackbar>복사되었습니다.</Snackbar>}
      </Section>
    </>
  );
}

export default Main;

const Section = styled.section`
  max-width: 428px;
  background-color: #09c206;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px;
  position: relative;
`;

const H1 = styled.h1`
  font-weight: 800;
  font-size: 24px;
  line-height: 27px;
  color: #fff;
`;

const UpperSection = styled.section`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  max-width: 428px;
  margin: 0 auto;
  background-image: url("./images/sky.png");
  background-size: cover;
  background-position-y: bottom;
  padding: 30px;
`;

const BtnSection = styled.section`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const Snackbar = styled.div`
  padding: 20px;
  background-color: aliceblue;
  text-align: center;
  border-radius: 10px;
  position: fixed;
  bottom: 80px;
  transform: translateX(80%);
  animation: slideIn 1s ease-in-out forwards;
  @keyframes slideIn {
    0% {
      opacity: 100%;
    }
    100% {
      opacity: 0%;
    }
  }
`;
