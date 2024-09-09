import type { Project } from "../types";

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
      "A parody of Twitter populated by satirical AI personas. Visitors enter a news headline and AI personas respond just like real Twitter would— with complaints, off-color jokes, thoughts & prayers, and angry tirades.",
    url: "https://untwtr.vercel.app/",
    codeUrl: "https://github.com/Yoha485/untwtr",
  },
  {
    id: 2,
    name: "Pickaxe" as const,
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
        <path
          d="M16.3869 22.7066C16.0255 21.4158 15.2615 20.4358 14.3319 19.5241C13.2051 18.4187 12.1657 17.2237 11.1004 16.0565C10.9038 15.8411 10.7588 15.7835 10.5648 16.0353C10.3864 16.2669 10.2294 16.2219 10.0447 16.0143C9.55348 15.4624 9.04469 14.926 8.54136 14.3848C8.46573 14.3035 8.40765 14.1973 8.24589 14.1702C7.69543 14.7251 7.25088 15.378 6.89135 16.0883C6.37028 17.1177 6.15385 18.2246 6.0527 19.3669C5.9723 20.2749 5.99884 21.184 5.96028 22.092C5.94671 22.4114 5.83961 22.5468 5.50957 22.5141C4.66436 22.4302 3.80337 22.5454 2.97079 22.2902C1.68039 21.8946 0.731827 20.4795 0.764036 19.2547C0.865104 15.4112 2.11479 11.9843 4.30409 8.86606C4.41367 8.70999 4.47925 8.58021 4.41905 8.37212C4.16998 7.51111 4.35474 6.711 4.91986 6.04014C5.49852 5.35319 6.17964 4.75408 6.90102 4.22204C7.5978 3.70815 8.3995 3.59847 9.22962 3.90861C9.40713 3.97493 9.54776 3.94764 9.70792 3.85039C11.2419 2.919 12.8762 2.21742 14.6032 1.73011C16.6493 1.15279 18.7359 0.937362 20.8436 1.18931C21.741 1.29658 22.3955 1.91161 22.8663 2.67987C23.2005 3.22542 23.3552 3.8229 23.3188 4.46857C23.2886 5.00207 23.2771 5.53658 23.2536 6.07048C23.2349 6.49586 23.1994 6.52929 22.7632 6.51483C21.8322 6.48396 20.9015 6.43714 19.9703 6.41775C18.1274 6.37939 16.4443 6.86714 14.9594 7.98219C14.8788 8.04267 14.7999 8.10527 14.7295 8.15972C14.7183 8.34292 14.8483 8.42025 14.9358 8.5164C15.418 9.04615 15.898 9.57824 16.3949 10.094C16.5935 10.3 16.6467 10.46 16.3794 10.6361C16.1295 10.8007 16.185 10.9546 16.3673 11.1531C17.7052 12.6099 19.086 14.0281 20.3636 15.5396C20.8486 16.1135 21.4764 16.4691 22.1453 16.7648C22.6212 16.9751 23.0195 17.2672 23.3752 17.6534C26.4561 20.999 29.5491 24.3335 32.6382 27.6715C32.8931 27.9469 33.1398 28.2273 33.3409 28.5479C34.0249 29.6387 33.8368 31.4165 32.8588 32.3229C32.2252 32.9101 31.6071 33.5141 30.9742 34.102C29.7913 35.2008 27.6378 35.1033 26.4422 33.7742C23.5832 30.596 20.6544 27.4807 17.7538 24.3399C17.4144 23.9724 17.0764 23.6035 16.7356 23.2373C16.5948 23.086 16.4747 22.9225 16.3869 22.7066ZM19.9384 4.27109C20.2452 4.28278 20.5518 4.29932 20.8587 4.30481C21.1678 4.31034 21.219 4.23152 21.1162 3.93313C20.9756 3.5247 20.609 3.26283 20.1641 3.23191C19.2308 3.16707 18.301 3.22634 17.3786 3.3486C14.6127 3.7152 12.0929 4.72076 9.81614 6.33273C9.33675 6.67213 9.34056 6.67751 8.96065 6.24582C8.56376 5.79485 8.28278 5.77374 7.83518 6.1783C7.4557 6.52128 7.07995 6.86891 6.71431 7.22652C6.38863 7.54505 6.38563 7.8338 6.68096 8.1836C6.75424 8.27039 6.82452 8.36388 6.91285 8.43297C7.13181 8.60426 7.12758 8.75546 6.93976 8.96162C6.4954 9.44936 6.10771 9.98341 5.73972 10.531C3.98837 13.1369 3.02269 16.0029 2.88276 19.1441C2.86251 19.5985 3.03922 19.9387 3.42021 20.1725C3.76332 20.383 3.8886 20.3189 3.89679 19.9216C3.91368 19.1026 3.98588 18.2901 4.16934 17.4911C4.74962 14.9639 6.13561 12.9555 8.12954 11.3343C8.35355 11.1522 8.48966 11.184 8.66701 11.3795C9.1405 11.9013 9.63774 12.4019 10.103 12.9308C10.3178 13.1749 10.4896 13.2588 10.7248 12.9738C10.8563 12.8146 10.981 12.8056 11.1421 12.9817C13.0605 15.078 14.9781 17.1752 16.9176 19.2518C17.3707 19.7369 17.707 20.2607 17.9164 20.8889C18.0546 21.3037 18.1932 21.7241 18.5091 22.0647C21.6634 25.4652 24.81 28.8729 27.9601 32.2773C28.5539 32.9189 29.0734 32.9494 29.7311 32.37C30.2258 31.9343 30.6944 31.4688 31.193 31.0379C31.7609 30.5472 31.7553 29.8004 31.2398 29.2489C28.1808 25.9767 25.1439 22.6837 22.1136 19.3848C21.6875 18.9209 21.21 18.5715 20.6352 18.3258C20.1567 18.1213 19.7084 17.8794 19.3385 17.4766C17.355 15.3161 15.3521 13.1733 13.3483 11.0316C13.164 10.8346 13.1465 10.688 13.3635 10.5327C13.6295 10.3425 13.5916 10.1748 13.3788 9.95502C12.8649 9.42424 12.3759 8.86941 11.8687 8.33208C11.7103 8.16429 11.7084 8.04024 11.8762 7.87385C12.2719 7.48151 12.669 7.0918 13.1 6.73764C15.068 5.12077 17.3176 4.27743 19.9384 4.27109Z"
          fill="white"
        />
        <path
          d="M19.9437 4.2717C20.2504 4.28339 20.5571 4.29993 20.8639 4.30542C21.1731 4.31095 21.2243 4.23212 21.1215 3.93374C20.9808 3.52531 20.6142 3.26343 20.1693 3.23252C19.2361 3.16768 18.3062 3.22694 17.3839 3.3492C14.6179 3.71581 12.0982 4.72137 9.82141 6.33334C9.34203 6.67274 9.34583 6.67811 8.96592 6.24643C8.56903 5.79545 8.28805 5.77435 7.84045 6.17891C7.46097 6.52189 7.08522 6.86952 6.71959 7.22713C6.3939 7.54566 6.39091 7.83441 6.68623 8.1842C6.75951 8.271 6.82979 8.36448 6.91812 8.43358C7.13708 8.60486 7.13286 8.75607 6.94504 8.96222C6.50067 9.44997 6.11298 9.98402 5.74499 10.5316C3.99364 13.1375 3.02796 16.0035 2.88803 19.1447C2.86779 19.5991 3.04449 19.9393 3.42548 20.1731C3.76859 20.3837 3.89388 20.3195 3.90207 19.9222C3.91895 19.1032 3.99115 18.2907 4.17461 17.4917C4.75489 14.9645 6.14088 12.9561 8.13482 11.3349C8.35882 11.1528 8.49493 11.1846 8.67229 11.3801C9.14577 11.9019 9.64301 12.4025 10.1083 12.9314C10.3231 13.1755 10.4948 13.2594 10.7301 12.9744C10.8616 12.8152 10.9862 12.8062 11.1474 12.9823C13.0657 15.0787 14.9834 17.1758 16.9229 19.2524C17.3759 19.7375 17.7122 20.2613 17.9216 20.8895C18.0599 21.3043 18.1984 21.7247 18.5144 22.0653C21.6687 25.4658 24.8152 28.8735 27.9654 32.2779C28.5591 32.9195 29.0787 32.95 29.7364 32.3706C30.231 31.9349 30.6996 31.4694 31.1983 31.0385C31.7662 30.5478 31.7606 29.801 31.2451 29.2495C28.1861 25.9773 25.1492 22.6843 22.1189 19.3854C21.6928 18.9216 21.2153 18.5721 20.6405 18.3264C20.162 18.1219 19.7137 17.88 19.3438 17.4772C17.3603 15.3167 15.3574 13.1739 13.3536 11.0322C13.1693 10.8352 13.1518 10.6886 13.3688 10.5334C13.6348 10.3431 13.5968 10.1754 13.384 9.95563C12.8702 9.42484 12.3812 8.87001 11.8739 8.33269C11.7155 8.1649 11.7136 8.04084 11.8815 7.87446C12.2772 7.48212 12.6742 7.09241 13.1053 6.73825C15.0733 5.12138 17.3228 4.27804 19.9437 4.2717Z"
          fill="white"
          stroke="black"
        />
      </svg>
    ),
    description: "Convienent way to embed AI agents",
    longDescription:
      "A platform for building and deploying AI agents. It is designed to be simple, fast, and convienent. It is built on top of OpenAI's GPT-3 and allows you to create agents that can perform a variety of tasks such as answering questions, generating text, and classifying text.",
    url: "https://beta.pickaxeproject.com/builder",
  },
  {
    id: 3,
    name: "This Website" as const,
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
        <circle cx="19.618" cy="19.5275" r="18.5" transform="rotate(1.1 19.618 19.5275)" fill="white" />
        <path
          d="M19.8507 7.56949L21.3363 17.8789L31.5811 19.7592L21.2717 21.2448L19.3914 31.4896L17.9058 21.1802L7.66098 19.2999L17.9704 17.8143L19.8507 7.56949Z"
          fill="black"
        />
      </svg>
    ),
    description: "You already know what this is. Want to know how it was made? Check my the blog post",
    longDescription: "This website is the central place where you can find all the information about me and my work.",
    url: "/",
    codeUrl: "https://github.com/Yoha485/Anton-Morozov",
  },
];
