export type Project = {
  id: number;
  iconSvg: React.ReactNode;
  name: string;
  description: string;
  longDescription: string;
  technologies: Array<string>;
  url: string;
  codeUrl?: string;
};

export const projects: Array<Project> = [
  {
    id: 1,
    name: "Untwtr" as const,
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="33" viewBox="0 0 42 33" fill="none">
        <path
          d="M41.9494 28.267C40.4519 27.686 38.8557 27.3213 37.1903 27.2017C38.9479 28.1447 40.3033 29.6964 41.0038 31.5672C39.3528 30.6883 37.5637 30.0996 35.7143 29.8268C34.5454 31.2044 32.9553 32.1565 31.191 32.5353C29.4267 32.9141 27.5869 32.6984 25.9571 31.9218C24.3273 31.145 22.9988 29.8508 22.1779 28.24C21.357 26.6292 21.0895 24.7918 21.4172 23.0133C18.1723 23.3326 15.0309 24.3323 12.1967 25.9475C9.36258 27.5627 6.89907 29.7573 4.96605 32.3886C4.20552 31.2077 3.73425 29.819 3.66248 28.3194C3.59708 26.9693 3.86514 25.6241 4.44285 24.4029C5.02056 23.1818 5.89008 22.1227 6.97424 21.3193C5.67727 21.4229 4.4238 21.8355 3.31818 22.5227L3.31313 22.4171C3.22238 20.5236 3.78797 18.6571 4.91393 17.1344C6.0399 15.6116 7.65689 14.5263 9.49051 14.0627C8.26988 13.7935 7.00421 13.8058 5.78914 14.0986C6.23357 12.4444 7.18298 10.971 8.50448 9.8847C9.82597 8.79841 11.4534 8.15358 13.1588 8.04052C10.152 5.89907 6.51418 4.8335 2.83055 5.01525C2.17797 5.0463 1.52779 5.11571 0.883344 5.22311C4.50737 2.63416 8.79905 1.14683 13.2449 0.939033C28.2939 0.218811 37.1186 12.3188 37.6372 23.1544C37.654 23.5064 37.6624 23.8624 37.6634 24.2152C39.3191 25.2986 40.7691 26.6689 41.9456 28.2619L41.9494 28.267Z"
          fill="white"
        />
      </svg>
    ),
    description: "Twitter AI satirical clone",
    longDescription:
      "Untwtr is a parody of Twitter populated by satirical AI personas. Visitors enter a news headline and AI personas respond just like real Twitter would— with complaints, off-color jokes, thoughts & prayers, and angry tirades.",
    url: "https://untwtr.vercel.app/",
    technologies: ["Next.js", "TypeScript", "React", "SCSS", "Zustand"],
    codeUrl: "https://github.com/Yoha485/untwtr",
  },
  {
    id: 2,
    name: "Pickaxe" as const,
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
        <path
          d="M16.3869 22.7066C16.0255 21.4158 15.2615 20.4358 14.3319 19.5241C13.2051 18.4187 12.1657 17.2237 11.1004 16.0565C10.9038 15.8411 10.7588 15.7835 10.5648 16.0353C10.3864 16.2669 10.2294 16.2219 10.0447 16.0143C9.55348 15.4624 9.04469 14.926 8.54136 14.3848C8.46573 14.3035 8.40765 14.1973 8.24589 14.1702C7.69543 14.7251 7.25088 15.378 6.89135 16.0883C6.37028 17.1177 6.15385 18.2246 6.0527 19.3669C5.9723 20.2749 5.99884 21.184 5.96028 22.092C5.94671 22.4114 5.83961 22.5468 5.50957 22.5141C4.66436 22.4302 3.80337 22.5454 2.97079 22.2902C1.68039 21.8946 0.731827 20.4795 0.764036 19.2547C0.865104 15.4112 2.11479 11.9843 4.30409 8.86606C4.41367 8.70998 4.47925 8.58021 4.41905 8.37212C4.16998 7.5111 4.35474 6.711 4.91986 6.04014C5.49852 5.35319 6.17964 4.75408 6.90102 4.22204C7.5978 3.70815 8.3995 3.59847 9.22962 3.90861C9.40713 3.97493 9.54776 3.94764 9.70792 3.85039C11.2419 2.919 12.8762 2.21742 14.6032 1.73011C16.6493 1.15279 18.7359 0.937362 20.8436 1.18931C21.741 1.29658 22.3955 1.91161 22.8663 2.67987C23.2005 3.22542 23.3552 3.8229 23.3188 4.46857C23.2886 5.00206 23.2771 5.53658 23.2536 6.07048C23.2349 6.49586 23.1994 6.52929 22.7632 6.51483C21.8322 6.48396 20.9015 6.43714 19.9703 6.41775C18.1274 6.37939 16.4443 6.86714 14.9594 7.98219C14.8789 8.04267 14.7999 8.10527 14.7295 8.15972C14.7183 8.34292 14.8483 8.42025 14.9358 8.5164C15.418 9.04615 15.898 9.57824 16.3949 10.094C16.5935 10.3 16.6467 10.46 16.3794 10.6361C16.1295 10.8007 16.185 10.9546 16.3673 11.1531C17.7052 12.6099 19.086 14.0281 20.3636 15.5396C20.8486 16.1135 21.4764 16.4691 22.1453 16.7648C22.6212 16.9751 23.0195 17.2672 23.3752 17.6534C26.4561 20.999 29.5491 24.3335 32.6382 27.6715C32.8931 27.9469 33.1398 28.2273 33.3409 28.5479C34.0249 29.6387 33.8368 31.4165 32.8588 32.3229C32.2252 32.9101 31.6071 33.5141 30.9742 34.102C29.7913 35.2008 27.6378 35.1033 26.4422 33.7742C23.5832 30.596 20.6544 27.4807 17.7538 24.3399C17.4144 23.9724 17.0764 23.6035 16.7356 23.2373C16.5948 23.086 16.4747 22.9225 16.3869 22.7066ZM19.9384 4.27109C20.2452 4.28278 20.5518 4.29932 20.8587 4.30481C21.1678 4.31034 21.219 4.23152 21.1162 3.93313C20.9756 3.5247 20.609 3.26283 20.1641 3.23191C19.2308 3.16707 18.301 3.22634 17.3786 3.3486C14.6126 3.7152 12.0929 4.72076 9.81614 6.33273C9.33675 6.67213 9.34056 6.67751 8.96065 6.24582C8.56376 5.79485 8.28278 5.77374 7.83518 6.1783C7.4557 6.52128 7.07995 6.86891 6.71431 7.22652C6.38863 7.54505 6.38563 7.8338 6.68096 8.1836C6.75424 8.27039 6.82452 8.36388 6.91285 8.43297C7.13181 8.60426 7.12758 8.75546 6.93976 8.96162C6.4954 9.44936 6.10771 9.98341 5.73972 10.531C3.98837 13.1369 3.02269 16.0029 2.88276 19.1441C2.86251 19.5985 3.03922 19.9387 3.42021 20.1725C3.76332 20.3831 3.8886 20.3189 3.89679 19.9216C3.91368 19.1026 3.98588 18.2901 4.16934 17.4911C4.74962 14.9639 6.13561 12.9555 8.12954 11.3343C8.35355 11.1522 8.48966 11.184 8.66701 11.3795C9.1405 11.9013 9.63774 12.4019 10.103 12.9308C10.3178 13.1749 10.4896 13.2588 10.7248 12.9738C10.8563 12.8146 10.981 12.8056 11.1421 12.9817C13.0605 15.078 14.9781 17.1752 16.9176 19.2518C17.3707 19.7369 17.707 20.2607 17.9164 20.8889C18.0546 21.3037 18.1932 21.7241 18.5091 22.0647C21.6634 25.4652 24.81 28.8729 27.9601 32.2773C28.5539 32.9189 29.0734 32.9494 29.7311 32.37C30.2258 31.9343 30.6944 31.4688 31.193 31.0379C31.7609 30.5472 31.7553 29.8004 31.2398 29.2489C28.1808 25.9767 25.1439 22.6837 22.1136 19.3848C21.6875 18.9209 21.21 18.5715 20.6352 18.3258C20.1567 18.1213 19.7084 17.8794 19.3385 17.4766C17.355 15.3161 15.3521 13.1733 13.3483 11.0316C13.164 10.8346 13.1465 10.688 13.3635 10.5327C13.6295 10.3425 13.5916 10.1748 13.3788 9.95502C12.8649 9.42424 12.3759 8.86941 11.8687 8.33208C11.7103 8.16429 11.7084 8.04024 11.8762 7.87385C12.2719 7.48151 12.669 7.0918 13.1 6.73764C15.068 5.12077 17.3175 4.27743 19.9384 4.27109Z"
          fill="white"
        />
      </svg>
    ),
    description: "Convienent way to embed AI agents",
    longDescription:
      "Pickaxe is a platform for building and deploying AI agents. It is designed to be simple, fast, and convienent. It is built on top of OpenAI's GPT-3 and allows you to create agents that can perform a variety of tasks such as answering questions, generating text, and classifying text.",
    technologies: ["Next.js", "TypeScript", "SCSS", "Tailwind"],
    url: "https://beta.pickaxeproject.com/builder",
  },
  {
    id: 3,
    name: "Designer Portfolio" as const,
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 38 39" fill="none">
        <g clipPath="url(#clip0_1965_192)">
          <path
            d="M36.7316 19.6089C38.3476 32.904 21.425 39.8834 11.1736 37.8503C0.380281 35.7224 -1.81888 22.6778 4.20131 9.10406C11.3706 -6.91884 34.8065 3.74595 36.7316 19.6089Z"
            fill="white"
          />
          <path
            d="M31.6547 26.6158C31.5388 26.3908 29.7339 22.6739 25.8631 19.8922C26.1064 17.7054 25.7043 15.5422 24.8288 13.6828C23.5517 11.1503 21.3338 9.39716 18.3448 8.64653C12.4227 7.20056 7.42312 11.8535 7.21428 12.033C7.00544 12.2126 6.90625 12.4455 6.91669 12.7317C6.92713 13.0178 6.98926 13.2448 7.15895 13.4679C7.32863 13.691 7.54791 13.7976 7.81679 13.7878C8.08567 13.778 8.29868 13.7129 8.50752 13.5333C8.55921 13.4741 13.0398 9.35595 17.9856 10.6083C20.4306 11.2068 22.2037 12.575 23.193 14.6022C23.8326 15.897 24.0999 17.3201 24.0984 18.753C22.944 18.1074 21.6884 17.6374 20.3852 17.3411C17.3425 16.5924 14.6578 16.805 12.6003 17.969C10.7515 18.9535 9.46771 20.6625 9.05474 22.6262C8.86679 23.3782 8.84226 24.1814 8.97906 24.9788C9.11585 25.7762 9.35811 26.5125 9.75961 27.1856C10.6206 28.6443 12.0025 29.6255 13.796 30.0759C16.6753 30.7732 19.3991 30.158 21.6488 28.3565C23.4249 26.8588 24.7996 24.6881 25.4606 22.1421C27.2916 23.6228 28.8124 25.4586 29.9673 27.5944C30.0253 27.7069 30.0832 27.8194 30.195 27.93C30.3067 28.0405 30.4163 28.0938 30.526 28.1472C30.6356 28.2005 30.7969 28.1946 30.9045 28.1907C31.0121 28.1867 31.1713 28.1236 31.2768 28.0624C31.3822 28.0013 31.4856 27.8829 31.5911 27.8217C31.6944 27.7033 31.744 27.5869 31.7936 27.4704C31.8432 27.354 31.837 27.1823 31.8328 27.0678C31.7706 26.8408 31.7127 26.7283 31.6547 26.6158ZM14.2068 28.0549C11.3275 27.3576 10.4352 25.0403 10.8481 23.0766C11.447 20.3037 14.5383 17.9556 19.9185 19.3068C21.2775 19.6584 22.589 20.1836 23.8013 20.9418L23.8034 20.999C22.835 25.4475 19.2602 29.3034 14.2068 28.0549Z"
            fill="#2C2C2C"
            stroke="#2C2C2C"
          />
        </g>
        <defs>
          <clipPath id="clip0_1965_192">
            <rect width="36" height="37" fill="white" transform="translate(0.109375 1.74609) rotate(-2.09)" />
          </clipPath>
        </defs>
      </svg>
    ),
    description: "A portfolio website for a designer",
    longDescription:
      "This is a portfolio website for a designer built with React and TypeScript. It is a static site that is deployed on Netlify.",
    technologies: ["React", "TypeScript", "Styled Components"],
    url: "https://alina-barannykova.netlify.app/",
    codeUrl: "https://github.com/Yoha485/Designer-Portfolio/tree/next",
  },
  {
    id: 4,
    name: "My Website" as const,
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
        <circle cx="19.618" cy="19.5275" r="18.5" transform="rotate(1.1 19.618 19.5275)" fill="white" />
        <path
          d="M19.8507 7.56949L21.3363 17.8789L31.5811 19.7592L21.2717 21.2448L19.3914 31.4896L17.9058 21.1802L7.66098 19.2999L17.9704 17.8143L19.8507 7.56949Z"
          fill="black"
        />
      </svg>
    ),
    description: "It's that website. You are here!",
    longDescription:
      "This is my personal place. It is built simple with Next.js and Tailwind CSS. It is a static site where you can learn more about me and my work.",
    technologies: ["Next.js", "Spline", "Tailwind", "OpenAI"],
    url: "/",
    codeUrl: "https://github.com/Yoha485/Anton-Morozov",
  },
];
