import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function DiscordIcon() {
  const { isDarkTheme } = useColorMode();
  const fillColor = isDarkTheme ? 'white' : 'black';

  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 122 145"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M48.3784 60.4072C46.8192 60.2698 45.2562 60.6218 43.894 61.4173C42.5318 62.2128 41.434 63.4146 40.7443 64.8653C40.0547 66.316 39.8053 67.948 40.0289 69.5475C40.2525 71.1471 40.9387 72.6396 41.9975 73.8296C43.0563 75.0196 44.4384 75.8516 45.9629 76.2167C47.4873 76.5818 49.0829 76.4629 50.5408 75.8756C51.9986 75.2883 53.2508 74.26 54.1333 72.9253C55.0157 71.5906 55.4873 70.0118 55.4862 68.3957C55.5694 66.363 54.8673 64.3793 53.5343 62.8812C52.2013 61.3831 50.3467 60.4932 48.3784 60.4072V60.4072ZM73.8263 60.4072C72.2671 60.2698 70.704 60.6218 69.3418 61.4173C67.9796 62.2128 66.8818 63.4146 66.1922 64.8653C65.5025 66.316 65.2531 67.948 65.4767 69.5475C65.7003 71.1471 66.3865 72.6396 67.4453 73.8296C68.5041 75.0196 69.8862 75.8516 71.4106 76.2167C72.9351 76.5818 74.5307 76.4629 75.9886 75.8756C77.4465 75.2883 78.6986 74.26 79.581 72.9253C80.4635 71.5906 80.935 70.0118 80.934 68.3957C81.0172 66.363 80.315 64.3793 78.9821 62.8812C77.6491 61.3831 75.7945 60.4932 73.8263 60.4072V60.4072Z" />
      <path d="M107.711 0H14.2756C10.4788 0.0146003 6.84285 1.58488 4.16622 4.36599C1.4896 7.1471 -0.00882938 10.9116 3.91433e-05 14.8329V112.177C-0.00882323 116.101 1.49142 119.867 4.17093 122.649C6.85044 125.43 10.4899 126.999 14.289 127.01H93.3487L89.6513 113.693L98.5744 122.261L107.01 130.325L122 144.007V14.8329C122.009 10.9093 120.509 7.14264 117.829 4.36114C115.15 1.57963 111.51 0.0109542 107.711 0V0ZM80.8017 94.0287C80.8017 94.0287 78.2923 90.934 76.2033 88.1976C81.2564 86.9672 85.7262 83.9329 88.8238 79.6301C86.3179 81.3529 83.6312 82.7773 80.815 83.8759C77.5711 85.3054 74.1783 86.3439 70.704 86.9707C64.7344 88.1065 58.6122 88.0832 52.6509 86.9018C49.1497 86.195 45.7183 85.1591 42.3997 83.807C40.65 83.113 38.9485 82.2954 37.3075 81.3601C37.1006 81.2154 36.887 81.1465 36.6801 81.0017C36.5749 80.9487 36.4799 80.8763 36.3998 80.7881C35.1451 80.0988 34.451 79.5612 34.451 79.5612C37.4341 83.7761 41.7495 86.7822 46.651 88.0597C44.5621 90.8168 41.9793 94.0356 41.9793 94.0356C37.8334 94.1553 33.7227 93.2194 30.0098 91.3106C26.297 89.4018 23.096 86.5786 20.6893 83.0902C20.907 68.496 24.33 54.1434 30.7002 41.1143C36.3118 36.553 43.1563 33.9037 50.2883 33.5324L50.9557 34.394C44.2741 36.1275 38.0428 39.3558 32.7025 43.8507C32.7025 43.8507 34.2374 42.9891 36.8136 41.7829C41.8244 39.4208 47.1647 37.8902 52.6376 37.2476C53.0287 37.1637 53.4262 37.1153 53.8255 37.1028C58.4971 36.4739 63.2248 36.4253 67.9076 36.9581C75.2701 37.8209 82.3982 40.1623 88.8905 43.8507C83.7984 39.5679 77.8839 36.4504 71.5382 34.7042L72.5126 33.5531C79.6447 33.9244 86.4892 36.5737 92.1007 41.135C98.471 54.164 101.894 68.5167 102.112 83.1108C99.6874 86.5836 96.4795 89.393 92.766 91.2956C89.0525 93.1981 84.9457 94.1363 80.8017 94.0287V94.0287Z" />
    </svg>
  );
}
