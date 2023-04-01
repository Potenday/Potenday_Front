import { BASE_URL } from "./constant";
// type KakaoShareResult = "success" | "fail";
type Props = {
    // route?: string | undefined;
    // title?: string | undefined;
    image?: string | undefined;
}
export const kakaoShare = () => {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: '함께 키우는 이야기숲',
          description: "나랑 비슷하다고 생각하는 나무를 심어주세요!", 
          imageUrl: "./images/kakao-share-icon.svg",
          link: {
            mobileWebUrl: BASE_URL,
            webUrl: BASE_URL
          }
        },
        buttons: [
          {
            title: "나무 심으러 가기",
            link: {
              mobileWebUrl: BASE_URL,
              webUrl: BASE_URL
            }
          }
        ]
      });
    }
  